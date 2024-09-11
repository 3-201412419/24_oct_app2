import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req,res){
    if(req.method == 'POST'){
        const db = (await  connectDB).db("forum");
        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json('제목 또는 내용을 입력해주세요');
        }{

           await db.collection('post').updateOne({_id : new ObjectId(req.body.id)}, 
              {$set : {title : req.body.title, content : req.body.content}})
            return res.redirect(302,'/list');
        }
    }
}