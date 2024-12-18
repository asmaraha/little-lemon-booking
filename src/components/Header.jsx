import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <h1>Little Lemon Restaurant</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Book a Table</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
