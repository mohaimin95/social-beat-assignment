import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Navbar from './components/layouts/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout,onInitAppData } from './state/app.actions';
import apiService from './services/api.service';
import Cart from './components/Products/Cart';
import Admin from './components/Products/Admin';

function App(props) {
  return (
    <BrowserRouter>
      <Navbar token={props.token} cart={props.cart} logout={props.logout} />
      {
        props.token ? (
          <div>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Redirect from="/auth" to="/"/>
          </div>
        ) : (
          <div>
            <Redirect from="/" to="/auth/login"/>
            <Route path="/auth" component={Auth} />
          </div>
        )
      }
      <Route exact path="/admin" component={Admin} />
      <div>

      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return {
      token:state.token,
      cart:state.cart,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout:()=>dispatch(logout()),
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);
