import './Survey.css';
import topImage from "../assets/image/survey_top.png";
import bottomImage from "../assets/image/survey_bottom.png";
import { useState } from 'react';
import { postUserInfo, putUserInfo } from '../api/authApi';
import { createdDateNow } from '../services/dateService';
import { postHealthInfo } from '../api/healthApi';
import { useNavigate } from 'react-router-dom';

function Survey(props) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [solo, setSolo] = useState();
  const [city, setCity] = useState();
  const [highBloodPressure, setHighBloodPressure] = useState();
  const [heartDisease, setHeartDisease] = useState();
  const [glucose, setGlucose] = useState();
  const [smokeStatus, setSmokeStatus] = useState('formerly_smoked');
  const [workType, setWorkType] = useState('Private');
  const [privacy, setPrivacy] = useState(false);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleChangeBirthday = (e) => {
    console.log(e.target.value);
    setBirthday(e.target.value);
  }

  const handleChangeHeight = (e) => {
    console.log(e.target.value);
    setHeight(e.target.value);
  }

  const handleChangeWeight = (e) => {
    console.log(e.target.value);
    setWeight(e.target.value);
  }

  const handleChangeGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  }

  const handleChangeSolo = (e) => {
    console.log(e.target.value);
    setSolo(e.target.value);
  }

  const handleChangeCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }

  const handleChangeHighBloodPressure = (e) => {
    console.log(e.target.value);
    setHighBloodPressure(e.target.value);
  }

  const handleChangeHeartDisease = (e) => {
    console.log(e.target.value);
    setHeartDisease(e.target.value);
  }

  const handleChangeHeartGlucose = (e) => {
    console.log(e.target.value);
    setGlucose(e.target.value);
  }

  const handleChangeSmokeStatus = (e) => {
    console.log(e.target.value);
    setSmokeStatus(e.target.value);
  }

  const handleChangeWorkType = (e) => {
    console.log(e.target.value);
    setWorkType(e.target.value);
  }

  const handleChangePrivacy = (e) => {
    console.log(!privacy);
    setPrivacy(!privacy)
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    if (!privacy) {
      alert('개인정보 수집·이용에 동의해주세요.');
      return;
    }
    if (!name) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!birthday) {
      alert('생일을 입력해주세요.');
      return;
    }
    if (!height) {
      alert('키를 입력해주세요.');
      return;
    }
    if (!weight) {
      alert('몸무게를 입력해주세요.');
      return;
    }
    if (!gender) {
      alert('성별을 입력해주세요.');
      return;
    }
    if (!solo) {
      alert('결혼 여부를 입력해주세요.');
      return;
    }
    if (!city) {
      alert('거주 지역을 입력해주세요.');
      return;
    }
    if (!highBloodPressure) {
      alert('고혈압 여부를 입력해주세요.');
      return;
    }
    if (!heartDisease) {
      alert('심장 질환 여부를 입력해주세요.');
      return;
    }
    if (!glucose) {
      alert('혈당을 입력해주세요.');
      return;
    }
    if (!smokeStatus) {
      alert('흡연 여부를 입력해주세요.');
      return;
    }
    if (!workType) {
      alert('직업 유형을 입력해주세요.');
      return;
    }

    const inputUserInfo = JSON.stringify({
      name: name,
      birthday: birthday,
      gender: Boolean(gender)
    });

    const inputUserHealth = JSON.stringify({
      createdAt: createdDateNow(),
      height: height,
      weight: weight,
      highBloodPressure: isTrue(highBloodPressure),
      solo: isTrue(solo),
      city: isTrue(city),
      heartDisease: isTrue(heartDisease),
      job: workType,
      avg_glucose_level: glucose,
      smoking_status: smokeStatus
    })
    
    postUserInfo(inputUserInfo)
    .then(() => {
      postHealthInfo(inputUserHealth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      })
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  const isTrue = (str) => {
    return str === 'true';
  }
  

  return (
    <main className="survey">
      <img className="survey-top-image" src={topImage} alt="상단 디자인 이미지"/>
      <h1 className="survey-title">사용자 정보 입력</h1>
      <p className="survey-text">뇌졸중 발병률 진단을 위해<br />당신의 정보를 입력해주세요.</p>
      <form className="survey-form">
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="name">이름</label>
          <input className="survey-form-text" type="text" id="username" name="username" required onChange={handleChangeName} />
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="birthdate">생년월일</label>
          <input className="survey-form-date" type="date" id="brithdate" name="birthdate" required onChange={handleChangeBirthday} />
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="height">키</label>
          <input className="survey-form-number" type="number" id="height" name="height" step="0.1" required onChange={handleChangeHeight} />
          <span className="survey-form-unit">cm</span>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="weight">몸무게</label>
          <input className="survey-form-number" type="number" id="weight" name="weight" step="0.1" required onChange={handleChangeWeight} />
          <span className="survey-form-unit">kg</span>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">성별</h3>
          <label htmlFor="male">
            <input className="survey-form-radio" type="radio" id="male" name="gender" value="true" required onChange={handleChangeGender} />
            남성
          </label>
          <label htmlFor="female">
            <input className="survey-form-radio" type="radio" id="female" name="gender" value="false" required onChange={handleChangeGender} />
            여성
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">결혼 여부</h3>
          <label htmlFor="solo-yes">
            <input className="survey-form-radio" type="radio" id="solo-yes" name="solo" value="true" required  onChange={handleChangeSolo}/>
            미혼
          </label>
          <label htmlFor="solo-no">
            <input className="survey-form-radio" type="radio" id="solo-no" name="solo" value="false" required onChange={handleChangeSolo} />
            기혼
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">거주 지역</h3>
          <label htmlFor="city-yes">
            <input className="survey-form-radio" type="radio" id="city-yes" name="city" value="true" required onClick={handleChangeCity} />
            도심
          </label>
          <label htmlFor="city-no">
            <input className="survey-form-radio" type="radio" id="city-no" name="city" value="false" required onClick={handleChangeCity} />
            시외
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">고혈압</h3>
          <label htmlFor="highBloodPressure-yes">
            <input className="survey-form-radio" type="radio" id="highBloodPressure-yes" name="highBloodPressure" value="true" required 
              onClick={handleChangeHighBloodPressure}/>
            있음
          </label>
          <label htmlFor="highBloodPressure-no">
            <input className="survey-form-radio" type="radio" id="highBloodPressure-no" name="highBloodPressure" value="false" required 
              onClick={handleChangeHighBloodPressure} />
            없음
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">심장 질환</h3>
          <label htmlFor="heartDisease-yes">
            <input className="survey-form-radio" type="radio" id="heartDisease-yes" name="heartDisease" value="true" required
              onChange={handleChangeHighBloodPressure} />
            있음
          </label>
          <label htmlFor="heartDisease-no">
              <input className="survey-form-radio" type="radio" id="heartDisease-no" name="heartDisease" value="false" required
                onChange={handleChangeHeartDisease} />
            없음
          </label>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="glucose">혈당</label>
          <input className="survey-form-number" type="number" id="glucose" name="glucose" step="0.1" required onChange={handleChangeHeartGlucose} />
          <span className="survey-form-unit">mg/dl</span>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="smoke_status">흡연</label>
          <select className="survey-form-select" onChange={handleChangeSmokeStatus}>
            <option className="survey-form-option" value="formerly_smoked">핀 적 있음</option>
            <option className="survey-form-option" value="never_smoked">핀 적 없음</option>
            <option className="survey-form-option" value="smokes">피고 있음</option>
            <option className="survey-form-option" value="Unknown">모름</option>
          </select>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="work_type">직업 유형</label>
          <select className="survey-form-select" onChange={handleChangeWorkType}>
            <option className="survey-form-option" value="Private">사기업</option>
            <option className="survey-form-option" value="Self-employed">자영업</option>
            <option className="survey-form-option" value="children">학생</option>
            <option className="survey-form-option" value="Govt_job">공무직</option>
            <option className="survey-form-option" value="Never_worked">무직</option>
          </select>
        </div>
        <div className="survey-form-group">
          <input className="survey-form-checkbox" type="checkbox" id="acceptPolicy" name="acceptPolicy" onChange={handleChangePrivacy} />
          <label className="survey-policy-text" htmlFor="acceptPolicy">개인정보 수집·이용에 동의합니다.</label>
        </div>
        <button type="submit" className="survey-form-button" onClick={handleSubmitBtn}>저장</button>
      </form>
      <img className="survey-bottom-image" src={bottomImage} alt="하단 디자인 이미지" />
    </main>
  )
}

export default Survey;