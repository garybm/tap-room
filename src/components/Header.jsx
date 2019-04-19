import React from 'react'
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Available Kombucha Kegs</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add New Keg</Link>
    </div>

  )
}

export default Header
