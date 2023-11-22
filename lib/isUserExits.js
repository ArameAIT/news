import fs from "node:fs/promises"
import path from "node:path"

export default async function isUserExists(user){
    try{
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        const selecUser = data.users.find((el) => el.email == user.email)
        if(selecUser){
           return selecUser
        }
        return false
    }catch(err){
        console.log(err);
    }

}