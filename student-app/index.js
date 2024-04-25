import "./config.js"
import express from "express";
import { addUser,getUsers } from "./models/user.js";
import cors from "cors"

const app= express();
app.use(express.json())
app.use(cors())
const port= process.env.PORT || 3000;

app.post('/users', async (req, res) => {
    try {
        let result = await addUser(req.body)
        res.json(result)
    }
    catch (error) {
        console.log(error)
        res.status(400).json({error})
    }
})

app.get("/users",async (req, res) => {
    try {
        let users=await getUsers()
        res.json(users);
    }
    catch(err){
        res.status(400).json({err})
    }
})

app.listen(port, ()=> {
    console.log('server is running at port number'+port)
})