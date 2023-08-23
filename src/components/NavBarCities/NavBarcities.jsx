import React from 'react'
import { Link, NavLink } from 'react-router-dom';





const NavBarcities = () => {
 
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
              <Link className="nav-link" to="/">Home </Link>
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
     
    </div>
  );
};


  


export default NavBarcities