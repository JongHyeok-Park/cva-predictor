import './Survey.css';
import topImage from "../assets/image/survey_top.png";
import bottomImage from "../assets/image/survey_bottom.png";

function Survey(props) {
  return (
    <main className="survey">
      <img className="survey-top-image" src={topImage} alt="상단 디자인 이미지"/>
      <h1 className="survey-title">사용자 정보 입력</h1>
      <p className="survey-text">뇌졸중 발병률 진단을 위해<br />당신의 정보를 입력해주세요.</p>
    </main>
  )
}

export default Survey;