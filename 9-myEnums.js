"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {})); // hover over the words and it actually assigns default values such as 0, 1, 2...
var pbSeat = SeatChoice.AISLE;
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 10] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 120] = "WINDOW";
})(SeatChoice2 || (SeatChoice2 = {})); // custom values can be assigned as well
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3["AISLE"] = "aisle";
    SeatChoice3["MIDDLE"] = "middle";
    SeatChoice3[SeatChoice3["WINDOW"] = 120] = "WINDOW";
})(SeatChoice3 || (SeatChoice3 = {})); // if custom value given is not a number such as string, then all enums next to it must be assigned the values manually since strings cannot auto-increment (until the number value is assigned to any element)
var seatChoice4 = 2 /* SeatChoice4.MIDDLE */;
