const initialState = {
    token: localStorage.getItem('token') || null,
    cart: 0,
    user:null
}

const authStore = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_AUTH':
            localStorage.setItem('token', action.token);
            return {
                ...state,
                token: action.token
            }
            break;

        case 'ON_LOGOUT':
        case 'ON_AUTH_FAILED':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null
            }
            break;
            
        case 'ON_CART_UPDATE':
            return {
                ...state,
                cart:action.count
            }
            break;
            
        case 'ON_INIT_APP_DATA':
            return {
                ...state,
                user:action.data,
                cart:action.data.cart.length
            }
            break;

        default:
            return { ...state };
            break;
    }
}

export default authStore;