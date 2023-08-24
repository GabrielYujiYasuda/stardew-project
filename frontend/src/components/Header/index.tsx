import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      {/*Here comes the logo image*/}
      <Link className="transparent" to={"/"}>
        <h1>Stardew Project</h1>
      </Link>
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

      <Link className="transparent" to={"/contact"}>
        <button className="button">Contact</button>
      </Link>
    </header>
  );
}
