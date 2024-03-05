const superHeroes: string[] = []
superHeroes.push("spiderman")

const heroPowers: number[] = []
heroPowers.push(1,2)

const heroPowers2: Array<number> = []   // same as heroPowers, only syntax differs. Just another declarative way.
heroPowers2.push(2,3)


type User = {
    name: string,
    isActive: boolean
}
const allUsers: Array<User> = []
allUsers.push({name: "", isActive: true})


const MLModels: number[][] = [
    [255,255,255],
    []
]



export {}