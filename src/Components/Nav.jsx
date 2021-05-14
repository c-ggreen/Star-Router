import React from 'react';

import { Link } from "react-router-dom";

function Nav(props) {
        const navStyle = {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50%",
        };
    return (
      <div>
        <nav>
          <ul style={navStyle}>

            <Link to="/">
              <li>Home</li>
            </Link>
            
            <Link to="/search">
              <li>Search</li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>

          </ul>
        </nav>
      </div>
    );
}

export default Nav;