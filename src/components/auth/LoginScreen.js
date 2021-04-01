import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'nando@gmail.com',
        password: '123456'
    });
    
    const { email, password } = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();

        if (isValidForm()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
    }

    const isValidForm = ()=>{

        if (!email || !password) {
            dispatch(setError("Email and password are required"));
            return false;
        }

        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin } >
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

                <button disabled={ loading } type="submit" className="btn btn-primary btn-block">
                    {!loading ? 'Login' : 'Sending...'}
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register" >
                    Create new account
                </Link>
            </form>
        </div>
    )
}

export default LoginScreen
