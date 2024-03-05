"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
addTwo("5");
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("parth");
function signUpUser(name, email, isPaid) {
}
signUpUser("Parth", "parth@dev.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("p", "p@p.com", true);
loginUser("p", "p@p.com"); // didn't provide third parameter as providing default value in parameters makes it optional
// annotating return type for function
function addThree(num) {
    return num + 3;
}
addThree(1);
// Will see how to handle this scenario later on,
// when we may need to return different type of values conditionally
// function getValue (myVal: number) : boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }   
// getValue(1)
var getHello = function (s) {
    return s;
};
getHello("something");
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var numbers = [1, 2, 3];
numbers.map(function (num) {
    return "number is ".concat(num);
});
numbers.map(function (num) {
    return "number is ".concat(num); // throwing error as number is required
});
function consoleError(errMsg) {
    console.log(errMsg);
    return 1;
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
