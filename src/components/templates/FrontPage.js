import { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import NewsItem from "../molecules/NewsItem";

const FrontPage = (props) => {
  console.log(props);
  const [items, setItems] = useState(props.hits);
  const [currentPage, setCurrentPage] = useState(0);
  const getPageItems = async () => {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?page=${currentPage + 1}`
    );
    const json = await res.json();
    setItems(items.concat(json.hits));
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="container">
      <Head>
        <title>Hacker news</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="contains all the latest hacking related news"
        />
      </Head>
      <main>
        <ul className="news-list">
          {items.map((item) => (
            <NewsItem key={item.objectID} item={item} />
          ))}
        </ul>
        <div className="load-more" onClick={getPageItems}>
          Load more
        </div>
      </main>

      <style jsx>{`
        ul {
          margin-bottom: 20px;
        }

        .load-more {
          cursor: pointer;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

FrontPage.getInitialProps = async (ctx) => {
  const res = await fetch("https://hn.algolia.com/api/v1/search?page=0");
  const json = await res.json();
  return { hits: json.hits };
};
export default FrontPage;
