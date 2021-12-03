import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { IFormikRegisterValues } from "../../../interfaces/LoginTypes";
import { ActionTypes, UserState } from "../../../redux/reduxTypes";
import axiosService from "../../../services/axiosService";
import TextInput from "../../TextInputs/TextInput";
import yupValidation from "./yupValidation";


const Register : React.FC = () => 
{
    const [redirect, setRedirect] = useState(false);
    var dispatch = useDispatch();
    var initialValues: IFormikRegisterValues = 
    {
        email: '',
        password:'',
        name: '',
        password_confirmation:''
    }
    const onSubmitHandler = async (values: any) => 
    {
        try
        {
            var result = await axiosService.register(values);
            var stateUser : UserState = 
            {
                user: result.data.user,
                access_token: ''
            }
            dispatch({type:ActionTypes.INIT, payload: stateUser});
            setRedirect(true);
        }
        catch(ex) 
        {
            console.log(ex);
        }
    }

    return (<div className="mt-3">
        {!redirect ? <>
        <h1 className="text-center">Реєстрація</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={yupValidation}
                        onSubmit={onSubmitHandler}
                    >
                        <Form>
                            <TextInput
                                label="Ім'я"
                                name="name"
                                id="name"
                                type="text"
                            />
                            <TextInput
                                label="Електронна адреса"
                                name="email"
                                id="email"
                                type="text"
                            />
                            <TextInput
                                label="Пароль"
                                name="password"
                                id="password"
                                type="password"
                            />
                            <TextInput
                                label="Підтвердіть пароль"
                                name="password_confirmation"
                                id="password_confirmation"
                                type="password"
                            />

                            <input type="submit" className="btn btn-success mt-3" value="Зареєструватися" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
        </> : <><Navigate to="/"/></>}
    </div>);
}

export default Register;