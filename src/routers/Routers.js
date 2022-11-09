import Cart from 'pages/Cart'
import CheckOut from 'pages/Checkout'
import Home from 'pages/Home'
import Login from 'pages/Login'
import ProductDetail from 'pages/ProductDetail'
import Shop from 'pages/Shop'
import Signup from 'pages/Signup'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="home/shop/:id" exact element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    )
}

export default Routers
