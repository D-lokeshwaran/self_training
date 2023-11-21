export const retrieveAllUsers =
    () => fetch('/users/getAllUsers').then(resp => resp.json());

export const deleteUserById =
    (id) => fetch(`/users/${id}`, {method: "DELETE"})

export const findUserById =
    (id) => fetch(`/users/${id}`).then(resp => resp.json());

export const createUserApi =
    (user) => fetch("/users/createUser", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });

export const updateUserApi =
    (user, id) => fetch(`/users/updateUser/${id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });