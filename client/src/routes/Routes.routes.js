import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/layout/Header'
import Home from '../components/Home'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'

function Routes() {
    return (
        <>
            <Header />
            <>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Switch> 
            </> 
        </>
    )
}

export default Routes
