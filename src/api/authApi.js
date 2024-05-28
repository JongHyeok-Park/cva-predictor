import { getCookie } from "../utils/cookieManage"

const patchLogin = async () => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/login', {
    method: 'PATCH',
    headers: {
      'authorization': 'Bearer ' + getCookie('refreshToken')
    }
  });

  if (!res.ok) {
    let message = await res.text();
    throw new Error(message);
  }

  return await res.text();
}