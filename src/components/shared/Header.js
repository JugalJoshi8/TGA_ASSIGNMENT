const Header = () => {
  return (
    <header className="flex align-center p1">
      <div className="logo ml1 mr1">Y</div>
      <h1>Hacker News</h1>
      <ul>
        <li>new</li>
        <li>past</li>
        <li>comments</li>
        <li>ask</li>
        <li>show</li>
        <li>jobs</li>
        <li>submit</li>
      </ul>
      <style jsx>{`
        header {
          background-color: rgb(255, 102, 0);
          color: #000;
          display: ;
        }
        .logo {
          color: white;
          padding: 10px;
          border: solid 2px white;
        }

        h1 {
          font-size: 1rem;
          color: inherit;
        }

        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
        }

        li {
          padding: 0 10px;
          cursor: pointer;
        }

        li:not(:last-child) {
          border-right: solid 1px black;
        }
      `}</style>
    </header>
  );
};

export default Header;
