function  add(first,second){
    return first + second;
}
add(4,5)
function subtract(first,second){
    return first - second;
}
subtract(5,4)

function multiply(first,second){
    return first * second;
}
multiply(5,4)

function divide(first,second){
    return first / second;
}
divide(5,4)

function increment(n = 371){
    return(n += 1);
} 
function decrement(n = 90){
    return(n -= 1);
}
function makeInt(n= "3"){
    return n;
}
function makeInt(n){
    return parseInt(n,10);
}
function preserveDecimal(n){
    return parseFloat(n);
}