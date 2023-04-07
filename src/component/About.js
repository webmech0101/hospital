import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function About() {
  return (
    <div>
      <Row className='hp-about-row'>
        <Col md={5} className='hp-about-right'>
            <div className='about-img'>
              <img src="../img/hospital4.jpg" />
            </div>
        </Col>
        <Col md={7}>
            <div className='hp-about-text'>
              <h6>About Us:</h6>
              <h1>We Are Specilize In</h1>
              <p>The centre of excellence at Specialist Hospital, 
                Bangalore has evolved as a leader in the healthcare system because of its 
                integrated model comprising a dedicated Cardiac Hospital, Outpatient Department, 
                24/7 Emergency Wing, Hybrid Cath-Lab and Bedded Dialysis Unit.
              </p>
              <div className='hp-specialize'>
                <div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                </div>
                <div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                  <div className='hp-list'>
                    <img src="../../img/checkMark.jpg" /><p>Accident & Truma</p>
                  </div>
                </div>
              </div>
              <div>
                <Button>Read More</Button>
              </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default About
