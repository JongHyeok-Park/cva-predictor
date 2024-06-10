import { postInfo } from "../api/infoApi";

const postUserInfo = (name, birthday, gender) => {
  let userInfo = {
    name: name,
    birthday: birthday,
    gender: gender
  };

  let sendData = JSON.stringify(userInfo);

  postInfo(sendData)
    .catch((error) => {
      alert(error.message);
    })
}