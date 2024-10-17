import React, { Fragment } from 'react'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Badge, Button, Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Department, Donors, Patients } from './medicaldata/medicaldata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Medical () {
  const breadcrumbs = ["Home", "Dashboard04"];
  return (
    <Fragment>

     

          <Pageheader items={breadcrumbs} />
            <Row>
              <Col xl={3} lg={6} md={6} sm={6}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <div className="col-10">
                        <p className="mb-0 text-dark fw-semibold">Daily Appoinments</p>
                        <h3 className="mt-1 mb-1 text-dark fw-semibold">25.2K</h3>
                        <span className="text-muted fw-semibold fs-12"><span className="text-danger">18%</span> Higher than Last Month</span>
                      </div>
                      <div className="col-2 my-auto">
                        <span className="bg-danger-transparent avatar avatar-lg brround text-danger float-end">
                          <i className="fe fe-folder fs-4"></i>
                        </span>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={6} md={6} sm={6}>
                <Card className="card overflow-hidden">
                  <Card.Body>
                    <Row>
                      <div className="col-10">
                        <p className="mb-0 text-dark fw-semibold">Daily Out patients</p>
                        <h3 className="mt-1 mb-1 text-dark fw-semibold">19,584</h3>
                        <span className="text-muted fw-semibold fs-12"><span className="text-primary">15%</span> Higher than Last Month</span>
                      </div>
                      <div className="col-2 my-auto">
                        <span className="bg-primary-transparent avatar avatar-lg brround text-primary float-end">
                          <i className="fe fe-user fs-4"></i>
                        </span>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={6} md={6} sm={6}>
                <Card className="card overflow-hidden">
                  <Card.Body>
                    <Row>
                      <div className="col-10">
                        <p className="mb-0 text-dark fw-semibold">Daily Updates</p>
                        <h3 className="mt-1 mb-1 fw-semibold">626</h3>
                        <span className="text-muted fw-semibold fs-12"><span className="text-secondary">10%</span> Higher than Last Month</span>
                      </div>
                      <div className="col-2 my-auto">
                        <span className="bg-secondary-transparent avatar avatar-lg brround text-secondary float-end">
                          <i className="fe fe-bar-chart-2 fs-4"></i>
                        </span>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} md={6} lg={6} sm={6}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <div className="col-10">
                        <p className="mb-0 text-dark fw-semibold">Daily Operations</p>
                        <h3 className="mt-1 mb-1 text-dark fw-semibold">46</h3>
                        <span className="text-muted fw-semibold fs-12"><span className="text-primary">05%</span> Higher than Last Month</span>
                      </div>
                      <div className="col-2 my-auto">
                        <span className="bg-info-transparent avatar avatar-lg brround text-info float-end">
                          <i className="fe fe-scissors fs-4"></i>
                        </span>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xxl={9} xl={8} lg={12} md={12}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Patients Visit</Card.Title>
                    <Dropdown>
                      <Dropdown.Toggle as="a"  type="button" className="no-caret d-flex align-items-center btn btn-sm bg-primary-transparent fw-bold" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Last 6 month<i className="fe fe-chevron-down fw-semibold mx-1"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu" data-popper-placement="bottom-end">
                        <Dropdown.Item href="#">1 Year</Dropdown.Item>
                        <Dropdown.Item href="#">2 Years</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body className="py-0">
                   
                    <Patients/>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={4} lg={12} md={12}>
                <Card className=" overflow-hidden">
                  <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0">
                    <Card.Title className="mb-0">Patient Visit By Department</Card.Title>
                    <Dropdown>
                      <Dropdown.Toggle as="a"  href="#" className=" no-caret d-flex align-items-center btn btn-sm bg-primary-transparent fw-bold" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                        Weekly<i className="fe fe-chevron-down fw-semibold mx-1"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu" data-popper-placement="bottom-end">
                        <Dropdown.Item href="#">Daily</Dropdown.Item>
                        <Dropdown.Item href="#">Monthly</Dropdown.Item >
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body className=" p-0">
                   
                    <Department/>
                  </Card.Body>
                  <Card.Footer>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <h6 className="text-dark mb-1 fw-semibold"><span className="legend bg-primary"></span>Cardiology</h6>
                        <p className="mb-0 ms-3">45%</p>
                      </div>
                      <div>
                        <h6 className="text-dark mb-1 fw-semibold"><span className="legend bg-secondary"></span>Dermatology</h6>
                        <p className="mb-0 ms-3">30%</p>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
                <Card>
                  <Card.Header className="d-felx justify-content-between align-items-center border-bottom-0">
                    <Card.Title >Department Overview</Card.Title>
                    <button type="button" className="btn btn-sm bg-primary-transparent fw-bold">
                      View all
                    </button>
                  </Card.Header>
                  <Card.Body className=" p-0">
                    <div className="table-responsive">
                      <Table className="table border-0 mb-0 text-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th className="border-top-0 text-dark fw-semibold px-5 fs-13 w-3">Daignosis Name</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13 text-center">Patients</th>
                            <th className="border-top-0 text-dark fw-semibold text-center fs-13">cost</th>
                            <th className="border-top-0 text-dark fw-semibold pe-5 text-end fs-13">Avg.days admited</th>
                          </tr>
                        </thead>
                        <tbody className="text-dark">
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-lg mx-2 p-1"><img src={imagesData('png6')} alt="img" className="rounded-circle bg-orange-transparent cover-image mb-2 p-1" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Dermitology</h6>
                              </div>
                            </td>
                            <td className="text-muted-dark text-center">
                              24
                            </td>
                            <td className="text-center">
                              <h6 className="mb-0 fw-semibold">$3254.24</h6>
                            </td>
                            <td>
                              <div className="d-flex justify-content-end align-items-center me-2">
                                <ProgressBar className="progress progress-xs mb-0 mt-0 w-60 mx-2">
                                  <ProgressBar variant='orange' animated className="progress-bar progress-bar-striped  w-30">
                                  </ProgressBar>
                                </ProgressBar>
                                <span className="fw-semibold text-dark d-flex align-items-center">30%<i className="bi bi-arrow-up text-orange fs-12 fw-semibold"></i></span>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-lg mx-2 p-1"><img src={imagesData('png5')} alt="img" className="rounded-circle bg-success-transparent cover-image mb-2 p-2" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Cardiology</h6>
                              </div>
                            </td>
                            <td className="text-muted-dark text-center">
                              26
                            </td>
                            <td className="text-center">
                              <h6 className="mb-0 fw-semibold">$3620.00</h6>
                            </td>
                            <td>
                              <div className="d-flex justify-content-end align-items-center me-2">
                                <ProgressBar className="progress progress-xs mb-0 mt-0 w-60 mx-2">
                                  <ProgressBar variant='success' animated className="progress-bar progress-bar-striped  w-50">
                                  </ProgressBar>
                                </ProgressBar>
                                <span className="fw-semibold text-dark d-flex align-items-center">50%<i className="bi bi-arrow-up text-success fs-12 fw-semibold"></i></span>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-lg mx-2 p-1"><img src={imagesData('png9')} alt="img" className="rounded-circle bg-pink-transparent cover-image mb-2 p-2" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Oncology</h6>
                              </div>
                            </td>
                            <td className="text-muted-dark text-center">
                              35
                            </td>
                            <td className="text-center">
                              <h6 className="mb-0 fw-semibold">$2356.14</h6>
                            </td>
                            <td>
                              <div className="d-flex justify-content-end align-items-center me-2">
                                <ProgressBar className="progress progress-xs mb-0 mt-0 w-60 mx-2">
                                  <ProgressBar variant='pink' animated className="progress-bar progress-bar-striped  w-40">
                                  </ProgressBar>
                                </ProgressBar>
                                <span className="fw-semibold text-dark d-flex align-items-center">40%<i className="bi bi-arrow-up text-pink fs-12 fw-semibold"></i></span>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom-0">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-lg mx-2 p-1"><img src={imagesData('buynow4')} alt="img" className="rounded-circle bg-info-transparent cover-image mb-2 p-1" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Nurology</h6>
                              </div>
                            </td>
                            <td className="text-muted-dark text-center">
                              42
                            </td>
                            <td className="text-center">
                              <h6 className="mb-0 fw-semibold">$4203.65</h6>
                            </td>
                            <td>
                              <div className="d-flex justify-content-end align-items-center me-2">
                                <ProgressBar className="progress progress-xs mb-0 mt-0 w-60 mx-2">
                                  <ProgressBar variant='info' animated className="progress-bar progress-bar-striped  w-60">
                                  </ProgressBar>
                                </ProgressBar>
                                <span className="fw-semibold text-dark d-flex align-items-center">60%<i className="bi bi-arrow-up text-info fs-12 fw-semibold"></i></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={4} xl={6} lg={6} md={6} sm={12} >
                <Card className="card overflow-hidden">
                  <Card.Header className="card-header d-flex justify-content-between align-items-center border-bottom-0">
                    <Card.Title className="card-title mb-0">Health Reports Document</Card.Title>
                    <button type="button" className="btn btn-sm bg-primary-transparent fw-bold">
                      View all
                    </button>
                  </Card.Header>
                  <Card.Body className="card-body p-0">
                    <ul className="list-group list-group-flush ">
                      <li className="list-group-item d-flex align-items-start">
                        <img className="avatar avatar-md rounded-circle bg-primary-transparent p-2 cover-image me-2" src={imagesData('png7')} alt="Image description" />
                        <div className="mt-1">
                          <h6 className="fw-semibold text-dark mb-0">X-ray Result.pdf</h6>
                          <span className="text-muted fs-11">1 MB</span>
                        </div>
                        <div className="ms-auto d-flex">
                          <Button variant='light' href="#" className="btn btn-sm btn-light me-2"><i
                            className="fa fa-trash text-danger"></i></Button>
                          <Button variant='light' href="#" className="btn btn-sm btn-light"><i
                            className="fa fa-download text-success"></i></Button>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-start">
                        <img className="avatar avatar-md rounded-circle bg-primary-transparent p-2 cover-image me-2" src={imagesData('png7')} alt="Image description" />
                        <div className="mt-1">
                          <h6 className="fw-semibold text-dark mb-0">Heart Raise Report.pdf</h6>
                          <span className="text-muted fs-11">5 MB</span>
                        </div>
                        <div className="ms-auto d-flex">
                          <Button variant='light' href="#" className="btn btn-sm btn-light me-2"><i
                            className="fa fa-trash text-danger"></i></Button>
                          <Button variant='light' href="#" className="btn btn-sm btn-light"><i
                            className="fa fa-download text-success"></i></Button>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-start">
                        <img className="avatar avatar-md rounded-circle bg-primary-transparent p-2 cover-image me-2" src={imagesData('png7')} alt="Image description" />
                        <div className="mt-1">
                          <h6 className="fw-semibold text-dark mb-0">Blood Count Report.pdf</h6>
                          <span className="text-muted fs-11">3 MB</span>
                        </div>
                        <div className="ms-auto d-flex">
                          <Button variant='light' href="#" className="btn btn-sm btn-light me-2"><i
                            className="fa fa-trash text-danger"></i></Button>
                          <Button variant='light' href="#" className="btn btn-sm btn-light"><i
                            className="fa fa-download text-success"></i></Button>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-start">
                        <img className="avatar avatar-md rounded-circle bg-primary-transparent p-2 cover-image me-2" src={imagesData('png7')} alt="Image description" />
                        <div className="mt-1">
                          <h6 className="fw-semibold text-dark mb-0">Body Check Up Report.pdf</h6>
                          <span className="text-muted fs-11">08 MB</span>
                        </div>
                        <div className="ms-auto d-flex">
                          <Button variant='light' href="#" className="btn btn-sm btn-light me-2"><i
                            className="fa fa-trash text-danger"></i></Button>
                          <Button variant='light' href="#" className="btn btn-sm btn-light"><i
                            className="fa fa-download text-success"></i></Button>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-start">
                        <img className="avatar avatar-md rounded-circle bg-primary-transparent p-2 cover-image me-2" src={imagesData('png7')} alt="Image description" />
                        <div className="mt-1">
                          <h6 className="fw-semibold text-dark mb-0">Body Scan Report.pdf</h6>
                          <span className="text-muted fs-11">10 MB</span>
                        </div>
                        <div className="ms-auto d-flex">
                          <Button variant='light' href="#" className="btn btn-sm btn-light me-2"><i
                            className="fa fa-trash text-danger"></i></Button>
                          <Button variant='light' href="#" className="btn btn-sm btn-light"><i
                            className="fa fa-download text-success"></i></Button>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                <Card className="card overflow-hidden">
                  <Card.Header className="card-header d-flex justify-content-between align-items-center border-bottom-0">
                    <Card.Title className="card-title">Top Doctor's</Card.Title>
                    <button type="button" className="btn btn-sm bg-primary-transparent fw-bold">View all</button>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <div className="list-group list-lg-group list-group-flush">
                      <div className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <img className="avatar-md rounded-circle me-3"
                            src={imagesData('female21')}
                            alt="Image description" />
                          <div className="media-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 fw-semibold text-dark">
                                Dr.Query Wilson
                              </h6>
                              <Badge bg="success-transparent" text="success" className=" fw-semibold">available</Badge>
                            </div>
                            <p className="mb-0 text-muted fs-12">Orthopedic</p>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <img className="avatar-md rounded-circle me-3"
                            src={imagesData('male32')}
                            alt="Image description" />
                          <div className="media-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 fw-semibold text-dark">
                                Dr.Kevin North
                              </h6>
                              <Badge bg="danger-transparent" text="danger" className=" fw-semibold">Unavailable</Badge>
                            </div>
                            <p className="mb-0 text-muted fs-12">Gynecology</p>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <img className="avatar-md rounded-circle me-3"
                            src={imagesData('male33')}
                            alt="Image description" />
                          <div className="media-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 fw-semibold text-dark">
                                Dr.Steven Fisher
                              </h6>
                              <Badge bg="success-transparent" text="success" className=" fw-semibold">available</Badge>
                            </div>
                            <p className="mb-0 text-muted fs-12">Psycotraphy</p>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action">
                        <div className="d-flex align-items-center">
                          <img className="avatar-md rounded-circle me-3"
                            src={imagesData('male8')}
                            alt="Image description" />
                          <div className="media-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 fw-semibold text-dark">
                                Dr.Jack Willion
                              </h6>
                              <Badge bg="danger-transparent" text="danger" className=" fw-semibold">Unvailable</Badge>
                            </div>
                            <p className="mb-0 text-muted fs-12">Diagnostic</p>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item list-group-item-action br-br-7 br-bl-7">
                        <div className="d-flex align-items-center">
                          <img className="avatar-md rounded-circle me-3"
                            src={imagesData('female1')}
                            alt="Image description" />
                          <div className="media-body">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0 fw-semibold text-dark">
                                Dr.Joanne Taylor
                              </h6>
                              <Badge bg="success-transparent"  text="success" className=" fw-semibold">available</Badge>
                            </div>
                            <p className="mb-0 text-muted fs-12">Orthopedic</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xxl={6} xl={12} lg={12} md={12} sm={12}>
                <Card>
                  <Card.Header className="card-header d-flex justify-content-between align-items-center border-bottom-0">
                    <Card.Title className="card-title mb-0">Upcoming Appoinments</Card.Title>
                    <Dropdown>
                      <Dropdown.Toggle as='a' variant='primary-light' type="button" className=" no-caret d-flex align-items-center btn btn-sm bg-primary-transparent fw-bold" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        This week<i className="fe fe-chevron-down fw-semibold mx-1"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu" data-popper-placement="bottom-end">
                        <Dropdown.Item href="#">Last week</Dropdown.Item>
                        <Dropdown.Item href="#">Monthly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body className="card-body p-0">
                    <div className="table-responsive">
                      <Table className="table border-0 mb-0 text-nowrap">
                        <thead className="bg-light">
                          <tr>
                            <th className="border-top-0 text-dark fw-semibold px-5 fs-13 w-3">Patient Name</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13">Gender</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13">Disease</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13 text-center">Date</th>
                            <th className="border-top-0 text-dark fw-semibold pe-5 text-end fs-13">Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-dark">
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md mx-2"><img src={imagesData('male8')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Robertson</h6>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold">Male</h6>
                            </td>
                            <td>
                              <Badge bg="info-transparent" text="info" className=" rounded-pill">Jaundice</Badge>
                            </td>
                            <td className="fw-semibold text-center fs-13">
                              15 Jan 2021
                            </td>
                            <td className="text-end pe-5">
                              <Button variant='outline-light' href="#" className="btn btn-sm btn-outline-default text-dark fw-semibold me-1">Cancel</Button>
                              <Button variant='primary' href="#" className="btn btn-sm btn-primary fw-semibold">Re-schedule</Button>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md mx-2"><img src={imagesData('female11')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Jenny Willson</h6>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold">Female</h6>
                            </td>
                            <td>
                              <Badge bg="purple-transparent" text="purple" className=" rounded-pill">Diabetes</Badge>
                            </td>
                            <td className="fw-semibold text-center fs-13">
                              05 Mar 2020
                            </td>
                            <td className="text-end pe-5">
                              <Button variant='outline-light' href="#" className="btn btn-sm btn-outline-default text-dark fw-semibold me-1">Cancel</Button>
                              <Button variant='' href="#" className="btn btn-sm btn-primary fw-semibold">Re-schedule</Button>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md mx-2"><img src={imagesData('male13')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Steward</h6>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold">Male</h6>
                            </td>
                            <td>
                              <Badge bg="success-transparent" text="success" className="rounded-pill">Bypass</Badge>
                            </td>
                            <td className="fw-semibold text-center fs-13">
                              20 Apr 2020
                            </td>
                            <td className="text-end pe-5">
                              <Button variant='outline-light' href="#" className="btn btn-sm btn-outline-default text-dark fw-semibold me-1">Cancel</Button>
                              <Button variant='primary' href="#" className="btn btn-sm btn-primary fw-semibold">Re-schedule</Button>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md mx-2"><img src={imagesData('male5')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Ralph Edward</h6>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold">Male</h6>
                            </td>
                            <td>
                              <Badge bg="pink-transparent" text="pink" className="badge badge-pink-transparent rounded-pill">Jaundice</Badge>
                            </td>
                            <td className="fw-semibold text-center fs-13">
                              24 Jan 2022
                            </td>
                            <td className="text-end pe-5">
                              <Button variant='outline-light' href="#" className="btn btn-sm btn-outline-default text-dark fw-semibold me-1">Cancel</Button>
                              <Button variant='primary' href="#" className="btn btn-sm btn-primary fw-semibold">Re-schedule</Button>
                            </td>
                          </tr>
                          <tr className="border-bottom-0">
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md mx-2"><img src={imagesData('female13')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold">Mira Edora</h6>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold">Female</h6>
                            </td>
                            <td>
                              <Badge bg="warning-transparent" text="warning" className="rounded-pill">Diabetes</Badge>
                            </td>
                            <td className="fw-semibold text-center fs-13">
                              11 Dec 2021
                            </td>
                            <td className="text-end pe-5">
                              <Button variant='outline-light' href="#" className="btn btn-sm btn-outline-default text-dark fw-semibold me-1">Cancel</Button>
                              <Button variant='primary' href="#" className="btn btn-sm btn-primary fw-semibold">Re-schedule</Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={6} xl={12} lg={12} md={12} sm={12}>
                <Card>
                  <Card.Header className=" d-flex justify-content-between align-items-center">
                    <Card.Title className=" mb-0">Country Wise Donors</Card.Title>
                    <Button type="button" variant='' className="btn btn-sm bg-primary-transparent fw-bold">
                      View all
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    
                    <Donors/>
                    <Row className="row mt-2">
                      <div className="col text-center mt-4">
                        <p className="mb-1 fw-semibold text-muted-dark">Total Organ Donors</p>
                        <h5 className="mb-0 fw-semibold">63,254</h5>
                      </div>
                      <div className="col text-center mt-4">
                        <p className="mb-1 fw-semibold text-muted-dark">Males
                        </p>
                        <h5 className="mb-0 fw-semibold">32,548</h5>
                      </div>
                      <div className="col text-center mt-4">
                        <p className="mb-1 fw-semibold text-muted-dark">Females
                        </p>
                        <h5 className="mb-0 fw-semibold">30,706</h5>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

        
    </Fragment>
  )
}
