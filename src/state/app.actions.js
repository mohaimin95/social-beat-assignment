export const authSuccess = (token) => {
    return {
        type: 'ON_AUTH',
        token
    }
}

export const authFailed = () => {
    return {
        type: 'ON_AUTH_FAILED',
        token: null
    }
}
export const logout = () => {
    return {
        type: 'ON_LOGOUT',
        token: null
    }
}

//app
export const updateCartCount = (count) => {
    return {
        type: 'ON_CART_UPDATE',
        count
    }
}
export const onInitAppData = (data) => {
    return {
        type: 'ON_INIT_APP_DATA',
        data
    }
}


