import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import environment from '../../environment';
import { connect } from 'react-redux';
import apiService from '../../services/api.service';
import { onInitAppData } from '../../state/app.actions';
const Products = props => {
    let [products,setProducts] = useState([]); 
    useEffect(()=>{

        apiService.initAppData().then(res=>{
            props.setAppData(res.data.data)
        }).catch(err=>{
    
        });
        axios.get(`${environment.BASE_URL}/product`, {
            headers: {
                authorization:localStorage.getItem('token')
            }
        }).then(res=>{
            setProducts(res.data.data)
        }).catch(err=>{
            alert("Error in getting products");
        })
    },[])
    return (
        <div>
            <div className="row">
                {
                    products.map(product=><Product key={product._id} product={product} />)
                }
            
            </div>
        </div>
    )
}
const mapStateToProps = state => {
  return {
      token:state.token,
      cart:state.cart,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setAppData:(user)=>dispatch(onInitAppData(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);