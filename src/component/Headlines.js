import React, { Component } from 'react';
import './headlines.css';
import Newsheadline from './newsheadline.js';
import axios from 'axios';

export default class Headlines extends Component {
  constructor(props){
    super(props);
    this.apikey=process.env.REACT_APP_NEWS_API;
    this.state={
        data:[],
        comlen:0
    };
  }
  componentDidMount(){
    axios.get(` https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apikey}`).then(res=>{
        const newsdata=res.data.articles;
        let updatenewsdata=newsdata.filter(article=>article.title!=="[Removed]");
        var text=0;
        for(var i=0;i<updatenewsdata.length;i++){
            const valint=updatenewsdata[i].title.length;
            text=text+(valint % 40)+valint
        }
        const text_div=text / 1000;
        text=text+text_div*(100/2);

        console.log(text)
        this.setState({
            data:updatenewsdata,
            comlen:text
        });
        //console.log(updatenewsdata);
        
    }).catch(error=>{
        console.error('Error fetching the news:', error); 
    })
  
}
  render() {

    return (
        <div className="Headline-components" style={{ height: this.state.comlen && this.state.comlen > 0 ? `${this.state.comlen}px` : '1000px' }}>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-md-m">
        <a className="navbar-brand-name" href="./">Top Headlines</a> 
        </div>
        </nav>
        <div className="text-headlines">
        {  
            this.state.data.length > 0 
            ? this.state.data.map((datanews, index)=>

                <Newsheadline key={index} newsdata={datanews}/>
            )
            : <p>Loading news...</p> // Show a loading message while data is being fetched
         
           
         }
         
        </div>
     </div>
    )
  }
}
