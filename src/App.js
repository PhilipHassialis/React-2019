import React, { Component } from "react";
import "./App.css";
import * as styles from "./styles";

class App extends Component {
    render() {
        const name = "Philip";

        return (
            <div>
                {name}
                <div style={styles.styles}>Style</div>
                <button>Button 1</button>
            </div>
        );
    }
}

export default App;
