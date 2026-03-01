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
    if (b===0){
        alert("You can't divide by 0");
        return;
    }
    return a/b;
}
// OPERATE FUNCTION
function operate(op,a,b){
    switch(op){
        case "÷":
            return divide(a,b);
        case "x":
            return multiply(a,b);
        case "-":
            return subtract(a,b);
        case "+":
            return add(a,b);
    }
}


/* LOGIC FOR CALC
 *  var to store the operator, the 2 numbers, answer
 *  know when to execute operator
 *  display answer
 * 
 *  need to use if statements
 *  default: click numbers
 *  if operator clicked (+-x/),  
 *      get ready for new arg input
 *      update screen-operate
 *      clear screen-next and replace with new input
 * 
 *      if operator clicked (+-x/)
 *          update screen-operate
 *          show answer on screen-next
 *      else if (=) clicked
 *          update screen-operate
 *          show answer on screen-next
 * 
 * 
 *  maybe need use arrays to store the values that pop up in display
 *  otherwise how to use the delete function
 *  cancel last, try using str.slice first instead.
*/

// NUMBER & OPERATOR VARIABLES  
let num1 = '';
let num2 = '';
let op = '';

// DOM objects
let nBtnsList = document.querySelectorAll('.nbtn');
let opBtnsList = document.querySelectorAll('.op-btn')

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
            operateScreen.textContent = nextScreen.textContent + " " + op;

            shouldClearScreen = true;
        }
        // WHEN shouldOperateNext == true, operate!
        else{
            num2 = nextScreen.textContent;
            let answer = operate(op,num1,num2);
            nextScreen.textContent = answer;
            op = opBtn.textContent;
            operateScreen.textContent = answer + " " + op;

            num1=answer;
            shouldClearScreen = true;
        }
        
    })
})