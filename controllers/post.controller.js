const postModel = require("../models/post.model");
const PostModel = require("../models/post.model");
const {uploadErrors}=require('../utils/errors.utils')
const UserModel = require("../models/user.model");
const ObjectID=require("mongoose").Types.ObjectId;
const fs=require('fs')
const {promisify} =require('util')
const pipeline=promisify(require('stream').pipeline)

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({createdAt:-1});
};

module.exports.createPost = async (req, res) => {
  let fileName;
  if(req.file !== null){

    try{
      if(req.file.detectedMimeType != "image/jpg" && req.file.detectedMimeType !="image/png" && req.file.detectedMimeType != "image/jpeg")
      throw  Error("invalid file")
  
  
      if(req.file.size > 500000) throw Error("max size ")
    }catch(err){
      const errors=uploadErrors(err)
      return res.status(201).json({errors})
    }
  
     fileName=req.body.posterId+Date.now()+'.jpg'

     await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/posts/${fileName}`
      )
    )

      }
  
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    picture:req.file !== null ? "./uploads/posts/"+ fileName : "" ,
    video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }

};

module.exports.updatePost = (req, res) => {
  if(!ObjectID.isValid(req.params.id)){ 
    return res.status(400).send('Id unknown : ' + req.params.id)
  }
    const updatedPost={
      message:req.body.message,
      
    };
    postModel.findByIdAndUpdate(req.params.id,{$set:updatedPost},{new:true},(err,data)=>{
      if(!err) res.json(data)
      else console.log(err);
    });
  
 
};

module.exports.deletePost = (req, res) => {
  if(!ObjectID.isValid(req.params.id)){ 
    return res.status(400).send('Id unknown : ' + req.params.id)
  }
  postModel.findByIdAndRemove(req.params.id,(err,data)=>{
    if(!err) res.json(data)
    else console.log(err)
  })
};

module.exports.likePost = async (req, res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('Id unknown : ' + req.params.id)
  try{
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id}
      },
      {new:true},
      (err,data)=>{
        if(err) return res.status(400).json(err)

      })
      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $addToSet:{stars:req.params.id}
        },
        {new:true},
        (err,data)=>{
          if(!err) return res.json(data)
          else return res.status(400).json(err)
        })
    
  }catch(err){
    return res.status(400).json(err)
  }
}

module.exports.unlikePost = async (req, res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('Id unknown : ' + req.params.id)
  try{
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id}
      },
      {new:true},
      (err,data)=>{
        if(err) return res.status(400).json(err)

      })
      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $pull:{stars:req.params.id}
        },
        {new:true},
        (err,data)=>{
          if(!err) return res.json(data)
          else return res.status(400).json(err)
        })
    
  }catch(err){
    return res.status(400).json(err)
  }
};

module.exports.commentPost = (req, res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('Id unknown : ' + req.params.id)
  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push:{ 
          comments:{
            commenterId:req.body.commenterId,
            commenterUsername:req.body.commenterUsername,
            text:req.body.text,
            timestamp:new Date().getTime()
          }
        }
      },
      {new:true},
      (err,data)=>{
        if(!err) return res.json(data)
        else return res.status(400).json(err)
      })

     
  }catch(err){
    return res.status(400).json(err)
  }
};

module.exports.editCommentPost = (req, res) => {
  if(!ObjectID.isValid(req.params.id))
  return res.status(400).send('Id unknown : ' + req.params.id)
   try{
     return PostModel.findById(
       req.params.id,
       (err,data)=>{
         const theComment=data.comments.find((comment)=>
           comment._id.equals(req.body.commentId)
         )
         if(!theComment) return res.status(404).json('comment not found')      
        
         theComment.text=req.body.text
         return data.save((err)=>{
           if(!err) return res.status(200).json(data)
           return res.status(500).json(err)
         })
        }
    )
   }catch(err){
     return res.status(400).send(err)
   }
};

module.exports.deleteCommentPost = (req, res) => {
  if(!ObjectID.isValid(req.params.id))
  return res.status(400).send('Id unknown : ' + req.params.id)
 try {
   return PostModel.findByIdAndUpdate(
     req.params.id,
     {
       $pull:{ 
         comments:{
           _id:req.body.commentId,
         }
       }
     },{
       new:true
     },
     (err,data)=>{
       if(!err) return res.json(data)
       else return res.status(400).json(err)
     }
   )
 }catch (err){
   return res.status(400).json(err)
 }
};