import React, { Component } from "react";

import Component1 from "./functional/component1";
import Component2 from "./functional/component2";
import Component3 from "./functional/component3";

import Container1 from "./containers/container1";

import { Router, Route } from "react-router";

import { Header } from "./containers/header";

class Routes extends Component {
    state = {};

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Route path="/container1" component={Container1} />
                    <Route path="/component1" component={Component1} />
                    <Route path="/component2" component={Component2} />
                    <Route path="/component3" component={Component3} />
                </Router>
            </div>
        );
    }
}

export default Routes;
