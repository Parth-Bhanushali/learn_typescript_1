"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Parth";
var myNum = 6;
myNum.toLowerCase();
greetings.toLowerCase();
console.log(greetings);
var userId = 335544.5; // suggestions will only display functions that javascript has support for numbers
var isLoggedIn = false; // suggestions will only display functions that javascript has support for boolean
isLoggedIn = "true"; // would not entertain value of types other than boolean
// In typescript, if you're assigning a value directly at the time
// of declaring a variable, then typescript will automatically infer the
// type to that variable based on the assigned value smartly and this in 
// most cases such as these, you can avoid providing the type manually.
var myName = "Parth";
myName = 1; // needs string
myName.toLowerCase();
