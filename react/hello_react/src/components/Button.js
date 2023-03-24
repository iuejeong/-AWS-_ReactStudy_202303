import React from "react";

function Button(props) {
    return (
        <button onClick={props.handlerClick}>이름 전달</button>
    );
}

export default Button;