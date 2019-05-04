import React, { Component } from "react";
import Routes from "./routes";
class App extends Component {
    // Alternative form approach
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    Arr1 = [
        { id: 1, text: "Text A", number: 10 },
        { id: 2, text: "Text B", number: 20 },
        { id: 3, text: "Text C", number: 30 },
        { id: 4, text: "Text D", number: 40 },
        { id: 5, text: "Text E", number: 50 }
    ];

    state = {
        value: ""
    };

    RenderListItem = props => (
        <div>
            {props.item.text}
            <p>{props.item.number}</p>
        </div>
    );

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.value);
    };

    // Alternative form approach:
    // handleChange = event => {
    //     this.setState({ value: event.target.value });
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state.value);
    // };

    render() {
        return (
            <div>
                React
                <Routes />
            </div>
        );
    }
}

export default App;
