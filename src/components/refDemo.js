import React from "react";
class RefDemo1 extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    render() {
        return (
            <div className="container">
                <input type="text" ref={this.inputRef} />
                <button>Click</button>
            </div>
        );
    }
}

export default RefDemo1;
