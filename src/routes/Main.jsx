import './Main.css';
import ColumnPost from "../components/post/ColumnPost";
import { useEffect, useState } from 'react';
import { getHealthInfoList } from '../api/healthApi';
import { getUserInfo } from '../api/authApi';
import { getStroke } from '../api/strokeApi';

function Main(props) {
  const [healthInfo, setHealthInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [strokeInfo, setStrokeInfo] = useState({});
  const [factorList, setFactorList] = useState([]);
  
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
  }, [strokeInfo]);

  const formatFactorList = (stroke) => {
    let factorList = [];

    if (stroke.isWeight) {
      factorList.push("높은 체중");
    }
    if (stroke.isAge) {
      factorList.push("높은 연령대");
    }
    if (stroke.isBloodPressure) {
      factorList.push("높은 혈압");
    }
    if (stroke.isHeartDisease) {
      factorList.push("심혈관계 질환 보유");
    }
    
    return factorList;
  }

  return (
    <main className="main">
      <section className="main-percentage-section">
        <p><span className="main-user-name">{userInfo.name}</span>님의 뇌졸중 발병 확률은</p>
        <p><span className="main-percentage">{(strokeInfo.probability * 100).toFixed(0)}</span>% 입니다.</p>
      </section>
      <section className="main-status-section">
        <div className="main-status-circle">
          <h1 className="main-status">
            주의
          </h1>
          <h1 className="main-status-inner">주의</h1>
          <div className="main-factor-wrapper">
            <h3 className="main-factor-title">주요 요인</h3>
            <ul className="main-factor-list">
              {
                factorList.map((item, i) => {
                  return <li className="main-factor-item" key={i}>{item}</li>
                })
              }
            </ul>
          </div>
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
      <div className="main-background"></div>
    </main>
  )
}

export default Main;