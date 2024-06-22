import { useEffect, useState } from "react";
import HospitalItem from "../components/post/HospitalItem";
import Top from "../components/top/Top";
import './Hospital.css';
import SearchModal from "../components/modal/SearchModal";
import useAddressStore from "../store/AddressStore";
import { getHospital } from "../api/hospitalApi";

function Hospital(props) {
  const [showModal, setShowModal] = useState(false);
  const address = useAddressStore((state) => state.address);
  const [hospitalList, setHospitalList] = useState([]);


  const onClickLocationBtn = () => {
    setShowModal(true);
  }

  useEffect(() => {
    if (address) {
      getHospital(address.x, address.y)
        .then((data) => {
          let newHospitalList = hospitalList.concat(data);
          setHospitalList(newHospitalList);
        })
        .catch((error) => {
          alert(error.message);
        })
    }
  }, [address])

  return (
    <main className="hospital">
      <Top title="주변 병원" />
      <section className="hospital-address-section">
        <div className="hospital-address-wrapper">
          <span className="hospital-current-location-title">현재 위치</span>
          <span className="hospital-current-location">
            {
              address?.address_name ? address.address_name : "주소를 입력해주세요."
            }  
          </span>
          <button type="button" className="hospital-current-location-btn" onClick={onClickLocationBtn}>직접 입력 &gt;</button>
        </div>
      </section>
      <section className="hospital-list-section">
        {
          hospitalList.length > 0 ? hospitalList.map((item, i) => {
            return <HospitalItem 
                      key={i}
                      latitude={item.latitude} 
                      longtitude={item.longitude} 
                      name={item.name} 
                      contact={item.contact} 
                      address={item.address} />
          }) : "주변 병원 결과가 없습니다."
        }
      </section>
      {
        showModal ? <SearchModal setShowModal={setShowModal} /> : null
      }
    </main>
  )
}

export default Hospital; 