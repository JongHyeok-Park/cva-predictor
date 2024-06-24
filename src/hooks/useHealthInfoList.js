import { useEffect, useState } from "react";
import { getHealthInfoList } from "../api/healthApi";
import { dateFormat } from "../services/dateService";
import { checkLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";

function useHealthInfoList() {
  const [healthInfoList, setHealthInfoList] = useState([]);
  const pageSize = process.env.REACT_APP_PAGE_SIZE;
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin()
      .then(() => {
        getHealthInfoList(0, pageSize)
          .then((healthData) => {
            if (healthData.length > 1) {
              healthData.forEach((item) => {
                item.createdAt = dateFormat(item.createdAt);
              });
            } else if (healthData.length === 1) {
              healthData.createdAt = dateFormat(healthData.createdAt);
            } else {
              navigate('/survey');
            }
            

            const newHealthInfoList = healthInfoList.concat(healthData);
            setHealthInfoList(newHealthInfoList);
          })
          .catch((error) => {
            alert(error.message);
          })
      })
      .catch(() => {
        navigate('/login');
      })

      // eslint-disable-next-line
  }, []);

  return [healthInfoList, setHealthInfoList];
  
}
export default useHealthInfoList;