import React from "react";

class UserList extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.user.name}</p>
                <ul>
                    {this.props.user.hobbies.map((n, i) => (
                        <li key={i}>{n}</li>
                    ))}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default UserList;
