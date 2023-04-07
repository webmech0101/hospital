import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Clients() {
  return (
    <div className='hp-client-div' id="action4">
        <div className='client-head'>
            <h1>What Our Clients Say</h1>
        </div>
      <Row>
        <Col md={6}>
            <div className='client-col'>
                <img src="../../img/person1.jpg" />
                <p>On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of Jamaica Hospital, especially to your outstanding nurses and PCAs. They have been outstandingly helpful and provided a high quality of service, care and comfort to my wife. Thank you.</p>
                <h5>Anonymous</h5>
                <p style={{color: "#55ecf1", fontSize: "15px"}}>India</p>
            </div>
        </Col>
        <Col md={6}>
            <div className='client-col'>
                <img src="../../img/person2.jpg" />
                <p>We would like to let you know how much we appreciate the special care our daughter was given by the doctors and staff at your hospital. Our baby’s physician was professional, kind, understanding, and her treatment was “right on.” Your organization should be proud to have such kind hearted people. They made sure that my daughter’s hospitalization was very pleasant.</p>
                <h5>Nyisha</h5>
                <p style={{color: "#55ecf1", fontSize: "15px"}}>India</p>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Clients
