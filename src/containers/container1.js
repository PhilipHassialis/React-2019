import React, { Component } from "react";

class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateprop1: "Our initial state",
            stateprop2: 5
        };
    }

    changeState = () => {
        this.setState({ stateprop1: "Our next state" });
    };

    changeState2 = () => {
        this.setState((prevState, props) => {
            return { stateprop2: prevState.stateprop2 + 5 };
        });
    };

    changeState3 = () => {
        this.setState({
            stateprop1: "Next next state",
            stateprop2: 36
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.changeState}>Change state</button>
                <button onClick={() => this.setState({ stateprop1: "Our next state" })}>
                    Change state in onclick
                </button>
                <div>{this.props.nickname}</div>
                <div>stateprop1: {this.state.stateprop1}</div>
                <div>
                    <button onClick={() => this.changeState2()}>Change stateprop2</button>
                    stateprop2: {this.state.stateprop2}
                </div>
                <div>
                    <button onClick={() => this.changeState3()}>
                        Change both states
                    </button>
                </div>
            </div>
        );
    }
}

export default Container1;
