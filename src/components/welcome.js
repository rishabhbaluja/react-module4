import React, { Component } from "react";

class Welcome extends Component {
    render() {
        let message = "";
        if (true) {
            message = "Hello Friends";
        }
        return (
            <div>
                <h1>Hello from Welcome Component</h1>
                <p>{2 + 2}</p>
                <p>{message}</p>
            </div>
        );
    }
}

export default Welcome;
