import { useEffect, useState } from "react";
import { getUserInfo } from "../api/authApi";

function useUserInfo() {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    getUserInfo()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        alert(error.message);
      })
  }, []);

  return [userInfo, setUserInfo];
}

export default useUserInfo;