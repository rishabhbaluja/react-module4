import React from "react";

class EventDemo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            age : props.age
        }
    }
    update() {
        this.setState({
            age: this.state.age + 5
        });
        console.log(`After updating ${this.state.age}`);
    }

    render() {
        return (
            <div>
                <p>{this.state.age}</p>
                <button className="btn btn-primary" onClick={() => this.update()}>
                    Event 2 Click Me!
                </button>
            </div>
        );
    }
}

export default EventDemo2;
