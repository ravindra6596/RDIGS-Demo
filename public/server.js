const express = required('expreass');
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
app.use(cors({credentials:true, origin:'https://localhost:3000'}))
app.use(express.json())
app.use(cookieParser)
app.get('/',(req,res)=>{

})
app.listen(4000);