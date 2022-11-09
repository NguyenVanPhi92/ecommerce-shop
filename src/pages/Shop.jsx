import products from 'assets/data/products'
import Helmet from 'components/Helmet/Helmet'
import CommonSection from 'components/UI/CommonSection'
import ProductList from 'components/UI/ProductList'
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import 'style/shop.scss'

const Shop = () => {
    const [productsData, setProductsData] = useState(products)

    //handle
    const handleFilter = (e) => {
        const filterValue = e.target.value
        console.log(filterValue)
        console.log(filterValue === 'wireless')
        if (filterValue === 'sofa') {
            const filtredProducts = products.filter((item) => item.category === 'sofa')
            setProductsData(filtredProducts)
        }

        if (filterValue === 'mobile') {
            const filtredProducts = products.filter((item) => item.category === 'mobile')
            setProductsData(filtredProducts)
        }

        if (filterValue === 'chair') {
            const filtredProducts = products.filter((item) => item.category === 'chair')
            setProductsData(filtredProducts)
        }

        if (filterValue === 'watch') {
            const filtredProducts = products.filter((item) => item.category === 'watch')
            setProductsData(filtredProducts)
        }
        if (filterValue === 'wireless') {
            console.log('hi')
            const filtredProducts = products.filter((item) => item.category === 'wireless')
            setProductsData(filtredProducts)
        }
        if (filterValue === '') {
            setProductsData(products)
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        const searchedProducts = products.filter((item) =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
        )

        setProductsData(searchedProducts)
    }

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />

            {/* FILTER Products Category */}
            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option value="">Filter by Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select>
                                    <option>Sort by</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="search__box">
                                <input
                                    type="text"
                                    placeholder="search value..."
                                    onChange={handleSearch}
                                />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {productsData.length === 0 ? (
                            <h1 className="text-center fs-4">No found result</h1>
                        ) : (
                            <ProductList data={productsData} />
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop
