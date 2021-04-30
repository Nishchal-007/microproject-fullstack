import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="nav-wrapper red darken-1">
                    <div className="container">
                        <Link to="/" className="brand-logo">
                            Hospital Management
                        </Link>
                        <ul
                            id="nav-mobile"
                            className="right hide-on-med-and-down"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/hospitals">Hospitals</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
