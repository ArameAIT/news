import isUserExists from "../lib/isUserExits.js"
import addRegisteredUser from "../lib/addRegisterUSer.js"
import response from "../lib/response.js"
import isPasswordSame from "../lib/isPasswordSame.js"
import giveToken from "../lib/giveToken.js"

export async function registerController(req, res) {
    const userData = req.body
    const responseObj = response()
    const isRegisterUserExists = await isUserExists(userData)
    console.log(userData);
    if (!isRegisterUserExists) {
        await addRegisteredUser(userData)

        responseObj.data = {
            message: "You are registered"
        }

        res.json(responseObj)
        return
    }
    responseObj.error = {
        message: "User already Exists"
    }
    res.json(responseObj)
}

export async function loginController(req, res) {
    const userData = req.body
    const responseObj = response()
    const isLoginedUserExists = await isUserExists(userData)
    if (isLoginedUserExists) {
        if(isLoginedUserExists.id == 0 && isLoginedUserExists.password == 0){
            const id = isLoginedUserExists.id + ""
            const token = giveToken(id)
            responseObj.data = {
                message : "Welcome Admin",
                token
            }
            res.status(200).json(responseObj)
            return
        }
        const isPasswordsSame = await isPasswordSame(userData, isLoginedUserExists.password)

        if(!isPasswordsSame){
            responseObj.error = {
                message : "Password or email is wrong"
            }
            res.status(402).json(responseObj)
            return
        }
    }
    const token = giveToken()
    responseObj.data = {
        message: "You are logined",
        token : `${token}`
    }

    res.status(200).json(responseObj)
}
