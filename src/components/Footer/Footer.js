import React from 'react'
import { Container , Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="12" className='text-center'>copywright &copy; proshop </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer