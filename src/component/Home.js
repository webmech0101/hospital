import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
    <div className='hp-home' id="action1">
      <Row className='home-row'>
        <Col md={7} className='home-right'>
            <div className='home-box'>
                <h1>Hospital provides total healthcare solutions</h1>
            </div>
        </Col>
        <Col md={5}>

        </Col>
      </Row>
    </div>
  )
}

export default Home
