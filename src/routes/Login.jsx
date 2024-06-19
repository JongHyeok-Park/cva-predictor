import './Login.css';
import { Link } from "react-router-dom";
import logoImage from '../assets/image/logo.png';
import loginBtnImage from '../assets/image/login_button.png';

function Login(props) {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;

  return (
    <main className="login">
      <div className="login-inner">
        <img className="login-logo" src={logoImage} alt="logo" />
        <div className="login-button-container">
          <a className="login-button" href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`}>
            <img src={loginBtnImage} alt="login_button" />
          </a>
          <Link className="login-policy" to="/policy">개인정보처리방침</Link>
        </div>
      </div>
    </main>
  )
}

export default Login;