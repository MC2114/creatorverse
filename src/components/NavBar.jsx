import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Creatorverse</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/new" className="nav-link">Add Creator</Link>
            </div>
        </nav>
    )
}

export default NavBarB