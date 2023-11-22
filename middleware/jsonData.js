import fs from "node:fs/promises"
import path from "node:path"

export default async function jsonData(req, res, next){
    const dataPath = path.resolve("db/db.json")
    const data = await fs.readFile(dataPath, "utf-8")
    req.data = JSON.parse(data)
    next()
}