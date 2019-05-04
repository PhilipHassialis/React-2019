import React from "react";

const Component1 = props => {
    return (
        <div>
            Component {props.match.params.id}
            <hr />
        </div>
    );
};

export default Component1;
