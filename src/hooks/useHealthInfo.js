import { useEffect, useState } from "react";
import { getHealthInfoList } from "../api/healthApi";

function useHealthInfo() {
  const [healthInfo, setHealthInfo] = useState();

  useEffect(() => {
    getHealthInfoList(0, 1)
      .then((healthData) => {
        let recentData;
        if (healthData.length > 1) {
          recentData = healthData[0];
        } else {
          recentData = healthData;
        }

        setHealthInfo(recentData);
      })
      .catch((error) => {
        alert(error.message);
      })
  }, []);

  return [healthInfo, setHealthInfo];
}

export default useHealthInfo;