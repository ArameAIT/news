import crypto from "node:crypto"

export default async function isPasswordSame(user, dataHashedPassword) {
    try {
        const password = user.password
        const salt = crypto.randomBytes(32).toString('hex');
        // const salt = crypto.Hash().toString("hex")
        const hashedPasswordToCheck = crypto
            .createHash('sha256')
            .update(password + salt)
            .digest('hex');
        console.log(hashedPasswordToCheck, "HAshed");
        const isPasswordCorrect = crypto.timingSafeEqual(
            Buffer.from(dataHashedPassword, 'hex'),
            Buffer.from(hashedPasswordToCheck, 'hex')
        );
        return isPasswordCorrect
    } catch (err) {
        console.log(err);
    }
}