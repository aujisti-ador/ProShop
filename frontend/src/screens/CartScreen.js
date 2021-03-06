import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartAction'

function CartScreen() {
    const { id: productId } = useParams()
    let location = useLocation().search
    const qty = location ? Number(location.split('=')[1]) : 1
    // console.log(`productID: ${id} || location: ${location}`)
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
