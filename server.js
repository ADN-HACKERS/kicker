const express=require('express');
require('dotenv').config({path: './config/.env'});
const userRoutes=require('./routes/user.routes')
const bodyParser=require('body-parser')
require('./config/db')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.use('/api/user',userRoutes);



// connect the server
app.listen(process.env.PORT,()=>{
  console.log(`server running on port ${process.env.PORT}`);
})