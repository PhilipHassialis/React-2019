import React, { Component } from "react";
import Component1 from "./functional/component1";
import Container1 from "./containers/container1";

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
                <Container1 nickname="fatass" />
                <br />
                <Component1 name="Philip" age={43} />
                <br />
                Ternary expression:
                {true ? <div>condition1</div> : <div>condition2</div>}
                <br />
                <hr />
                <div>
                    My list
                    {this.Arr1.map(item => (
                        <this.RenderListItem key={item.id} item={item} />
                    ))}
                </div>
                <div>
                    My form
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input id="inputName" onChange={this.handleChange} type="text" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
