import React from 'react'

export class PopUp extends React.Component {

    render() {
        const popUpStyle = {
            zIndex: "100px",
            border: "1px solid green",
            top: "45%",
            width: "fit-content",
            position: "fixed",
            left: 0,
            right: 0,
            margin: "auto",
            zIndex: 200,
        }
        const overlay = {
            zIndex: 100,
            opacity: "0.4",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%"
        }
        return(
            <>
                <div className="bg-light" style={overlay}></div>
                <div className="text-center p-3 bg-light rounded" style={popUpStyle}>
                    <span>{this.props.message}</span>
                    <div>

                        <button className="btn btn-primary mt-3 float-right"
                                onClick={() => this.props.handlePopUp(true)}>Ok</button>
                        <button className="btn btn-outline-secondary mr-3 mt-3 float-right"
                                onClick={() => this.props.handlePopUp(false)}>Cancel</button>
                    </div>
                </div>
            </>
        )
    }

}