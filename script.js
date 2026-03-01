// MATH FUNCTIONS
function add(a,b){
    return +a + +b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (+b===0){
        alert("You can't divide by 0");
        return;
    }
    return a/b;
}
// OPERATE FUNCTION
function operate(op, a, b) {
    let result;
    
    switch(op){
        case "÷":
            result = divide(a,b);
            break;
        case "x":
            result = multiply(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "+":
            result = add(a,b);
            break;
    }
    // Round to 3 decimal places
    return Math.round(result * 1000) / 1000;
}


// NUMBER & OPERATOR VARIABLES  
let num1 = '';
let num2 = '';
let op = '';

// DOM objects
let nBtnsList = document.querySelectorAll('.nbtn');
let opBtnsList = document.querySelectorAll('.op-btn');
let equalsBtn = document.querySelector('#equals');

let nextScreen = document.querySelector('#screen-next');
let operateScreen = document.querySelector('#screen-operate');

let clear = document.querySelector('#clear');
let dlt = document.querySelector('#delete');

// conditions
let shouldClearScreen = false;
let shouldOperateNext = false;

// when numeric buttons are clicked
nBtnsList.forEach((nBtn) => {
    nBtn.addEventListener("click", () => {
        if (!shouldClearScreen){
            nextScreen.textContent += nBtn.textContent;
        }
        else{
            nextScreen.textContent = '';
            nextScreen.textContent += nBtn.textContent;
            shouldClearScreen = false;
            shouldOperateNext = true;
        }
    })
})

// when clear & delete function is clicked
clear.addEventListener("click", () => {
    nextScreen.textContent = '';
    operateScreen.textContent = '';
    shouldClearScreen = false;
    shouldOperateNext = false;
    num1 = '';
    num2 = '';
    op = '';
})
dlt.addEventListener("click", () => {
    nextScreen.textContent = nextScreen.textContent.slice(0,-1);
})

// when operator button is clicked
opBtnsList.forEach((opBtn) => {
    opBtn.addEventListener("click", () => {
        if(!shouldOperateNext){
            op = opBtn.textContent;
            num1 = nextScreen.textContent;
            operateScreen.textContent = `${num1} ${op}`;

            shouldClearScreen = true;
        }
        // WHEN shouldOperateNext == true, operate!
        else{
            num2 = nextScreen.textContent;
            let answer = operate(op,num1,num2);
            nextScreen.textContent = answer;
            op = opBtn.textContent;
            operateScreen.textContent = `${answer} ${op}`;

            num1=answer;
            shouldClearScreen = true;
            shouldOperateNext = false;
        }
    })
})

// when equals button is clicked
equalsBtn.addEventListener("click", () => {
    if(shouldOperateNext){
        num2 = nextScreen.textContent;
        let answer = operate(op,num1,num2);
        nextScreen.textContent = answer;
        operateScreen.textContent = `${num1} ${op} ${num2} =`;  

        op = '';
        num2 = '';
        shouldOperateNext = false;
        shouldClearScreen = true;
    }
})