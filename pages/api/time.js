import { connectDB } from "../../util/database";

export default async function Time(param,res) {
    let time  = new Date();
    let detail_time = ('0'+ (time.getMonth() + 1)).slice(-2);
    let detail_time_day = ('0' + time.getDate()).slice(-2);
    let date_string = detail_time + '-' + detail_time_day;

    const client = await connectDB;
    const db = client.db("forum");


    const {title , content} = param.query;

    const result = await db.collection('post').insertOne({
        title : title,
        content : content
    })

    return res.status(200).json({message : time + date_string + "데이터 입력이 완료 되었습니다" , result : result});
    
}