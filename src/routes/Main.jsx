import './Main.css';
import ColumnPost from "../components/post/ColumnPost";

function Main(props) {
  return (
    <main className="main">
      <section className="main-percentage-section">
        <p><span className="main-user-name">OOO</span>님의 뇌졸중 발병 확률은</p>
        <p><span className="main-percentage">00</span>% 입니다.</p>
      </section>
      <section className="main-status-section">
        <div className="main-status-circle">
          <h1 className="main-status">
            주의
          </h1>
          <h1 className="main-status-inner">주의</h1>
          <div className="main-factor-wrapper">
            <h3 className="main-factor-title">주요 요인</h3>
            <ul className="main-factor-list">
              <li className="main-factor-item">체중 감량 필요</li>
              <li className="main-factor-item">높은 연령대</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="main-column-container">
        <h3 className="main-column-container-title"><span className="main-user-name">OOO</span>님에게 추천드리는 조언 칼럼</h3>
        <ColumnPost id={1} />
        <ColumnPost id={2} />
        <ColumnPost id={3} />
        <ColumnPost id={4} />
        <ColumnPost id={5} />
        <ColumnPost id={6} />
        <ColumnPost id={7} />
        <ColumnPost id={8} />
      </section>
      <div className="main-background"></div>
    </main>
  )
}

export default Main;