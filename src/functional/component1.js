import React from "react";

const Component1 = props => {
    return (
        <div>
            <hr />
            {props.name} {props.age}
            <div>Prop1: {props.prop1}</div>
            {console.log(props)}
        </div>
    );
};

export default Component1;
