import products from 'assets/data/products'
import Helmet from 'components/Helmet/Helmet'
import CommonSection from 'components/UI/CommonSection'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import 'style/product-detail.scss'
import { motion } from 'framer-motion'

const ProductDetail = () => {
    const { id } = useParams()
    const [tab, setTab] = useState('desc')
    const product = products.find((item) => item.id === id)
    const { avgRating, category, description, imgUrl, price, productName, reviews, shortDesc } =
        product

    return (
        <Helmet title={productName}>
            <CommonSection />

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-content-center gap-5 mb-3">
                                    <div>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-half-fill"></i>
                                        </span>
                                    </div>

                                    <p>({avgRating}ratings)</p>
                                </div>

                                <span className="product__price">${price}</span>
                                <p>{shortDesc}</p>

                                <motion.button whileTap={{ scale: 1.045 }} className="buy__btn">
                                    Add to cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6
                                    className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('desc')}
                                >
                                    Description
                                </h6>
                                <h6
                                    className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('rev')}
                                >
                                    Reviews {reviews.length}
                                </h6>
                            </div>

                            {tab === 'desc' ? (
                                <div className="tab__content mt-3">
                                    <p>{description}</p>
                                </div>
                            ) : (
                                <div>reviews</div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetail
