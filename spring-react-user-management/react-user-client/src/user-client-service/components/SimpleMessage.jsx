import React from 'react'

export class Message extends React.Component {

    render() {
        const messageBox = {
            width: "fit-content",
            margin: "0 auto"
        }
        const alertClass = `fixed-top alert alert-${this.props.type} alert-dismissible`
        return(
            <>
                {this.props.show &&
                    <div class={alertClass} style={messageBox}>
                        <button href="#" class="close" data-dismiss="alert" onClick={this.props.hide}>&times;</button>
                        {this.props.message}
                    </div>
                }
            </>
        )
    }

}