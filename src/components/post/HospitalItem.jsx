import { Link } from "react-router-dom";
import './HospitalItem.css';
import { useEffect, useState } from "react";
import { getPlaceInfoApi } from "../../api/kakaoMapApi";

function HospitalItem(props) {
  const [lat, lng] = [128.604702568416, 35.8662511316347]
  const name = '경북대학교 병원';
  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    getPlaceInfoApi(name)
      .then((data) => {
        console.log(data.documents);
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
          <a className="hospital-item-map-link" href={`https://map.kakao.com/link/map/${placeId}`} target="_blank">지도 보기 &gt;</a>
          {/* <Link className="hospital-item-map-link" to={`/map?lat=${128.604702568416}&lng=${35.8662511316347}`}>지도 보기 &gt;</Link> */}
        </div>
      </div>
    </article>
  )
}

export default HospitalItem;