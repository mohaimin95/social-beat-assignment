import React from 'react';
import environment from '../../environment';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="list-group">
            <div className="list-group-item">
                1. To signup and insert products into collections please click  <a href={`${environment.BASE_URL}/product/insertMany`} target="_blank">here</a>.
            </div>
            
            <div className="list-group-item">
                2. To signup use email : <code>mohaimin95@gmail.com</code> password : <code>123</code>.
            </div>
            
            <div className="list-group-item">
                3. To see admin page <Link to="/admin">click here</Link> .
            </div>

        </div>
    )
}