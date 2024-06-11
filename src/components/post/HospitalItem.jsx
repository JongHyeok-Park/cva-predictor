import { Link } from "react-router-dom";
import './HospitalItem.css';

function HospitalItem(props) {
  return (
    <article className="hospital-item">
      <div className="hospital-item-type-icon">
        <span className="hospital-type">종합병원</span>
      </div>
      <div className="hospital-item-info">
        <div className="hospital-item-info-main">
          <h4 className="hospital-name">경북대학교 병원</h4>
          <span className="hospital-item-distance">230m</span>
        </div>
        <div className="hospital-item-info-secondary">
          <p className="hospital-item-address">대구광역시 중구 동덕로 130</p>
          <Link className="hospital-item-map-link">지도 보기 &gt;</Link>
        </div>
      </div>
    </article>
  )
}

export default HospitalItem;