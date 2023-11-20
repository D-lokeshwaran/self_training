import React from 'react'
import PrimaryInput from "../components/PrimaryInput.jsx"
import { Frame } from "../components/Frame.jsx"

export class User extends React.Component {
    getValidClass = (prop) => {
        return "form-control " + (prop ? "is-valid" : "is-invalid" )
    }
    render() {
        const nameClass = this.getValidClass(this.props.user.userName);
        const ageClass = this.getValidClass(this.props.user.age);
        const userNameClass = this.getValidClass(this.props.user.userName);
        const passwordClass = this.getValidClass(this.props.user.password);
        const gender = this.props.user.gender.toUpperCase();
        var genderIndex = gender === 'MALE' ? 0 : gender === 'FEMALE' ? 1 : 2;
        const formWidth = "50%";
        return(
            <div>
                <div className="shadow p-5 rounded mt-3 form-group" style={{width: formWidth, margin: "0 auto"}}>
                    <form onSubmit={this.props.handleSubmit} method="POST">
                        <h3 className="text-center">{this.props.isEdit ? "Update" : "Create"} User</h3>
                        <hr/>
                        <div className="d-flex w-100">
                            <div className="w-50 mr-4 mt-3">
                                <PrimaryInput class={userNameClass} name="userName" value={this.props.user.userName} onChange={this.props.handleOnChange}/>
                                <PrimaryInput class={passwordClass} name="password" type="password" value={this.props.user.password} onChange={this.props.handleOnChange}/>
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
                            </div>
                             <Frame title="Personal Details" class="w-50">
                                <PrimaryInput class={ageClass} type="number" name="age" value={this.props.user.age}
                                              onChange={this.props.handleOnChange} message="Age should be greater than 18"/>
                                <fieldSet className="form-group" >
                                    <label>Gender:</label><br/>
                                    <span className=" mb-3" onChange={this.props.handleOnChange}>
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
                             </Frame>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}