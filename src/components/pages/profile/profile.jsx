import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Badge, Button, Card, Col, Dropdown, Form, FormGroup, Nav, Row, Tab } from 'react-bootstrap'
import { Friendsdata, Gallery, Timeline } from './data/profiledata'


export default function Profile() {
  const breadcrumbs = ["Pages", "Profile"];
  const [allData, setAllData] = useState(Timeline);

  let profiledata = [];

  let myfunction = (idx) => {
    let Data
    for (Data of Timeline) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim()
      }
      if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          profiledata.push(Data);
        }
      }

    }
    setAllData(profiledata);
  };
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row className="row">
        <Col xl={12} className="col-xl-12">
          <Tab.Container defaultActiveKey='first'>
            <Card className="overflow-hidden">
              <Card.Body >
                <img className="profile-bg h-250 cover-image w-100" src={imagesData('photo30')} />
                <div className="py-4 position-relative">
                  <div className="profile-img">
                    <img src={imagesData('male24')} className="avatar avatar-xxl br-7" alt="person-image" />
                  </div>
                  <div className="mt-5 d-sm-flex align-items-center">
                    <div>
                      <h3 className="fw-semibold mb-1">Alison Robert</h3>
                      <p className="mb-0 fw-semibold text-muted-dark">Coder Space : Senior Software Developer</p>
                      <p className="mb-0 my-1 fw-semibold text-muted-dark fs-13">San Francisco, CA USA</p>
                      <div className="mb-2">
                        <Badge bg="light" text="dark" className=" fw-semibold  fs-12 me-2">UX / UI Research</Badge>
                        <Badge bg="light" text="dark" className=" fw-semibold  fs-12 me-3">Project Management</Badge>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="d-md-flex">
                        <div className="d-flex align-items-center me-5 mb-2">
                          <span className="avatar avatar-md br-7 bg-gradient-primary"><i className="fe fe-briefcase"></i></span>
                          <div className="ms-2">
                            <p className="mb-0 fw-semibold">Reviews</p>
                            <span className="text-muted">256</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center me-5 mb-2">
                          <span className="avatar avatar-md br-7 bg-gradient-warning"><i className="fe fe-cast"></i></span>
                          <div className="ms-2">
                            <p className="mb-0 fw-semibold">Photos</p>
                            <span className="text-muted">204</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <span className="avatar avatar-md br-7 bg-gradient-success"><i className="fe fe-users"></i></span>
                          <div className="ms-2">
                            <p className="mb-0 fw-semibold">Followers</p>
                            <span className="text-muted">3.2K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="text-wrap">
                  <div className="panel tabs-style6">
                    <div className="panel-head d-flex">
                      <Nav as="ul" className="nav nav-tabs d-block d-sm-inline-flex">
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="first">
                            About
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="second">
                            Edit Profile
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey='third'>
                            Timeline
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey='four'>
                            Gallery
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey='five'>
                            Friends
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>

                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Col xl={12} className="col-xl-12 p-0">
              <div className="">
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <Card className="card border-0">
                      <Card.Body className="card-body p-0">
                        <div className="p-4">
                          <h3 className="card-title mb-0">Personal Information</h3>
                        </div>
                        <div className="border-top"></div>
                        <div className="p-4">
                          <p className="mb-0 fw-semibold">
                            Hi, my name is Alison Robert.
                          </p>
                          <p className="mb-0 fw-semibold">
                            I'M the Co-founder and Head of designer at GHM agency.
                          </p>
                          <p className="fw-semibold mb-0">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse numquam minima porro deserunt ducimus reprehenderit obcaecati, iusto consequuntur accusamus corrupti facere iure necessitatibus tempore velit?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit, non rerum eum, doloribus laborum aspernatur id quam deleniti molestiae possimus assumenda impedit quae ipsa quis nulla error sequi architecto!
                          </p>
                        </div>
                        <div className="border-top"></div>
                        <div className="p-4">
                          <h6 className="text-uppercase fw-semibold mb-3">Skills</h6>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">HTML</Badge>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">CSS</Badge>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">Javascript</Badge>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">Jquery</Badge>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">Adobe Photoshop</Badge>
                          <Badge className="badge badge-gradient-primary mb-3 mb-sm-0 me-2">Figma</Badge>
                        </div>
                        <div className="border-top">
                          <div className="p-4">
                            <h6 className="text-uppercase fw-semibold mb-3">Languages</h6>
                            <div className="d-sm-flex">
                              <div className="d-flex align-items-center me-5 mb-sm-0">
                                <img src={imagesData('flagimage6')} className="language-img" alt="country-image" />
                                <p className="mb-0 fw-semibold ms-3">English</p>
                              </div>
                              <div className="d-flex align-items-center me-5 mb-sm-0">
                                <img src={imagesData('flagimage3')} className="language-img" alt="country-image" />
                                <p className="mb-0 fw-semibold ms-3">German</p>
                              </div>
                              <div className="d-flex align-items-center mb-sm-0">
                                <img src={imagesData('flagimage5')} className="language-img" alt="country-image" />
                                <p className="mb-0 fw-semibold ms-3">Russia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top"></div>
                        <div className="p-4">
                          <h6 className="text-uppercase fw-semibold mb-3">Contact Details</h6>
                          <div className="d-md-flex">
                            <div className="d-flex align-top me-5 mb-3 mb-sm-0">
                              <span><i className="fe fe-phone border p-3 rounded-circle fs-6 op7 text-dark"></i></span>
                              <div className="ms-3 mb-2">
                                <p className="mb-0 fw-semibold">Mobile</p>
                                <span className="text-muted">+(56)-42013206</span>
                              </div>
                            </div>
                            <div className="d-flex align-top me-5 mb-3 mb-sm-0">
                              <span><i className="fe fe-mail border p-3 rounded-circle fs-6 op7 text-dark"></i></span>
                              <div className="ms-3 mb-2">
                                <p className="mb-0 fw-semibold">Alison</p>
                                <span className="text-muted">alisonrobert@gmail.com</span>
                              </div>
                            </div>
                            <div className="d-flex align-top">
                              <span><i className="fe fe-map border p-3 rounded-circle fs-6 op7 text-dark"></i></span>
                              <div className="ms-3  mb-2">
                                <p className="mb-0 fw-semibold">Current Address</p>
                                <span className="text-muted">San Francisco, CA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top"></div>
                        <div className="p-4">
                          <h6 className="text-uppercase fw-semibold mb-3">Social Media</h6>
                          <div className="d-md-flex">
                            <div className="d-flex align-top me-4 mb-3 mb-md-0">
                              <span><i className="fe fe-gitlab border text-dark p-3 rounded-circle fs-6 op7"></i></span>
                              <div className="ms-3  mb-2">
                                <p className="mb-0 fw-semibold">Github</p>
                                <Link to="#" className="text-muted-dark">github.com/spruko</Link>
                              </div>
                            </div>
                            <div className="d-flex align-top me-4 mb-3 mb-md-0">
                              <span><i className="fe fe-twitter border text-dark p-3 rounded-circle fs-6 op7"></i></span>
                              <div className="ms-3  mb-2">
                                <p className="mb-0 fw-semibold">Twitter</p>
                                <Link to="#" className="text-muted-dark">twitter.com/spruko.me</Link>
                              </div>
                            </div>
                            <div className="d-flex align-top">
                              <span><i className="fe fe-linkedin border text-dark p-3 rounded-circle fs-6 op7"></i></span>
                              <div className="ms-3  mb-2">
                                <p className="mb-0 fw-semibold">Linkedin</p>
                                <Link to="#" className="text-muted-dark">spruko.com/</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <Card className="card overflow-hidden border-0">
                      <Card.Body className="card-body">
                        <div className="d-flex">
                          <div className="ms-auto">
                            <Link to="#" className="btn btn-sm btn-success mx-1">Update</Link>
                            <Link to="#" className="btn btn-sm btn-danger">Discard</Link>
                          </div>
                        </div>
                        <Form className="form-horizontal">
                          <h6 className="text-uppercase fw-semibold mb-3">User Name</h6>
                          <Form.Group className="form-group">
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">First Name</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control type="text" className='form-control'
                                  placeholder="First Name" defaultValue="Alison" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">last Name</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control type="text" className='form-control'
                                  placeholder="Last Name" defaultValue="Robert" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Nick Name</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control type="text" className='form-control'
                                  placeholder="Nick Name" defaultValue="Rob" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <h6 className="text-uppercase fw-semibold mb-0">Your Photo</h6>
                                <span className="text-muted-dark">This will be displayed on Your Profile</span>
                              </Col>
                              <Col md={9} className=" d-flex justify-content-between mt-4">
                                <img src={imagesData('male24')} className="avatar avatar-xl br-7" alt="person-image" />
                                <div className="d-flex">
                                  <Link to="#" className="mb-0 fw-semibold mx-2">Change</Link>
                                  <Link to="#" className="mb-0 fw-semibold">Delete</Link>
                                </div>
                              </Col>
                            </Row>
                          </Form.Group>
                          <h6 className="text-uppercase fw-semibold mb-3">About Yourself</h6>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">About</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control as='textarea' rows={4} className='form-control'
                                  placeholder="about.." defaultValue='Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem. Labore sadipscing amet ea ipsum ipsum, diam amet voluptua clita sea takimata labore, et duo et tempor vero dolores ipsum. Kasd rebum tempor lorem dolor at, et ut magna lorem.'></Form.Control>
                              </Col>
                            </Row>
                          </Form.Group>
                          <h6 className="text-uppercase fw-semibold mb-3">Work</h6>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Designation</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control'
                                  placeholder="Designation" defaultValue="UI/UX Designer" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Email<i>(required)</i></Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control' placeholder="Email"
                                  defaultValue="info@Rob.in" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Website</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control'
                                  placeholder="Website" defaultValue="@spruko.w" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Phone</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control'
                                  placeholder="phone number" defaultValue="+125 3545654" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Address</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control as='textarea' className='form-control'
                                  rows={2}
                                  placeholder="Address" defaultValue='San Francisco, CA'></Form.Control>
                              </Col>
                            </Row>
                          </Form.Group>
                          <h6 className="text-uppercase fw-semibold mb-3">Social Info</h6>
                          <Form.Group className='form-group'>
                            <Row className="row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Twitter</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control type="text"
                                  placeholder="twitter" defaultValue="twitter.com/spruko.me" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Facebook</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control'
                                  placeholder="facebook"
                                  defaultValue="https://www.facebook.com/Spruha" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Google+</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" placeholder="google" className='form-control'
                                  defaultValue="Robert.com" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Linked in</Form.Label>
                              </Col>
                              <Col md={9} >
                                <Form.Control type="text" className='form-control'
                                  placeholder="linkedin" defaultValue="linkedin.com/in/spruko" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <Form.Group className='form-group'>
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Github</Form.Label>
                              </Col>
                              <Col md={9}>
                                <Form.Control type="text" className='form-control'  placeholder="github"
                                  defaultValue="github.com/sprukos" />
                              </Col>
                            </Row>
                          </Form.Group>
                          <h6 className="text-uppercase fw-semibold mb-3">Email Preferences</h6>
                          <Form.Group className="form-group mb-0">
                            <Row className="row row-sm">
                              <Col md={3}>
                                <Form.Label className="fw-semibold text-muted-dark">Verified User</Form.Label>
                              </Col>
                              <Col md={9} className="col-md-9 profile-editing">
                                <Form.Label className="d-flex align-items-center">
                                  <Form.Check type="checkbox" defaultChecked label=" Accept to receive post or page notification emails" />
                             
                                </Form.Label>
                                <Form.Label className="d-flex align-items-center">
                                  <Form.Check type="checkbox" defaultChecked label="Accept to receive email sent to multiple recipients" />
                                  =
                                </Form.Label>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <Row className="row">
                      <Col xxl={3} md={4} className="col-xxl-3 col-md-4">
                        <Row className="row">
                          <Col xl={12} lg={12} md={12} sm={6}>
                            <div className="card overflow-hidden">
                              <div className="card-body p-0">
                                <img src={imagesData('photo31')} className="h-200 w-100" alt="travel-image" />
                                <div className="post-date">
                                  <h5 className="fw-semibold mb-0 px-3 py-1 bg-white br-tr-7 br-tl-7">01</h5>
                                  <h5 className="fw-semibold mb-0 px-3 py-1 bg-primary br-br-7 br-bl-7">Jan</h5>
                                </div>
                                <div className="my-3 px-5">
                                  <h4 className="fw-semibold mb-0">Travel to Kalmosia</h4>
                                  <span className="text-muted fs-12">31st Dec 2023 at 06:00 Am</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xl={12} lg={12} md={12} sm={6}>
                            <Card className="card overflow-hidden">
                              <Card.Header>
                                <Card.Title className="card-title">People You May Know</Card.Title>
                              </Card.Header>
                              <Card.Body className=" p-0">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                      <img src={imagesData('male14')} className="avatar avatar-md rounded-circle me-3" alt="person-image" />
                                      <p className="fw-semibold mb-0 text-dark">Jack Thomson</p>
                                    </div>
                                    <button className="btn btn-sm p-0"><span className="badge badge-gradient-danger fw-semibold">Remove</span></button>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                      <img src={imagesData('female4')} className="avatar avatar-md rounded-circle me-3" alt="person-image" />
                                      <p className="fw-semibold mb-0 text-dark">Terry Aminoff</p>
                                    </div>
                                    <button className="btn btn-sm p-0"><span className="badge badge-gradient-danger fw-semibold">Remove</span></button>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                      <img src={imagesData('male9')} className="avatar avatar-md rounded-circle me-3" alt="person-image" />
                                      <p className="fw-semibold mb-0 text-dark">Willson Bek</p>
                                    </div>
                                    <button className="btn btn-sm p-0"><span className="badge badge-gradient-danger fw-semibold">Remove</span></button>
                                  </li>
                                  <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                                    <div className="d-flex align-items-center">
                                      <img src={imagesData('female19')} className="avatar avatar-md rounded-circle me-3" alt="person-image" />
                                      <p className="fw-semibold mb-0 text-dark">Kett Velasacz</p>
                                    </div>
                                    <button className="btn btn-sm p-0"><span className="badge badge-gradient-danger fw-semibold">Remove</span></button>
                                  </li>
                                </ul>
                              </Card.Body>
                              <div className="card-footer text-center">
                                <Link to="#" className="fw-semibold">Load More <i className="bi bi-arrow-right"></i></Link>
                              </div>
                            </Card>
                          </Col>
                          <div className="col-xl-12">
                            <div className="card overflow-hidden">
                              <div className="card-header">
                                <h3 className="card-title">My Events</h3>
                              </div>
                              <div className="card-body p-0">
                                <ul className="list-group">
                                  <li className="list-group-item d-flex overflow-visible border-0">
                                    <img src={imagesData('photo35')} className="br-7 cover-image avatar avatar-xxl" alt="event-iamge" />
                                    <div className="ps-3 flex-column lh-1">
                                      <span className="text-muted-dark fs-13">20 DECEMBER 2022</span>
                                      <h6 className="text-dark fw-semibold mt-1">UI/UX California meet up</h6>
                                      <span className="text-muted fs-12">150 People has join in this evnet</span>
                                    </div>
                                  </li>
                                  <li className="list-group-item d-flex overflow-visible border-0">
                                    <img src={imagesData('photo33')} className="br-7 cover-image avatar avatar-xxl" alt="event-iamge" />
                                    <div className="ps-3 flex-column lh-1">
                                      <span className="text-muted-dark fs-13">10 APRIL 2022</span>
                                      <h6 className="text-dark fw-semibold mt-1">Fest at USA</h6>
                                      <span className="text-muted fs-12">201 People has join in this evnet</span>
                                    </div>
                                  </li>
                                  <li className="list-group-item d-flex overflow-visible border-0">
                                    <img src={imagesData('photo34')} className="br-7 cover-image avatar avatar-xxl" alt="event-iamge" />
                                    <div className="ps-3 flex-column lh-1">
                                      <span className="text-muted-dark fs-13">05 SEPTEMBER 2022</span>
                                      <h6 className="text-dark fw-semibold mt-1">Birthday Celebrations</h6>
                                      <span className="text-muted fs-12">68 People has join in this evnet</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <div className="col-xxl-7 col-md-5">
                        <div className="card">
                          <div className="card-body">
                            <form className="mt ng-pristine ng-valid" action="#">
                              <div className="form-group mb-0">
                                <label className="sr-only" htmlFor="new-event">New
                                  event</label>
                                <Form.Control as="textarea" className="bg-light"
                                  id="new-event" placeholder="Post something..."
                                  rows={3}></Form.Control>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                <Link to="#"
                                  className="btn btn-sm btn-outline-default fw-semibold me-2"><i
                                    className="fa fa-camera fa-lg me-2"></i>Add photo</Link>
                                <Link to="#" className="btn btn-sm btn-primary">Post</Link>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="card overflow-hiddem">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <img src={imagesData('male24')} className="avatar avatar-md rounded-circle me-3" alt="person-image" />
                                <div>
                                  <h6 className="fw-semibold mb-0 mt-1">Alison Robert <span className="text-muted">creat new</span> <Link to="#" className="fs-12">Albumn</Link></h6>
                                  <span className="text-muted">4 hours ago</span>
                                </div>
                              </div>
                              <Dropdown className="dropdown">
                                <Dropdown.Toggle as="a" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="no-caret text-dark fs-14"><i className="text-dark fw-semibold fe fe-more-horizontal"></i></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                  <Dropdown.Item className="dropdown-item" to="#"><i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
                                  <Dropdown.Item className="dropdown-item" to="#"><i className="fe fe-eye me-2"></i> View</Dropdown.Item>
                                  <Dropdown.Item className="dropdown-item" to="#"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <p className="fw-semibold my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, optio.</p>
                            <div className="row">
                              <div className="col-6">
                                <div>
                                  <img src={imagesData('photo32')} className="br-7" alt="uploaded-images" />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="d-grid gap-3">
                                  <img src={imagesData('photo29')} className="br-7" alt="uploaded-images" />
                                  <img src={imagesData('photo28')} className="br-7" alt="uploaded-images" />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mt-3 justify-content-between align-items-center uploaded-pic-likes">
                              <div className="avatar-list my-auto avatar-list-stacked d-flex align-items-center">
                                <div className="me-4">
                                  <span className="avatar avatar-sm brround cover-image mb-0"
                                  >
                                    <img src={imagesData('male11')} className="avatar avatar-sm brround cover-image mb-0" />
                                  </span>
                                  <span className="avatar avatar-sm brround cover-image mb-0"
                                  >
                                    <img src={imagesData('male13')} className="avatar avatar-sm brround cover-image mb-0" />
                                  </span>
                                  <Link to="#" className="avatar avatar-sm brround cover-image mb-0 bg-primary">+8</Link>
                                </div>
                                <p className="text-dark fs-13 mb-0 fw-semibold">+ 68 Likes</p>
                              </div>
                              <div className="text-end">
                                <Button type="button" variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-heart-o me-1"></i>46</Button>
                                <Button type="button" variant='' className="mx-3 mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-commenting-o me-1"></i>10</Button>
                                <Button type="button" variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-share-square-o me-1"></i>13</Button>
                              </div>
                            </div>
                            <div className="mt-5 write-comment">
                              <div className="d-flex justify-content-between border p-0 br-7 align-items-center">
                                <div>
                                  <img src={imagesData('male24')} className="avatar avatar-xs rounded-circle ms-2" alt="person-image" />
                                  <input type="text" className="form-control border-0 flex-fill ms-7" placeholder="write here" />
                                </div>
                                <div className="d-flex align-items-center p-1">
                                  <Link to="#" className="me-3"><i className="fa fa-link text-dark fs-14"></i></Link>
                                  <Link to="#" className="me-3"><i className="fa fa-at text-dark fs-14"></i></Link>
                                  <Button type="button" variant='' className="btn p-0 pe-2">😊</Button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-5 mb-3 d-flex">
                              <div className="d-flex">
                                <img src={imagesData('female17')} className="avatar avatar-md rounded-circle me-2" alt="person-image" />
                                <div>
                                  <h6 className="fw-semibold mb-0 mt-1">Mozark Ben</h6>
                                  <span className="text-muted fs-12">Today 04:40 PM</span>
                                  <p className="fw-semibold mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, blanditiis.</p>
                                </div>
                              </div>
                              <div className="ms-auto d-inline-flex align-items-start">
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark me-2"><i className="fa fa-heart-o me-1"></i>46</Button>
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-mail-reply me-1"></i>10</Button>
                              </div>
                            </div>
                            <div className="mb-3 d-flex px-5">
                              <div className="d-flex">
                                <img src={imagesData('male24')} className="avatar avatar-md rounded-circle me-2" alt="person-image" />
                                <div>
                                  <h6 className="fw-semibold mb-0 mt-1">Alison Robert</h6>
                                  <span className="text-muted fs-12">Today 04:50 PM</span>
                                  <p className="fw-semibold mb-0"><span className="fw-bold">Mozark Ben</span>, Thank you i really appreciate your feedback Lorem ipsum dolor sit amet.</p>
                                </div>
                              </div>
                              <div className="ms-auto d-inline-flex align-items-start">
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-heart-o"></i></Button>
                                <span className="mx-1">|</span>
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-mail-reply"></i></Button>
                              </div>
                            </div>
                            <div className="mb-3 d-flex px-5">
                              <div className="d-flex">
                                <img src={imagesData('male22')} className="avatar avatar-md rounded-circle me-2" alt="person-image" />
                                <div>
                                  <h6 className="fw-semibold mb-0 mt-1">Jeck Vascrod</h6>
                                  <span className="text-muted fs-12">Today 04:55 PM</span>
                                  <p className="fw-semibold mb-0"><span className="fw-bold">Mozark Ben</span>, Really its cool to see awesome locations</p>
                                </div>
                              </div>
                              <div className="ms-auto d-inline-flex align-items-start">
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark me-1"><i className="fa fa-heart-o"></i></Button>
                                <span className="mx-1">|</span>
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-mail-reply"></i></Button>
                              </div>
                            </div>
                            <div className="mt-3 write-comment px-5">
                              <div className="d-flex justify-content-between border p-0 br-7 align-items-center">
                                <div>
                                  <img src={imagesData('male24')} className="avatar avatar-xs rounded-circle ms-2" alt="person-image" />
                                  <input type="text" className="form-control border-0 flex-fill ms-6" placeholder="write here" />
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2"><i className="fa fa-link text-dark fs-14"></i></Link>
                                  <Link to="#" className="me-2"><i className="fa fa-at text-dark fs-14"></i></Link>
                                  <Button type="button"  variant='' className="btn p-0">😊</Button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-5 mb-3 d-flex">
                              <div className="d-flex">
                                <img src={imagesData('female12')} className="avatar avatar-md rounded-circle me-2" alt="person-image" />
                                <div>
                                  <h6 className="fw-semibold mb-0 mt-1">Mozark Ben</h6>
                                  <span className="text-muted fs-12">yesterday 02:40 Am</span>
                                  <p className="fw-semibold mb-0">Your Gallery was superb awesome, as always! keep it up, can't wait see more.</p>
                                </div>
                              </div>
                              <div className="ms-auto d-inline-flex align-items-start">
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark me-2"><i className="fa fa-heart-o me-1"></i>20</Button>
                                <Button type="button"  variant='' className="mb-0 fw-semibold btn p-0 text-dark"><i className="fa fa-mail-reply me-1"></i>5</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Col xxl={2} md={3}>
                        <Card className="overflow-hidden">
                          <Card.Header className=" pb-0 border-bottom-0">
                            <Card.Title >Contacts</Card.Title>
                          </Card.Header>
                          <Card.Body className="p-0">
                            <div className="p-3 contact-search">
                              <Button className="btn" variant=''><i className="fe fe-search fw-semibold text-muted" aria-hidden="true"></i></Button>
                              <Form.Control type="text" className="form-control h-6" id="typehead1" placeholder="Search here..." autoComplete="off" onChange={(ele) => { myfunction(ele.target.value) }} />
                            </div>
                            <ul className="list-group">
                              {allData.map((idx, t1) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0" key={t1}>
                                  <div className="d-flex just align-items-center">
                                    <span className="avatar brround avatar-md cover-image me-3"
                                      data-bs-image-src={imagesData('male15')}>
                                      <img className="avatar brround avatar-md cover-image me-3" src={idx.src} />
                                      <span className="avatar-status bg-green"></span>
                                    </span>
                                    <p className="fw-semibold mb-0 text-dark">{idx.name}</p>
                                  </div>
                                </li>
                              ))}

                            </ul>
                          </Card.Body>
                          <div className="card-footer text-center">
                            <Link to="#" className="fw-semibold">Load More <i className="bi bi-arrow-right"></i></Link>
                          </div>
                        </Card>
                        <div className="card overflow-hidden">
                          <div className="card-header pb-0 border-bottom-0">
                            <h3 className="card-title">Topics You Follow</h3>
                          </div>
                          <div className="card-body">
                            <div className="tags">
                              <span className="tag">
                                Life style
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                              <span className="tag">
                                Health
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                              <span className="tag">
                                Business
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                              <span className="tag">
                                Shopping
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                              <span className="tag">
                                Marketing
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                              <span className="tag">
                                Entertainment
                                <Link to="#" className="tag-addon"><i
                                  className="fe fe-x"></i></Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey='four'>

                    <Gallery />
                  </Tab.Pane>
                  <Tab.Pane eventKey='five'>
                    <Row className="row row-sm">
                      {Friendsdata.map((idx, f1) => (
                        <Col sm={12} md={6} lg={6} xl={3} className="col-sm-12 col-md-6 col-lg-6 col-xl-3" key={f1}>
                          <Card className="card">
                            <Card.Body className="card-body text-center">
                              <Dropdown className="dropdown float-end">
                                <Dropdown.Toggle to="#" as="a" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="text-dark fs-14 no-caret"><i className="text-dark fw-semibold fe fe-more-vertical"></i></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                  <Dropdown.Item className="dropdown-item" href="#"><i className="fe fe-message-square me-2"></i> Message</Dropdown.Item>
                                  <Dropdown.Item className="dropdown-item" href="#"><i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
                                  <Dropdown.Item className="dropdown-item" href="#"><i className="fe fe-eye me-2"></i> View</Dropdown.Item>
                                  <Dropdown.Item className="dropdown-item" href="#"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <Link to={`${import.meta.env.BASE_URL}pages/profile`}>
                                <img alt="avatar" className="rounded-circle ms-3 avatar avatar-xxl" src={idx.src} />
                                <h4 className="mb-1 mt-3 text-dark fw-semibold">{idx.name}</h4>
                              </Link>
                              <div>
                                <h6 className="text-muted-dark fw-semibold mb-0">{idx.role}</h6>
                                <span className="fs-13 text-muted">{idx.mail}</span>
                              </div>
                              <div className="mt-3 d-flex mx-auto text-center justify-content-center">
                                <Link to="#" className="mx-3">
                                  <i className="bx bxl-facebook bg-primary-light rounded-circle p-2 fs-20"></i>
                                </Link>
                                <Link to="#" className="mx-3">
                                  <i className="bx bxl-twitter bg-primary-light rounded-circle p-2 fs-20"></i>
                                </Link>
                                <Link to="#" className="mx-3">
                                  <i className="bx bxl-linkedin bg-primary-light rounded-circle p-2 fs-20"></i>
                                </Link>
                              </div>
                            </Card.Body>
                            <div className="card-footer text-center bg-primary-light">
                              <p className="fw-bold mb-0 text-uppercase fs-12 text-primary">Senior Creative Developer</p>
                            </div>
                          </Card>
                        </Col>
                      ))}

                    </Row>
                  </Tab.Pane>

                </Tab.Content>
              </div>
            </Col>
          </Tab.Container>
        </Col>
      </Row>

    </Fragment>
  )
}
