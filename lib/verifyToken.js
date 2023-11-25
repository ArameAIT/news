import jwt from "jsonwebtoken";

export default function verifyToken(token) {
    const verified = jwt.verify(token, 'shhhhh');
    console.log(verified);
    if(verified.id == 0){
        return true;
    }else return null

}