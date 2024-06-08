import './MyInfo.css';
import { Link } from "react-router-dom";
import History from "../components/history/HealthHistory"

function MyInfo(props) {
  return (
    <main className="myinfo">
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
      <section className="myinfo-history-section">

      </section>
    </main>
  )
}

export default MyInfo;