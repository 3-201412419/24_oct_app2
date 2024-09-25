import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(req,res){
    let db = (await connectDB).db("forum");
    let result = await db.collection('comment').find({
        parent : req.query.id
    }).toArray();

 

    res.status(200).json(result);
}