interface User {
    readonly dbId: number,
    email: string,
    userId: string,
    googleId?: string,
    startTrial: () => string,   // a function that should return string
    startPro(): string,         // same as startTrial but different syntax, any will work
    getCoupon(couponName: string, value: number): number,
    getCoupon2(couponName: string): number,
}

const parth: User = {
    dbId: 0,
    email: "p@p.com",
    userId: "123",
    startTrial: () => {
        return "trial started"
    },
    startPro: () => {
        return "pro started"
    },
    getCoupon: (name: "parth120", off: 12) => {  // name can be used instead of couponName here as the importance is of type checking really
        return 10
    },
    getCoupon2: () => { // why it's not throwing error even if we didn't passed the required coupon name?!!
        return 10
    }
}
parth.email = "p@gmail.com"
parth.dbId = 1

export {}
