import React, { Component } from "react";

import Component1 from "./functional/component1";

import Container1 from "./containers/container1";

import { Router, Route, Switch } from "react-router";

import Header from "./containers/header";

import history from "./utils/history";

import Callback from "./functional/callback";
import Auth from "./utils/auth";

const auth = new Auth();

const handleAuthentication = props => {
    if (props.location.hash) {
        auth.handleAuth();
    }
};

class Routes extends Component {
    state = {};

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact render={() => <Container1 auth={auth} />} />
                            <Route
                                path="/callback"
                                render={props => {
                                    handleAuthentication(props);
                                    return <Callback />;
                                }}
                            />
                            <Route path="/component/:id" render={props => <Component1 {...props} />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
