import './Login.css';
import { Link } from "react-router-dom";
import logo from '../assets/image/logo.png';
import login_button from '../assets/image/login_button.png';

function Login(props) {
  return (
    <main className="login">
      <div className="container">
        <img src={logo} alt="logo" />
        <button type="button" className="login-button">
          <img src={login_button} alt="login_button" />
        </button>
        <Link to="/private">개인정보처리방침</Link>
      </div>
    </main>
  )
}

export default Login;