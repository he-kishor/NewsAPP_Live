import React from 'react';
import './articlebox.css';
export default function Articlebox(props) {
  return (
    <div>
      
    <div className="card" style={{width: '46.5rem'}}>
      <img className="card-img-top" src={props.newarticle.urlToImage} class="card-img-top" alt="quadimg"
       width="100" height="400"  onError={(e) => { e.target.onerror = null; e.target.src = '/pmo-visit-singapore.jpg'; }} />
      <div className="card-body">
        <h5 className="card-title">{props.newarticle.title}</h5>
        <p className="card-text">{props.newarticle.content} <a className="articleboxurlheader" href={props.newarticle.url} > read more..</a></p>
      </div>
    </div>
    </div>
  )
}
