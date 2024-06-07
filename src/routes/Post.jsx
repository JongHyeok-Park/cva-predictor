import { Link } from 'react-router-dom';
import backIcon from '../assets/image/back_icon.png';
import './Post.css';

function Post(props) {
  return (
    <main className="post">
      <Link id="post-back-btn" to="/">
        <img src={backIcon} alt="back-icon" />
      </Link>
      <figure className="post-cover-image-wrapper">
        {
          props?.imagePath ? <img src={props.imagePath} alt="post-cover" /> : null
        }
      </figure>
      <header className="post-header">
        <h2 className="post-header-title">유산소 운동으로 심장을 건강하게!</h2>
        <div className="post-header-subinfo">
          <span>한승규</span>
          <span>2024. 04. 30.</span>
        </div>
      </header>
      <section className="post-content-section">
        <p>
          유산소 운동은 무산소 운동의 반대말로 뜻은 에너지를 산소 대사를 통해 얻는 지속적인 힘을 내어야 하는 운동을 말한다. 
          즉, 지방과 글리코겐을 완전연소 시킬 수 있는 강도로 행해지는 운동을 의미한다. 일반적으로 많은 산소를 대사할 수 있는 대근육을 사용한다.
           지방 연소에 효과가 크기 때문에 다이어트에 많이 수행한다. 또한 심폐지구력 향상에 큰 효과가 있다.
        </p>
        <figure className="post-content-image-wrapper">
          <img src="" alt="" className="post-content-image" />
        </figure>
        <p>
          근육은 지방과 글리코젠 등의 분해를 통해 에너지를 얻는다. 지방과 글리코겐은 불완전연소 될 경우 보다 완전연소될 때 신체가 즉시 가용할 수 있는 에너지원(ATP)을 더 많이 만들어내기에,
          인체는 여력만 된다면 완전연소를 선호한다. 이 때 완전연소를 위해서는 호흡과정의 최종 전자수용체로 산소가 필요하다. 
          따라서 최대 산소 섭취 능력 이내의 운동에서는 운동량 대비 체내 산소량이 충분하기 때문에 지방과 글리코겐이 산소를 이용하여 완전히 연소된다. 
          이것이 "유"산소 운동인 이유이다.
        </p>
        <p>
        인체의 근육은 지방을 통해 에너지를 얻는 것을 선호한다. 하지만 무산소 운동과 같은 높은 강도의 짧은 운동에서는 양은 적지만 바로 사용할 수 있고 분해가 빨라 단기간에 많은 양의 에너지 
        조달이 용이한 크레아틴인산이나 근글리코겐이 에너지원으로 쓰인다. 반면 상대적으로 저강도로 지속되는 운동에서는 고갈되는 근글리코겐을 보전하기 위하여, 비록 근세포에서 멀리 떨어져 있어서 
        빨리 끌어다 쓰기는 어려우나 단위질량당 에너지가 크고 체내에 매우 풍부한 물질인 지방을 주된 에너지원으로 쓰기 시작한다.
        </p>
      </section>
    </main>
  )
}

export default Post;