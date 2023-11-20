import React from 'react'
import PrimaryInput from "../components/PrimaryInput.jsx"

export class User extends React.Component {

    render() {
        const nameClass = "form-control " + (this.props.user.name ? "is-valid" : "is-invalid" )
        const ageClass = "form-control " + (this.props.user.age >= 18 & this.props.user.age < 60
                ? "is-valid" : "is-invalid" )
        const gender = this.props.user.gender.toUpperCase();
        var genderIndex = gender === 'MALE' ? 0 : gender === 'FEMALE' ? 1 : 2;
        return(
            <div>
                <div className="shadow p-5 rounded mt-3 form-group" style={{width: "30%", margin: "0 auto"}}>
                    <form onSubmit={this.props.handleSubmit} method="POST">
                        <h2 className="text-center">{this.props.isEdit ? "Update" : "Create"} User</h2>
                        <hr/>
                        <PrimaryInput class={nameClass} name="name" value={this.props.user.name} onChange={this.props.handleOnChange}/>
                        <PrimaryInput class={ageClass} type="number" name="age" value={this.props.user.age}
                                      onChange={this.props.handleOnChange} message="Age should be greater than 17 or lesser than 60"/>
                        <fieldSet className="form-group mt-3">
                            <label>Gender:</label>
                            <span className="ml-3 mb-3" onChange={this.props.handleOnChange}>
                                <span className="pr-2">
                                    <input name="gender" type="radio"  value="Male" checked={genderIndex == 0}/> Male
                                </span>
                                <span className="p-2">
                                    <input name="gender" type="radio" value="Female" checked={genderIndex == 1}/> Female
                                </span>
                                <span className="p-2">
                                    <input name="gender" type="radio" value="Other" checked={genderIndex == 2}/> Other
                                </span>
                            </span>
                        </fieldSet>
                        {
                        this.props.isEdit ?
                            <div className="form-row">
                                <button className="btn btn-primary col">Update User</button>
                                <button className="ml-4 btn btn-secondary col"
                                        onClick={() => {this.props.cancelEdit()}}>Cancel</button>
                            </div> :
                            <div className="form-row">
                                <button className="w-100 btn btn-primary col">Create User</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        )
    }

}