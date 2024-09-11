import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req,res){
    const db = (await connectDB).db("forum");
    
    if(req.method == 'DELETE'){

        const body  = JSON.parse(req.body);
        let result = await db.collection('post').deleteOne({_id: new ObjectId(body.id)});
        return res.status(302).json('삭제되었습니다');
    } else if(req.method == 'GET') {
       let result = await db.collection('post').deleteOne({_id: new ObjectId(req.query.delete)});
       return res.status(302).json('삭제되었습니다');
    }
}