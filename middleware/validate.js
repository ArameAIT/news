import { z } from "zod";
import response from "../lib/response.js";

export default function validate(pathname) {
    return function (req, res, next) {
        let errorMessage = ""
        const responseObj = response()
        if (pathname == "login") {
            const loginSchema = z.object({
                email: z.string().email(),
                password: z.number()
            });
            const loginData = loginSchema.safeParse(req.body);
            if (loginData.success) {
                return next()
            }
            const errorMessage = {}
            loginData.error.issues.map((messege) => {
                const paramName = messege.path[0]
                return errorMessage[paramName] = messege.message

            })
            responseObj.error = {
                message: errorMessage
            }
            res.status(401).json(responseObj)
            return
        }
        else if (pathname == "register") {
            const registerSchema = z.object({
                fullName: z.string(),
                email: z.string().email(),
                password: z.number().min(8)
            });
            const registerData = registerSchema.safeParse(req.body);
            if (registerData.success) {
                return next()
            }
            const errorMessage = {}
            registerData.error.issues.map((messege) => {
                const paramName = messege.path[0]
                return errorMessage[paramName] = messege.message

            })
            responseObj.error = {
                message: errorMessage
            }
            res.status(401).json(responseObj)
            return
        }else if(pathname == "createNews"){
            const createNewsSchema = z.object({
                title: z.string(),
                discription: z.string()
            });
            const createData = createNewsSchema.safeParse(req.body);
            if (createData.success) {
                return next()
            }
            const errorMessage = {}
            createData.error.issues.map((messege) => {
                const paramName = messege.path[0]
                return errorMessage[paramName] = messege.message

            })
            responseObj.error = {
                message: errorMessage
            }
            res.status(401).json(responseObj)
            return
        }
        errorMessage = "wrong details"
        res.status(404).send(errorMessage)
    }
}