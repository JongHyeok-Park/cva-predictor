import { getCookie } from "../utils/cookieManage";

const getHealthInfo = async (id) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/healthInfo?id=' + id, {
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

const getHealthInfoList = async () => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/healthInfo/list', {
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

export { getHealthInfo, getHealthInfoList };