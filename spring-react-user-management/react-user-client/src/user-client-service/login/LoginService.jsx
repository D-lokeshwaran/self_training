import React from 'react'
import InputProp from "../components/InputProp.jsx"

export class LoginService extends React.Component {
    constructor(props) {
        super(props);
        this.userName = "developer";
        this.password = "test1234";
        this.state = {
            type: "submit"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(ev) {
        const userInput1 = ev.target[0].value;
        const userInput2 = ev.target[1].value;
        if(this.userName === userInput1 && this.password === userInput2) {
            this.props.handleViewChange("user");
        } else {
            alert("Invalid UserName or Password!");
            ev.target.reset(); // reset the form input
        }
        ev.preventDefault(); // prevent form to reload (it default behaviour)
    }

    render() {
        return(
            <div>
                <h1 className="text-center">Time to Login</h1>
                <form style={{margin: "0 auto", width: "25%"}}
                      className="form shadow bg-light rounded p-5" onSubmit={this.handleSubmit} method="post">

                    <InputProp labelName="User Name" type="text" required="true" reset={this.reset}/>
                    <InputProp labelName="Password" type="password" required="true" reset={this.reset}/>

                    <button type={this.state.type} className="btn btn-primary w-100 mt-4" >Login In</button>

                </form>
                <p className="mt-4 text-center">User Name: <b>{this.userName}</b>, Password: <b>{this.password}</b></p>
            </div>
        )
    }

}