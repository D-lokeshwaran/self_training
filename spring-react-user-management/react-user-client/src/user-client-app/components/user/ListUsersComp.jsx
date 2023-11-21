import { retrieveAllUsers, deleteUserById, findUserById } from '../../api/UserApiService'
import { useEffect, useState } from 'react'
import { useLoader } from '../loader/LoaderContext'
import { useNavigate } from 'react-router-dom'

export default function ListUsersComp() {

    const[users, setUsers] = useState([]);
    const[message, setMessage] = useState(null);

    const loader = useLoader();
    const navigateTo = useNavigate();

    useEffect(() => {
       refreshTodos();
    }, []);

    async function refreshTodos() {
        loader.setLoading(true);
        await retrieveAllUsers()
            .then(users => setUsers(users))
            .catch(error => console.log(error));
        loader.setLoading(false);
    }

    function handleEdit(id) {
        navigateTo(`/user/${id}`);
    }
    function handleCreate() {
        navigateTo(`/user/-1`);
    }

    function handleDelete(id) {
        deleteUserById(id)
        .then(resp => {
            setMessage(`Successfully Deleted id = ${id} from users`)
            refreshTodos();
        })
        .catch(error => console.log(error));
    }

    return(
        <div className="container">
            {message && <div className="alert alert-warning">{message}</div>}
            <table className="table">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <button className="btn btn-success"
                                            onClick={() => handleEdit(user.id)}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button className="btn btn-success"
                        onClick={handleCreate}>Add User</button>
            </div>
        </div>
    )
}