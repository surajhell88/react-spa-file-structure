import React from 'react';
import { Link } from 'react-router-dom';

import { routeConstants } from 'shared/constants';

const navItems = Object.values(routeConstants);

function Navbar() {
    return <ul className="App-nav-list">
        {
            navItems.map((navItem, i) => (
                <li key={i} className="App-nav-item">
                    <Link to={navItem.route}>{navItem.name}</Link>
                </li>
            ))
        }
    </ul>
}

export default Navbar;