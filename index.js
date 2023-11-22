import express from "express"
import authRouter from "/Users/Arame Hovhannisyan/Desktop/Node/News/routs/auth.js"
import jsonData from "./middleware/jsonData.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(jsonData)

app.use("/auth", authRouter)

app.listen(PORT, ()=>{
    console.log(`Server is listening in port ${PORT}`);
})