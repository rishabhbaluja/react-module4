import React from "react";

class Array extends React.Component {
    render() {
        return (
            <ul>
                {this.props.numbers.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        );
    }
}

export default Array;
