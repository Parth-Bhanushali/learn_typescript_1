let tUser: [string, number, boolean]    // have to adhere to this order strictly

tUser = ["pb", 111, true]
tUser = [111, "pb", true]


let rgb: [number, number, number] = [255, 115, 255]
let rgb2: [number, number, number] = [255, 115, 255, 0.8]


type User = [number, string]
const newUser: User = [132, "example"]
newUser[0] = "example"
newUser[1] = "Vexample"     // values can be changed though
newUser.push(true)
newUser.push("more")
newUser.push("moreAndMore")     // it does not restrict adding more data to array!!

export {}