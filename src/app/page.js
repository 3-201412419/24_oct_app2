import { connectDB } from "../../util/database";

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray()

  // await fetch('/URL', {cashe : 'force-cache'})

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}
