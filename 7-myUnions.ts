let score: number | string = 23
score = 44
score = "55"


type User = {
    name: string,
    id: number
}
type Admin = {
    username: string
}
let parth: User | Admin = {
    name: "parth",
    id: 1
}
parth = {
    username: "parth123",
    id: 1
}


function getDbId (id: number | string) {
    console.log(`Db id is: ${id}`)

    id.toLowerCase()
}
getDbId(3)
getDbId("5")


function getDbId2 (id: number | string) {
    console.log(`Db id is: ${id}`)

    if (typeof id === "number") {
        id.toString().toLowerCase()
    } else if (typeof id === "string") {
        id.toLowerCase()
    }
}
getDbId2(3)
getDbId2("5")



// arrays

const data: number[] = [1, 2, 3, "4"]   // only numbers are allowed in array
const data2: string[] = ["1", "2", "3", 4]  // only strings are allowed in array
const data3: string[] | number[] = ["1", "2", "3"]  // either only strings or only numbers
const data4: (number | string) [] = ["1", "2", 3, 4]    // string or number elements are allowed in an array     

// ....


let pi: 3.14 = 3.14
pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "crew"


export {}

