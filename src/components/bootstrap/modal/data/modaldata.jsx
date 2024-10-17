import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

export function MydModalWithGrid (props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
    
          <Row>
            <Col xs={6} md={6}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. =because it is pleasure desires to obtain pain.
            </Col>
            <Col xs={6} md={6}>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the who loves toil and pain can procureor sit aspernatur system.
 No one rejects, dislikes, or avoids pleasure itself, because it is pleasure desires to obtain pain<br/>
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, quaerat aut odit voluptatem.</Col>
          </Row>
     
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
