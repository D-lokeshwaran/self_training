import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export class Loading extends React.Component {

    render() {
        const loaderStyle = {
            background: "white",
            textAlign: "center",
            width: "fit-content",
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: "100",
            padding: "20%",
            opacity: 0.9
        }

        return (
            <>
                {this.props.isLoading && <div style={loaderStyle}>
                    <ClipLoader size={40}
                                loading={this.props.isLoading}/>
                </div>
                }
            </>
        )
    }

}