CALCULATOR 
math operator functions:
    add
    subtract
    divide
    multiply
    OPERATE (3 args = 2num + 1op)
        note that operations should only be done on 2num,
        e.g.(6*5) is entered, if i press '*' again, it should be (30 * x). basically '*' became the equal sign.

display functions:
    clear - clears whole screen of all input
    delete - deletes latest input number

html/DOM: 
    display screen 
    number buttons
    function buttons - able to execute
    decimal button
    equal button - executes OPERATE function

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