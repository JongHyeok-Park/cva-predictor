import { useNavigate, useSearchParams } from 'react-router-dom';
import spinner from '../assets/image/spinner.png';
import './Redirect.css';
import { useEffect } from 'react';
import { getLogin } from '../api/authApi';
import { setCookie } from '../utils/cookieManage';

function Redirect(params) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const accessTime = 2 * 60;
  const refreshTime = 7 * 24 * 60;

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      getLogin(code)
        .then((data) => {
          setCookie('accessToken', data.accessToken, accessTime);
          setCookie('refreshToken', data.refreshToken, refreshTime);
          setTimeout(() => {
            navigate('/');
          }, 500);
        })
        .catch((error) => {
          alert(error.message);
          navigate('/login');
        })
    } else {
      alert('잘못된 접근입니다.');
      navigate('/login');
    }
  }, [searchParams])

  return (
    <main className="redirect">
      <div className="redirect-spinner-wrapper">
        <img className="redirect-spinner" src={spinner} alt="spinner" />
      </div>
    </main>
  )
}

export default Redirect;