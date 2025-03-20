import React, { useEffect, useState } from "react";
import "./Home.css"; // Tạo file News.css để thêm CSS

function News() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news") // Lấy dữ liệu từ JSON Server
      .then((response) => response.json())
      .then((data) => setNewsList(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="news-title">News Category</h2>
      <div className="row">
        {newsList.map((news) => (
          <div key={news.id} className="col-md-3">
            <div className="card news-card">
              <img src={news.images} className="card-img-top" alt={news.title} />
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <a href="#" className="news-link">Read more...</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
