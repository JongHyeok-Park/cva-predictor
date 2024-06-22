import './HospitalItem.css';
import { Link } from 'react-router-dom';

function HospitalItem(props) {

  return (
    <article className="hospital-item">
      <div className="hospital-item-type-icon">
        <span className="hospital-type">종합병원</span>
      </div>
      <div className="hospital-item-info">
        <div className="hospital-item-info-main">
          <h4 className="hospital-name">{props.name}</h4>
          <span className="hospital-item-distance">{props.contact}</span>
        </div>
        <div className="hospital-item-info-secondary">
          <p className="hospital-item-address">{props.address}</p>
          <Link to={`/map?lat=${props.latitude}&lng=${props.longtitude}`} className="hospital-item-map-link">지도 보기 &gt;</Link>
        </div>
      </div>
    </article>
  )
}

export default HospitalItem;