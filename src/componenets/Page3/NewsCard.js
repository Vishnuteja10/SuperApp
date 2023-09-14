import { useEffect, useState } from "react";
import "./NewsCard.css";

function NewsCard() {
  const newsAPIkey = "a360668d8d86492384761fb890481480";

  const [newsData, setNewsData] = useState("");

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=a360668d8d86492384761fb890481480"
        );
        if (response.ok) {
          const {
            articles: {
              0: { content, description, publishedAt, title, urlToImage },
            },
          } = await response.json();

          setNewsData({ content, description, publishedAt, title, urlToImage });

          console.log("content is :", content);
          console.log("description is:", description);
          console.log("Published at :", publishedAt);
          console.log("title is :", title);
          console.log("url of image", urlToImage);
        } else {
          console.log("Error", response.statusText);
        }
      } catch (error) {
        console.log("error is ", error);
      }
    };
    fetchNewsData();
  });

  const { content, description, publishedAt, title, urlToImage } =
    newsData || {};

  const style = {
    backgroundImage: `url(${urlToImage})`,
  };

  return (
    <div className="newsCard">
      <div className="newsImg">
        <div className="imgContainer" style={style}>
          <p className="title">{title}</p>
          <p className="published">{publishedAt}</p>
        </div>
      </div>
      <div className="newsText">{content}</div>
    </div>
  );
}

export default NewsCard;
