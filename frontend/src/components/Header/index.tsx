import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/*Here comes the image logo*/}
      <h3>Stardew Project</h3>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">TEST01</a>
          </li>

          <li>
            <a href="#">TEST02</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a className="cta" href="$">
        {" "}
        <button>Contact</button>
      </a>
    </header>
  );
}
