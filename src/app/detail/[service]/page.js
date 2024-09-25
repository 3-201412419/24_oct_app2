import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.service)});
    
    let serializedResult = {
        ...result,
        _id : result._id.toString(),
    }

    if(result === null)
    {
        return notFound();
    }

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        <Comment post= {serializedResult}/>
        </div>
    )
}