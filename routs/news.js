import express from "express"
import {createNewsController} from "../controllers/news.js"
import validate from "../middleware/validate.js"

const newsRouter = express.Router()

newsRouter.post("/", validate("createNews"),createNewsController)

export default newsRouter