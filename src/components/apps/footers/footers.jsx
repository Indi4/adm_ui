import React, { Fragment } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function Footers () {
  const breadcrumbs = ["Apps", "Footers"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style01</Card.Title>
                  </Card.Header>
                  <div className="">
                    <div className="footer br-bl-7 br-br-7 border-top-0">
                      <div className="container">
                        <Row>
                          <div className="social">
                            <ul className="float-start">
                              <li>
                                <Link
                                  className="social-icon text-center" to="#;"><i
                                    className="fa fa-facebook"></i></Link>
                              </li>
                              <li>
                                <Link className="social-icon text-center" to="#;"><i
                                  className="fa fa-twitter"></i></Link>
                              </li>
                              <li>
                                <Link className="social-icon text-center" to="#;"><i
                                  className="fa fa-rss"></i></Link>
                              </li>
                              <li>
                                <Link className="social-icon text-center" to="#;"><i
                                  className="fa fa-youtube"></i></Link>
                              </li>
                              <li>
                                <Link className="social-icon text-center" to="#;"><i
                                  className="fa fa-linkedin"></i></Link>
                              </li>
                              <li>
                                <Link className="social-icon text-center" to="#;"><i
                                  className="fa fa-google-plus"></i></Link>
                              </li>
                            </ul>
                          </div>
                          <Col lg={12} sm={12} className="text-center">
                            Copyright © 2023 <Link
                              to="#">Sparic</Link>. Designed by <Link

                                to="https://www.spruko.com/">Spruko</Link> All rights
                            reserved.
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style02</Card.Title>
                  </Card.Header>
                  <div className="">
                    <div className="footer br-bl-7 br-br-7 border-top-0">
                      <div className="container">
                        <div className="row align-items-center">
                          <Col lg={6} sm={12} md={5}
                            className="mt-3 mt-lg-0 text-center d-none d-md-block">
                            <div className="social">
                              <ul className="float-start m-0">
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-facebook"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-rss"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-youtube"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-linkedin"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-google-plus"></i></Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={6} sm={12} md={7} className="mt-3 mt-lg-0 text-center">
                            Copyright © 2023 <Link
                              to="#">Sparic</Link>. Designed by <Link

                                to="https://www.spruko.com/">Spruko</Link> All rights
                            reserved.
                          </Col>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

       
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style03</Card.Title>
                  </Card.Header>
                  <div className="">
                    <div className="footer br-bl-7 br-br-7 border-top-0">
                      <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                          <Col lg={12} sm={12} className="  text-center">
                            Copyright © 2023 <Link to="#">Sparic</Link>. Designed by <Link

                              to="https://www.spruko.com/">Spruko</Link> All rights
                            reserved.
                          </Col>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style04</Card.Title>
                  </Card.Header>
                  <Card.Body className=" p-0">
                    <div className="footer br-bl-7 br-br-7 border-top-0">
                      <div className="container">
                        <div className="row align-items-center text-center">
                          <Col lg={6} md={12} className="d-none d-lg-block ">
                            <div className="social">
                              <ul className="float-start m-0 ">
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-facebook"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-rss"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-youtube"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-linkedin"></i></Link>
                                </li>
                                <li>
                                  <Link className="social-icon text-center" to="#;"><i
                                    className="fa fa-google-plus"></i></Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={6} md={12} className="text-end privacy" >
                            <Button size="sm"
                              className="btn btn-secondary btn-space btn-sm me-1">Privacy</Button>
                            <Button size="sm" className="btn btn-success btn-space btn-sm me-1">Terms</Button>
                            <Button size="sm" className="btn btn-primary btn-space btn-sm me-1">About
                              Us</Button>
                          </Col>
                        </div>
                        <div className="row align-items-center flex-row-reverse">
                          <Col lg={12} sm={12} className="text-center mt-3 mt-md-0">
                            Copyright © 2023 <Link to="#">Sparic</Link>. Designed by <Link

                              to="https://www.spruko.com/">Spruko</Link> All rights
                            reserved.
                          </Col>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                
                </Card>
              
              </Col>
            </Row>

           
            <Row>
              <div className="col-12">
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style05</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="top-footer">
                      <Row>
                        <Col lg={4} md={12}>
                          <h6>About</h6>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
                        </Col>
                        <Col lg={2} md={12}>
                          <h6>Pages</h6>
                          <ul className="list-unstyled">
                            <li><Link to="#">Dashboard</Link></li>
                            <li><Link to="#">Elements</Link></li>
                            <li><Link to="#">Forms</Link></li>
                            <li><Link to="#">Charts</Link></li>
                            <li><Link to="#">Tables</Link></li>
                            <li><Link to="#">Other Pages</Link></li>
                          </ul>
                        </Col>
                        <Col lg={2} md={12}>
                          <h6>Information</h6>
                          <ul className="list-unstyled">
                            <li><Link to="#">Our Team</Link></li>
                            <li><Link to="#">Contact US</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Terms and Services</Link></li>
                          </ul>
                        </Col>
                        <Col lg={4} md={12}>
                          <h6>Location</h6>
                          <ul className="list-unstyled">
                            <li><Link to="#">Address1:7363 Old Livingston Drive
                              Dyersburg</Link></li>
                            <li><Link to="#">Address2:4 Harrison St.Fairborn, OH
                              45324</Link></li>
                            <li><Link to="#">Phno1: +123 456 8976</Link></li>
                            <li><Link to="#">Phno2: +567 234 7865</Link></li>
                            <li><Link to="#">Mail1: yourdomain@gmail.com</Link></li>
                            <li><Link to="#">Mail2: infodomain@gmail.com</Link></li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <footer className="main-footer p-0 border-top-0">
                      <Row>
                        <Col xl={8} lg={12} md={12} className="footer1">
                          Copyright &copy;Sparic 2023. Design By<Link to="https://spruko.com/" className='ms-1 d-inline-block'>
                            Spruko</Link>
                        </Col>
                        <Col xl={4} lg={12} md={12} className="ms-auto text-end">
                          <ul className="footer-social-list ">
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link>
                            </li>
                            <li><Link to="#"><i className="fa fa-google"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link>
                            </li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </footer>
                  </Card.Footer>
                </Card>
              </div>
            </Row>


   
            <Row>
              <Col md={12} >
                <Card>
                  <Card.Header>
                    <Card.Title>Footer style06</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="top-footer">
                      <Row>
                        <Col lg={4} md={12}>
                          <h6>About</h6>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
                        </Col>
                        <Col lg={2} md={12}>
                          <h6>Pages</h6>
                          <ul className="list-unstyled">
                            <li><Link to="#">Dashboard</Link></li>
                            <li><Link to="#">Elements</Link></li>
                            <li><Link to="#">Forms</Link></li>
                            <li><Link to="#">Charts</Link></li>
                            <li><Link to="#">Tables</Link></li>
                            <li><Link to="#">Other Pages</Link></li>
                          </ul>
                        </Col>
                        <Col lg={2} md={12}>
                          <h6>Information</h6>
                          <ul className="list-unstyled">
                            <li><Link to="#">Our Team</Link></li>
                            <li><Link to="#">Contact US</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Terms and Services</Link></li>
                          </ul>
                        </Col>
                        <Col lg={4} md={12}>
                          <h6>Posts</h6>
                          <img alt="" src={imagesData('photo53')} className='me-2' />
                          <img alt="" src={imagesData('photo51')} className='me-2' />
                          <img alt="" src={imagesData('photo52')} className='me-2' />
                          <img alt="" src={imagesData('photo54')} className='me-2' />
                          <div className="divider"></div>
                          <h6 className="mb-0 m-t-30">Payments</h6>
                          <ul className="footer-payments">
                            <li><Link to="#"><i className="fa fa-cc-amex text-muted"
                              aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-visa text-muted"
                              aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i
                              className="fa fa-credit-card-alt text-muted"
                              aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i
                              className="fa fa-cc-mastercard text-muted"
                              aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-cc-paypal text-muted"
                              aria-hidden="true"></i></Link></li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <footer className="main-footer p-0 border-top-0">
                      <Row>
                        <Col xl={8} lg={12} md={12} className="footer1">
                          Copyright &copy;Sparic 2023. Design By<Link to="https://spruko.com/" className='ms-1 d-inline-block'>
                            Spruko</Link>
                        </Col>
                        <Col xl={4} lg={12} md={12} className="ms-auto text-end">
                          <ul className="footer-social-list ">
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link>
                            </li>
                            <li><Link to="#"><i className="fa fa-google"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link>
                            </li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </footer>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
           
 

    </Fragment>
  )
}
