import { GET_USER ,UPLOAD_PICTURE} from "../actions/user.actions";

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
      };
    default:
      return state;
  }
}
