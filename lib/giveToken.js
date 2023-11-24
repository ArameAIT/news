import jwt from "jsonwebtoken";

export default function giveToken(userID){
    const token = jwt.sign({ id: userID }, 'shhhhh')
    return token
}