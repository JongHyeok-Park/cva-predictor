import { getCookie } from "../utils/cookieManage";

const getStroke = async (id) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/stroke?strokeId=' + id, {
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

const getStrokeList = async () => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/stroke/list', {
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

export { getStroke, getStrokeList };