import './Top.css';
import logoImage from '../../assets/image/logo_mini.png'

function Top({title}) {
  return (
    <article className="top-article">
      <img className="top-logo" src={logoImage} alt="로고" />
      <p className="top-text">{title}</p>
    </article>
  )
}

export default Top;