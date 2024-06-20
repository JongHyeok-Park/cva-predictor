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
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="birthdate">생년월일</label>
          <input className="survey-form-date" type="date" id="brithdate" name="birthdate" required />
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="height">키</label>
          <input className="survey-form-number" type="number" id="height" name="height" step="0.1" required />
          <span className="survey-form-unit">cm</span>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="weight">몸무게</label>
          <input className="survey-form-number" type="number" id="weight" name="weight" step="0.1" required />
          <span className="survey-form-unit">kg</span>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">성별</h3>
          <label htmlFor="male">
            <input className="survey-form-radio" type="radio" id="male" name="gender" value="male" required />
            남성
          </label>
          <label htmlFor="female">
            <input className="survey-form-radio" type="radio" id="female" name="gender" value="female" required />
            여성
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">결혼 여부</h3>
          <label htmlFor="solo-yes">
            <input className="survey-form-radio" type="radio" id="solo-yes" name="solo" value="true" required />
            미혼
          </label>
          <label htmlFor="solo-no">
            <input className="survey-form-radio" type="radio" id="solo-no" name="solo" value="false" required />
            기혼
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">거주 지역</h3>
          <label htmlFor="city-yes">
            <input className="survey-form-radio" type="radio" id="city-yes" name="city" value="true" required />
            도심
          </label>
          <label htmlFor="city-no">
            <input className="survey-form-radio" type="radio" id="city-no" name="city" value="false" required />
            시외
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">고혈압</h3>
          <label htmlFor="highBloodPressure-yes">
            <input className="survey-form-radio" type="radio" id="highBloodPressure-yes" name="highBloodPressure" value="true" required />
            있음
          </label>
          <label htmlFor="highBloodPressure-no">
            <input className="survey-form-radio" type="radio" id="highBloodPressure-no" name="highBloodPressure" value="false" required />
            없음
          </label>
        </div>
        <div className="survey-form-group">
          <h3 className="survey-form-head">심장 질환</h3>
          <label htmlFor="heartDisease-yes">
            <input className="survey-form-radio" type="radio" id="heartDisease-yes" name="heartDisease" value="true" required />
            있음
          </label>
          <label htmlFor="heartDisease-no">
              <input className="survey-form-radio" type="radio" id="heartDisease-no" name="heartDisease" value="false" required />
            없음
          </label>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="glucose">혈당</label>
          <input className="survey-form-number" type="number" id="glucose" name="glucose" step="0.1" required />
          <span className="survey-form-unit">mg/dl</span>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="smoke_status">흡연</label>
          <select className="survey-form-select">
            <option className="survey-form-option" value="formerly_smoked">핀 적 있음</option>
            <option className="survey-form-option" value="never_smoked">핀 적 없음</option>
            <option className="survey-form-option" value="smokes">피고 있음</option>
            <option className="survey-form-option" value="Unknown">모름</option>
          </select>
        </div>
        <div className="survey-form-group">
          <label className="survey-form-label" htmlFor="work_type">직업 유형</label>
          <select className="survey-form-select">
            <option className="survey-form-option" value="Private">사기업</option>
            <option className="survey-form-option" value="Self-employed">자영업</option>
            <option className="survey-form-option" value="children">학생</option>
            <option className="survey-form-option" value="Govt_job">공무직</option>
            <option className="survey-form-option" value="Never_worked">무직</option>
          </select>
        </div>
        <div className="survey-form-group">
          <input className="survey-form-checkbox" type="checkbox" id="acceptPolicy" name="acceptPolicy" />
          <label className="survey-policy-text" htmlFor="acceptPolicy">개인정보 수집·이용에 동의합니다.</label>
        </div>
        <button type="submit" className="survey-form-button">저장</button>
      </form>
      <img className="survey-bottom-image" src={bottomImage} alt="하단 디자인 이미지" />
    </main>
  )
}

export default Survey;