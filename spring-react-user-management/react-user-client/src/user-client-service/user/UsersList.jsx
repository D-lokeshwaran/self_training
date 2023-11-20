import { Component } from 'react'
import { PopUp } from '../components/PopUp.jsx'
import { Message } from '../components/SimpleMessage.jsx'

export class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popUp: {
                show: false,
                msg: "",
            },
        }
    }

    handleOnEdit = (url) => {
        fetch(url).then(response => response.json())
             .then(resp => {this.props.setUser(resp); this.props.fetchAll()})
    }

    handleDelete = (url, name) => {
        this.setState({
            popUp: {show: true, msg: `Are you sure want to delete user ${name}`},
            url: url
        })
    }

    handlePopUp = (canDelete) => {
        if(canDelete) {
            fetch(this.state.url, {method: "DELETE"})
                .then(resp => this.props.fetchAll()) // DELETE Fetch
        }
        this.setState({popUp: {...this.state.popUp, show: false}})
        this.props.setIsEdit();
    }

    render() {
        return(
            <div>
                {this.state.popUp.show ? <PopUp message={this.state.popUp.msg}
                            handlePopUp={this.handlePopUp} /> : <></>}
                <table className="table  table-striped mt-5 mb-5 container shadow" style={{border: "1px solid"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.usersList.map(user => {
                                const url = `${this.props.deleteUrl}${user.id}`
                                return(
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <button className="btn btn-success mr-3"
                                                onClick={() => this.handleOnEdit(url)}>
                                            Edit</button>
                                            <button className="btn btn-danger"
                                                onClick={() => this.handleDelete(url, user.name)}>
                                            Delete</button>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}