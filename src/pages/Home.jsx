import Helmet from 'components/Helmet/Helmet'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import heroImg from 'assets/images/hero-img.png'
import '../style/home.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from 'services/Services'
import ProductList from 'components/UI/ProductList'
import products from 'assets/data/products'
import counter from 'assets/images/counter-timer-img.png'
import Clock from 'components/UI/Clock'

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [mobileProduct, setMobileProduct] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    const year = new Date().getFullYear()

    useEffect(() => {
        const filterTrendingProducts = products.filter((item) => item.category === 'chair')
        const filterBestSalesProducts = products.filter((item) => item.category === 'sofa')
        const filtermobileProducts = products.filter((item) => item.category === 'mobile')
        const filterWirelessProducts = products.filter((item) => item.category === 'wireless')
        const filterPopularProducts = products.filter((item) => item.category === 'watch')

        setTrendingProducts(filterTrendingProducts)
        setBestSalesProducts(filterBestSalesProducts)
        setMobileProduct(filtermobileProducts)
        setWirelessProducts(filterWirelessProducts)
        setPopularProducts(filterPopularProducts)
    }, [])

    return (
        <Helmet title="Home">
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistics & Modern </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book
                                </p>

                                <motion.button whileTap={{ scale: 1.025 }} className="buy__btn">
                                    <Link to="/shop">SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="secion__title">Trending Products</h2>
                        </Col>

                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="secion__title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="clock__top-content">
                                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button
                                whileTap={{ scale: 1.025 }}
                                className="buy__btn store__btn mt-4"
                            >
                                <Link to="/shop">Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg="6" md="6" className="text-end">
                            <img src={counter} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>

                        <ProductList data={mobileProduct} />
                        <ProductList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">Popular in Category</h2>
                        </Col>

                        <ProductList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home
