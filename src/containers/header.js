import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {};
    render() {
        return (
            <div>
                <Link to="/" style={{ padding: "5px" }}>
                    Home
                </Link>
                <Link to="/component1" style={{ padding: "5px" }}>
                    Component1
                </Link>
                <Link to="/component2" style={{ padding: "5px" }}>
                    Component2
                </Link>
                <Link to="/component3" style={{ padding: "5px" }}>
                    Component3
                </Link>
            </div>
        );
    }
}

export default Header;
