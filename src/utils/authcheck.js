import React, { Component } from "react";
import { connect } from "react-redux";

class AuthCheck extends Component {
    state = {};
    render() {
        return <div />;
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthCheck);
