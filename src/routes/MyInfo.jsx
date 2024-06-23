import './MyInfo.css';
import { Link } from "react-router-dom";
import Top from "../components/top/Top";
import HelathHistory from "../components/history/HealthHistory";
import useUserInfo from '../hooks/useUserInfo';
import useHealthInfoList from '../hooks/useHealthInfoList';
import useStrokeInfoList from '../hooks/useStrokeInfoList';
import { calcStrokeToText } from '../services/strokeService';

function MyInfo(props) {
  const [userInfo] = useUserInfo();
  const [healthInfoList] = useHealthInfoList();
  const strokeInfoList = useStrokeInfoList();

  const getAge = (birthday) => {
    const thisDate = new Date
    const birthDate = new Date(birthday);
    const thisYear = thisDate.getFullYear();
    const birthYear = birthDate.getFullYear();

    return thisYear - birthYear + 1;
  }

  return (
    <main className="myinfo">
      <Top title="내 정보" />
      <section className="myinfo-current-section">
        <h1>{userInfo.name}<span className="myinfo-nim"> 님</span></h1>
        <div className="myinfo-date-container">
          <p className="myinfo-current-title">현재 건강 정보</p>
          <p className="myinfo-date">{healthInfoList[0]?.createdAt}</p>
          <Link className="myinfo-update" to="/update">수정 &gt;</Link>
        </div>
        <table className="myinfo-table">
          <tbody>
            <tr>
              <th>나이</th>
              <td>{getAge(userInfo?.birthday)}세</td>
              <th>고혈압</th>
              <td>{healthInfoList[0]?.highBloodPressure ? '있음' : '없음'}</td>
            </tr>
            <tr>
              <th>키</th>
              <td>{healthInfoList[0]?.height}cm</td>
              <th>심장 질환</th>
              <td>{healthInfoList[0]?.heartDisease ? '있음' : '없음'}</td>
            </tr>
            <tr>
              <th>몸무게</th>
              <td>{healthInfoList[0]?.weight}kg</td>
              <th>거주지</th>
              <td>{healthInfoList[0]?.city ? '도심' : '시골'}</td>
            </tr>
            <tr>
              <th>성별</th>
              <td>{userInfo.gender ? '남성' : '여성'}</td>
              <th>직업 유형</th>
              <td>{healthInfoList[0]?.job}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr className="myinfo-divider"></hr>
      <section className="myinfo-history-section">
        <p className="myinfo-history-title">나의 건강 기록</p>
        {
          healthInfoList.length > 1 ? healthInfoList.map((item, i) => {
            if (i > 0) {
              return <HelathHistory
                key={i}
                mark={calcStrokeToText(strokeInfoList.find((strokeItem) => strokeItem.id === item.id))}
                date={item.createdAt}
                detail={item.height + 'cm ' + item.weight + 'kg ' + '고혈압 ' + (item.highBloodPressure ? '있음 ' : '없음 ') +  '심장질환 ' + 
                (item.heartDisease ? '있음 ' : '없음 ') + (item.city ? '도심 거주 ' : '시외 거주 ') + item.job}
              />
            }
          }) : "기록이 없습니다."
        }
      </section>
    </main>
  )
}

export default MyInfo;