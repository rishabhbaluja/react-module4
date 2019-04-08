import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button className="btn btn-primary" onClick={this.incrementCount}>
                    Increment count
                </button>
            </div>
        );
    }
}
export default Counter;
