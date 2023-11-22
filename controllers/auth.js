import isUserExists from "../lib/isUserExits.js"
import addRegisteredUser from "../lib/addRegisterUSer.js"
import response from "../lib/response.js"
import isPasswordSame from "../lib/isPasswordSame.js"

export async function registerController(req, res) {
    const userData = req.body
    const responseObj = response()
    const isRegisterUserExists = await isUserExists(userData)
    if (!isRegisterUserExists) {
        addRegisteredUser(userData)

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
    console.log(isLoginedUserExists.password);
    if(isLoginedUserExists){
        const isPasswordsSame = await isPasswordSame(userData, isLoginedUserExists.password)
        console.log(isPasswordsSame);
    }
    responseObj.data = {
        message: "You are logined"
    }

    res.json(responseObj)
}
