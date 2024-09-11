import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic';

 export default async function List() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray()
  
  result = result.map(post => ({
    ...post,
    _id : post._id.toString()
  }))
  
    return (
        <div>
            <div className = "list-bg" >
                <ListItem result = {result} />
            </div>
        </div>
    )
 }