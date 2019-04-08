import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            topic: "React"
        };
    }
    handleSubmit = event => {
        console.log(this.state);
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.topic}`);
        event.preventDefault();
    };

    handleChangeFirstName = event => {
        this.setState({
            firstName: event.target.value
        });
    };
    handleChangeLastName = event => {
        this.setState({
            lastName: event.target.value
        });
    };
    handleChangeTopic = event => {
        this.setState({
            topic: event.target.value
        });
    };

    render() {
        return (
            <div className="container col-lg-5">
                <h1 className="text-center">Form Demo</h1>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.handleChangeFirstName}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.handleChangeLastName}
                        />
                    </div>
                    <div>
                        <label>Topic:</label>
                        <select
                            className="form-control"
                            value={this.state.topic}
                            onChange={this.handleChangeTopic}
                        >
                            <option value="Angular">Angular</option>
                            <option value="Node">Node</option>
                            <option value="React">React</option>
                        </select>
                    </div>
                    <br />
                    <button type="submit" className="form-control btn btn-info">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
