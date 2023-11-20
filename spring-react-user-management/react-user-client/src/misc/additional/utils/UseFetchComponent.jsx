import React from 'react'

class UseFetchComponent extends React.PureComponent { // handle DELETE, GET mapping method only for now

    constructor(props) {
        super(props);
        this.state = {
            _data : [],
            _singleData : {},
            _url: "",
            _method: "GET"
        }
        this.useFetch = this.useFetch.bind(this);
    }

    call = () => {
        alert("Called")
    }

    useFetch = (url, method, body) => {
        method = method.toUpperCase();
        const isDelete = method == "DELETE"
        const isGet = method == "GET"
        const headers = isDelete ? "" :
                        {headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            }
                        }
        const contentBody = isGet ? null : {body:JSON.stringify({body})}

        const fetched = fetch(url, {
            method: method.toUpperCase(),
            ...headers,
            ...contentBody
        })
        if(isGet) {
            fetched.then(response => response.json())
                   .then(resp => this.setState({data: resp, usersList: resp}))
        }
        return this.state.data;
    };

}

export default {UseFetchComponent}