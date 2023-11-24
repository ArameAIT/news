import express from "express"
import authRouter from "./routs/auth.js"
import newsRouter from "./routs/news.js"
import jsonData from "./middleware/jsonData.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(jsonData)

app.use("/auth", authRouter)
app.use("/news", newsRouter)

app.listen(PORT, ()=>{
    console.log(`Server is listening in port ${PORT}`);
})