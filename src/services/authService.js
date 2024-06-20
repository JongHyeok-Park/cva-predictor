import { patchLogin } from "../api/authApi";
import { deleteCookie, getCookie, setCookie } from "../utils/cookieManage"

const checkLogin = async () => {
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const accessTime = 2 * 60;
  const refreshTime = 7 * 24 * 60;

  if (accessToken) {
    return accessToken;
  } else if (refreshToken) {
    await patchLogin(refreshToken)
      .then((data) => {
        setCookie('accessToken', data.accessToken, accessTime);
        setCookie('refreshToken', data.refreshToken, refreshTime);
      })
      .catch((error) => {
        alert(error.message);
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        throw new Error();
      })
  } else {
    throw new Error('로그인이 필요한 서비스입니다.');
  }
}

export { checkLogin };