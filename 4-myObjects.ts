type User = { // type alias, this is not an object.
    name: string,
    email: string,
    isActive: boolean
}
function createUser(user: User): User {   // useful when we expect all the details to be passed over and the same needs to be used for multiple functions
    return {...user, isActive: true}
}
createUser({})
createUser({name: "parth", email: "parth@p.com", isActive: true})

type MyString = string
function doSomething(what: MyString) {

}

export {}