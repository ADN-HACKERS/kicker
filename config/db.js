const mongoose = require('mongoose')
//protect our data we remove the name of our database and password and we change it with process ... inside .env
mongoose.connect('mongodb+srv://'+process.env.DB_USER_PASS +'@cluster0.swnxc.mongodb.net/kicker',
{useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false})
.then(()=>{console.log('connected to mongodb')})
.catch(err=>{console.log('failed to connect to MongoDB',err)})
