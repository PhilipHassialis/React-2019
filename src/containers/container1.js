import React, { Component } from "react";

class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateprop1: "Our initial state"
        };
    }

    changeState = () => {
        this.setState({ stateprop1: "Our next state" });
    };

    render() {
        return (
            <div>
                <button onClick={this.changeState}>Change state</button>
                <button onClick={() => this.setState({ stateprop1: "Our next state" })}>
                    Change state in onclick
                </button>
                <div>{this.props.nickname}</div>
                <div>{this.state.stateprop1}</div>
            </div>
        );
    }
}

export default Container1;
