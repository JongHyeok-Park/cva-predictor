import { useEffect, useState } from "react";
import { getHealthInfoList } from "../api/healthApi";
import { dateFormat } from "../services/dateService";

function useHealthInfoList() {
  const [healthInfoList, setHealthInfoList] = useState([]);
  const pageSize = process.env.REACT_APP_PAGE_SIZE;

  useEffect(() => {
    getHealthInfoList(0, pageSize)
      .then((healthData) => {
        if (healthData.length > 1) {
          healthData.forEach((item) => {
            item.createdAt = dateFormat(item.createdAt);
          });
        } else {
          healthData.createdAt = dateFormat(healthData.createdAt);
        }
        

        const newHealthInfoList = healthInfoList.concat(healthData);
        setHealthInfoList(newHealthInfoList);
      })
      .catch((error) => {
        alert(error.message);
      })

      // eslint-disable-next-line
  }, []);

  return [healthInfoList, setHealthInfoList];
  
}
export default useHealthInfoList;