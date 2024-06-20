import './HealthHistory.css';

function HealthHistory({ mark, date, detail }) {
  return (
    <article className="history-of-health">
      <div className={'history-mark ' + (mark === '양호' ? 'good' : mark === '주의' ? 'caution' : 'danger')}>{mark}</div>
      <div className="history-text">
        <p className="history-date">{date}</p>
        <p className="history-detail">{detail}</p>
      </div>
    </article>
  )
}

export default HealthHistory;