import { useEffect, useState } from "react";
import useHealthInfo from "./useHealthInfo";
import { getStroke } from "../api/strokeApi";
import { calcStrokeToText, formatFactorList } from "../services/strokeService";
import { checkLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";

function useStrokeInfo() {
  const [strokeInfo, setStrokeInfo] = useState({});
  const [factorList, setFactorList] = useState([]);
  const [result, setResult] = useState('');
  const [healthInfo, setHealthInfo] = useHealthInfo();
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin()
      .then(() => {
        if (healthInfo) {
          getStroke(healthInfo[0].id)
          .then((data) => {
            setStrokeInfo(data);
          })
          .catch((error) => {
            alert(error.message);
          })
        }
      })
      .catch(() => {
        navigate('/login');
      })
    
  }, [healthInfo]);

  useEffect(() => {
    setFactorList(formatFactorList(strokeInfo));
    setResult(calcStrokeToText(strokeInfo));
  }, [strokeInfo]);

  return [strokeInfo, factorList, result];
}

export default useStrokeInfo;