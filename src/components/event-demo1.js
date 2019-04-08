import React from "react";

class EventDemo1 extends React.Component {
    callEvent() {
        console.log("I am from event");
    }

    render() {
        return <button onClick={() => this.callEvent()}>Event Click Me!</button>;
    }
}

export default EventDemo1;
