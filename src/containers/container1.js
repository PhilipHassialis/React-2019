import React, { Component } from "react";
// import Component1 from "../functional/component1";
import * as ACTIONS from "../store/actions/actions";

import { connect } from "react-redux";

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
        const user_text = "text 1";

        return (
            <div>
                {/* <div style={{ padding: "20px", border: "1px solid gray" }}>
                    <button onClick={() => this.props.auth.login()}>Login</button>
                </div> */}
                <div>
                    React redux stuff
                    <button
                        onClick={() => {
                            console.log(this.props.user_profile);
                        }}
                    >
                        Console log userprofile
                    </button>
                    <button
                        onClick={() => {
                            console.log(this.props.stateprop1);
                        }}
                    >
                        Get state
                    </button>
                    <button
                        onClick={() => {
                            this.props.actionSuccess();
                        }}
                    >
                        Dispatch Success
                    </button>
                    <button
                        onClick={() => {
                            this.props.actionFailure();
                        }}
                    >
                        Dispatch Failure
                    </button>
                    <div>
                        <button
                            onClick={() => {
                                this.props.actionCreatorSuccess();
                            }}
                        >
                            Dispatch ActionCreator Success
                        </button>
                        <button
                            onClick={() => {
                                this.props.actionCreatorFailure();
                            }}
                        >
                            Dispatch ActionCreator Failure
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                this.props.actionCreatorUserInput(user_text);
                            }}
                        >
                            Dispatch ActionCreator userInput
                        </button>
                        {this.props.user_input ? <p>User text from userInput: {this.props.user_input} </p> : null}
                    </div>
                </div>

                <button onClick={this.changeState}>Change state</button>
                <button onClick={() => this.setState({ stateprop1: "Our next state" })}>Change state in onclick</button>
                <div>{this.props.nickname}</div>
                <div>stateprop1: {this.state.stateprop1}</div>
                <div>
                    <button onClick={() => this.changeState2()}>Change stateprop2</button>
                    stateprop2: {this.state.stateprop2}
                </div>
                <div>
                    <button onClick={() => this.changeState3()}>Change both states</button>
                </div>
                {/* <div>
                    Passing state inside container1 to component1
                    <br />
                    <Component1 prop1={this.state.stateprop1} />
                    <br />
                    End of component1 inside container1
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateprop1: state.reducer1.stateprop1,
        user_input: state.user_reducer.userText,
        user_profile: state.auth_reducer.profile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actionSuccess: () => dispatch(ACTIONS.SUCCESS),
        actionFailure: () => dispatch(ACTIONS.FAILURE),
        actionCreatorSuccess: () => dispatch(ACTIONS.success()),
        actionCreatorFailure: () => dispatch(ACTIONS.failure()),
        actionCreatorUserInput: text => dispatch(ACTIONS.user_input(text))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container1);
