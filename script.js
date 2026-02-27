// MATH FUNCTIONS
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (a===0 || b===0){
        alert("You can't divide by 0");
    }
    return a/b;
}

// OPERATE FUNCTION
function operate(op,a,b){
    return op(a,b);
}

