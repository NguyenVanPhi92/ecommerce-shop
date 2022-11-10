import React, { useEffect, useRef } from 'react'
import { Container, Row } from 'reactstrap'
import './header.scss'
import logo from '../../assets/images/eco-logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userIcon from 'assets/images/user-icon.png'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useStateSelector } from 'hooks/useStateSelector'

const nav__link = [
    {
        path: 'home',
        display: 'Home',
    },
    {
        path: 'Shop',
        display: 'Shop',
    },
    {
        path: 'cart',
        display: 'Cart',
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate()
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    console.log(totalQuantity)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    }, [])

    // handle
    const menuToggle = () => menuRef.current.classListt.toggle('active__menu')

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />

                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                                {nav__link.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            className={(navClass) =>
                                                navClass.isActive ? 'nav__active' : ''
                                            }
                                            to={item.path}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>

                            <span className="cart__icon" onClick={goToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <span>
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={userIcon}
                                    alt="user icon"
                                />
                            </span>

                            {/* Mobile Menu */}
                            <div className="mobile__menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
