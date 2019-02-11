import * as React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {

    public render() {
        return (
            <ul className="menu">
                <li className="menu-item"><NavLink className="menu-link" to="/home">Home</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/login">Login</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/manage-flights">Manage Flights</NavLink></li>
            </ul>
        );
    }
}

export default Navigation;