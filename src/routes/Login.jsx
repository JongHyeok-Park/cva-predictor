import { Link } from "react-router-dom";

function Login(props) {
  return (
    <main className="login">
      <div class="container">
        <img src="./logo.png"/>
        <button type="button">
          <img src="#" alt="login_button" />
        </button>
        <Link to="/private">개인정보처리방침</Link>
      </div>
    </main>
  )
}

export default Login;