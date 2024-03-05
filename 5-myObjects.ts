type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number      // this makes the property as optional
}

let myUser: User = {
    _id: "12345",
    name: "p",
    email: "p@p.com",
    isActive: true
}
myUser.email = "p@gmail.com"
myUser._id = "1111"         // read only properties cannot be reassigned


// scenario - mix and match of types

type CardNumber = {
    cardnumber: string
}
type CardDate = {
    carddate: string
}
type CardDetails = CardNumber & CardDate & {
    cvv: number
}
let cardDetailsObj: CardDetails = {
    cardnumber: '1212121212',
    carddate: '010101',
    cvv: 123
}

export {}