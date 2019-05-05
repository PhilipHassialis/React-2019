import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
                {!this.props.is_authenticated ? (
                    <button onClick={() => this.props.auth.login()}>Login</button>
                ) : (
                    <button onClick={() => this.props.auth.logout()}>Logout</button>
                )}
                {this.state.num.map(num => (
                    <Link key={num.id} to={{ pathname: "/component/" + num.id }} style={{ padding: "5px" }}>
                        Component {num.id}
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        is_authenticated: state.auth_reducer.isAuthenticated
    };
};

export default connect(mapStateToProps)(Header);
