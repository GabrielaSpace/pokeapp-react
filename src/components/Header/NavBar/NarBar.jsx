import React from "react";
import { Link } from "react-router-dom";


const NavBar= () => {
  return (<nav >
    
      <Link to="/">Home</Link>
      <Link to="/new">Create a Pokemon</Link>
      <Link to="/search">Search</Link>
      <Link to="/*"></Link>
      </nav>);
  }


export default NavBar;