import React, { Fragment } from 'react'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Form, InputGroup, Nav, Row, Tab, Table } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import Swal from 'sweetalert2'
const Options = [
  { value: 'Germany', label: 'Germany' },
  { value: 'Canada', label: 'Canada' },
  { value: 'USA', label: 'USA' },
  { value: 'AUS', label: 'AUS' }
]
export default function Checkout() {
  const breadcrumbs = ["Ecommerce", "Checkout"];
  // WarningAlert
  function Warningalert() {
    Swal.fire({
      title: 'Are you sure?',
      text: '  Your will not be able to recover this imaginary file!',
      cancelButtonColor: '#d33',
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Confirm!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#3085d6',
          text: 'Congratulations! Your Order is Placed'
        })
      }
    })
  }
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />


      <Row>
        <Col xl={8} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Billing Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label className="form-label">First Name <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="my-2" placeholder="First name" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label className="form-label">Last Name <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="my-2" placeholder="Last name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="form-label">Company Name <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="my-2" placeholder="Company name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="form-label">Email address <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="email" className="my-2" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="form-label">Country <span
                      className="text-red">*</span></Form.Label>

                    <Select options={Options} classNamePrefix="Select2" className="multi-select"
                      placeholder='Select' />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="form-label">Address <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="my-2" placeholder="Home Address" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label className="form-label">City <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="text" className="my-2" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label className="form-label">Postal Code <span
                      className="text-red">*</span></Form.Label>
                    <Form.Control type="number" className="my-2" placeholder="ZIP Code" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Payment Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <Tab.Container defaultActiveKey="first">
                  <Nav as="ul" className="tabs-menu nav checkout" >
                    <Nav.Item as="li" ><Nav.Link href="#" eventKey="first" ><i className="fa fa-credit-card me-1"></i>Credit Card</Nav.Link></Nav.Item>
                    <Nav.Item as="li" ><Nav.Link href="#" eventKey="second" > <i className="fa fa-paypal me-1"></i>Paypal</Nav.Link></Nav.Item>
                    <Nav.Item as="li" ><Nav.Link href="#" eventKey="third" > <i className="fa fa-university me-1"></i>Bank Transfer</Nav.Link></Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first" >
                      <div className="bg-danger-transparent-2 text-danger br-3 mb-4"
                        role="alert">
                        Please Enter Valid Details</div>
                      <Form.Group>
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control type="text" className="form-control"
                          placeholder="First Name" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Card number</Form.Label>
                        <div className="input-group">
                          <Form.Control type="text" className="form-control"
                            placeholder="Search for..." />
                          <span className="input-group-text btn btn-success shadow-none">
                            <i className="fa fa-cc-visa"></i> &nbsp; <i
                              className="fa fa-cc-amex"></i> &nbsp;
                            <i className="fa fa-cc-mastercard"></i>
                          </span>
                        </div>
                      </Form.Group>
                      <Row>
                        <Col sm={8}>
                          <Form.Group>
                            <Form.Label>Expiration</Form.Label>
                            <InputGroup className="input-group">
                              <Form.Control type="number" className="form-control"
                                placeholder="MM" name="Month" />
                              <Form.Control type="number" className="form-control"
                                placeholder="YYYY" name="Year" />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col sm={4}>
                          <Form.Group>
                            <Form.Label>CVV <i
                              className="fa fa-question-circle"></i></Form.Label>
                            <input type="number" className="form-control mb-3" required="" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant='primary' href="#" className="btn btn-primary ">Confirm</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Paypal is easiest way to pay online</p>
                      <p><Link to="" className="btn btn-primary"><i className="fa fa-paypal"></i>
                        Log
                        in my Paypal</Link></p>
                      <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem
                        quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Bank account details</p>
                      <dl className="card-text">
                        <dt>BANK: </dt>
                        <dd> THE UNION BANK 0456</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>Account Number: </dt>
                        <dd> 67542897653214</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>IBAN: </dt>
                        <dd>543218769</dd>
                      </dl>
                      <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem
                        quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </Tab.Pane>
                  </Tab.Content>

                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="cart">
            <Card.Header className="border-bottom">
              <Card.Title>Your Order</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-flex">
                <img className="avatar-xl p-0 br-7"
                  src={imagesData('png12')} alt="img" />
                <div className="ms-3">
                  <h4 className="mb-1 fw-semibold fs-14"><Link to="#">Rounded Shape Digital
                    Watch For Men</Link></h4>
                  <div className="text-warning fs-14">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="mb-0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ms-auto">
                  <span className="me-4 fs-16 fw-semibold lh-1">$438</span>
                </div>
              </div>
              <div className="d-flex mt-5">
                <img className="avatar-xl p-0 br-7"
                  src={imagesData('png1')} alt="img" />
                <div className="ms-3">
                  <h4 className="mb-1 fw-semibold fs-14"><Link to="#">Digital Camera Pro
                    30.2MP
                    With Lens</Link></h4>
                  <div className="text-warning fs-14">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="mb-0">Lorem ipsum dolor sit.</p>
                </div>
                <div className="ms-auto">
                  <span className="me-4 fs-16 fw-semibold lh-1">$765</span>
                </div>
              </div>
              <div className="d-flex mt-5">
                <img className="avatar-xl p-0 br-7"
                  src={imagesData('png3')} alt="img" />
                <div className="ms-3">
                  <h4 className="mb-1 fw-semibold fs-14"><Link to="#">Wood Photo Frame(M)
                    With
                    Wall Decorators</Link></h4>
                  <div className="text-warning fs-14">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="ms-auto">
                  <span className="me-4 fs-16 fw-semibold lh-1">$543</span>
                </div>
              </div>
              <Table className="table mt-5 table-bordered">
                <tbody>
                  <tr className="your-order">
                    <td>Sub Total</td>
                    <td className="text-end">$4,360</td>
                  </tr>
                  <tr className="your-order">
                    <td>Discount</td>
                    <td className="text-end">5%</td>
                  </tr>
                  <tr className="your-order">
                    <td>Shipping</td>
                    <td className="text-end">Free</td>
                  </tr>
                  <tr className="your-order">
                    <td className="fs-18">Total</td>
                    <td className="text-end fs-18 text-primary fw-semibold">$3,976
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="text-end">
              <input type='button' className="btn btn-primary" value='Place order' onClick={Warningalert}
                id='palce-order' />
            </Card.Footer>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
