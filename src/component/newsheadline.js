import React, { Component } from 'react'
import './newsheadlines.css'
export default class newsheadline extends Component {
  render() {
    //const {title,source}=this.props.newsdata
    
    return (
      <div className="newsheadlines">
        <p>
        <a className="textshows" href={this.props.newsdata.url} target="_blank" rel="noopener noreferrer">
                 {this.props.newsdata.title}
                      </a>
                      <hr class="new4"/>
        </p>
      </div>
    )
  }
}
