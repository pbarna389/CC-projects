import React from "react";
import { Link } from "react-router-dom";

import '../styles/components/Header.css'

const Navbar = () => {
    return (
        <header>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contracts">Contracts</Link>
            </li>
        </header>
    )
}

export default Navbar 