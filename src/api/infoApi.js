import { getCookie } from "../utils/cookieManage";

const getInfo = async () => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
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

const putInfo = async (data) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
    method: 'PUT',
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

const postInfo = async (data) => {
  const res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
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

export { getInfo, putInfo, postInfo };