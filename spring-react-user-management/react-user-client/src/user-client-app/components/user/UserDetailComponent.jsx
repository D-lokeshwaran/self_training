import { useParams, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState, useEffect } from 'react'
// import style from 'styled-components';
import { createUserApi, updateUserApi, findUserById } from '../../api/UserApiService'
import { useLoader } from '../loader/LoaderContext'

export default function UserDetails() {

    const[name, setName] = useState('');
    const[age, setAge] = useState(0);
    const[gender, setGender] = useState(null);

    const {id} = useParams();
    const navigateTo = useNavigate();
    const loader = useLoader();
    const genders = ['Male', 'Female', 'Other'];

    useEffect(() => {
        retrieveUser();
    }, [id]);

    async function retrieveUser() {
        if(id != -1) {
            loader.setLoading(true);
            await findUserById(id)
            .then(resp => {
                setName(resp.name)
                setAge(resp.age)
                setGender(resp.gender)
            })
            .catch(error => console.log(error))
            loader.setLoading(false);
        }
    }

    function onSubmit(values) {
        const user = {
            name: values.name,
            age: values.age,
            gender: values.gender
        }
        console.log(user);
        if(id == -1) {
            handlePromise(createUserApi(user));
        } else {
            handlePromise(updateUserApi(user, id));
        }
    }

    function validate(values) {
        let errors = {};

        if(values.name.length < 2) {
            errors.name = 'Enter Name Greater Than 2'
        }
        if(values.age < 18 || values.age > 60) {
            errors.age = 'Enter Age Greater than 18 lesser Than 60'
        }
        if(values.gender == null) errors.gender = 'Please Select One Gender';

        return errors;
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
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
            >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="alert alert-warning" key="name-error"/>
                            <ErrorMessage
                                name="age"
                                component="div"
                                className="alert alert-warning" key="age-error"/>
                            <ErrorMessage
                                name="gender"
                                component="div"
                                className="alert alert-warning" key="gender-error"/>
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