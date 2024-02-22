import React, { useState } from "react";
import { Link } from "react-router-dom";
import logga from '../images/PP_logotyp.png'; // Importera loggan
import "./Menu.css";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Växla tillståndet för hamburgemenyn
    };

    const changeBackgroundColor = () => {
        // Lägg till logik för att ändra bakgrundsfärgen här
        document.querySelector(".site-content").style.backgroundColor = getRandomColor();
    };

    const getRandomColor = () => {
        // Returnera en slumpmässig färg
        const colors = ["#fefae0", "#faedcd", "#fdf0d5"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="navbar">
            <div className="menu-container">
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <img src={logga} alt="logga-bild" className="loggbild" onClick={changeBackgroundColor} />
                    </li>
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cv" className="nav-link">
                            Cv
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {/* Hamburger-ikonen */}
                    <div className={menuOpen ? "burger open" : "burger"}>
                        <div className="line1"></div>  
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </div>
            {/* Länkar för mobilmeny */}
            {menuOpen && (
                <ul className="mobile-links">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cv" className="nav-link">
                            Cv
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
