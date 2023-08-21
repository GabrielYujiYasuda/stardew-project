import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/*Here comes the logo image*/}
      <h1>Stardew Project</h1>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">News</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="$">
        <button className="button">Contact</button>
      </a>
    </header>
  );
}
