"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "parth",
    email: "parth@p.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "parth", isPaid: false });
createUser({ name: "parth", isPaid: false, email: "parth@p.com" }); // does not accept
var tempUser = { name: "parth", isPaid: false, email: "parth@p.com" };
createUser(tempUser); // accepts!         this is an odd behavior of typescript which actually should have stopped us here!!
function createCourse() {
    return {};
}
function createCourse2() {
    return { name: "reactjs", price: 399 };
}
