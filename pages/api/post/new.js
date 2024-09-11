import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res){
    let session = await getServerSession(req, res, authOptions)
    
    if(session){
        req.body.author = session.user.email;
    }
    if(req.method == 'POST'){
        const db = (await  connectDB).db("forum");
        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json('제목 또는 내용을 입력해주세요');
        }{
            
            let result = await db.collection('post').insertOne(req.body);
            return res.redirect(302,'/list');
        }
    }
}