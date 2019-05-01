import React, { Component } from "react";

class App extends Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({ counter: 5 });
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>Button</button>
                <div>Div1 {this.state.counter}</div>
                <div>Div2</div>
                <div>Div3</div>
            </div>
        );
    }
}

export default App;
