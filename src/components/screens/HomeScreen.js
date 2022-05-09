import React from 'react';
import products from '../../products';
import { Row , Col, Container } from 'react-bootstrap';
import Product from '../SingleProduct/Product';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function HomeScreen() {
  return (
    <>
        <Header></Header>
        <main className="py-3">
            <Container>
                <Row>
                    {
                        products.map( product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product key={product._id} product={product}></Product>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </main>
        <Footer></Footer>
    </>
  )
}

export default HomeScreen