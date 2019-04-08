import React from "react";
import CustomerDisplay from "./customerDisplay";

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userName: "",
                userEmail: "",
                userMobile: "",
                userAddress: "",
                userDescription: "",
                userDateOfVisit: ""
            },
            display: false
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ display: true });
    };

    updateState(ctrl, value) {
        const { user } = this.state;
        user[ctrl] = value;
        this.setState({ user });
    }
    resetState() {
        this.setState({
            user: {
                userName: "",
                userEmail: "",
                userMobile: "",
                userAddress: "",
                userDescription: "",
                userDateOfVisit: ""
            },
            display: false
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">State Add And Delete</h1>
                <div className=" col-lg-5">
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.userName}
                                onChange={e =>
                                    this.updateState("userName", e.currentTarget.value)
                                }
                            />
                        </div>
                        <div>
                            <label>User Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={user.userEmail}
                                onChange={e =>
                                    this.updateState("userEmail", e.currentTarget.value)
                                }
                            />
                        </div>
                        <div>
                            <label>User Mobile:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.userMobile}
                                onChange={e =>
                                    this.updateState("userMobile", e.currentTarget.value)
                                }
                            />
                        </div>
                        <div>
                            <label>User Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.userAddress}
                                onChange={e =>
                                    this.updateState("userAddress", e.currentTarget.value)
                                }
                            />
                        </div>
                        <div>
                            <label>User Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.userDescription}
                                onChange={e =>
                                    this.updateState(
                                        "userDescription",
                                        e.currentTarget.value
                                    )
                                }
                            />
                        </div>
                        <div>
                            <label>User Date Of Visit:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={user.userDateOfVisit}
                                onChange={e =>
                                    this.updateState(
                                        "userDateOfVisit",
                                        e.currentTarget.value
                                    )
                                }
                            />
                        </div>
                        <br />
                        <button type="submit" className="form-control btn btn-info">
                            Submit
                        </button>
                    </form>
                </div>
                {this.state.display ? (
                    <CustomerDisplay
                        userData={this.state.user}
                        deleteCustomer={e => this.resetState()}
                    />
                ) : null}
            </div>
        );
    }
}

export default CustomerInfo;
