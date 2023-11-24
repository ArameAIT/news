import express from "express"
import validate from "../middleware/validate.js"
import { loginController, registerController } from "../controllers/auth.js"

const authRouter = express.Router()

authRouter.post("/register",validate("register"), registerController)

authRouter.post("/login", validate("login"),loginController)


export default authRouter