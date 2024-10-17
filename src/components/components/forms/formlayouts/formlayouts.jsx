import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Dropdown, FloatingLabel, Form, FormFloating, InputGroup, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Swal from 'sweetalert2'
import { Select1, Select2 } from './data/layoutsdata'

export default function FormLayouts() {
  const breadcrumbs = ["Components", "Forms", "Form Layouts"];
  // Loading function
  const [loading, setLoader] = useState(false)
  setTimeout(() => {
    setLoader(false)
  }, 3000)

  const BasicAlert = () => {
    Swal.fire('Thank You ♡ For Subscribing us')
  }

  // Modal function
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Horizonal Alignment</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <Row>
                <Col md={5} className="mb-3">
                  <Form.Control placeholder="Enter your username"
                    type="text" />
                </Col>
                <Col md={5} className="mb-3">
                  <Form.Control placeholder="Enter your password"
                    type="password" />
                </Col>
                <Col md={2}>
                  <Button className="btn btn-primary btn-block">Sign In</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Alignement</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <Row>
                <Col lg={12}>
                  <div className="p-2">
                    <Form.Group>
                      <Form.Control placeholder="Enter your username" className='mb-4'
                        type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Enter your password"
                        type="password" />
                    </Form.Group>
                    <Button className="btn btn-primary my-4">Sign In</Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="row-deck">
        <Col lg={6} className="col-md-">
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Basic Example</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">A form control layout using basic layout.</p>
              <div className="d-flex flex-column">
                <Form.Group>
                  <Form.Control placeholder="Enter your username" className='mb-3'
                    type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Control placeholder="Enter Your Email" className='mb-3' type="email" />
                </Form.Group>
                <Form.Group>
                  <InputGroup className="input-group mb-4">
                    <Form.Control id="passwordElement" className=''
                      placeholder="Enter Your Password" type="password" />
                    <InputGroup.Text className="input-group-text btn btn-primary text-white"
                      id="showBtn">
                      <i className="fe fe-eye text-white" id="eyeOpen"></i>
                      <i className="fe fe-eye-off text-white d-none" id="eyeClose"></i>
                    </InputGroup.Text>
                  </InputGroup>

                </Form.Group>
                <Form.Group>
                  <Form.Label className="ckbox d-flex align-items-center">
                    <Form.Check type="checkbox" className='ms-3' label="I agree terms and conditions" />

                  </Form.Label>
                </Form.Group>
                <Button className="btn ripple btn-primary my-3" >Submit</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Left Label Alignment</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <form className="form-horizontal">
                <Row className="mb-4">
                  <Form.Label htmlFor="firstName" className="col-md-3 form-label">Firstname</Form.Label>
                  <Col md={9} className="col-md-9">
                    <Form.Control id="firstName"
                      placeholder="Enter your firstname" type="text" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label htmlFor="lastName" className="col-md-3 form-label">Lastname</Form.Label>
                  <Col md={9} className="col-md-9">
                    <Form.Control id="lastName"
                      placeholder="Enter your lastname" type="text" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Form.Label htmlFor="email" className="col-md-3 form-label">Email</Form.Label>
                  <div className="col-md-9">
                    <Form.Control id="email"
                      placeholder="Enter your email" type="email" />
                  </div>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Check type="checkbox" className='ms-3' label="I agree terms and conditions" />
                  </Form.Group>
                </Row>
                <Button className="btn btn-primary my-3" type="submit">Submit</Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Form Group Wrapper</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <Row className="row row-xs form-group-wrapper">
                <Col md={6} className="mb-3">
                  <Form.Floating className="form-floating mb-3">
                    <Form.Control type="email" className="form-control" id="floatingInput"
                      placeholder="name@example.com" />
                    <Form.Label htmlFor="floatingInput">Email</Form.Label>
                  </Form.Floating>

                </Col>
                <Col md={6} className=" mb-3">
                  <Form.Floating className="form-floating">
                    <Form.Control type="password" className="form-control" id="floatingPassword"
                      placeholder="Password" />
                    <Form.Label htmlFor="floatingPassword">Password</Form.Label>
                  </Form.Floating>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Form in Dropdown</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <Dropdown className="main-dropdown-form-demo">
                <Dropdown.Toggle as="a" className="btn btn-primary no-caret">Live Example <i
                  className="icon ion-ios-arrow-down text-12"></i></Dropdown.Toggle>
                <Dropdown.Menu>
                  <h4 className="dropdown-title">Subscribe</h4>
                  <p>Don't miss any update from us.</p>
                  <Form.Group>
                    <Form.Control placeholder="Enter your fullname" className='mb-4'
                      type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control placeholder="Enter your email" className='mb-4'
                      type="email" />
                  </Form.Group><Button variant='primary' className=" btn-block">Subscribe</Button>
                </Dropdown.Menu>
              </Dropdown>

            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Form in Modal</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">It is Very Easy to Customize and it uses in your website
                apllication.</p>
              <Link to="#" className="btn btn-primary" data-bs-target="#modaldemo1"
                data-bs-toggle="modal" onClick={handleShow}>View Live Demo</Link>
              <Modal show={show}>
                <Modal.Header>
                  <Modal.Title><h5 className="modal-title mg-b-5">Create New Account</h5></Modal.Title>
                  <Button variant='default' className="close pos-absolute t-15 l-20 tx-26" onClick={handleClose}><span aria-hidden="true">&times;</span></Button>
                </Modal.Header>
                <Modal.Body className="modal-body pd-sm-40">
                  <p className=" text-muted mg-b-20">Let's get you all setup so you can begin using our app.</p>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder="Firstname" type="text" />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder="Lastname" type="text" />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder="Phone" type="text" />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder="Email" type="text" />
                  </Form.Group>
                  <Form.Group className="mg-b-25 mb-3 ms-4">
                    <Form.Check type="checkbox" >
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="tx-13"> I agree to <Link to="#">Terms</Link> and{' '}<Link to="#">Privacy Policy</Link></Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" defaultChecked className='' label="Yes, I want to receive email from your newsletter." />
                  </Form.Group>
                  <Button variant="" onClick={setLoader} className="btn btn-primary btn-block">Continue {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ''}</Button>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Payment Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={10} lg={8} xl={6} className="m-auto d-block">
                  <Card className="card-body pd-20 pd-md-40 border shadow-none">
                    <Card.Title className="mb-4">Your Payment Details</Card.Title>
                    <Form.Group className="form-group">
                      <Form.Label className="form-label" htmlFor="card-name">Name on Card</Form.Label>
                      <Form.Control id="card-name" type="text"
                        placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label className="form-label">Card number</Form.Label>
                      <InputGroup className="input-group">
                        <Form.Control type="text" className="form-control" placeholder="Search for..." />
                        <InputGroup.Text className="input-group-text btn btn-primary shadow-none">
                          <i className="fa fa-cc-visa"></i> &nbsp; <i className="fa fa-cc-amex"></i> &nbsp;
                          <i className="fa fa-cc-mastercard"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Row className="row-sm">
                        <Col sm={9}>
                          <Form.Label className="form-label">Expiration Date</Form.Label>
                          <Row className="row-sm">
                            <Col sm={7} className="col-sm-7 mb-3">
                              <Select2 />
                            </Col>
                            <Col sm={5} className="col-sm-5 mb-3">
                              <Select1 />
                            </Col>
                          </Row>
                        </Col>
                        <Col sm={3} className="col-sm-3">
                          <Form.Label className="form-label" htmlFor="ssnMask-cvv">CVV</Form.Label>
                          <Form.Control id="ssnMask-cvv"
                            placeholder="xxx" type="text" required />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Check type="checkbox" defaultChecked className='ms-3' label="Save my card for future purchases" />
                    </Form.Group>
                    <Button className="btn btn-primary btn-block">Complete Payment</Button>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Fragment>
  )
}
