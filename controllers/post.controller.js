const postModel = require("../models/post.model");
const PostModel = require("../models/post.model");

const UserModel = require("../models/user.model");
const ObjectID=require("mongoose").Types.ObjectId;


module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

module.exports.createPost = async (req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
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
 
};

module.exports.unlikePost = async (req, res) => {
  
};

module.exports.commentPost = (req, res) => {
  
};

module.exports.editCommentPost = (req, res) => {

};

module.exports.deleteCommentPost = (req, res) => {
  
 
};