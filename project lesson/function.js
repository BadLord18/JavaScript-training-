"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
} 

showFirstMessage("Hello World!");
console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,6));
console.log(calc(8,5));
console.log(calc(4,10));

function rat() {
    let num = 50;
    
    
    return num;
}

const anotherNum = rat();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");
};

logger();

const calc = (a, b) => {
    console.log("1");
    return a + b;
}; 