import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"
import "../styles/nav.css"
import { useState } from "react";


const Nav = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
    
  return (
    <nav>
      <div>
        <Link to={`/`}>
          <img className="logo" src="https://cnoocinternational.com/img/cnooc_redblue_cmyk.png" alt=""/>
        </Link>
      </div>

      <div>
        <ul id="navbar-links-container" className={clicked ? "#navbar-links-container active" : "navbar-links-container"}>
          <li>
            <Link className="nav-link" to={`/`}>About</Link>
          </li>
          <li>
            <Link className="nav-link" to={`/`}>Operations</Link>
          </li>
          <li>
            <Link className="nav-link" to={`/`}>Sustainability</Link>
          </li>
          <li>
            <Link className="nav-link" to={`/`}>Careers</Link>
          </li>
          <li>
            <Link className="nav-link" to={`/`}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="mobile" onClick={handleClick}>
        {
          clicked ? <span><FaTimes className="mobile-icon" /></span> : <span><FaBars className="mobile-icon" /></span>
        }
      </div>
    </nav>
  )
}

export default Nav