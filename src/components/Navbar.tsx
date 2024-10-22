import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

const Navbar: React.FC = () => {

    // const navigate = useNavigate(); // Using useNavigate hook for navigation
     return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                HOME
            </Link>
            <Link to="storage" className="navbar-brand">
                FOOD STORAGE
            </Link>
              <Link to="/expiring" className="navbar-brand">
                EXPIRING
            </Link>
              <Link to="/missing" className="navbar-brand">
                MISSING
            </Link>
              <Link to="/add" className="navbar-brand">
                ADD SUPPLY
            </Link>

    </nav>
    );
    
   
};

export default Navbar;
