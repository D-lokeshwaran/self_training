import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { useState, useEffect } from 'react'
import style from 'styled-components';
import { createUserApi, updateUserApi, findUserById } from '../../api/UserApiService'

export default function UserDetails() {

    const[name, setName] = useState('');
    const[age, setAge] = useState(0);
    const[gender, setGender] = useState(null);

    const {id} = useParams();
    const navigateTo = useNavigate();
    const genders = ['Male', 'Female', 'Other'];

    useEffect(() => {
        retrieveUser();
    }, [id]);

    function retrieveUser() {
        if(id != -1) {
            findUserById(id)
            .then(resp => {
                setName(resp.name)
                setAge(resp.age)
                setGender(resp.gender)
            })
            .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        // create / update api call
        // return to list
        const user = {
            name: values.name,
            age: values.age,
            gender: values.gender
        }
        if(id == -1) {
            createUserApi(user)
            .then(resp => {
                navigateTo("/users")
            })
            .catch(error => console.log(error));
        } else {
            handlePromise(updateUserApi(user, id));
        }
    }

    function handlePromise(promise) {
        promise.then(resp => {
            navigateTo("/users")
        }).catch(error => console.log(error))
    }

    return(
        <div className="container">
            <h1>Enter the User Details </h1>
            <Formik initialValues={ { name, age, gender } }
                    enableReinitialize = {true}
                    onSubmit={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>User Name</label>
                                <Field className="form-control" type="text" name="name"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Age</label>
                                <Field className="form-control" type="number" name="age"/>
                            </fieldset>
                            <fieldset>
                                <div className="m-2">
                                    {
                                        genders.map((gender) =>
                                            <label className="m-3">
                                                <Field name="gender" type="radio" value={gender}/> {gender}</label>
                                        )
                                    }
                                </div>
                            </fieldset>
                            <div>
                                <button className="btn btn-success" type="submit">
                                    {id != -1 ? 'Update' : 'Create'} User</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}