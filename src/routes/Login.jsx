import './Login.css';
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <main className="login">
      <div className="login-logo" />
      <div className="login-button-container">
        <button className="login-button" type="button" />
        <Link className="login-policy" to="/policy">개인정보처리방침</Link>
      </div>
    </main>
  )
}

export default Login;