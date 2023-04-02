import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {


  
  const [theme, setTheme] = useState('light')
  //const [btnText, setBtnText] = useState('Dark Mode')

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-mode");
      //setBtnText("Light Mode")
    } else {
      body.classList.remove("dark-mode");
      //setBtnText('Dark Mode')
    }
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>

        <div>
        <input type="checkbox" className="checkbox" onClick={toggleTheme} id="checkbox"/>
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i>
        <div className='ball'/>
      </label>
    </div>
    
  </div>
</nav>
    </div>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
