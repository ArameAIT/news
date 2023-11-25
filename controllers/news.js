import { addNews, deleteNews, editNews } from "../lib/newsM.js"
import response from "../lib/response.js"
import verifyToken from "../lib/verifyToken.js"

export async function createNewsController(req, res) {
    const responseObj = response()
    const token = req.headers.authorization.split(" ")[1]
    const verifyiedToken = verifyToken(token)
    if (verifyiedToken !== null) {
        await addNews(req.body)
        responseObj.data = {
            message: "News added succesfully"
        }
        res.status(200).json(responseObj)
        return
    }
    responseObj.error = {
        message: "forbidden"
    }
    res.status(403).json(responseObj)

}

export async function editNewsController(req, res) {
    const responseObj = response()
    const token = req.headers.authorization.split(" ")[1]
    const verifyiedToken = verifyToken(token)

    if (verifyiedToken !== null) {
        const id = req.params.id

        const edit = await editNews(req.body, id)
        if (edit == null) {
            responseObj.error = {
                message: "id is false"
            }
            res.status(402).json(responseObj)
            return
        }
        responseObj.data = {
            message: "News edited succesfully"
        }
        res.status(200).json(responseObj)
        return
    }
    responseObj.error = {
        message: "forbidden"
    }
    res.status(403).json(responseObj)

}

export async function deleteNewsController(req, res){
    const responseObj = response()
    const token = req.headers.authorization.split(" ")[1]
    const verifyiedToken = verifyToken(token)

    if (verifyiedToken !== null) {
        const id = req.params.id

        const deleteN = await deleteNews(id)
        if (deleteN == null) {
            responseObj.error = {
                message: "id is false"
            }
            res.status(402).json(responseObj)
            return
        }
        responseObj.data = {
            message: "News deleted succesfully"
        }
        res.status(200).json(responseObj)
        return
    }
    responseObj.error = {
        message: "forbidden"
    }
    res.status(403).json(responseObj)

}