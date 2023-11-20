import React from 'react';
import { LoginService } from './login/LoginService.jsx'
import { UserService } from './user/UserService.jsx'
import { retrieveAllUsers } from './api'

export class LoginUserService extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            view: "login"
        }
    }

    handleViewChange = (view) => {
        this.setState({
            view: view.toString()
        })
    }



    render() {
        console.log(retrieveAllUsers('users/getAllUsers'));

        return(
            <div>
                <div>
                    {{
                        login: <LoginService handleViewChange={this.handleViewChange}/>,
                        user: <UserService handleViewChange={this.handleViewChange}/>
                    }[this.state.view]}
                </div>
            </div>
        )
    }

}
