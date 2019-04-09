import React from "react";
import AddContact from "./addContact";
import ShowContact from "./showContact";
import axios from "axios";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], errors: "" };
    }

    baseURL = "http://localhost:4000/contacts";

    getContact = () => {
        axios.get(this.baseURL).then(response => {
            this.setState({ contacts: response.data });
        });
    };

    addContact = contact => {
        axios.post(this.baseURL, contact).then(response => {
            this.getContact();
            alert("Contact Added");
        });
    };

    deleteContact = id => {
        axios.delete(this.baseURL + "/" + id).then(
            res => {
                this.getContact();
                alert("Contact id: " + id);
            },
            err => {
                this.setState({ errors: err });
            }
        );
    };

    componentDidMount() {
        this.getContact();
    }

    render() {
        return (
            <div className="container">
                <h1 className="page-header">Manage Contacts</h1>
                <AddContact
                    addContact={contact => {
                        this.addContact(contact);
                    }}
                />
                <ShowContact
                    contacts={this.state.contacts}
                    deleteContact={id => {
                        this.deleteContact(id);
                    }}
                />
            </div>
        );
    }
}

export default Contact;
