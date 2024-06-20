import { useEffect, useState } from "react";
import { getHealthInfoList } from "../api/healthApi";
import { checkLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";

function useHealthInfo() {
  const [healthInfo, setHealthInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin()
      .then(() => {
        getHealthInfoList(0, 1)
          .then((healthData) => {
            let recentData;
            if (healthData.length > 1) {
              recentData = healthData[0];
            } else if (healthData.length === 1) {
              recentData = healthData;
            } else {
              alert('건강 정보가 없습니다.');
              navigate('/survey');
            }

            setHealthInfo(recentData);
          })
          .catch((error) => {
            alert(error.message);
          })
      })
      .catch(() => {
        navigate('/login');
      })
    
  }, []);

  return [healthInfo, setHealthInfo];
}

export default useHealthInfo;