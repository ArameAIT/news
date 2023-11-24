import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"

export default async function addRegisteredUser(userData) {
    try {
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        const password = userData.password + ""
        const hashedPassword = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');
        data.users.push({
            id: Date.now(),
            ...userData,
            password: hashedPassword
        })
        const stringedData = JSON.stringify(data)
        await fs.writeFile(dataPath, stringedData)
    }
    catch (err) {
        console.log(err);
    }
}