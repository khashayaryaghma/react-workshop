import "./header.css";

function Header() {
  return (
    <header>
      <a href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjcHUJmbeEjlTGBf5sKqNm4c5JPF6CHoD6Q&s" alt="Logo" className="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/" className="navLink">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="navLink">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
