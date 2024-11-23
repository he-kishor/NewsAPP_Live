import React, { useEffect, useState, useCallback } from 'react';
import './article.css';
import Articlebox from './articlebox';

export default function Article() {
  const [data, setData] = useState([]);
  const [newsQuery, setNewsQuery] = useState('q=asia&sortBy=popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const apikey=process.env.REACT_APP_NEWS_API;
  const now = new Date();
  now.setDate(now.getDate() - 2);
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const cur_date = `${year}-${month}-${day}`;

  const fetchData = useCallback((query) => {
    fetch(`https://newsapi.org/v2/everything?${query}&language=en&from=${cur_date}&apiKey=${apikey}`)
      .then(response => response.json())
      .then(get_data => {
        const filteredData = get_data.articles.filter(article => (
          article.title !== '[Removed]' && 
          article.description !== '[Removed]' && 
          article.content !== '[Removed]' && 
          article.urlToImage !== '[Removed]'
        ));

        // Clean the content of articles
        const cleanedData = filteredData.map(article => {
          let content = article.content || '';
          let trimmedContent = content.split('...')[0].split('…')[0];
          trimmedContent = trimmedContent.replace(/<[^>]*>/g, ''); // Remove HTML tags
          return { ...article, content: trimmedContent };
        });

        setData(cleanedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [cur_date]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData(newsQuery);
  }, [fetchData, newsQuery]);

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Trigger fetch on search button click
  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      const query = `q=${searchTerm}&language=en&from=${cur_date}`;
      fetchData(query);
    }
  };

  return (
    <div className="article-container">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="button" className="btn btn-warning btn-sm" onClick={handleSearchClick}>
            Search
          </button>
        </form>
        <div className="articlebox-main">
          {data.length > 0 ? (
            data.map((datanews, index) => <Articlebox key={index} newarticle={datanews} />)
          ) : (
            <h1>Loading news...</h1>
          )}
        </div>
      </div>
    </div>
  );
}
