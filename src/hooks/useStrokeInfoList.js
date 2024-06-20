import { useEffect, useState } from "react";
import { getStrokeList } from "../api/strokeApi";
import { checkLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";

function useStrokeInfoList() {
  const [strokeInfoList, setStrokeInfoList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin()
      .then(() => {
        getStrokeList()
          .then((data) => {
            setStrokeInfoList(data);
          })
          .catch((error) => {
            alert(error.message);
          })
      })
      .catch(() => {
        navigate('/login');
      })
    
  }, []);

  return strokeInfoList;
}

export default useStrokeInfoList;