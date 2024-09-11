import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function edit(props){
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.service)});

    // await db.collection('post').updateOne({_id : props.params.service}, 
    //     {$set : {title : result.title, content : result.content}})
    
    return (
        <div className = "p-20">
            <h4>글 수정</h4>
            <form action = "/api/post/edit" method = "POST">
                <input type = "hidden" name = "id" defaultValue = {result._id.toString() }/>
                <input type = "text" name = "title" defaultValue = {result.title} placeholder = "제목"/>
                <input name = "content" defaultValue = {result.content} placeholder ="내용"/>
                <button type = "submit">버튼</button>
            </form>
        </div>
    )
}