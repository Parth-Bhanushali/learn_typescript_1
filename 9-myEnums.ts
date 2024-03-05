enum SeatChoice {
    AISLE, MIDDLE, WINDOW
}   // hover over the words and it actually assigns default values such as 0, 1, 2...

const pbSeat = SeatChoice.AISLE

enum SeatChoice2 {
    AISLE = 10,
    MIDDLE,
    WINDOW = 120
} // custom values can be assigned as well

enum SeatChoice3 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 120
} // if custom value given is not a number such as string, then all enums next to it must be assigned the values manually since strings cannot auto-increment (until the number value is assigned to any element)


// the above enums produces too much code while conversion
// happens to javascript. one solution given was to assign it as const variable...
const enum SeatChoice4 {
    AISLE = 1,
    MIDDLE,
    WINDOW = "WINDOW-X"
}
const seatChoice4 = SeatChoice4.MIDDLE


export {}
