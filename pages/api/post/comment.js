import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res) {
    const db = (await connectDB).db("forum");
    const body = JSON.parse(req.body);
    let session = await getServerSession(req,res,authOptions);

    if(req.method == 'POST'){
        if(body.comment == ''){
            return res.status(500).json('댓글을 남겨주세요');
        }else{

        await db.collection('comment').insertOne({
            content : body.comment,
            author : session.user.email,
            parent : body.postId
        })

        return res.status(302).json('댓글 등록 되었습니다');
        }
    }
}