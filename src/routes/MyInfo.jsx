import './MyInfo.css';
import { Link } from "react-router-dom";
import Top from "../components/top/Top";
import HelathHistory from "../components/history/HealthHistory";
import dangerImage from '../assets/image/danger.png';
import safeImage from '../assets/image/safe.png';

function MyInfo(props) {
  return (
    <main className="myinfo">
      <Top title="내 정보" />
      <section className="myinfo-current-section">
        <h1>한승규<span className="myinfo-nim"> 님</span></h1>
        <div className="myinfo-date-container">
          <p className="myinfo-current-title">현재 건강 정보</p>
          <p className="myinfo-date">2024. 03. 20.</p>
          <Link className="myinfo-update" to="/update">수정 &gt;</Link>
        </div>
        <table className="myinfo-table">
          <tr>
            <th>나이</th>
            <td>24세</td>
            <th>고혈압</th>
            <td>없음</td>
          </tr>
          <tr>
            <th>키</th>
            <td>173cm</td>
            <th>심장 질환</th>
            <td>없음</td>
          </tr>
          <tr>
            <th>몸무게</th>
            <td>67kg</td>
            <th>거주지</th>
            <td>도심</td>
          </tr>
          <tr>
            <th>성별</th>
            <td>남성</td>
            <th>직업 유형</th>
            <td>자영업</td>
          </tr>
        </table>
      </section>
      <hr className="myinfo-divider"></hr>
      <section className="myinfo-history-section">
        <p className="myinfo-history-title">나의 건강 기록</p>
        <HelathHistory
          mark={dangerImage}
          date="2024. 03. 12."
          detail="173cm  107kg  고혈압 없음  심장질환 없음  도심 거주  자영업자"
        />
        <HelathHistory
          mark={safeImage}
          date="2024. 03. 04."
          detail="173cm  67kg  고혈압 없음  심장질환 보유  시골 거주  자영업자"
        />
      </section>
    </main>
  )
}

export default MyInfo;