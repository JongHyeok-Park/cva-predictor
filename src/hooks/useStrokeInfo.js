import { useEffect, useState } from "react";
import useHealthInfo from "./useHealthInfo";
import { getStroke } from "../api/strokeApi";
import { calcStrokeToText, formatFactorList } from "../services/strokeService";

function useStrokeInfo() {
  const [strokeInfo, setStrokeInfo] = useState({});
  const [factorList, setFactorList] = useState([]);
  const [result, setResult] = useState('');
  const [healthInfo, setHealthInfo] = useHealthInfo();

  useEffect(() => {
    if (healthInfo) {
      getStroke(healthInfo[0].id)
      .then((data) => {
        setStrokeInfo(data);
      })
      .catch((error) => {
        alert(error.message);
      })
    }
  }, [healthInfo]);

  useEffect(() => {
    setFactorList(formatFactorList(strokeInfo));
    setResult(calcStrokeToText(strokeInfo));
  }, [strokeInfo]);

  return [strokeInfo, factorList, result];
}

export default useStrokeInfo;