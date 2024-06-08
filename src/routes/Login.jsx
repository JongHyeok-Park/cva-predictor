import './Login.css';
import { Link } from "react-router-dom";
import logoImage from '../assets/image/logo.png';
import loginBtnImage from '../assets/image/login_button.png';

function Login(props) {
  return (
    <main className="login">
      <img className="login-logo" src={logoImage} alt="logo" />
      <div className="login-button-container">
        <button className="login-button" type="button">
          <img src={loginBtnImage} alt="login_button" />
        </button>
        <Link className="login-policy" to="/policy">개인정보처리방침</Link>
      </div>
    </main>
  )
}

export default Login;