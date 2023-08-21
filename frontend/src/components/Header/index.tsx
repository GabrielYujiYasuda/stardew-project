import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/*Here comes the image logo*/}
      <h3 className="header-title">Stardew Project</h3>
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
