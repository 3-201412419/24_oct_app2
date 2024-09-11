import { connectDB } from "../../util/database";

export default async function ListApi(param, res) {

    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection('post').find().toArray()

    return res.status(200).json(result)
}