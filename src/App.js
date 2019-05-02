import React, { Component } from "react";
import Component1 from "./functional/component1";
import Container1 from "./containers/container1";

class App extends Component {
    render() {
        return (
            <div>
                React
                <Container1 nickname="fatass" />
                <br />
                <Component1 name="Philip" age={43} />
            </div>
        );
    }
}

export default App;
