import useAddressStore from '../../store/AddressStore';
import './AddressItem.css';

function AddressItem(props) {
  const setAddress = useAddressStore((state) => state.setAddress);

  return (
    <li className="address-item" onClick={() => {
      console.log(props.address);
      setAddress(props.address);
      props.setShowModal(false);
    }}>
      {props.address.address_name}
    </li>
  )
}

export default AddressItem;