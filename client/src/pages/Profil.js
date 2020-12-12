import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
const Profil = (props) => {
  const uid = useContext(UidContext);
  return (
    <div>
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div>
          <Log signin={false} signup={true} />
          <div></div>
        </div>
      )}
    </div>
  );
};
export default Profil;
