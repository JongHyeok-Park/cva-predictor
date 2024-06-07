import './ColumnPost.css';
import { Link } from "react-router-dom";

function ColumnPost(props) {
  return (
    <article className="column-post">
      <Link to={"/post/" + props.id}>
        <figure className="column-post-image">
          {
            props?.imagePath ? <img src={props.imagePath} alt="column" /> : null
          }
        </figure>
        <div className="column-post-info">
          <h4 className="column-post-info-title">
            꾸준한 유산소 운동으로 심장을 건강하게!
          </h4>
          <p className="column-post-info-content">
            유산소 운동은 무산소 운동의 반대말로 뜻은 에너지를 산소 대사를 통해 얻는 지속적인 힘을 내야 하는 운동을 말한다.
            즉, 지방과 글리코겐을 완전연소 시킬 수 있는 강도로 행해지는 운동을 의미한다. 일반적으로 많은 산소를...
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ColumnPost;