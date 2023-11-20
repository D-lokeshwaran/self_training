import React from 'react';

class PrimaryInput extends React.PureComponent {


    format = (header) => {
        // imp to note l the $1 is represent ([a-z]), $2 rep ([A-Z])
        header = header[0].toUpperCase() + header.slice(1)
                    .replace(/([a-z])([A-Z])/g, '$1 $2');
        return header;
    }

    render() {
        const className = this.props.class ? this.props.class : "invalid"

        const inputStyle = {
            marginTop: "-20px",
            padding: "20px 15px",
        }
        const frameTitleS = {
            backgroundColor: "white",
            padding: "3px 5px",
            marginLeft: "10px",
            color: className.includes("invalid") ? "#dc3545" : "green",
            fontSize: "2.100vmin"
        }

        const header = this.format(this.props.name);
        return(
            <>
                <fieldSet className="mb-3">
                    <label style={frameTitleS}>{header}</label>
                    <input className={this.props.class} id="validationName" type={this.props.type} name={this.props.name} value={this.props.value}
                           onChange={this.props.onChange} style={inputStyle}/>
                    <div className="invalid-feedback mt-2" >
                        {this.props.message ? this.props.message : `${header} is required` }
                    </div>
                </fieldSet>
            </>
        )
    }
}

export default PrimaryInput;