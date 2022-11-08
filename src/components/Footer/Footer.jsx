import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from 'assets/images/eco-logo.png'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                            <div>
                                <h1 className="text-white ">Multimart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                            lore lore lore lore lore lore lore lore lore lore lore lore lore lore
                            lore lore lore lore lore lore
                        </p>
                    </Col>
                    <Col lg="3">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title text-white">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title text-white">Useful Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title text-white">Contract</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span className="footer-contact">
                                        <i class="ri-map-pin-line"></i>
                                    </span>
                                    <p>123, anda anadka; wdnandwanalnda af</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span className="footer-contact">
                                        <i class="ri-phone-line"></i>
                                    </span>
                                    <p>+84 867876112</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span className="footer-contact">
                                        <i class="ri-mail-line"></i>
                                    </span>
                                    <p>nguyenvanphi.fi@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="12">
                        <p className="footer__copyrigth">Copyright {year} developer NV Phi</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
