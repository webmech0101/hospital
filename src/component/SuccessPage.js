import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Success() {
  return (
    <div className='hp-success-div'>
      <div>
        <h1>Keep Your Headup & Be Patient</h1>
        <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the
system and expound the actual teachings of the great.</p>
      </div>
      <div>
        <Row>
            <Col md={3} className='success-col'>
                <img src="../../img/icon.jpg" />
                <h6>25</h6>
                <h6>Years Of Experience</h6>
            </Col>
            <Col md={3} className='success-col'>
                <img src="../../img/icon2.jpg" />
                <h6>145</h6>
                <h6>Well Smiley Faces</h6>
            </Col>
            <Col md={3} className='success-col'>
                <img src="../../img/icon3.jpg" />
                <h6>84</h6>
                <h6>Heart Transplant</h6>
            </Col>
            <Col md={3} className='success-col'>
                <img src="../../img/icon4.jpg" />
                <h6>56</h6>
                <h6>Awards Holded</h6>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Success
