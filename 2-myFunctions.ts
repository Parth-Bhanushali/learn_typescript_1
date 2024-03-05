function addTwo (num: number) {
    return num + 2
}

addTwo(5)
addTwo("5")

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("parth")

function signUpUser (name: string, email: string, isPaid: boolean) {

}

signUpUser("Parth", "parth@dev.com", false)


let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("p", "p@p.com", true)
loginUser("p", "p@p.com")   // didn't provide third parameter as providing default value in parameters makes it optional


// annotating return type for function
function addThree (num: number): number {
    return num + 3
}
addThree(1)

// Will see how to handle this scenario later on,
// when we may need to return different type of values conditionally

// function getValue (myVal: number) : boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }   
// getValue(1)

const getHello = (s: string): string => {
    return s
}
getHello("something")


const heros = ["thor", "spiderman", "ironman"];

heros.map(hero => {
    return `hero is ${hero}`
})

const numbers = [1, 2, 3]

numbers.map((num: number) => {      // not needed to define actually as it is detected automatically based on context by typescript
    return `number is ${num}`
})

numbers.map((num): number => {      // return type of map function is defined to be number
    return `number is ${num}`       // throwing error as number is required
})


function consoleError (errMsg: string): void {  // good practice to annotate the void if it is not expected to return anything
    console.log(errMsg)
    return 1
}

function handleError (errMsg: string): never {  // never means it will never return value! Used to indicate when throwing exception or it is to terminate the program execution
    throw new Error(errMsg)
}

export {}