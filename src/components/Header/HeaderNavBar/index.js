import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

export class NavBar extends Component {
    render() {
        return (
                <ul className="NavList">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/personas/packs">Packs</Link>
                    </li>
                </ul>
        );
    }
}

