import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import { Button, Card, Col, Dropdown, FloatingLabel, Form, FormFloating, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Gallery1 } from './data/blogdetails'

export default function Blogdetails() {
  const breadcrumbs = ["Pages", "Extension", "Blog Details"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col xl={8}>
          <Card>
            <Card.Body>
              <div className="">
                <div className="d-sm-flex d-block align-items-center">
                  <div className="d-flex align-items-center mb-sm-0 mb-2">
                    <div>
                      <Link to="#"
                        className="avatar avatar-sm rounded-circle cover-image"
                        data-bs-image-src={imagesData('female23')}>
                        <img className="avatar avatar-sm rounded-circle cover-image" src={imagesData('female23')} />
                      </Link>
                    </div>
                    <h6 className="mb-0 text-muted ms-2 text-13 me-sm-0 me-2">Jiggel
                      mossin</h6>
                  </div>
                  <Link to="#"
                    className="d-f-ai-c mx-0 mb-sm-0 mb-2 mx-sm-4 mx-0 text-13"><span
                      className="fe fe-calendar text-muted me-1 text-15"></span><span
                        className="mt-0 mt-0 text-muted">01 December 2021</span></Link>
                  <Link to="#" className="me-0 d-f-ai-c mb-sm-0 mb-2 text-13"><span
                    className="fe fe-message-square text-muted me-1 text-15"></span><span
                      className="mt-0 mt-0 text-muted">11 Comments</span></Link>
                </div>
                <div>
                  <h3 className="font-weight-normal text-dark-light mt-4 mb-4">Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>
              </div>
              <div className="position-relative p-1 bg-light br-7">
                <img src={imagesData('photo27')} alt="img"
                  className="cover-image br-7 w-100 h-350" />
                <span className="badge bg-primary blog-label label5">nature</span>
              </div>
              <div className=" mb-2 mt-5 content">
                <p>I must explain to you how all this
                  mistaken idea of denouncing pleasure and praising pain was born
                  and I will give you a complete account of the system, and
                  expound the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure.</p>
                <p className="px-3 py-2 text-17 border br-7">
                  <span> <sup><i className="fa fa-quote-left me-1 text-dark-light text-13"
                    aria-hidden="true"></i></sup></span> <span
                      className="text-muted">Duo
                    Labore dolores at diam dolore. lorem
                    aliquyam Sadipscing et et. Est dolores kasd. ipsum magna
                    invidunt consetetur</span> <span className=" text-primary">dolor
                      voluptua
                      Dolore justo
                      eirmod justo sit tempor</span><span> <sup><i
                        className="fa fa-quote-right ms-1 text-13 text-dark-light"
                        aria-hidden="true"></i></sup> </span>
                </p>
                <p>To curtain chamber have my not, open
                  and prophet my i and wide in living. Core raven upstarting dream
                  sure was. Back little lining by in myself oh prophet be,.</p>
              </div>
              <div className="mt-2 pt-2 pb-2 br-7 footer-container-main blog-footer">
                <div className="footer border-top-0 p-0 icons-bg d-sm-flex">
                  <div className="social m-0">
                    <ul className="text-center">
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-facebook"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-twitter"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-rss"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-youtube"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-linkedin"></i></Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#"><i
                          className="fa fa-google-plus"></i></Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link to="#" className="text-muted d-f-ai-c d-sm-flex d-block">More
                      from author <i className="fa fa-angle-right mx-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <Card.Title>Comments:</Card.Title>
                <div className="media mb-4 overflow-visible">
                  <div className="me-3">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile`}> <img
                      className="media-object rounded-circle thumb-sm" alt="64x64"
                      src={imagesData('female23')} /> </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-7">
                      <div className="d-inline-flex">
                        <h5 className="mt-0">Gavin Murray</h5>
                        <span className="text-muted fs-12 mx-1">1 day ago</span>
                      </div>
                      <nav className="nav float-end">
                        <Dropdown>
                          <Dropdown.Toggle as='a' className="no-caret nav-link text-dark fs-16 p-0"
                            to="#" data-bs-toggle="dropdown"
                            role="button" aria-haspopup="true"
                            aria-expanded="false"><i
                              className="fe fe-more-vertical text-dark ms-4"></i></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-edit me-1"></i>
                              Edit</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-flag me-1"></i> Report
                              Abuse</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-trash-2 me-1"></i>
                              Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <p className="fs-13">Lorem ipsum dolor sit
                        amet, quis Neque porro quisquam est, nostrud
                        exercitation ullamco laboris commodo consequat.
                        There’s an old maxim that states, “No fun for the
                        writer, no fun for the reader.”No matter
                        what industry you’re working in, as a blogger, you
                        should live and die by this statement.</p>
                      <span className="reply" id="1">
                        <Link to="#"><span
                          className="btn btn-sm btn-info rounded-pill"><i
                            className="fe fe-corner-up-left me-1"></i>Reply</span></Link>
                      </span>
                    </div>
                    <div className="media mb-4 overflow-visible flex-wrap gap-2">
                      <div className="me-3">
                        <Link to={`${import.meta.env.BASE_URL}pages/profile`}> <img
                          className="media-object rounded-circle thumb-sm"
                          alt="64x64"
                          src={imagesData('female19')} />
                        </Link>
                      </div>
                      <div className="media-body border p-4 overflow-visible br-7">
                        <div className="d-inline-flex">
                          <h5 className="mt-0">Mozelle Belt</h5>
                          <span className="text-muted fs-12 mx-2">2 min ago</span>
                        </div>
                        <nav className="nav float-end">
                          <Dropdown>
                            <Dropdown.Toggle as="a" className="no-caret nav-link text-dark fs-16 p-0"
                              to="#" data-bs-toggle="dropdown"
                              role="button" aria-haspopup="true"
                              aria-expanded="false"><i
                                className="fe fe-more-vertical text-dark ms-4"></i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                              <Dropdown.Item className="dropdown-item" to="#"><i
                                className="fe fe-edit me-1"></i>
                                Edit</Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="#"><i
                                className="fe fe-flag me-1"></i>
                                Report Abuse</Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="#"><i
                                className="fe fe-trash-2 me-1"></i>
                                Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </nav>
                        <p className="fs-13">Nostrud exercitation
                          ullamco laboris commodo consequat. There’s an
                          old maxim that states, “No fun for the writer,
                          no fun for the reader.”No matter what industry
                          you’re working in, as a blogger, you should
                          live and die by this statement.</p>
                        <span className="reply" id="2">
                          <Link to="#"><span
                            className="btn btn-sm btn-info rounded-pill py-2 px-3"><i
                              className="fe fe-corner-up-left me-1"></i>Reply</span></Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media mb-4 overflow-visible">
                  <div className="me-3">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile`}> <img
                      className="media-object rounded-circle thumb-sm" alt="64x64"
                      src={imagesData('male28')} />
                    </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-7">
                      <div className="d-inline-flex">
                        <h5 className="mt-0">Paul Smith</h5>
                        <span className="text-muted fs-12 ms-1">10 min ago</span>
                      </div>
                      <nav className="nav float-end">
                        <Dropdown>
                          <Dropdown.Toggle as='a' className=" no-caret nav-link text-dark fs-16 p-0"
                            to="#" data-bs-toggle="dropdown"
                            role="button" aria-haspopup="true"
                            aria-expanded="false"><i
                              className="fe fe-more-vertical text-dark ms-4"></i></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-edit me-1"></i>
                              Edit</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-flag me-1"></i> Report
                              Abuse</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-trash-2 me-1"></i>
                              Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <p className="fs-13">Very nice ! On the other
                        hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by
                        the </p>
                      <span className="reply" id="3">
                        <Link to="#"><span
                          className="btn btn-sm btn-info rounded-pill py-2 px-3"><i
                            className="fe fe-corner-up-left me-1"></i>Reply</span></Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="media mb-4 overflow-visible">
                  <div className="me-3">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile`}> <img
                      className="media-object rounded-circle thumb-sm" alt="64x64"
                      src={imagesData('female24')} /> </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-7">
                      <div className="d-inline-flex">
                        <h5>Gavin Murray </h5>
                        <span className="text-muted fs-12 ms-1">5 min ago</span>
                      </div>
                      <nav className="nav float-end">
                        <Dropdown>
                          <Dropdown.Toggle as="a" className=" no-caret nav-link text-dark fs-16 p-0"
                            to="#" data-bs-toggle="dropdown"
                            role="button" aria-haspopup="true"
                            aria-expanded="false"><i
                              className="fe fe-more-vertical text-dark ms-4"></i></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-edit me-1"></i>
                              Edit</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-flag me-1"></i> Report
                              Abuse</Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#"><i
                              className="fe fe-trash-2 me-1"></i>
                              Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <p className="fs-13">Lorem ipsum dolor sit
                        amet, quis Neque porro quisquam est, nostrud
                        exercitation ullamco laboris commodo consequat.
                        There’s an old maxim that states, “No fun for the
                        writer, no fun for the reader.”No matter
                        what industry you’re working in, as a blogger, you
                        should live and die by this statement.</p>
                      <span className="reply" id="4">
                        <Link to="#"><span
                          className="btn btn-sm btn-info rounded-pill py-2 px-3"><i
                            className="fe fe-corner-up-left me-1"></i>Reply</span></Link>
                      </span>
                    </div>
                  </div>
                </div>
                <Row className="row row-xs form-group-wrapper">
                  <Card.Title>Comment here:</Card.Title>
                  <Col md={6}>

                    <FloatingLabel controlId="floatingSelectGrid" className='my-1'
                      placeholder="Name" label="Name">
                      <Form.Control 
                        placeholder="message"
                        label="Mail"
                      />
                    </FloatingLabel>

                  </Col>
                  <Col md={6} >

                    <FloatingLabel controlId="floatingSelectGrid"  className='my-1'
                      placeholder="Mail" label="Mail">
                      <Form.Control
                        placeholder="message"
                        label="Mail"
                      />
                    </FloatingLabel>

                  </Col>
                  <Col md={12} className="mt-3">

                    <FloatingLabel controlId="floatingSelectGrid"
                      label="Message">
                      <Form.Control
                        as="textarea"
                        placeholder="message"
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={12} className=" mt-3">
                    <Button className="btn btn-primary float-end">Submit</Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="card overflow-hidden br-7">
            <Card.Header>
              <Card.Title>About Author</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <Link to="#"><img className="card-img-top w-100 w-100"
                  src={imagesData('photo26')} alt="" /></Link>
                <div className="br-7 pt-3 text-justify">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Veniam nulla deleniti voluptas officia
                    accusamus magnam ullam inventore Lorem ipsum dolor,
                    sit amet consectetur dolorem quibusdam?.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="card overflow-hidden">
            <Card.Header>
              <Card.Title className="card-title mb-1">Categories</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <Link to="#" className="tag">Life style</Link>
                <Link to="#" className="tag">Health</Link>
                <Link to="#" className="tag">Tourism</Link>
                <Link to="#" className="tag">Web
                  designing</Link>
                <Link to="#" className="tag">Medical</Link>
                <Link to="#" className="tag">Hotels</Link>
                <Link to="#" className="tag">Real
                  estate</Link>
                <Link to="#" className="tag">Business</Link>
                <Link to="#" className="tag">Shopping</Link>
                <Link to="#" className="tag">Marketing</Link>
                <Link to="#" className="tag">Housing</Link>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Popular Posts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="item-list">
                <ul className="list-group mb-0">
                  <li className="list-group-item d-flex justify-content-between align-items-center pb-4 pt-0 px-0 border-0">
                    <div className="d-flex">
                      <img src={imagesData('photo40')}
                        className="avatar br-7 avatar-xl me-3 align-items-start" alt="avatar-img" />
                      <div>
                        <span className="d-block text-muted">Tourism</span>
                        <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                          className="text-dark text-16 font-weight-semibold">Explore
                          tourism by visitinig places.</Link>
                        <small className="d-block text-gray">2 day
                          ago</small>
                      </div>
                    </div>
                    <div className="btn-list">
                      <button type="button" className="btn bg-success-transparent text-success  me-2"><i className="fe fe-edit fs-12"></i></button>
                      <button type="button" className="btn  bg-danger-transparent text-danger"><i className="fe fe-trash-2 fs-12"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center pb-4 pt-0 px-0 border-0">
                    <div className="d-flex">
                      <img src={imagesData('photo37')}
                        className="avatar br-7 avatar-xl me-3 align-items-start" alt="avatar-img" />
                      <div>
                        <span className="d-block text-muted">Beautician</span>
                        <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                          className="text-dark text-16 font-weight-semibold">Beautification
                          courses are available.</Link>
                        <small className="d-block text-gray">2 hrs
                          ago</small>
                      </div>
                    </div>
                    <div className="btn-list">
                      <button type="button" className="btn bg-success-transparent text-success  me-2"><i className="fe fe-edit fs-12"></i></button>
                      <button type="button" className="btn  bg-danger-transparent text-danger"><i className="fe fe-trash-2 fs-12"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center pb-4 pt-0 px-0 border-0">
                    <div className="d-flex">
                      <img src={imagesData('png2')}
                        className="avatar br-7 avatar-xl me-3 align-items-start" alt="avatar-img" />
                      <div>
                        <span className="d-block text-muted">Music</span>
                        <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                          className="text-dark text-16 font-weight-semibold">Music is in the jsd a peaceful way.</Link>
                        <small className="d-block text-gray">2 hrs
                          ago</small>
                      </div>
                    </div>
                    <div className="btn-list">
                      <button type="button" className="btn bg-success-transparent text-success  me-2"><i className="fe fe-edit fs-12"></i></button>
                      <button type="button" className="btn  bg-danger-transparent text-danger"><i className="fe fe-trash-2 fs-12"></i></button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center pb-0 pt-0 px-0 border-0">
                    <div className="d-flex">
                      <img src={imagesData('photo37')}
                        className="avatar br-7 avatar-xl me-3 align-items-start" alt="avatar-img" />
                      <div>
                        <span className="d-block text-muted">Health</span>
                        <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                          className="text-dark text-16 font-weight-semibold">Health
                          care and fitness awareness</Link>
                        <small className="d-block text-gray">22 hrs
                          ago</small>
                      </div>
                    </div>
                    <div className="btn-list">
                      <button type="button" className="btn bg-success-transparent text-success  me-2"><i className="fe fe-edit fs-12"></i></button>
                      <button type="button" className="btn  bg-danger-transparent text-danger"><i className="fe fe-trash-2 fs-12"></i></button>
                    </div>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
          <Card className="card overflow-hidden">
            <Card.Header>
              <Card.Title>Gallery</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-center demo-gallery">
                <div className="mt-2">

                  <Gallery1 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
