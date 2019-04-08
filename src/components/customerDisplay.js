import React from "react";

class CustomerDisplay extends React.Component {
    render() {
        const user = this.props.userData;
        return (
            <div className="container">
                <h1 className="text-center">Display Customer Information</h1>
                <button className="btn btn-warning " onClick={() => this.props.deleteCustomer()}>Delete Data</button>
                <p>{user.userName}</p>
                <p>{user.userMobile}</p>
                <p>{user.userAddress}</p>
                <p>{user.userEmail}</p>
                <p>{user.userDescription}</p>
                <p>{user.userDateOfVisit}</p>
               
            </div>
        );
    }
}

export default CustomerDisplay;
