import { Link, useParams } from 'react-router-dom';
import backIcon from '../assets/image/back_icon.png';
import './Post.css';
import { useEffect, useState } from 'react';
import { getHealthInfo } from '../api/healthColumnApi';

function Post(props) {
  const params = useParams();
  const [column, setColumn] = useState();

  useEffect(() => {
    getHealthInfo(params.id)
    .then((data) => {
      let text = '';
      data.content.split('\n').forEach((v)=>{
          text += `<p>${v}</p>`
      });
      document.getElementById('post-content').innerHTML = text;
      setColumn(data);
    })
    .catch((error) => {
      alert(error.message);
    })
  }, [])

  return (
    <main className="post">
      <Link id="post-back-btn" to="/">
        <img src={backIcon} alt="back-icon" />
      </Link>
      <figure className="post-cover-image-wrapper">
        {
          column?.photo ? <img src={column.photo} alt="post-cover" /> : null
        }
      </figure>
      <header className="post-header">
        <h2 className="post-header-title">{column?.title}</h2>
        <div className="post-header-subinfo">
          <a href={column?.url} target='_blank'>기사 링크</a>
        </div>
      </header>
      <section id="post-content" className="post-content-section">
      </section>
    </main>
  )
}

export default Post;