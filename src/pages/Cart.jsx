import { cartActions } from 'app/slices/cartSlice'
import Helmet from 'components/Helmet/Helmet'
import CommonSection from 'components/UI/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import 'style/cart.scss'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const deleteProduct = (item) => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />

            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.imgUrl} alt="" />
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <span onClick={() => deleteProduct(item)}>
                                                        <i className="ri-delete-bin-6-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div>
                                <h6>Subtotal</h6>
                                <span>${totalAmount}</span>
                            </div>
                            <p>taxes and - shipping will calculate in checkout</p>

                            <div>
                                <button className="buy__btn">Checkout</button>
                                <button className="buy__btn">Continute shopping</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart
