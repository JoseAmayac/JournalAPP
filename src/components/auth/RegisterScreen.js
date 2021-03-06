import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';


const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {  msgError } = useSelector(state => state.ui);
    

    const [ formValues, handleInputChange ] = useForm({
        name: "Josesito",
        email: "jose@gmail.com",
        password: "123456",
        confirm_password: "123456"
    })

    const { name, email, password, confirm_password } = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterEmailPasswordName(email, password, name));
        }

        
    }

    const isFormValid = ()=>{
        if (name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        }else if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        }else if (password !== confirm_password || password.length < 5) {
            dispatch(setError("Password should be at least 6 characters and match each another"));
            return false;
        }

        dispatch(removeError())
        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                {
                    msgError && (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="confirm_password"
                    className="auth__input"
                    value={confirm_password}
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block mt-5 mb-5">
                    Register
                </button>

                <Link className="link" to="/auth/login" >
                    Already Registered?
                </Link>
            </form>
        </div>
    )
}

export default RegisterScreen
