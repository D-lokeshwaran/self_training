import React from 'react';

class InputProp extends React.PureComponent {
    render() {
        return(
            <>
                <label className="mt-2 ">{this.props.labelName}:</label><br/>
                <input className="w-100"
                       type={this.props.type}
                       required={this.props.required}/><br/>
            </>
        )
    }
}

export default InputProp;