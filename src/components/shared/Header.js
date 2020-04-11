const Header = () => {
  return (
    <header>
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
          background: blue;
        }
      `}</style>
    </header>
  );
};

export default Header;
