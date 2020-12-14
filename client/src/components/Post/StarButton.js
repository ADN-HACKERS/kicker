import React ,{useContext,useState,useEffect}from 'react';
import {UidContext} from '../AppContext'
import Popup from 'reactjs-popup';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import 'reactjs-popup/dist/index.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
const StarButton = ({post}) => {
  const [liked,setLiked]=useState(false)
  const uid=useContext(UidContext)
  const like=() =>{
      
  }
  const unlike=()=>{

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
        <i className="fas fa-star" onClick={like}></i>
      )}
      {uid && liked && <i className="fas fa-star" onClick={unlike}></i>}
    </div>
  );
}
export default StarButton