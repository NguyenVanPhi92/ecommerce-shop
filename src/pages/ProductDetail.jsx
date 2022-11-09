import products from 'assets/data/products'
import Helmet from 'components/Helmet/Helmet'
import CommonSection from 'components/UI/CommonSection'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import 'style/product-detail.scss'

const ProductDetail = () => {
    const { id } = useParams()
    const product = products.find((item) => item.id === id)
    const { avgRating, category, description, imgUrl, price, productName, reviews, shortDesc } =
        product

    return (
        <Helmet title="product detai">
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
                                <div className="product__rating">
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

                                <span>{price}</span>
                                <p>{shortDesc}</p>

                                <button className="buy__btn">Add to cart</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetail
