import React, { Fragment } from 'react'
import { Button, Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import { AllProduct, Devices, Revenue } from './analyticsdata/analyticsdata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Analytics () {
  const breadcrumbs = ["Home", "Dashboard03"];
  return (
    <Fragment>
   

        <Pageheader items={breadcrumbs} />

          <Row>
            <Col xl={7} lg={12} md={12} sm={12}>
              <Card>
                <Card.Header
                  className="custom-header d-flex justify-content-between align-items-center border-bottom">
                  <Card.Title>Revenue Analytics</Card.Title>
                  <Dropdown>
                    <Dropdown.Toggle href="#" variant='primary' className="d-flex align-items-center bg-primary btn btn-sm mx-1 fw-semibold" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Sort by:
                      Weekly
                  
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu" data-popper-placement="bottom-end">
                      <Dropdown.Item href="#">Monthly</Dropdown.Item>
                      <Dropdown.Item href="#">Yearly</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Header>
                <Card.Body className=" pb-0">
                  <div className="d-flex ms-5">
                    <div>
                      <p className="mb-0 fs-15 text-muted">
                        This month
                      </p>
                      <span className="text-primary fs-20 fw-semibold"><i className="fe fe-dollar-sign fs-13"></i>815,320</span>
                    </div>
                    <div className="ms-5">
                      <p className="mb-0 fs-15 text-muted">
                        Last month
                      </p>
                      <span className="fs-20 text-secondary fw-semibold"><i className="fe fe-dollar-sign fs-13"></i>743,950</span>
                    </div>
                  </div>
                  
                  <Revenue/>
              
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5} lg={12} md={12} sm={12}>
              <Row className=" row-sm">
                <Col sm={6} lg={6}>
                  <Card className=" overflow-hidden">
                    <Card.Body>
                      <div className="d-flex">
                        <div>
                          <div className="mb-0 fw-semibold text-dark">Daily Users</div>
                          <h3 className="mt-1 mb-1 text-dark fw-semibold">4,304</h3>
                          <div className="text-muted fs-12 mt-2"><i className="fe fe-arrow-up-right text-success me-1"></i>
                            <span className="fw-bold fs-12 text-primary">6.05%</span> Since last month
                          </div>
                        </div>
                        <i className="fe fe-user ms-auto fs-5 my-auto bg-primary-transparent p-3 br-7 text-primary"></i>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="overflow-hidden">
                    <Card.Body>
                      <div className="d-flex">
                        <div>
                          <div className="mb-0 fw-semibold text-dark">Sessions</div>
                          <h3 className="mt-1 mb-1 text-dark fw-semibold">46.4K</h3>
                          <div className="text-muted fs-12 mt-2"><i className="fe fe-arrow-up-right text-success me-1"></i>
                            <span className="fw-bold fs-12 text-success">04.12%</span> Since last month
                          </div>
                        </div>
                        <i className="fe fe-database ms-auto fs-5 my-auto bg-secondary-transparent p-3 br-7 text-secondary"></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} lg={6}>
                  <Card className=" overflow-hidden">
                    <Card.Body>
                      <div className="d-flex">
                        <div>
                          <div className="mb-0 fw-semibold text-dark">Bounce Rate</div>
                          <h3 className="mt-1 mb-1 text-dark fw-semibold">25.04%</h3>
                          <div className="text-muted fs-12 mt-2"><i className="fe fe-arrow-up-right text-warning me-1"></i>
                            <span className="fw-bold fs-12 text-warning">0.20%</span> Since last month
                          </div>
                        </div>
                        <i className="fe fe-clock ms-auto fs-5 my-auto bg-warning-transparent p-3 br-7 text-warning"></i>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className=" overflow-hidden">
                    <Card.Body>
                      <div className="d-flex">
                        <div>
                          <div className="mb-0 fw-semibold text-dark">Subscribers</div>
                          <h3 className="mt-1 mb-1 text-dark fw-semibold">10K</h3>
                          <div className="text-muted fs-12 mt-2"><i className="fe fe-arrow-up-right text-danger me-1"></i>
                            <span className="fw-bold fs-12 text-danger">2.20%</span> Since last month
                          </div>
                        </div>
                        <i className="fe fe-bell ms-auto fs-5 my-auto bg-danger-transparent p-3 br-7 text-danger"></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="row-sm">
                <div className="col-12">
                  <Card className=" overflow-hidden">
                    <Card.Header className=" pb-0 border-bottom-0">
                      <Card.Title className="card-title">Deliverables</Card.Title>
                    </Card.Header>
                    <Card.Body className="pt-0">
                      <div className="d-block d-sm-inline-flex align-items-center my-3">
                        <p className="mb-0 me-5"> <span className="legend bg-blue"></span>Marketing Strategy</p>
                        <p className="mb-0 me-5"> <span className="legend bg-teal"></span>Engaging Audience</p>
                        <p className="mb-0 me-5"> <span className="legend bg-pink"></span>Others</p>
                      </div>
                       <ProgressBar>
                           <ProgressBar variant="blue" now={20} key={1} label="20%" />
                           <ProgressBar variant="cyan" now={30} key={2} label="30% "/>
                           <ProgressBar variant="pink" now={50} key={3} label="50%" />
                      </ProgressBar>
                    </Card.Body>
                  </Card>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={5} lg={12} md={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Most Visited Pages By Country</Card.Title>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <table className="table border-0 mb-0 text-nowrap">
                      <thead className="bg-light border-bottom-0">
                        <tr>
                          <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">Country</th>
                          <th className="border-top-0 text-dark fw-semibold fs-13">Active Page</th>
                          <th className="border-top-0 text-dark fw-semibold fs-13">Active Users</th>
                          <th className="border-top-0 text-dark fw-semibold text-end pe-5 fs-13">%Visits</th>
                        </tr>
                      </thead>
                      <tbody className="text-dark">
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage2')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">Canada</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Pages/news-1204 <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">
                            45
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">86.29%</span>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage3')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">Germany</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Store/news-2460 <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">
                            20
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">40.04%</span>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage1')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">India</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Pages/Dashboard-UI_Kit <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">38</td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">28.42%</span>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage5')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">Russia</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Pages/news-4521 <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">19</td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">22.10%</span>
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage6')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">USA</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Store <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">22</td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">21.29%</span>
                          </td>
                        </tr>
                        <tr className="border-bottom-0">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img src={imagesData('flagimage3')} className="avatar avatar-sm br-7" alt="country-image"/>
                            <p className="mb-0 mx-2">Mexico</p>
                          </td>
                          <td>
                            <Link to="#" className="fw-semibold d-flex align-items-center text-dark">
                              /Store/Cart.html <i className="fe fe-external-link fs-11 ms-2"></i>
                            </Link>
                          </td>
                          <td className="text-center text-muted-dark">42</td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold">50.12%</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={12} md={12}>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h3 className="card-title">Browser Usage</h3>
                  <Dropdown>
                    <Button type="button" variant='' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-sm btn-primary-light fw-semibold">
                      <i className="fe fe-external-link"></i>
                    </Button>
                    <ul className="dropdown-menu dropdown-menu-end" role="menu">
                      <li><Link to="#">Seconds</Link></li>
                      <li><Link to="#">Minutes</Link></li>
                      <li><Link to="#">Hours</Link></li>
                    </ul>
                  </Dropdown>
                </Card.Header>
             
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <Table className="table border-0 mb-0 text-nowrap">
                      <thead className="bg-light border-bottom-0">
                        <tr>
                          <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">Browser</th>
                          <th className="border-top-0 text-dark fw-semibold fs-13">Sessions</th>
                          <th className="border-top-0 text-dark fw-semibold text-end pe-5 fs-13">Bounce Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser1')}/>
                            <p className="fw-semibold text-dark mb-0">Chrome</p>
                          </td>
                          <td>
                            <h6 className="mb-1 mt-1 text-dark fw-semibold">26,230</h6>
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>86.29%</span>
                           
                           <ProgressBar animated className="progress-bar-striped progress-md mt-2 h-1" variant='primary' now={85} />
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser4')}/>
                            <p className="fw-semibold text-dark mb-0">Opera</p>
                          </td>
                          <td>
                            <h6 className="mb-1 mt-1 text-dark fw-semibold">12,420</h6>
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold"><i className="fe fe-arrow-down text-danger me-1"></i>42.05%</span>
                            
                             <ProgressBar animated className="progress-bar-striped progress-md mt-2 h-1" variant='primary' now={40} />
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser5')}/>
                            <p className="fw-semibold text-dark mb-0">Safari</p>
                          </td>
                          <td>
                            <h6 className="mb-1 mt-1 text-dark fw-semibold">23,120</h6>
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>30.52%</span>
                           
                             <ProgressBar animated className="progress-bar-striped progress-md mt-2 h-1" variant='primary' now={35} />
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser3')}/>
                            <p className="fw-semibold text-dark mb-0">Firefox</p>
                          </td>
                          <td>
                            <h6 className="mb-1 mt-1 text-dark fw-semibold">42,021</h6>
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>26.65%</span>
                            
                            <ProgressBar animated className="progress-bar-striped progress-md mt-2 h-1" variant='primary' now={25} />
                          </td>
                        </tr>
                        <tr className="border-bottom-0">
                          <td className="ps-5 d-flex align-items-center border-bottom-0">
                            <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser2')}/>
                            <p className="fw-semibold text-dark mb-0">Edge</p>
                          </td>
                          <td>
                            <h6 className="mb-1 mt-1 text-dark fw-semibold">20,402</h6>
                          </td>
                          <td className="text-end pe-5">
                            <span className="fw-semibold"><i className="fe fe-arrow-down text-danger me-1"></i>34.12%</span>
                          
                             <ProgressBar animated className="progress-bar-striped progress-md mt-2 h-1" variant='primary' now={35} />
                          </td>

                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={12} md={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Viewing From Devices</Card.Title>
                </Card.Header>
                <Card.Body className=" px-0 py-2 h-290 ">
                
                  <Devices/>
                </Card.Body>
                <Card.Footer className=" d-flex justify-content-evenly">
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold d-flex justify-content-center mb-1"><i className="fe fe-airplay text-primary mx-1"></i> 40.32%</h6>
                    <p className="text-muted ms-2 mb-0">Desktop</p>
                  </div>
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold d-flex justify-content-center mb-1"><i className="fe fe-smartphone text-secondary mx-1"></i>10.73%</h6>
                    <p className="text-muted ms-2 mb-0">Mobile</p>
                  </div>
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold d-flex justify-content-center mb-1"><i className="fe fe-tablet text-pink mx-1"></i>14.12%</h6>
                    <p className="text-muted ms-2 mb-0">Tablet</p>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="col-12 ">
              <Card >
                <Card.Header className=" d-flex justify-content-between align-items-center">
                  <Card.Title>Product Details</Card.Title>
                  <Link to="#" className="fw-semibold btn btn-sm btn-primary"><i className="fe fe-file-text"></i> Download Report
                  </Link>
                </Card.Header>
                <Card.Body>
                  <div className="table-responsive">
                  
                    <AllProduct/>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
   
   
    </Fragment>
  )
}
