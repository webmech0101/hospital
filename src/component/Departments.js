import React from 'react'
import { Col, Row } from 'react-bootstrap';

function Departments() {
  return (
    <div className='hp-department-div' id="action3">
      <div>
        <h1>Department of medical health care</h1>
      </div>
      <div className='hp-department-list'>
        <Row className='hp-staff-row'>
            <Col md={3} className='hp-staff-col'>
                <div className='staff-box'>
                    <img src="../../img/staff1.jpg" />
                    <h3>Staff Name</h3>
                    <p>We are give best quality health care service & facility of latest technology so patient surgery easy & secure</p>
                </div>
            </Col>
            <Col md={3} className='hp-staff-col'>
                <div className='staff-box'>
                    <img src="../../img/staff1.jpg" />
                    <h3>Staff Name</h3>
                    <p>We are give best quality health care service & facility of latest technology so patient surgery easy & secure</p>
                </div>
            </Col>
            <Col md={3} className='hp-staff-col'>
                <div className='staff-box'>
                    <img src="../../img/staff1.jpg" />
                    <h3>Staff Name</h3>
                    <p>We are give best quality health care service & facility of latest technology so patient surgery easy & secure</p>
                </div>
            </Col>
            <Col md={3} className='hp-staff-col'>
                <div className='staff-box'>
                    <img src="../../img/staff1.jpg" />
                    <h3>Staff Name</h3>
                    <p>We are give best quality health care service & facility of latest technology so patient surgery easy & secure</p>
                </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Departments;
