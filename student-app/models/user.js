import { db } from "../config.js";

export async function addUser({name,age,marks}) {
    // try {
        let c=db.collection('iamarks')
        let res=await c.insertOne({name,age,marks})
        return {status:"success",id:res.insertedId}
    // }
    // catch (error) {
    //     console.log(error)
    //     return "failure"
    // }
}

export async function getUsers() {
    let c=db.collection('iamarks')
    let users=c.find()
    return users.toArray()
}

