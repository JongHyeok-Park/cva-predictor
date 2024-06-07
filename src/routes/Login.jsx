import './Login.css';
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <main className="login">
      <div className="login-logo" />
      <button className="login-login-button" type="button" />
      <Link className="login-policy" to="/policy">개인정보처리방침</Link>
    </main>
  )
}

export default Login;