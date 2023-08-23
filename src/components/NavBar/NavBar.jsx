import React from 'react';
import { Link, NavLink } from 'react-router-dom';









const NavBar = () => {
  const handleLoginClick = () => {
    alert('Under construction');
  };

  return (
    <div className='card-body'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <h1>mytinerari</h1>
        </a>

        <div id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cities">citys</Link>
            </li>
            <li className="nav-item">
              {/* Botón de login con icono y mensaje de alerta */}
              <button className="nav-link btn btn-link" onClick={handleLoginClick}>
                <i className="fas fa-sign-in-alt"></i> Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="intro-text">
        <h2 className="text-center">
          Find your perfect trip, designed by insiders who know and love their cities!
        </h2>
        <button className="btn btn-primary btn-lg">Explore Now</button>
      </div>
    </div>
  );
};

export default NavBar;
