import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsBoard = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
  //     import.meta.env.VITE_API_KEY
  //   }`;
  //   // console.log(url);

  //   fetch(url).then((res) =>
  //     res.json().then((data) => setArticles(data.articles))
  //   );
  // }, [category]);

  useEffect(() => {
    setTimeout(() => {
      apiCall();
    }, 2000);
  }, [category]);

  const apiCall = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setArticles(res.data.articles);
      console.log(res.data);
    } catch (error) {
      console.log("api error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "90vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center">
            Latest <span className="badge bg-danger ">News</span>
          </h2>
          {articles &&
            articles.map((news, index) => {
              return (
                <NewsItem
                  key={index}
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
