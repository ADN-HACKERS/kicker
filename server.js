const express=require('express');
require('dotenv').config({path: './config/.env'});
const userRoutes=require('./routes/user.routes')
const postRoutes=require('./routes/post.routes')
const cors=require('cors')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser');
const {checkUser,requireAuth}= require('./middleware/auth.middleware')
require('./config/db')

const app = express();

const corsOptions={
  origin :'http://localhost:3001',
  credentials :true,
  'allowedHeaders':['sessionId','Content-Type'],
  'exposedMethods':['sessionId'],
  'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue':false
}
app.use(cors(corsOptions));
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