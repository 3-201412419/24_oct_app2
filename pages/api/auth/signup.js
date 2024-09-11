import { connectDB } from "../../../util/database";
import bcrypt from "bcrypt"

export default async function handler(req,res){
    if(req.method == 'POST'){
        let hash = await bcrypt.hash(req.body.password,10);
        req.body.password = hash;
        let db = (await connectDB).db('forum');
        let user = await db.collection('user_cred').find({}).toArray();


        if(req.body.name == ''){
           console.log('이름을 입력해주세요')
           return res.status(500).json('이름을 입력해주세요');
        }else if(req.body.email == ''){
            console.log('이메일을 입력해주세요');
            return res.status(500).json('이메일을 입력해주세요');
        }else if(req.body.password == ''){
            console.log('비밀번호를 입력해주세요');
            return res.status(500).json('비밀번호를 입력해주세요');
        }else if (user && user.find((v) => v.email == req.body.email)){
            console.log('이미 가입된 이메일입니다')
            return res.status(500).json('이미 가입된 이메일입니다')
        }else{
            await db.collection('user_cred').insertOne(req.body);
            return res.status(200).json('가입성공');
        }

        }else{
            await db.collection('user_cred').insertOne(req.body);
            return res.status(200).json('가입성공');
        }
    }
