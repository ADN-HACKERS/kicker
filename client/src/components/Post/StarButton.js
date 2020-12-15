import React ,{useContext,useState,useEffect}from 'react';
import {UidContext} from '../AppContext'
// import Popup from 'reactjs-popup';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import 'reactjs-popup/dist/index.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import {useDispatch} from 'react-redux'
import {likePost,unlikePost} from "../../actions/post.actions"
const StarButton = ({post}) => {
  const [liked,setLiked]=useState(false)
  const uid=useContext(UidContext)
  const dispatch =useDispatch()
  const like=() =>{
      dispatch(likePost(post._id,uid))
      setLiked(true)
  }
  const unlike=()=>{
    dispatch(unlikePost(post._id,uid))
    setLiked(false)
  }
  useEffect(()=>{
    if(post.likers.includes(uid)) setLiked(true)
  },[uid,post.likers,liked])
  return (
    <div>
      {/* {uid === null && (
        <Popup
          trigger={<FontAwesomeIcon icon={["far", "fa-star"]} />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick>
          <div> Connect before</div>
        </Popup>
      )} */}
      {/* <FontAwesomeIcon icon={["fas", "fa-star"]} /> */}
      {uid && liked === false && (
      <img src={"https://icons-for-free.com/iconfiles/png/512/best+bookmark+premium+rating+select+star+icon-1320168257340660520.png"}  onClick={like} alt='like'  style={{maxHeight:'50px',width:'50px',borderStyle:'solid' , borderRadius:'70px', borderColor:'white'}}/> 
      )}
      {uid && liked &&( <img src=""  onClick={unlike} alt='like'/>) }
      <span>{post.likers.length}</span>
    </div>
  );
}
export default StarButton