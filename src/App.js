import React, { Component } from "react";
import Component1 from "./functional/component1";

class App extends Component {
    render() {
        return (
            <div>
                React
                <Component1 name="Philip" age={43} />
            </div>
        );
    }
}

export default App;
