import './Survey.css';
import topImage from "../assets/image/survey_top.png";
import bottomImage from "../assets/image/survey_bottom.png";

function Survey(props) {
  return (
    <main className="survey">
      <img className="survey-top-image" src={topImage} alt="상단 디자인 이미지"/>
      <h1 className="survey-title">사용자 정보 입력</h1>
      <p className="survey-text">뇌졸중 발병률 진단을 위해<br />당신의 정보를 입력해주세요.</p>
      <form className="survey-form">
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="name">이름</label>
          <input className="survey-form-text" type="text" id="username" name="username" required />
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="birthdate">생년월일</label>
          <input className="survey-form-date" type="date" id="brithdate" name="birthdate" required />
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="height">키</label>
          <input className="survey-form-number" type="number" id="height" name="height" required />
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="weight">몸무게</label>
          <input className="survey-form-number" type="number" id="weight" name="weight" required />
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="gender">성별</label>
          <input className="survey-form-radio" type="radio" id="gender" name="gender" value="male" required />남성
          <input classname="survey-form-radio" type="radio" id="gender" name="gender" value="female" required />여성
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="solo">결혼 여부</label>
          <input className="survey-form-radio" type="radio" id="solo" name="solo" value="true" required />미혼
          <input classname="survey-form-radio" type="radio" id="solo" name="solo" value="false" required />기혼
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="city">거주 지역</label>
          <input className="survey-form-radio" type="radio" id="city" name="city" value="true" required />도심
          <input classname="survey-form-radio" type="radio" id="city" name="city" value="false" required />시외
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="highBloodPressure">고혈압</label>
          <input className="survey-form-radio" type="radio" id="highBloodPressure" name="highBloodPressure" value="true" required />있음
          <input classname="survey-form-radio" type="radio" id="highBloodPressure" name="highBloodPressure" value="false" required />없음
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="heartDisease">심장 질환</label>
          <input className="survey-form-radio" type="radio" id="heartDisease" name="heartDisease" value="true" required />있음
          <input classname="survey-form-radio" type="radio" id="heartDisease" name="heartDisease" value="false" required />없음
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="glucose">혈당</label>
          <input className="survey-form-number" type="number" id="glucose" name="glucose" required />
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="smoke_status">흡연</label>
          <select className="survey-form-select">
            <option className="survey-form-option" value="formerly_smoked">핀 적 있음</option>
            <option className="survey-form-option" value="never_smoked">핀 적 없음</option>
            <option className="survey-form-option" value="smokes">피고 있음</option>
            <option className="survey-form-option" value="Unknown">모름</option>
          </select>
        </div>
        <div className="survey-form">
          <label className="survey-form-label" htmlFor="work_type">직업 유형</label>
          <select className="survey-form-select">
            <option className="survey-form-option" value="Private">사기업</option>
            <option className="survey-form-option" value="Self-employed">자영업</option>
            <option className="survey-form-option" value="children">학생</option>
            <option className="survey-form-option" value="Govt_job">공무직</option>
            <option className="survey-form-option" value="Never_worked">무직</option>
          </select>
        </div>
      </form>
    </main>
  )
}

export default Survey;