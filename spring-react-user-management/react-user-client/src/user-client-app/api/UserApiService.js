/*
getAll: "users/getAllUsers"
create: "users/createUser"
update: "users/updateUser/"
delete: "users/"
*/

export const retrieveAllUsers =
    () => fetch('users/getAllUsers').then(resp => resp.json());