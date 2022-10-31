import React from 'react';
import {Link} from 'react-router-dom';

import '../../index.css';
function Navbar() {
  return (
    <nav className="navbar  navbar-light bg-light">
    <Link className="navbar-brand">NBridge Bid Network</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to='/login' className="nav-link"  >Login</Link>
        </li>
        <li className="nav-item">
          <Link to='/signup' className="nav-link" >Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link " >About</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar