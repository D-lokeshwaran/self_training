import { retrieveAllUsers } from '../../api/UserApiService'
import { useEffect, useState } from 'react'
import { useLoader } from '../loader/LoaderContext'

export default function ListUsersComp() {

    const[users, setUsers] = useState([]);

    const loader = useLoader();

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

    return(
        <div className="container">
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}