import { useEffect, useState } from "react";
import { getUserInfo } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../services/authService";

function useUserInfo() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    checkLogin()
      .then(() => {
        getUserInfo()
          .then((data) => {
            setUserInfo(data);
          })
          .catch((error) => {
            alert(error.message);
          })
      })
      .catch(() => {
        navigate('/login');
      })
    
  }, []);

  return [userInfo, setUserInfo];
}

export default useUserInfo;