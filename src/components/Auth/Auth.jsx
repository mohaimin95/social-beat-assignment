import React from 'react';
import Login from './Login';
import Register from './Register';
import "./Auth.css"
import {  Route, Switch,  Redirect, NavLink } from 'react-router-dom';
import environment from '../../environment';

export default () => {
    return (
        <div className="container mt-5 text-center">
            <div className="card">
                <div className="card-header">{environment.APP_NAME}</div>
                <div className="card-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/auth/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/auth/register">Sign up</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Redirect exact from="/auth" to="/auth/login"/>
                        <Route exact path={"/auth/login"} component={Login} />
                        <Route exact path={"/auth/register"} component={Register} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}