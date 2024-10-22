import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <h3>More projects I’ve worked on:</h3>
      <Link to="https://github.com/khashayaryaghma" target="_blank" className="link">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <p>@khashayaryaghma on github</p>
      </Link>
    </footer>
  );
}

export default Footer;
