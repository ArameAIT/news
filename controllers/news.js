import { addNews } from "../lib/newsM.js"
import response from "../lib/response.js"
import verifyToken from "../lib/verifyToken.js"

export async function createNewsController(req, res){
    const responseObj = response()
    const token = req.headers.authorization.split(" ")[1]
    console.log(token);
    const verifyiedToken = verifyToken(token)
    console.log(verifyiedToken);
    if(verifyiedToken !== null){

        await addNews(req.body)
        responseObj.data = {
            message : "News added succesfully"
        }
        res.status(200).json(responseObj)
        return
    }
    responseObj.error = {
        message : "forbidden"
    }
    res.status(403).json(responseObj)

}