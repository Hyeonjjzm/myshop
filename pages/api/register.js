//pages/api/register.js
import mariadb from 'mariadb'

// DB와 연결할 데이터 풀 생성 어떻게 사이트에 들어가야되는지 생성
const pool = mariadb.createPool({
    host:'127.0.0.1',
    port:3399,
    user:'root',
    password:'root1234!',
    database:'user_account',
    connectionLimit:5,
})

export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const conn = await pool.getConnection();
            await conn.query('SELECT * FROM users');
            conn.release();
            res.status(200).json({message: "connection success"})
            // const {username, user_id, password} = req.body;
            // console.log(username);
        }
        catch (error){
            console.log("DB error")
        }
    }
}