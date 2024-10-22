import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjcHUJmbeEjlTGBf5sKqNm4c5JPF6CHoD6Q&s" alt="Logo" className="logo" />
      </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

    </header>
  );
}

export default Header;
