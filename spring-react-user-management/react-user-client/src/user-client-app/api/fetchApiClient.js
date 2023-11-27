function handleOptions(options) {
    const update = { ...options }; // get all options
    if (localStorage.token) {
        update.headers = { // if token present add token
           ...update.headers,
           'Authorization': localStorage.token,
        };
    }
    return update;
}

export const fetchApiClient = (url, options) => {
  return fetch(url, handleOptions(options));
}