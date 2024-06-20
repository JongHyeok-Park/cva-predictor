import { useState } from "react";
import HospitalItem from "../components/post/HospitalItem";
import Top from "../components/top/Top";
import './Hospital.css';
import SearchModal from "../components/modal/SearchModal";
import useAddressStore from "../store/AddressStore";

function Hospital(props) {
  const [showModal, setShowModal] = useState(false);
  const address = useAddressStore((state) => state.address);


  const onClickLocationBtn = () => {
    setShowModal(true);
  }

  return (
    <main className="hospital">
      <Top title="주변 병원" />
      <section className="hospital-address-section">
        <div className="hospital-address-wrapper">
          <span className="hospital-current-location-title">현재 위치</span>
          <span className="hospital-current-location">
            {
              address ? address.address_name : "대구광역시 북구 대학로 80"
            }  
          </span>
          <button type="button" className="hospital-current-location-btn" onClick={onClickLocationBtn}>직접 입력 &gt;</button>
        </div>
      </section>
      <section className="hospital-list-section">
        <HospitalItem />
        <HospitalItem />
        <HospitalItem />
      </section>
      {
        showModal ? <SearchModal setShowModal={setShowModal} /> : null
      }
    </main>
  )
}

export default Hospital; 