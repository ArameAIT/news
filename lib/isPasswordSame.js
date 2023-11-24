import crypto from "node:crypto"

export default async function isPasswordSame(userData, dataHashedPassword) {
    try {
        const password = userData.password + ""
        const hashedPasswordToCheck = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');
        return dataHashedPassword == hashedPasswordToCheck
    } catch (err) {
        console.log(err);
    }
}