import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {
        num: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
    render() {
        return (
            <div>
                <Link to="/" style={{ padding: "5px" }}>
                    Home
                </Link>
                <Link to="/privateroute" style={{ padding: "5px" }}>
                    Private Route
                </Link>
                {this.state.num.map(num => (
                    <Link key={num.id} to={{ pathname: "/component/" + num.id }} style={{ padding: "5px" }}>
                        Component {num.id}
                    </Link>
                ))}
            </div>
        );
    }
}

export default Header;
