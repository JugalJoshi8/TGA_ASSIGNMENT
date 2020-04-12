import { withRouter } from "next/router";

import Link from "next/link";
import fetch from "isomorphic-unfetch";
import NewsItem from "../molecules/NewsItem";

export const FrontPage = ({ router, hits }) => {
  const currentPage = router.query.page || 0;
  const nextPageLink = `/news?page=${parseInt(currentPage) + 1}`;
  return (
    <div className="container">
      <main>
        <ul className="news-list">
          {hits.map((item) => (
            <NewsItem key={item.objectID} item={item} />
          ))}
        </ul>
        <Link
          href={{ pathname: "/", query: { page: parseInt(currentPage) + 1 } }}
          as={nextPageLink}
        >
          <a className="load-more pl2" href={nextPageLink}>
            Show more news
          </a>
        </Link>
      </main>

      <style jsx>{`
        ul {
          margin-bottom: 20px;
        }

        .load-more {
          cursor: pointer;
          margin-bottom: 20px;
          display: block;
        }
      `}</style>
    </div>
  );
};

FrontPage.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?page=${ctx.query.page || 0}`
  );
  const json = await res.json();
  return { hits: json.hits };
};

export default withRouter(FrontPage);
