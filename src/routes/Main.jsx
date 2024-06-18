import './Main.css';
import ColumnPost from "../components/post/ColumnPost";
import { useEffect, useState } from 'react';
import { getHealthInfoList } from '../api/healthApi';
import { getUserInfo } from '../api/authApi';
import { getStroke } from '../api/strokeApi';
import { calcStrokeToText, formatFactorList } from '../services/strokeService';

function Main(props) {
  const [healthInfo, setHealthInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [strokeInfo, setStrokeInfo] = useState({});
  const [factorList, setFactorList] = useState([]);
  const [result, setResult] = useState('');
  
  useEffect(() => {
    getUserInfo()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        alert(error.message);
      })

    getHealthInfoList(0, 1)
      .then((healthData) => {
        let recentData;
        
        if (healthData.length > 1) {
          recentData = healthData[0];
        } else {
          recentData = healthData;
        }

        setHealthInfo(recentData);
        getStroke(recentData.id)
          .then((strokeData) => {
            setStrokeInfo(strokeData);
          })
      })
      .catch((error) => {
        alert(error.message);
      })
  }, []);

  useEffect(() => {
    setFactorList(formatFactorList(strokeInfo));
    setResult(calcStrokeToText(strokeInfo));
  }, [strokeInfo]);

  return (
    <main className="main">
      <section className="main-percentage-section">
        <p><span className="main-user-name">{userInfo.name}</span>님의 뇌졸중 발병 확률은</p>
        <p><span className="main-percentage">{(strokeInfo.probability * 100).toFixed(0)}</span>% 입니다.</p>
      </section>
      <section className="main-status-section ">
        <div className={"main-status-circle " + (result === '양호' ? 'good' : result === '주의' ? 'caution' : 'danger')}>
          <h1 className="main-status">
            {result}
          </h1>
          <h1 className="main-status-inner">{result}</h1>
        </div>
        <div className="main-factor-wrapper">
            <h3 className={"main-factor-title " + (result === '양호' ? 'good' : result === '주의' ? 'caution' : 'danger')}>주요 요인</h3>
            <ul className="main-factor-list">
              {
                factorList.length > 0 ? factorList.map((item, i) => {
                  return <li className="main-factor-item" key={i}>{item}</li>
                }) : <li className="main-factor-item">요인이 없습니다.</li>
              }
            </ul>
          </div>
      </section>
      <section className="main-column-container">
        <h3 className="main-column-container-title"><span className="main-user-name">{userInfo.name}</span>님에게 추천드리는 조언 칼럼</h3>
        <ColumnPost id={1} />
        <ColumnPost id={2} />
        <ColumnPost id={3} />
        <ColumnPost id={4} />
        <ColumnPost id={5} />
        <ColumnPost id={6} />
        <ColumnPost id={7} />
        <ColumnPost id={8} />
      </section>
      <div className={"main-background " + (result === '양호' ? 'good' : result === '주의' ? 'caution' : 'danger')}></div>
    </main>
  )
}

export default Main;