import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Workflow App</div>
    <ul className="navbar-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          Workflow Builder
        </NavLink>
      </li>
      <li>
        <NavLink to="/analytics" activeClassName="active">
          Analytics Dashboard
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
