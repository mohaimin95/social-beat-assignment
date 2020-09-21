import React from 'react';
import environment from '../../environment';
import { Link, NavLink } from 'react-router-dom';

export default (props) => {
    const logout = () => {
        props.logout();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#"><b>{environment.APP_NAME}</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/admin">Admin</NavLink>
                                    </li>
                    {
                        props.token ? (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/cart">Cart ({props.cart || 0})</NavLink>
                                </li>

                                <li className="nav-item">
                                    <span className="nav-link" onClick={logout}>logout</span>
                                </li>

                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/auth/login">Login</NavLink>
                                    </li>
                                </React.Fragment>
                            )
                    }
                </ul>
            </div>
        </nav>
    )
}