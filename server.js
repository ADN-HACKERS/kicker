const express=require('express');
require('dotenv').config({path: './config/.env'});
const userRoutes=require('./routes/user.routes')
const postRoutes=require('./routes/post.routes')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser');
const {checkUser,requireAuth}= require('./middleware/auth.middleware')
require('./config/db')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())



app.get('*',checkUser)
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});
// routes
app.use('/api/user',userRoutes);
app.use('/api/post', postRoutes);



// connect the server
app.listen(process.env.PORT,()=>{
  console.log(`server running on port ${process.env.PORT}`);
})