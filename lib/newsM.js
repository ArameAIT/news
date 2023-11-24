import fs from "node:fs/promises"
import path from "node:path"

export async function addNews(body){
    try{
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        data.news.push({
            id : Date.now(),
            ...body
        })
        const addedData = JSON.stringify(data)
        await fs.writeFile(dataPath, addedData)
    }
    catch(err){
        console.log(err);
    }
}