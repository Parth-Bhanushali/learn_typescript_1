let greetings: string = "Hello Parth";
let myNum = 6

myNum.toLowerCase()
greetings.toLowerCase()

console.log(greetings);


let userId: number = 335544.5   // suggestions will only display functions that javascript has support for numbers
let isLoggedIn: boolean = false;    // suggestions will only display functions that javascript has support for boolean

isLoggedIn = "true"     // would not entertain value of types other than boolean


// In typescript, if you're assigning a value directly at the time
// of declaring a variable, then typescript will automatically infer the
// type to that variable based on the assigned value smartly and this in 
// most cases such as these, you can avoid providing the type manually.
let myName = "Parth"
myName = 1              // needs string
myName.toLowerCase()

// Tip : do not define type explicitly when that's too obvious




let hero: string;

function getHeroWithMistake() {
    return true
}
function getHero() {
    return "heroName"
}

hero = getHeroWithMistake()
hero = getHero()

export {}