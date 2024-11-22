//pages/api/register.js
import user from "@/DB/models";
import connetDB from "@/DB/connect"
// DB와 연결할 데이터 풀 생성 어떻게 사이트에 들어가야되는지 생성

export default async function handler(req,res){
    await connetDB()
    if (req.methond === 'POST'){
        const {username, userId,password} = req.body
    }
    if (!username || !userId || !password){
        return res.status(400).json
    }
}