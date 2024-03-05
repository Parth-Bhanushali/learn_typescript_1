// interfaces can be redefined
interface User {    // suppose this gets imported from some third party library / package in case
    name: string,
    email: string,
    id: number,
    googleId?: string,
    startTrial(): boolean
}

interface User {    // and this field we need on top of that (some call it as reopening of interface)
    githubToken: string
}

const pUser: User = {
    name: "parth",
    email: "p@p.com",
    id: 123,
    startTrial: () => true,
    githubToken: "abccccasasas"
}



// inheritance in interface
interface Admin extends User {  // an interface can extend to one or more interfaces simultaneously
    role: "admin" | "ta" | "learner"
}

const qUser: Admin = {
    name: "parth",
    email: "p@p.com",
    id: 123,
    startTrial: () => true,
    githubToken: "abccccasasas",
    role: "admin"
}