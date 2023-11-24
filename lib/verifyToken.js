import jwt from "jsonwebtoken";

export default function verifyToken(token) {
    const verified = jwt.verify(token, 'shhhhh');
    console.log(verified);
    if(verified.iat == 0){
        return true;
    }else return null

}