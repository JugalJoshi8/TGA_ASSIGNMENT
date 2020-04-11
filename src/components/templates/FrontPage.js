import Head from "next/head";
import fetch from "isomorphic-unfetch";
import NewsItem from "../molecules/NewsItem";

const FrontPage = (props) => {
  console.log(props);
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
          {props.hits.map((item) => (
            <NewsItem key={item.objectID} item={item} />
          ))}
        </ul>
      </main>

      <style jsx>{``}</style>
    </div>
  );
};

FrontPage.getInitialProps = async (ctx) => {
  const res = await fetch(
    "http://hn.algolia.com/api/v1/search?tags=front_page"
  );
  const json = await res.json();
  return { hits: json.hits };
};
export default FrontPage;
