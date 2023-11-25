import express from "express"
import {createNewsController, deleteNewsController, editNewsController} from "../controllers/news.js"
import validate from "../middleware/validate.js"

const newsRouter = express.Router()

newsRouter.post("/", validate("createNews"),createNewsController)

newsRouter.put("/:id", validate("createNews"), editNewsController)

newsRouter.delete("/:id", deleteNewsController)

export default newsRouter