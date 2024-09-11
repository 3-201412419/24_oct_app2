import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://dok2andtablo2:zxasqw1!@cluster0.ws8fr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}

export { connectDB }