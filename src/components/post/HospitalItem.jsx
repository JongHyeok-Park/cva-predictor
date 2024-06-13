import './HospitalItem.css';
import { useEffect, useState } from "react";
import { getPlaceInfoApi } from "../../api/kakaoMapApi";

function HospitalItem(props) {
  const name = '경북대학교 병원';
  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    getPlaceInfoApi(name)
      .then((data) => {
        setPlaceId(data.documents[0]?.id);
      })
      .catch((error) => {
        console.error(error.message);
      })
  })

  return (
    <article className="hospital-item">
      <div className="hospital-item-type-icon">
        <span className="hospital-type">종합병원</span>
      </div>
      <div className="hospital-item-info">
        <div className="hospital-item-info-main">
          <h4 className="hospital-name">{name}</h4>
          <span className="hospital-item-distance">230m</span>
        </div>
        <div className="hospital-item-info-secondary">
          <p className="hospital-item-address">대구광역시 중구 동덕로 130</p>
          <a className="hospital-item-map-link" href={`https://map.kakao.com/link/map/${placeId}`} target="_blank" rel="noreferrer">지도 보기 &gt;</a>
        </div>
      </div>
    </article>
  )
}

export default HospitalItem;