import { getCookie } from "../utils/cookieManage"

const getHealthInfo = async (id) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/userHealth?id=' + id, {
    headers: {
      authorization: 'Bearer ' + getCookie('accessToken')
    }
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

const postHealthInfo = async (data) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/userHealth', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + getCookie('accessToken')
    },
    body: data
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
}

const deleteHealthInfo = async (id) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/userHealth?id=' + id, {
    method: 'DELETE',
    headers: {
      authorization: 'Bearer ' + getCookie('accessToken')
    }
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
}

const getHealthInfoList = async (pageNum, pageSize) => {
  const res = await fetch(process.env.REACT_APP_API_URL + `/api/userHealth/list?pageNumber=${pageNum}&pageSize=${pageSize}`, {
    headers: {
      authorization: 'Bearer ' + getCookie('accessToken')
    }
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

export { getHealthInfo, postHealthInfo, deleteHealthInfo, getHealthInfoList };