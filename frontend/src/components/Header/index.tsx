import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      {/*Here comes the logo image*/}
      <h1>Stardew Project</h1>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to={"/news"}>News</Link>
          </li>

          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>

          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="$">
        <Link className="button" to={"/contact"}>
          Contact
        </Link>
        <button className="button">Contact</button>
      </a>
    </header>
  );
}
