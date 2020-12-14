import React, { useContext } from "react";
import Log from "../components/Log";
import UpdateProfil from '../components/Profil/UpdateProfil'
import { UidContext } from "../components/AppContext";
const Profil = (props) => {
  const uid = useContext(UidContext);
  return (
    <div>
      {uid ? (
        <UpdateProfil />
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
