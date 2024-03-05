"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 23;
score = 44;
score = "55";
var parth = {
    name: "parth",
    id: 1
};
parth = {
    username: "parth123",
    id: 1
};
function getDbId(id) {
    console.log("Db id is: ".concat(id));
    id.toLowerCase();
}
getDbId(3);
getDbId("5");
function getDbId2(id) {
    console.log("Db id is: ".concat(id));
    if (typeof id === "number") {
        id.toString().toLowerCase();
    }
    else if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId2(3);
getDbId2("5");
// arrays
var data = [1, 2, 3, "4"]; // only numbers are allowed in array
var data2 = ["1", "2", "3", 4]; // only strings are allowed in array
var data3 = ["1", "2", "3"]; // either only strings or only numbers
var data4 = ["1", "2", 3, 4]; // string or number elements are allowed in an array     
// ....
var pi = 3.14;
pi = 3.145;
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew";
