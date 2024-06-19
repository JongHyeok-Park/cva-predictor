import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import home_icon from "../../assets/image/home_icon.png"
import hospital_icon from "../../assets/image/hospital_icon.png"
import user_icon from "../../assets/image/user_icon.png"

function Navbar(props) {
  return (
    <footer className="navbar">
      <nav className="navbar-inner">
        <ul className="navbar-item-list">
          <li className="navbar-item">
            <Link to="/">
              <img src={home_icon} alt="" />
              <span>홈</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/hospital">
              <img src={hospital_icon} alt="" />
              <span>병원</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/info">
              <img src={user_icon} alt="" />
              <span>내 정보</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar;