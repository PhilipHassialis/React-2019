import React, { Component } from "react";

import Component1 from "./functional/component1";

import Container1 from "./containers/container1";

import { Router, Route, Switch, Redirect } from "react-router";

import Header from "./containers/header";

import history from "./utils/history";

import Callback from "./functional/callback";
import Auth from "./utils/auth";

import AuthCheck from "./utils/authcheck";
import UnathRedirect from "./functional/unauthredirect";
import ProtectedRoute from "./functional/protectedroute";

const auth = new Auth();

const handleAuthentication = props => {
    if (props.location.hash) {
        auth.handleAuth();
    }
};

const PrivateRoute = ({ component: Component, auth }) => (
    <Route
        render={props =>
            auth.isAuthenticated() ? <Component auth={auth} {...props} /> : <Redirect to={{ pathname: "/redirect" }} />
        }
    />
);

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
                            <Route path="/authcheck" exact render={() => <AuthCheck auth={auth} />} />
                            <Route
                                path="/callback"
                                render={props => {
                                    handleAuthentication(props);
                                    return <Callback />;
                                }}
                            />
                            <Route path="/redirect" component={UnathRedirect} />
                            <Route path="/component/:id" render={props => <Component1 {...props} />} />
                            <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
