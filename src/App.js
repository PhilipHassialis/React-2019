import React, { Component } from "react";

class App extends Component {
    render() {
        const var1 = {
            key1: "Some data"
        };

        return <div>{React.createElement("div", { className: "app" }, var1.key1)}</div>;
    }
}

export default App;
