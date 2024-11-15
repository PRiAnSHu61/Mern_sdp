import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/flights">Flights</Link> <Link to="/add-flight">Add Flight</Link>
    </nav>
  );
}

export default Navbar;
