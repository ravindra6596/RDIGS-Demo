const express = required('expreass');
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser)
app.get('/',(req,res)=>{
res.status(202).coockie('preferences','preferences',{
    sameSite:'strict',
    path:"/",
    expires:new Date(new Date().getTime()+5*1000),
    httpOnly:true
}).send("cookie being initialised")
});
app.listen(4000);