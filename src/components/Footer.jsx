import { Link } from "react-router-dom"
import { FaPhone, FaEnvelope, FaInstagramSquare   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/footer.css"

const Footer = () => {
  const firm = `Owonikoko Internationals Limited`
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-contents">
          <h3>About us</h3>
          <ul>
            <li>
              <Link className="footer-links"  to={`/about`}>Who we are</Link>
            </li> 
            <li> 
              <Link className="footer-links"  to={`/about`}>Our Leadership</Link>
            </li> 
            <li> 
              <Link className="footer-links" to={`/about`}>Featured stories</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-contents">
          <h3>Operations</h3>
          <ul>
            <li>
              <Link className="footer-links"  to={`/about`}>United Kingdom</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-contents">
          <h3>Sustainability</h3>
          <ul>
            <li>
              <Link className="footer-links"  to={`/about`}>Safety</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Environment</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Social Responsibility</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Community Investment</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-contents">
          <h3>Careers</h3>
          <ul>
            <li>
              <Link className="footer-links"  to={`/about`}>Work With Us</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>What Sets Us Apart</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Opportunities - New Graduates</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Opportunities - Experienced</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Professionals</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-contents">
          <h3>Integrity and Compliance</h3>
          <ul>
            <li>
              <Link className="footer-links"  to={`/about`}>How We Work</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Doing Business With Us</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Supplier Documents</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Corperate Documents</Link>
            </li>
            <li>
              <Link className="footer-links"  to={`/about`}>Report A Concern</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top-contents">
          <h3 className="sixth">Contact Us</h3>
          <div className="footer-icons-container">
            <Link className="logo-link" to={`/`}>
              <FaPhone className="footer-icon" />
            </Link>
            <Link className="logo-link" to={`/`}>
              <FaEnvelope className="footer-icon" />
            </Link>
            <Link className="logo-link" to={`/`}>
              <FaInstagramSquare className="footer-icon"  />
            </Link>
            <Link className="logo-link" to={`/`}>
              <FaXTwitter className="footer-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          {/* <h3>Contact Us</h3> */}
          <img className="footer-logo" src="https://cnoocinternational.com/img/cnooc_redblue_cmyk.png" alt="" />
          <p>&copy;2024 {firm}</p>
          <p>Terms and Conditions   |   Privacy Notice   |   Cookies Policy	</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer