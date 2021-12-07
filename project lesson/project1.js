"use strict";

// if (4 == 9) {
//     console.log('!Ok');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('False');
//         break;
//     case 100:
//         console.log('False');
//         break;
//     case 51:
//         console.log('True');
//         break;
//     default:
//         console.log('Не в этот раз');
// }

// let num = 50;

// while(num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//      console.log(num);
//      num++;
//  } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

const str = 'test';

console.log(str.toUpperCase());
console.log(str.length); 


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";

console.log(logg.slice(6, 12));

console.log(logg.substr(6, 11));

const num = 12.6;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseFloat(test));