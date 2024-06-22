import { useEffect, useState } from "react";
import useStrokeInfo from "./useStrokeInfo";
import { getHealthInfo, getHealthInfoList } from "../api/healthColumnApi";

function useColumnList() {
  const [strokeInfo] = useStrokeInfo();
  const [columnList, setColumnList] = useState([]);
  const [beforeColumnList, setBeforeColumnList] = useState([]);

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
    if (strokeInfo) {
      getHealthInfoList()
      .then((resHealthColumn) => {
        setBeforeColumnList(resHealthColumn);
      })
      .catch((error) => {
        alert(error.message);
      })
    }
  }, []);

  useEffect(() => {
    matchColumn();
  }, [beforeColumnList])

  return columnList;
}

export default useColumnList;