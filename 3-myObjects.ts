 const User = {
    name: "parth",
    email: "parth@p.com",
    isActive: true
 }

 function createUser ({name: string, isPaid: boolean}) {

 }
 createUser({name: "parth", isPaid: false})
 createUser({name: "parth", isPaid: false, email: "parth@p.com"})   // does not accept
 const tempUser = {name: "parth", isPaid: false, email: "parth@p.com"}
 createUser(tempUser)       // accepts!         this is an odd behavior of typescript which actually should have stopped us here!!

 function createCourse():{} {
    return {}
 }

 function createCourse2(): {name: string, price: number} {     // returns specific object
    return {name: "reactjs", price: 399}
 }

 export {}