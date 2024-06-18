import { useEffect, useState } from "react";
import { getStrokeList } from "../api/strokeApi";

function useStrokeInfoList() {
  const [strokeInfoList, setStrokeInfoList] = useState([]);

  useEffect(() => {
    getStrokeList()
      .then((data) => {
        setStrokeInfoList(data);
      })
      .catch((error) => {
        alert(error.message);
      })
  }, []);

  return strokeInfoList;
}

export default useStrokeInfoList;