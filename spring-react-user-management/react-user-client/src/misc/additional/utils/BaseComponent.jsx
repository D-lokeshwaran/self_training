import React from 'react'

export class BaseComponent extends React.Component {

    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.useTimeOut = this.useTimeOut.bind(this);
    }

    getState(state) {
        const dotSplit = state.split(".")
        const currState = this.state;
        if(dotSplit.length === 1) {
            return currState[state];
        } else {
            var parent = currState[dotSplit[0]];
            dotSplit.forEach((child, index) => {
                if(index > 0) {
                    parent = parent[child];
                }
            })
            return parent;
        }
    }

    useTimeOut = (state, delay) => {
        delay = delay ? delay : 500
        this.setState({[state]: true})
        setTimeout(() => {
            this.setState({[state]: false})
        }, delay)
    }

}
