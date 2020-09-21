import axios from 'axios';
import environment from '../environment';
const apiService = {
    getToken:()=>(localStorage.getItem('token') || null)
}

apiService.initAppData = () => {
    return axios.get(`${environment.BASE_URL}/user/app-data`,{
        headers:{
            authorization:apiService.getToken()
        }
    })
}

apiService.getCartData = () => {
    return axios.get(`${environment.BASE_URL}/user/cart`,{
        headers:{
            authorization:apiService.getToken()
        }
    })
}
apiService.removeCartItem = (cartItemId) => {
    return axios.delete(`${environment.BASE_URL}/user/cart/${cartItemId}`,{
        headers:{
            authorization:apiService.getToken()
        }
    })
}
apiService.proceedToCheckout = (amount) => {
    return axios.put(`${environment.BASE_URL}/user/proceedToCheckout`,{
        amount
    },{
        headers:{
            authorization:apiService.getToken()
        }
    })
}
apiService.getOrders = () => {
    return axios.get(`${environment.BASE_URL}/user/orders`);
}


export default apiService;