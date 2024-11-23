
const sample =require('axios');
axios.get(` https://newsapi.org/v2/top-headlines?country=us&apiKey=aeae2366fc7f422baff77890ec1e1b4a`).then((res)=>{
    const newsdata=res.data;
    
    console.log(newsdata);
});