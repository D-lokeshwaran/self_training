import { fetchApiClient } from './fetchApiClient'

export const retrieveAllUsers =
    () => fetchApiClient('/users/getAllUsers').then(resp => resp.json());

export const deleteUserById =
    (id) => fetchApiClient(`/users/${id}`, {method: "DELETE"})

export const findUserById =
    (id) => fetchApiClient(`/users/${id}`).then(resp => resp.json());

export const createUserApi =
    (user) => fetchApiClient("/users/createUser", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });

export const updateUserApi =
    (user, id) => fetchApiClient(`/users/updateUser/${id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });