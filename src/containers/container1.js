import React, { Component } from "react";

class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateprop1: "Our initial state"
        };
    }

    render() {
        return (
            <div>
                <div>{this.props.nickname}</div>
                <div>{this.state.stateprop1}</div>
            </div>
        );
    }
}

export default Container1;
