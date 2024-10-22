import { Link } from "react-router-dom";
import "./footer.css"
function Footer() {
  return (
    <footer>
      <h2>More projects I’ve worked on:</h2>
      <Link to="https://github.com/khashayaryaghma" target="_blank" className="link">
        {/* <GitHubIcon fontSize="large" /> */}
        <p>@khashayaryaghma on github</p>
      </Link>
    </footer>
  );
}

export default Footer;
