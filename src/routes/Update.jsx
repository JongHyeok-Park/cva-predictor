import './Update.css';
import topImage from "../assets/image/survey_top.png";
import bottomImage from "../assets/image/survey_bottom.png";

function Update(props) {
  return (
    <main className="update">
      <img className="update-top-image" src={topImage} alt="상단 디자인 이미지"/>
      <h1 className="update-title">사용자 정보 갱신</h1>
      <p className="update-text">뇌졸중 발병률 진단을 위해<br />당신의 정보를 입력해주세요.</p>
      <form className="update-form">
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="name">이름</label>
          <input className="update-form-text" type="text" id="username" name="username" required />
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="birthdate">생년월일</label>
          <input className="update-form-date" type="date" id="brithdate" name="birthdate" required />
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="height">키</label>
          <input className="update-form-number" type="number" id="height" name="height" step="0.1" required />
          <span className="update-form-unit">cm</span>
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="weight">몸무게</label>
          <input className="update-form-number" type="number" id="weight" name="weight" step="0.1" required />
          <span className="update-form-unit">kg</span>
        </div>
        <div className="update-form-group">
          <h3 className="update-form-head">성별</h3>
          <label htmlFor="male">
            <input className="update-form-radio" type="radio" id="male" name="gender" value="male" required />
            남성
          </label>
          <label htmlFor="female">
            <input className="update-form-radio" type="radio" id="female" name="gender" value="female" required />
            여성
          </label>
        </div>
        <div className="update-form-group">
          <h3 className="update-form-head">결혼 여부</h3>
          <label htmlFor="solo-yes">
            <input className="update-form-radio" type="radio" id="solo-yes" name="solo" value="true" required />
            미혼
          </label>
          <label htmlFor="solo-no">
            <input className="update-form-radio" type="radio" id="solo-no" name="solo" value="false" required />
            기혼
          </label>
        </div>
        <div className="update-form-group">
          <h3 className="update-form-head">거주 지역</h3>
          <label htmlFor="city-yes">
            <input className="update-form-radio" type="radio" id="city-yes" name="city" value="true" required />
            도심
          </label>
          <label htmlFor="city-no">
            <input className="update-form-radio" type="radio" id="city-no" name="city" value="false" required />
            시외
          </label>
        </div>
        <div className="update-form-group">
          <h3 className="update-form-head">고혈압</h3>
          <label htmlFor="highBloodPressure-yes">
            <input className="update-form-radio" type="radio" id="highBloodPressure-yes" name="highBloodPressure" value="true" required />
            있음
          </label>
          <label htmlFor="highBloodPressure-no">
            <input className="update-form-radio" type="radio" id="highBloodPressure-no" name="highBloodPressure" value="false" required />
            없음
          </label>
        </div>
        <div className="update-form-group">
          <h3 className="update-form-head">심장 질환</h3>
          <label htmlFor="heartDisease-yes">
            <input className="update-form-radio" type="radio" id="heartDisease-yes" name="heartDisease" value="true" required />
            있음
          </label>
          <label htmlFor="heartDisease-no">
              <input className="update-form-radio" type="radio" id="heartDisease-no" name="heartDisease" value="false" required />
            없음
          </label>
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="glucose">혈당</label>
          <input className="update-form-number" type="number" id="glucose" name="glucose" step="0.1" required />
          <span className="update-form-unit">mg/dl</span>
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="smoke_status">흡연</label>
          <select className="update-form-select">
            <option className="update-form-option" value="formerly_smoked">핀 적 있음</option>
            <option className="update-form-option" value="never_smoked">핀 적 없음</option>
            <option className="update-form-option" value="smokes">피고 있음</option>
            <option className="update-form-option" value="Unknown">모름</option>
          </select>
        </div>
        <div className="update-form-group">
          <label className="update-form-label" htmlFor="work_type">직업 유형</label>
          <select className="update-form-select">
            <option className="update-form-option" value="Private">사기업</option>
            <option className="update-form-option" value="Self-employed">자영업</option>
            <option className="update-form-option" value="children">학생</option>
            <option className="update-form-option" value="Govt_job">공무직</option>
            <option className="update-form-option" value="Never_worked">무직</option>
          </select>
        </div>
        <div className="update-form-button">
          <button type="reset" className="update-form-reset">취소</button>
          <button type="submit" className="update-form-submit">저장</button>
        </div>
      </form>
      <img className="update-bottom-image" src={bottomImage} alt="하단 디자인 이미지" />
    </main>
  )
}

export default Update;