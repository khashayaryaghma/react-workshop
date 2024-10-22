import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <h3>More projects I’ve worked on:</h3>
      <a href="https://github.com/khashayaryaghma" target="_blank" className="link">
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <p>@khashayaryaghma on github</p>
      </a>
    </footer>
  );
}

export default Footer;
