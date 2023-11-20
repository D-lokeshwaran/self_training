import React from 'react';

export class Fetch extends React.PureComponent {

    static fetchAllUsers = (url) => {
        var response = [];
        const data = fetch(url)
            .then(resp => resp.json())
            .then(result => result.data); // GET ALL Users Fetch
    }

}