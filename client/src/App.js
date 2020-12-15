import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'

import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import {getUser} from './actions/user.actions';
const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch =useDispatch()
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
      //hello dhia test
    };
    fetchToken();
    // if user exist we call the dispatch
 if(uid) dispatch (getUser(uid))

  }, [uid,dispatch]);
  return (
    <div >
      {/* store id of user */}
      <UidContext.Provider value={uid}>
        <Routes />
      </UidContext.Provider>
    </div>
  );
};

export default App;
