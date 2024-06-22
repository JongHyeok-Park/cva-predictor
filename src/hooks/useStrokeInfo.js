import { useEffect, useState } from "react";
import useHealthInfo from "./useHealthInfo";
import { getStroke } from "../api/strokeApi";
import { calcStrokeToText, formatFactorList } from "../services/strokeService";
import { checkLogin } from "../services/authService";
import { useAsyncError, useNavigate } from "react-router-dom";

function useStrokeInfo() {
  const [strokeInfo, setStrokeInfo] = useState({});
  const [factorList, setFactorList] = useState([]);
  const [result, setResult] = useState('');
  const [healthInfo, setHealthInfo] = useHealthInfo();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    checkLogin()
      .then(() => {
        for (let i = 0; i < 10; i++) {
          if (!flag) {
            const timer = setTimeout(() => {
              if (healthInfo && !flag) {
                getStroke(healthInfo[0].id)
                .then((data) => {
                  setStrokeInfo(data);
                  console.log(data);
                  setFlag(true);
                  clearTimeout(timer);
                  })
                .catch((error) => {
                  console.log(error.message);
                  console.log('시도');
                })
              }
            }, 500 * i);
          }
          
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