import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { IFormikValues } from "../../../interfaces/LoginTypes";
import { ActionTypes, UserState } from "../../../redux/reduxTypes";
import axiosService from "../../../services/axiosService";
import TextInput from "../../TextInputs/TextInput";
import yupValidation from "./yupValidation";


const Login : React.FC = () => 
{
    const [redirect, setRedirect] = useState(false);
    var dispatch = useDispatch();
    var initialValues: IFormikValues = 
    {
        email: '',
        password:''
    }
    const onSubmitHandler = async (values: any) => 
    {
        try
        {
            var result = await axiosService.login(values);
            console.log(result);
            var stateUser : UserState = 
            {
                user: result.data.user,
                access_token: result.data.access_token
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
        <h1 className="text-center">Вхід в аккаунт</h1>
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

                            <input type="submit" className="btn btn-success mt-3" value="Ввійти" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div></> : <Navigate to="/"/>}
    </div>);
}

export default Login;