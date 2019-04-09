import React from "react";

class AddContact extends React.Component {
    contactName = React.createRef();
    contactNumber = React.createRef();

    handleAddContact = event => {
        let countObject = {
            contactName: this.contactName.current.value,
            contactNumber: this.contactNumber.current.value
        };
        this.props.addContact(countObject);
        event.preventDefault();
    };

    render() {
        return (
            <div className="well">
                <form className="form-group form-inline">
                    <label>Contact Name : </label>
                    <input ref={this.contactName} className="form-control" />
                    <br />
                    <label>Contact Number :</label>
                    <input ref={this.contactNumber} className="form-control" />
                    <br />
                    &nbsp;
                    <button
                        className="btn btn-success form-control"
                        onClick={this.handleAddContact}
                    >
                        Add Contact
                    </button>
                </form>
            </div>
        );
    }
}

export default AddContact;
