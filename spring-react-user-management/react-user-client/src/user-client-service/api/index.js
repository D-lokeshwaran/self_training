
const userApi = {
    getAll: "users/getAllUsers",
    create: "users/createUser",
    update: "users/updateUser/",
    delete: "users/"
}

const fetchApi = (url) => {
    try {
        return fetch(url).then(resp => resp.json())
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const retrieveAllUsers = () => {
    return fetchApi('users/getAllUsers');
}

export const retrieveUserById = (id) => {
}
