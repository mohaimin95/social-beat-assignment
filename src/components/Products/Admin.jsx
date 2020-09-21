import React, { useEffect, useState } from 'react';
import apiService from '../../services/api.service';

export default () => {
    let [orders, setOrders] = useState([])
    useEffect(() => {
        apiService.getOrders().then(res => {
            setOrders(res.data.data || [])
        }).catch(err => {
            alert("Error in getting orders !")
        })
    }, [])
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Items</th>
                    <th>No. of Items</th>
                    <th>Amount</th>
                    <th>Ordered On</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => (
                        <tr key={order._id}>
                            <td>{order.products.join(",")}</td>
                            <td>{order.products.length}</td>
                            <td>Rs.{order.amount}/-</td>
                            <td>{new Date(order.createdAt).toDateString()}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}