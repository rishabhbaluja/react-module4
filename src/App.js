import React, { Component } from "react";
import "./App.css";
import "jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Welcome from "./components/welcome";
// import { FunctionComponentDemo } from "./components/functionComponentDemo";
// import Greeting from "./components/greetings";
// import GreetingClassComponent from "./components/greetingClassComponent";
// import Array from "./components/array";
// import UserList from "./components/userList";
// import EventDemo1 from "./components/event-demo1";
// import EventDemo2 from "./components/event-demo2";
// import StateDemo from "./components/stateDemo";
// import Counter from "./components/counter";
import Home from "./components/home";
import About from "./components/about";
import Form from "./components/form-demo";
import FormDemo2 from "./components/form-demo02";
import RefDemo1 from "./components/refDemo";
import CustomerInfo from "./components/customer-info";
import Contact from "./components/contact";

class App extends Component {
    render() {
        // let numbers = [1, 2, 3, 4, 5];
        // let user = {
        //     name: "Rishabh Baluja",
        //     hobbies: ["Sports", "Swimming", "Music", "Watching Movies", "Shopping"]
        // };
        // let age = 35;

        return (
            <div>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">
                            Navbar
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/form-demo">
                                        From Demo 01
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/form-demo2">
                                        From Demo 02
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/refs">
                                        Ref Demo
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/add-delete-state">
                                        addDeleteState
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contacts">
                                        View Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/form-demo" component={Form} />
                            <Route exact path="/form-demo2" component={FormDemo2} />
                            <Route exact path="/refs" component={RefDemo1} />
                            <Route
                                exact
                                path="/add-delete-state"
                                component={CustomerInfo}
                            />
                            <Route exact path="/contacts" component={Contact} />
                        </Switch>
                    </div>
                </BrowserRouter>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <BrowserRouter>
                                <div>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                    </ul>
                                    <div>
                                        <Switch>
                                            <Route exact path="/" component={Home} />
                                            <Route
                                                exact
                                                path="/about"
                                                component={About}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </BrowserRouter>
                        </div>
                    </div>
                </div> */}
            </div>
            // <div className="container">
            //     <div className="jumbotron text-center text-info">
            //         <h1>Hello, World!</h1>
            //         <h1>This is another tag!</h1>
            //     </div>
            //      <Welcome />
            //      <FunctionComponentDemo />
            //     <div className="row">
            //         <div className="col-xs-12">
            //             <Greeting name="Rishabh" />
            //             <Greeting name="Tushar" />
            //             <Greeting name="Jitesh" />
            //             <GreetingClassComponent name="Rishabh" />
            //             <Array numbers={numbers} />
            //             <UserList user={user}>Hello, World! </UserList>
            //             <EventDemo1 />
            //             <EventDemo2 age={age} />
            //             <StateDemo message="Hello Visitor" />
            //             <Counter />
            //         </div>
            //     </div>
            // </div>
        );
    }
}
export default App;
