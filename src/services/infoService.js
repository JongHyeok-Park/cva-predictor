import { getInfo, postInfo, putInfo } from "../api/infoApi";

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

const modifyUserInfo = (name, birthday, gender) => {
  let newUserInfo = {
    name: name,
    birthday: birthday,
    gender: gender
  };

  let sendData = JSON.stringify(newUserInfo);

  putInfo(sendData)
    .catch((error) => {
      alert(error.message);
    })
}

const getUserInfo = (setter) => {
  getInfo()
    .then((data) => {
      setter(data);
    })
    .catch((error) => {
      alert(error.message);
    })
}

export { postUserInfo, postUserInfo, getUserInfo };