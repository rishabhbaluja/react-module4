// import React from "react";

// class FormDemo2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: ""
//         };
//     }
//     handleSubmit = event => {
//         console.log(this.state);
//         //alert(`${this.state.firstName}`);
//         event.preventDefault();
//     };

//     handleChangeFirstName = event => {
//         this.setState({
//             firstName: event.target.value.toUpperCase()
//         });
//     };

//     render() {
//         return (
//             <div className="container col-lg-5">
//                 <h1 className="text-center">Form Demo 02</h1>
//                 <h2>{this.state.firstName}</h2>
//                 <form className="form-group" onSubmit={this.handleSubmit}>
//                     <div>
//                         <label>First Name:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={this.state.firstName}
//                             onChange={this.handleChangeFirstName}
//                         />
//                     </div>
//                     <button type="submit" className="form-control btn btn-info">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default FormDemo2;

import React from "react";
class FormEg3 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            displayValue: ""
        };
    }
    handleInputChange = event => {
        console.log("evt", event.target.value);
        this.setState({
            value: event.target.value
        });
    };
    handleClick = () => {
        this.setState({
            displayValue: this.state.value.toUpperCase(),
            value: ""
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.displayValue}</h1>
                <label>name : </label>
                <input value={this.state.value} onChange={this.handleInputChange} />
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}
export default FormEg3;
