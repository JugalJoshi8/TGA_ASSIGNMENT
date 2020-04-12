import Head from "next/head";

import Header from "../src/components/shared/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hacker news</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        * {
          box-sizing: border-box;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .flex {
          display: flex;
        }
        .align-center {
          align-items: center;
        }

        .fs-xs {
          font-size: 12px;
        }

        .fs-sm {
          font-size: 14px;
        }

        .fs {
          font-size: 16px;
        }

        .fs-lg {
          font-size: 18px;
        }

        .fs-xl {
          font-size: 24px;
        }

        .p1 {
          padding: 10px;
        }

        .pl1 {
          padding-left: 10px;
        }

        .ml1 {
          margin-left: 10px;
        }

        .pr1 {
          padding-right: 10px;
        }

        .mr1 {
          margin-right: 10px;
        }

        .pl2 {
          padding-left: 20px;
        }

        .ml2 {
          margin-left: 20px;
        }

        .pr2 {
          padding-right: 20px;
        }

        .mr2 {
          margin-right: 20px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
