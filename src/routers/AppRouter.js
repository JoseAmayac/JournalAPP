import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router , Redirect, Switch } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'

import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { startLoadingNotes } from '../actions/notes'

const AppRouter = () => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user)=>{
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));

            }else{
                setIsLoggedIn(false);
            }

            setLoading(false);
        });
    }, [ dispatch ])

    return (
    loading 
    ? 
        <h1>Wait...</h1> 
    : 
        (<Router>
            <Switch>
                <PublicRoute path="/auth" component={ AuthRouter } isLoggedIn={isLoggedIn} />

                <PrivateRoute exact path="/" component={ JournalScreen } isLoggedIn={ isLoggedIn } />

                <Redirect to="/" />
            </Switch>
        </Router>))
}

export default AppRouter
