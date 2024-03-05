"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "p",
    email: "p@p.com",
    isActive: true
};
myUser.email = "p@gmail.com";
myUser._id = "1111"; // read only properties cannot be reassigned
var cardDetailsObj = {
    cardnumber: '1212121212',
    carddate: '010101',
    cvv: 123
};
