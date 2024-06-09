import './HealthHistory.css';

function HealthHistory({ mark, date, detail }) {
  return (
    <article className="history-of-health">
      <img className="history-mark" src={mark} alt="상태 아이콘" />
      <div className="history-text">
        <p className="history-date">{date}</p>
        <p className="history-detail">{detail}</p>
      </div>
    </article>
  )
}

export default HealthHistory;