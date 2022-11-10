import products from 'assets/data/products'
import Helmet from 'components/Helmet/Helmet'
import CommonSection from 'components/UI/CommonSection'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import 'style/product-detail.scss'
import { motion } from 'framer-motion'
import ProductList from 'components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from 'app/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetail = () => {
    const { id } = useParams()
    const [tab, setTab] = useState('desc')
    const [rating, setRating] = useState(null)
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()
    const product = products.find((item) => item.id === id)
    const { avgRating, description, category, imgUrl, price, productName, reviews, shortDesc } =
        product

    const relatedProducts = products.filter((item) => item.category === category)

    //handle
    const submitHandle = (e) => {
        e.preventDefault()

        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
    }

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: id,
                image: imgUrl,
                productName,
                price,
            }),
        )
        toast.success('Add product successfully')
    }

    useEffect(() => {
        window.screenTop(0, 0)
    }, [product])

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
                                <div className="product__rating d-flex align-content-center gap-5 mb-3 rating__group">
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

                                <div>
                                    <span className="product__price">${price}</span>
                                    <span className="ms-3">Category: {category}</span>
                                </div>
                                <p>{shortDesc}</p>

                                <motion.button
                                    whileTap={{ scale: 1.045 }}
                                    className="buy__btn"
                                    onClick={addToCart}
                                >
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
                                <div className="product__review mt-5">
                                    <div className="review__wrapper">
                                        <ul>
                                            {reviews.map((item, index) => (
                                                <li className="mb-4" key={index}>
                                                    <h6>Jhon Doe</h6>
                                                    <span>{item.rating} (average rating)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="review__form">
                                            <h4>Leave your experience</h4>

                                            <form action="" onSubmit={submitHandle}>
                                                <div className="form__group">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter name"
                                                        ref={reviewUser}
                                                    />
                                                </div>

                                                <div className="form__group">
                                                    <span onClick={() => setRating(1)}>
                                                        1 <i className="ri-star-s-fill" />
                                                    </span>
                                                    <span onClick={() => setRating(2)}>
                                                        2 <i className="ri-star-s-fill" />
                                                    </span>
                                                    <span onClick={() => setRating(3)}>
                                                        3 <i className="ri-star-s-fill" />
                                                    </span>
                                                    <span onClick={() => setRating(4)}>
                                                        4 <i className="ri-star-s-fill" />
                                                    </span>
                                                    <span onClick={() => setRating(5)}>
                                                        5 <i className="ri-star-s-fill" />
                                                    </span>
                                                </div>

                                                <div className="form__group">
                                                    <textarea
                                                        type="text"
                                                        placeholder="Review message..."
                                                        ref={reviewMsg}
                                                    />
                                                </div>

                                                <button className="buy__btn">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>

                        <Col lg="12" className="mt-5">
                            <h2 className="related__title">You might also like</h2>
                        </Col>

                        <ProductList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default ProductDetail
