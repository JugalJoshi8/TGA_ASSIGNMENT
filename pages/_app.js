import Header from "../src/components/shared/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
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

        .flex {
          display: flex;
        }
        .align-center {
          align-items: center;
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
      `}</style>
    </>
  );
}

export default MyApp;
