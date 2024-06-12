import { useEffect, useState } from 'react';
import './SearchModal.css';
import { getAddressApi } from '../../api/kakaoMapApi';
import AddressItem from '../post/AddressItem';

function SearchModal(props) {
  const [input, setInput] = useState();
  const [addressList, setAddressList] = useState([]);
  
  useEffect(() => {
    if (input?.length > 0) {
      getAddressApi(input)
      .then((data) => {
        setAddressList(data.documents);
      })
      .catch((error) => {
        console.error(error.message);
      })
    }
  }, [input])

  return (
    <section className="search-modal">
      <h4>주소를 입력해주세요.</h4>
      <input type="text" onChange={(e) => {
        setInput(e.target.value)
      }}/>
      {
        addressList.length > 0 ? (
          <ul className='address-list-wrapper'>
            {
              addressList.map((item, i) => {
                return (
                  <AddressItem address={item} setShowModal={props.setShowModal} key={i} />
                )
              })
            }
          </ul>
        ) : null
      }
      <button type="button" onClick={() => {
        props.setShowModal(false);
      }}>취소</button>
    </section>
  )
}

export default SearchModal;