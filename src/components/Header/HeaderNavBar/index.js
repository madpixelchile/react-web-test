import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

export class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleClassButton: false,
        };

       
    }

    mobileMenuButton = () => {
        this.setState( prevState => ({
            toggleClassButton: !this.state.toggleClassButton,
        }));
    }

    render() {
        return (
            <div className={`${this.state.toggleClassButton ? 'active' : ''} mobileCollapsed`}>
                <button onClick={this.mobileMenuButton} className={`${this.state.toggleClassButton ? 'active' : ''} btn btn-primary`}>Deploy button</button>
                <nav>
                    <ul className="NavList">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/personas/packs">Packs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

