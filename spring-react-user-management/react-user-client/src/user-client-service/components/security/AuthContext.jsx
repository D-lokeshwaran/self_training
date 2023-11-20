import React from 'react';

export const AuthContext = React.createContext();

export default class AuthProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            username: 'developer',
            password: 'test1234'
        }
    }

    render() {
        return(
            <AuthContext.Provider value={ this.state }>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}