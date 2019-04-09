import React from "react";

class ShowContact extends React.Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr className="bg-info text-light">
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.contactName}</td>
                                <td>{contact.contactNumber}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            this.props.deleteContact(contact.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowContact;
