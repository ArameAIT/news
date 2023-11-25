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

export async function editNews(body, id){
    try{
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        console.log(data.news);
        const newsNumber = data.news.findIndex((t)=>{
            console.log(id);
            return t.id == id
        })
        if(newsNumber == -1){
            return null
        }
        data.news[newsNumber] = {
            id : Date.now(),
            ...body
        }
        const addedData = JSON.stringify(data)
        await fs.writeFile(dataPath, addedData)
        return true
    }
    catch(err){
        console.log(err);
    }
}

export async function deleteNews( id){
    try{
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        const newsNumber = data.news.findIndex((t)=>{
            return t.id == id
        })
        if(newsNumber == -1){
            return null
        }
        data.news.splice(newsNumber, 1)
        const addedData = JSON.stringify(data)
        await fs.writeFile(dataPath, addedData)
        return true
    }
    catch(err){
        console.log(err);
    }
}