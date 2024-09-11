import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res){
    const db = (await connectDB).db("forum");
    let session = await getServerSession(req,res,authOptions);
    
    if(req.method == 'DELETE'){

        const body  = JSON.parse(req.body);

        if(!session){
            alert('로그인이 필요합니다')
            return  res.status(500).json("권한이 없습니다")
        }else if(session.user.email == req.query.author){
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.query.id)});
            return res.status(302).json('삭제되었습니다');
        }
        

    } else if(req.method == 'GET') {
        if(!session){
            return  res.status(500).json("권한이 없습니다")
           
        }else if(session.user.email == req.query.author){
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.query.id)});
            return res.status(302).json('삭제되었습니다');
           
        }

      // let result = await db.collection('post').deleteOne({_id: new ObjectId(req.query.id)});
      // return res.status(302).json('삭제되었습니다');
    }
}