const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    productDetails: {
        loading: true,
        error: false,
        product: {
            "name": "",
            "image": "",
            "brand": "",
            "category": "",
            "description": "",
            "rating": 0,
            "numReviews": 0,
            "price": 0,
            "countInStock": 0,
            "reviews": []
        }
    },
    productList: {
        products: []
    },
    cart: {
        cartItems: cartItemsFromStorage
    }
}

export default initialState