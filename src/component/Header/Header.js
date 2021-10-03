import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="navBar-container bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="brand">
                            <h1>Child Tech</h1>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="menu">
                                    <li>Home</li>
                                </Link>
                                <Link to="/serve" className="menu">
                                    <li>Service</li>
                                </Link>
                                <Link to="/about" className="menu">
                                    <li>About us</li>
                                </Link>
                                <Link to="contact" className="menu">
                                    <li>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;