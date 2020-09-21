import React, { useState, useEffect } from 'react';
import axios from 'axios';
import environment from '../../environment';
import { connect } from 'react-redux';
import { authSuccess, logout } from '../../state/app.actions';

const Login = props => {
    useEffect(() => {
        props.logout();
    }, [])
    let [email, setEmail] = useState("mohaimin95@gmail.com");
    let [password, setPassword] = useState("123");
    let [errorMsg, setErrorMsg] = useState("");
    const login = e => {
        e.preventDefault();
        setErrorMsg("");
        let credentials = { email, password };
        axios.post(`${environment.BASE_URL}/user/login`, credentials).then(res => {
            let { token } = res.data;
            localStorage.setItem('token', token);
            props.login(token)
            props.history.push("/");
        }).catch(err => {
            setErrorMsg("Invaid email/password !");
        });

    }
    return (
        <div className="text-left mt-3">
            {props.token}
            <form onSubmit={login}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="Enter your email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Enter your password" className="form-control" />
                </div>
                {
                    errorMsg && <p className="text-danger">{errorMsg}</p>
                }
                <div className="text-center">
                    <button type="submit" className="btn btn-primary pl-5 pr-5">Login</button>
                </div>
            </form>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        token: state.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: token => dispatch(authSuccess(token)),
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);