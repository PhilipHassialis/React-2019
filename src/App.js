import React, { Component } from "react";
import "./App.css";
import * as styles from "./styles";

class App extends Component {
    render() {
        const name = "Philip";

        return <div>{React.createElement("button", { className: "App" }, "React")}</div>;
    }
}

export default App;
