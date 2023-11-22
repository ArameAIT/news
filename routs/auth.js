import express from "express"
import validate from "../middleware/validate.js"
import { loginController, registerController } from "../controllers/auth.js"

const router = express.Router()

router.post("/register",validate("register"), registerController)

router.post("/login", validate("login"),loginController)


export default router