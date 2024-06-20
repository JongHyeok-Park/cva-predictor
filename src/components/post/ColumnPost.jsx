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
            {props.title}
          </h4>
          <p className="column-post-info-content">
            {props.content}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ColumnPost;