import React, { Component } from "react";
import Component1 from "./functional/component1";
import Container1 from "./containers/container1";

class App extends Component {
    Arr1 = [
        { id: 1, text: "Text A", number: 10 },
        { id: 2, text: "Text B", number: 20 },
        { id: 3, text: "Text C", number: 30 },
        { id: 4, text: "Text D", number: 40 },
        { id: 5, text: "Text E", number: 50 }
    ];

    RenderListItem = props => (
        <div>
            {props.item.text}
            <p>{props.item.number}</p>
        </div>
    );

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
            </div>
        );
    }
}

export default App;
