import React from 'react'
import { User } from "./User.jsx"
import { UsersList } from "./UsersList.jsx"
import { Loading } from "../components/Loading.jsx"
import { Message } from "../components/SimpleMessage.jsx"
import { Fetch } from "../components/utils/Fetch.jsx"
import { Calculator } from "../components/practiceComponent/Calculator.jsx"

const initialUser = {
     id: 0,
     userName: '',
     password: '',
     age: 0,
     gender: 'Male'
}

export class UserService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            user : initialUser,
            isLoading: true,
            isEdit: false,
            alert: {message: "", type: "success"},
            show: false
        }
        this.roles = ["user", "developer"]
        this._links = {
            getAll: "users/getAllUsers",
            create: "users/createUser",
            update: "users/updateUser/",
            delete: "users/"
        } // TODO: for now use link like this but need to get from spring as response _links
    }



    componentDidMount = () => {
        this.useTimeOut("isLoading")
        Fetch.fetchAllUsers(this._links.getAll, "usersList");
    }

    useTimeOut = (state, delay) => {
        delay = delay ? delay : 500
        this.setState({[state]: true})
        setTimeout(() => {
            this.setState({[state]: false})
        }, delay)
    }

    handleEdit = (user) => {
        const isEdit = user != null
        this.setState({
            user: isEdit ? user : initialUser,
            isEdit: isEdit
        })
    }

    handleOnChange = (ev) => {
        this.setState({
            user: {
                ...this.state.user,
                [ev.target.name] : ev.target.value
            }
        })
    }

    handleCreateAndUpdate = (ev) => {
        const user = this.state.user;
        const isCreate = user.id == 0
        const action = isCreate ? {url: this._links.create, method:"POST", message:`${user.name} created Successfully`}
                                : {url: `${this._links.update}${user.id}`, method:"PUT", message: `${user.name} modified Successfully`}
        var isValid = user.name && user.age && user.age > 18;
        if(isValid) {
            try {
                fetch(action.url, {
                    method: action.method,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then(resp => {this.handleEdit(); this.fetchAllUsers()}) // Get Single User Fetch POST, PUT
            } catch(err) {
                console.log(err);
            }
            this.useTimeOut("isLoading");
            this.setState({alert:{message: action.message, type:"success", show:true}})
        } else {
            this.setState({alert: {message:"Please follow Below Constraints", type:"danger", show:true}});
        }
        this.setState({isEdit: false, user: user});
        this.useTimeOut("show", 1500);
        ev.preventDefault();
    }

    render() {
        return(
            <>
                <Loading isLoading={this.state.isLoading}/>

                <Message message={this.state.alert.message} type={this.state.alert.type}
                         show={this.state.show} hide={() => this.setState({show: false})}/>

                <header className="h2 text-center bg-dark text-white p-1">Users Restful Web Service
                    <span className="btn btn-link float-right"
                          onClick={() => this.props.handleViewChange("login")}>/logout</span>
                </header>

                <User user={this.state.user}
                      isEdit={this.state.isEdit}
                      cancelEdit={this.handleEdit}
                      handleOnChange={this.handleOnChange}
                      handleSubmit={this.handleCreateAndUpdate}/>

                <UsersList usersList={this.state.usersList}
                           setUser={this.handleEdit}
                           setIsEdit={() => {
                                this.setState({isEdit: false});
                                this.setState({user: initialUser})
                           }}
                           deleteUrl={this._links.delete}
                           fetchAll={() => this.fetchAllUsers()}/>

            </>
        )
    }
}
UserService.defaultProps = {
    roles: "User"
}