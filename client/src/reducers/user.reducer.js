import { GET_USER ,UPDATE_BIO,UPLOAD_PICTURE} from "../actions/user.actions";

const initialState = {};
export default function userReducer(state = initialState, action) {
  // type action is GET_USER
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.payload
      }
      case UPDATE_BIO:
        return {
          ...state,
          bio: action.payload
        }
    default:
      return state;
  }
}
