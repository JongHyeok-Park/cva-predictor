import HospitalItem from "../components/post/HospitalItem";
import Top from "../components/top/Top";
import './Hospital.css';

function Hospital(props) {
  return (
    <main className="hospital">
      <Top title="주변 병원" />
      <section className="hospital-address-section">
        <div className="hospital-address-wrapper">
          <span className="hospital-current-location-title">현재 위치</span>
          <span className="hospital-current-location">대구광역시 북구 대학로 80</span>
          <button type="button" className="hospital-current-location-btn">직접 입력 &gt;</button>
        </div>
      </section>
      <section className="hospital-list-section">
        <HospitalItem />
        <HospitalItem />
        <HospitalItem />
      </section>
    </main>
  )
}

export default Hospital; 