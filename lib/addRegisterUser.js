import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"

export default async function addRegisteredUser(userData) {
    try {
        const dataPath = path.resolve("db/db.json")
        const dataAsString = await fs.readFile(dataPath, "utf-8")
        const data = JSON.parse(dataAsString)
        const password = userData.password
        const salt = crypto.randomBytes(32).toString('hex');
        const hashedPassword = crypto
            .createHash('sha256')
            .update(password + salt)
            .digest('hex');

        data.users.push({
            id: Date.now(),
            ...userData,
            password: hashedPassword
        })
        await fs.writeFile(dataPath, JSON.stringify(data))
    }
    catch (err) {
        console.log(err);
    }
}