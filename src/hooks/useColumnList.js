import { useEffect, useState } from "react";
import { getHealthInfo, getHealthInfoList } from "../api/healthColumnApi";
import { checkLogin } from "../services/authService";
import { useNavigate } from "react-router-dom";
import useHealthInfo from "./useHealthInfo";

function useColumnList() {
  const [healthInfo] = useHealthInfo();
  const [columnList, setColumnList] = useState([]);
  const [beforeColumnList, setBeforeColumnList] = useState([]);
  const navigate = useNavigate();

  const matchColumn = async () => {
    let list = []

    beforeColumnList.forEach(async (item) => {
      await getHealthInfo(item.id) 
      .then((resColumn) => {
        list = list.concat(resColumn);
        setColumnList(list);
      })
      .catch((error) => {
        alert(error.message);
      })
    })

    return list;
  }

  useEffect(() => {
    checkLogin()
      .then(() => {
        if (healthInfo && healthInfo[0]?.id) {
          getHealthInfoList()
          .then((resHealthColumn) => {
            setBeforeColumnList(resHealthColumn);
          })
          .catch((error) => {
            alert(error.message);
          })
        }
      })
      .catch((err) => {
        console.log(err)
        navigate('/login');
      })
  }, [healthInfo]);

  useEffect(() => {
    matchColumn();
  }, [beforeColumnList])

  return columnList;
}

export default useColumnList;