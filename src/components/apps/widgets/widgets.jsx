import React, { Fragment } from 'react'
import { Badge, Card, Col, ProgressBar, Row, Table } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Link } from 'react-router-dom'
import { Bar1, Bar2, Bar3, Bar4, LightboxGallery, Margin, Operating, Opex, Pie1, Pie2, Pie3, Pie4, Profit, Project1, Project2, Project3, Project4 } from './widgetsdata/widgetsdata'
import CountUp from 'react-countup'
export default function Widgets() {
  const breadcrumbs = ["Apps", "widgets"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-danger">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <i className="fa fa-eye mb-0 text-white-transparent"></i>
              </div>
              <div className="mt-2 mb-0 text-white">
                <h2 className="mb-0">54,234</h2>
                <p className="text-white mt-1 mb-0">Daily Visitors </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-secondary">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <i className="fa fa-shopping-cart mb-0 text-white-transparent"></i>
              </div>
              <div className="mt-2 mb-0 text-white">
                <h2 className="mb-0">80,956</h2>
                <p className="text-white mt-1 mb-0">Daily Orders </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-primary">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <i className="fe fe-users mt-3 mb-0 text-white-transparent"></i>
              </div>
              <div className="mt-2 mb-0 text-white">
                <h2 className="mb-0">34,762</h2>
                <p className="text-white mt-1 mb-0">Daily Customers</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-warning">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <i className="fe fe-send mt-3 mb-0 text-white-transparent"></i>
              </div>
              <div className="mt-2 mb-0 text-white">
                <h2 className="mb-0">25,789</h2>
                <p className="text-white mt-1 mb-0">Daily Revenue</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col sm={6} lg={6} xl={3} md={6}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="feature">
                  <div className="fa-stack fa-lg fa-2x icon bg-purple">
                    <i className="fa fa-bed fa-stack-1x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card-body p-3  d-flex">
                  <div>
                    <p className="mb-2">Total Patients</p>
                    <h2 className="mb-0 text-dark">23,786K</h2>
                  </div>
                </div>
              </div>
            </Row>
          </Card>
        </Col>

        <Col sm={6} lg={6} xl={3} md={6}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="feature">
                  <div className="fa-stack fa-lg fa-2x icon bg-green">
                    <i className="fa fa-user-md fa-stack-1x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card-body p-3  d-flex">
                  <div>
                    <p className="mb-2">Total Staff</p>
                    <h2 className="mb-0 text-dark">5,752</h2>
                  </div>
                </div>
              </div>
            </Row>
          </Card>
        </Col>

        <Col sm={6} lg={6} xl={3} md={6}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="feature">
                  <div className="fa-stack fa-lg fa-2x icon bg-orange">
                    <i className="fa fa-hospital-o fa-stack-1x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card-body p-3  d-flex">
                  <div>
                    <p className="mb-2">Total Rooms</p>
                    <h2 className="mb-0 text-dark">34,678</h2>
                  </div>
                </div>
              </div>
            </Row>
          </Card>
        </Col>

        <Col sm={6} lg={6} xl={3} md={6}>
          <Card>
            <Row>
              <div className="col-4">
                <div className="feature">
                  <div className="fa-stack fa-lg fa-2x icon bg-yellow">
                    <i className="fa fa-flask fa-stack-1x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card-body p-3  d-flex">
                  <div>
                    <p className="mb-2">Total Labs</p>
                    <h2 className="mb-0 text-dark">456</h2>
                  </div>
                </div>
              </div>
            </Row>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" card-img-holder">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Purchase</p>
                <h1 className="mb-0 text-dark mainvalue">$7,483</h1>
              </div>
              <Pie1 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className="card-img-holder">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Profits</p>
                <h1 className="mb-0 text-dark mainvalue">$6,129</h1>
              </div>
              <Pie2 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" card-img-holder">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total sales</p>
                <h1 className="mb-0 text-dark mainvalue">$6,129</h1>
              </div>
              <Pie3 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" card-img-holder">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Orders</p>
                <h1 className="mb-0 text-dark mainvalue">$6,129</h1>
              </div>
              <Pie4 />
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Orders</p>
                <h2 className="mb-0 text-dark mainvalue">6,895</h2>
              </div>
              <span className="bg-primary-transparent icon-service text-primary ">
                <i className="si si-briefcase fs-5"></i>
              </span>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Products</p>
                <h2 className="mb-0 text-dark mainvalue">8,379</h2>
              </div>
              <span className="bg-success-transparent icon-service text-success">
                <i className="si si-layers fs-5"></i>
              </span>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Feedbacks</p>
                <h2 className="mb-0 text-dark mainvalue">1,345</h2>
              </div>
              <span className="bg-danger-transparent icon-service text-danger">
                <i className="si si-note fs-5"></i>
              </span>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Total Sold</p>
                <h2 className="mb-0 text-dark mainvalue">2,456K</h2>
              </div>
              <span className="bg-warning-transparent icon-service text-warning">
                <i className="si si-basket-loaded fs-5"></i>
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body className=" p-4 text-dark">
              <div className="statistics-info">
                <Row className=" text-center">
                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon text-danger">
                        <i className="si si-people"></i>
                      </div>
                      <p className="mb-2">Employees</p>
                      <CountUp className='h2 text-primary' end={2569} />
                    </div>
                  </Col>

                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon border-danger">
                        <i className="si si-rocket text-danger"></i>
                      </div>
                      <p className="mb-2">Total Sales</p>
                      <CountUp className='h2 text-danger' end={1765} />
                    </div>
                  </Col>

                  <Col lg={3} md={6} className="  mt-4 mb-4">
                    <div className="counter-statuss">
                      <div className="counter-icon border-success">
                        <i className="si si-docs text-success"></i>
                      </div>
                      <p className="mb-2">Total Projects</p>
                      <CountUp className='h2 text-success' end={846} />
                    </div>
                  </Col>

                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon border-info">
                        <i className="si si-graph text-info"></i>
                      </div>
                      <p className="mb-2">Growth</p>
                      <CountUp className='h2 text-info' end={7253} />
                    </div>
                  </Col>

                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={6} xl={3} md={6} sm={6}>
          <Card>
            <Card.Body>
              <h5>First call resolution</h5>
              <h2 className="mb-2">6,382<span className="sparkline_bar1 float-end"></span></h2>
              <span className="text-muted-dark"><i className="fa fa-arrow-circle-o-up text-success"></i> 30% Increase</span>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card>
            <Card.Body>
              <h5>Unresolved calls</h5>
              <h2 className="mb-2">654<span className="sparkline_bar2 float-end"></span></h2>
              <span className="text-muted-dark"><i className="fa fa-arrow-circle-o-up  text-success"></i> 10% Increase</span>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card>
            <Card.Body>
              <h5>Avg Response time</h5>
              <h2 className="mb-2">7,637<span className="sparkline_bar3 float-end"></span></h2>
              <span className="text-muted-dark"><i className="fa fa-arrow-circle-o-down  text-danger"></i> 8% Decrease</span>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card>
            <Card.Body>
              <h5>Candidates Placed</h5>
              <h2 className="mb-2">$7,850<span className="sparkline_bar4 float-end"></span></h2>
              <span className="text-muted-dark"><i className="fa fa-arrow-circle-o-up  text-success"></i> 15% Increase</span>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <i className="si si-briefcase fs-2 text-primary"></i>
              <Card.Text className="mt-3 mb-3">Total Projects</Card.Text>
              <p className="h1 text-center  text-primary">459</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} xl={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <i className="si si-basket-loaded fs-2 text-secondary"></i>
              <Card.Text className="mt-3 mb-3">New Sales</Card.Text>
              <p className="h1 text-center  text-secondary">262</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} xl={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <i className="si si-people fs-2 text-warning"></i>
              <Card.Text className=" mt-3 mb-3">Employees</Card.Text>
              <p className="h1 text-center  text-warning">789</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} xl={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <i className="si si-eye fs-2 text-success"></i>
              <Card.Text className="mt-3 mb-3">Customer Visitis</Card.Text>
              <p className="h1 text-center text-success">2635</p>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col sm={12} lg={6} md={6} xl={6}>
          <Card>
            <Card.Body className=" text-center">
              <h4>Total Participations</h4>
              <h1 className="mb-1 text-dark">4598</h1>
              <p className="text-muted-dark"><span className="text-purple"><i className="fa fa-arrow-up text-success mx-1"></i>23%
                increase</span> in Last week</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={6} md={6} xl={6}>
          <Card>
            <Card.Body className=" text-center">
              <h4>Contribution</h4>
              <h1 className="mb-1">789</h1>
              <p className="text-muted-dark"><span className="text-purple"><i className="fa fa-arrow-up text-blue"></i> 2.15%
                less</span> than 1 year ago</p>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" text-center">
            <Card.Body>
              <h5 className="mb-3 fw-600">Gross profit Margin</h5>
              <Profit data-thickness="10" />
            </Card.Body>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" text-center">
            <Card.Body>
              <h5 className="mb-3 fw-600">Opex Ratio</h5>
              <Opex data-thickness="10" />
            </Card.Body>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className=" text-center">
            <Card.Body>
              <h5 className="mb-3 fw-600">Operating Profit Margin</h5>
              <Operating data-thickness="10" />
            </Card.Body>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6}>
          <Card className="text-center">
            <Card.Body>
              <h5 className="mb-3 fw-600">Net Profit Margin</h5>
              <Margin data-thickness="10" />
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="mb-1">Total Projects</p>
                  <h1 className="mb-0">10,456</h1>
                </div>
                <span><i className="fe fe-file-text fs-3 text-white bg-gradient-primary p-3 brround"></i></span>
              </div>
              <div className="progress progress-md mt-1 h-2">
                <div className="progress-bar w-70 bg-gradient-primary"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="mb-1">Projects Submitted</p>
                  <h1 className="mb-0">5,356</h1>
                </div>
                <span><i className="fe fe-thumbs-up fs-3 text-white bg-gradient-secondary p-3 brround"></i></span>
              </div>
              <div className="progress progress-md mt-1 h-2">
                <div className="progress-bar w-50  bg-gradient-secondary"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="mb-1">Ongoing Projects</p>
                  <h1 className="mb-0">2,345</h1>
                </div>
                <span><i className="fe fe-activity fs-3 text-white bg-gradient-info p-3 brround"></i></span>
              </div>
              <div className="progress progress-md mt-1 h-2">
                <div className="progress-bar w-30 bg-info"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="mb-1">Task Completed</p>
                  <h1 className="mb-0">2,678</h1>
                </div>
                <span><i className="fe fe-check-circle fs-3 text-white bg-gradient-warning p-3 brround"></i></span>
              </div>
              <div className="progress progress-md mt-1 h-2">
                <div className="progress-bar  progress-bar-animated w-60 bg-warning"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-gradient-purple">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">80,956</h3>
                    <p className="text-white mt-1">Total Graph </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-line-chart fs-1 me-1 float-end text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className="card-counter bg-gradient-secondary">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">54,234</h3>
                    <p className="text-white mt-1">Requesting Projects </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-sign-out float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-gradient-warning">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">25,789</h3>
                    <p className="text-white mt-1 ">Requests Receiving</p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-reply-all float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-gradient-success">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">34,762</h3>
                    <p className="text-white mt-1">Supported projects </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-suitcase float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col lg={6} xl={3} md={6} sm={6}>
          <Card className="text-center overflow-hidden">
            <Card.Body style={{ textAlign: 'center' }}>
              <h5 className="mb-5">Tournaments</h5>

              <Bar1 />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card className=" text-center">
            <Card.Body className=" text-center overflow-hidden">
              <h5 className="mb-5">Participating IN Games</h5>

              <Bar2 />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card className="text-center">
            <Card.Body className=" text-center overflow-hidden">
              <h5 className="mb-5">Monthly Players</h5>

              <Bar3 />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6}>
          <Card className=" text-center">
            <Card.Body className=" text-center overflow-hidden">
              <h5 className="mb-5">Weekly Players</h5>

              <Bar4 />
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <h3 className="mb-1">568</h3>
              <p className="text-muted-dark mb-0">Online Projects</p>
              <div className="progress progress-sm mt-2">
                <div
                  className="progress-bar progress-bar-striped h-2 progress-bar-animated bg-primary w-35">
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <h3 className="mb-1">761</h3>
              <p className="text-muted-dark mb-0">Sales Of Projects</p>
              <div className="progress progress-sm mt-2">
                <div
                  className="progress-bar progress-bar-striped h-2 progress-bar-animated bg-warning w-55">
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <h3 className="mb-1">234</h3>
              <p className="text-muted-dark mb-0"> Offline Projects</p>
              <div className="progress progress-sm mt-2">
                <div
                  className="progress-bar progress-bar-striped h-2 progress-bar-animated bg-info w-70">
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <h3 className="mb-1">897</h3>
              <p className="text-muted-dark mb-0"> Income</p>
              <div className="progress progress-sm mt-2">
                <div
                  className="progress-bar progress-bar-striped h-2 progress-bar-animated bg-secondary w-85">
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} xl={3} lg={6} >
          <Card className=" text-center bg-gradient-primary text-white">
            <Card.Body>
              <h5>Monthly Orders</h5>
              <h3 className="display-5 mb-1 mt-1">1432</h3>
              <div className="d-flex align-items-center justify-content-center"><i className="si si-arrow-up-circle text-white"></i> <span
                className="text-white mx-1">25%</span> Increase</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className=" text-center bg-gradient-success text-white">
            <Card.Body>
              <h5>Monthly Sales</h5>
              <h3 className="display-5 mb-1 mt-1">1452</h3>
              <div className="d-flex align-items-center justify-content-center"><i className="si si-arrow-up-circle text-white"></i> <span
                className="text-white mx-1">54%</span> Increase</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} xl={3} lg={6} >
          <Card className=" text-center bg-gradient-info text-white">
            <Card.Body>
              <h5>Monthly Profit</h5>
              <h3 className="display-5 mb-1 mt-1">$13288</h3>
              <div className="d-flex align-items-center justify-content-center"><i className="si si-arrow-up-circle text-white"></i> <span
                className="text-white mx-1">22%</span> Increase</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} xl={3} lg={6}>
          <Card className=" text-center bg-gradient-danger text-white">
            <Card.Body>
              <h5> Monthly revenue</h5>
              <h3 className="display-5 mb-1 mt-1">$7632</h3>
              <div className="d-flex align-items-center justify-content-center"><i className="si si-arrow-up-circle text-white"></i> <span
                className="text-white mx-1">12%</span> Increase</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} xl={3} lg={6}>
          <Card className=" card-img- holder">
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Services</p>
                <h1 className="mb-0">124</h1>
              </div>
              <span className="text-primary ">
                <i className="bi bi-cart-check fs-2"></i>
              </span>
            </Card.Body>
            <Card.Footer>
              <p className="text-muted mb-0 d-flex align-items-center"><i
                className="si si-arrow-down-circle text-warning me-2"
                aria-hidden="true"></i>Daily Orders</p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Sources</p>
                <h1 className="mb-0">$124</h1>
              </div>
              <span className="text-primary">
                <i className="bi bi-card-checklist fs-2"></i>
              </span>
            </Card.Body>
            <Card.Footer>
              <p className="text-muted mb-0 d-flex align-items-center"><i
                className="si si-arrow-up-circle text-success me-2"></i>Less Sales</p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} md={6} xl={3} lg={6}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Income</p>
                <h1 className="mb-0">21%</h1>
              </div>
              <span className="text-primary">
                <i className="bi bi-bag-check fs-2"></i>
              </span>
            </Card.Body>
            <Card.Footer>
              <p className="text-muted mb-0 d-flex align-items-center"><i
                className="si si-exclamation text-info me-2"></i>From Last Month</p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} lg={6} md={6} xl={3}>
          <Card>
            <Card.Body className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1">Followers</p>
                <h1 className="mb-0">24K</h1>
              </div>
              <span className="text-primary">
                <i className="bi bi-person-plus fs-2"></i>
              </span>
            </Card.Body>
            <Card.Footer>
              <p className="text-muted mb-0 d-flex align-items-center"><i
                className="si si-check me-2 text-primary"></i>
                Recent History
              </p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <h3 className="card-text mt-1 mb-3">Clients</h3>
              <i className="bi bi-people fs-2 text-primary"></i>
              <p className="h3 mt-3 text-center  text-dark">159</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <h3 className="card-text mt-1 mb-3">Customers</h3>
              <i className="bi bi-person-check fs-2 text-primary"></i>
              <p className="h3 mt-3 text-center text-dark">1452</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <h3 className="card-text mt-1 mb-3">Email</h3>
              <i className="bi bi-envelope fs-2 text-primary"></i>
              <p className="h3 mt-3 text-center text-dark">154</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <Card.Body className=" text-center list-icons">
              <h3 className="card-text mt-1 mb-3">Shares</h3>
              <i className="bi bi-share fs-2 text-primary"></i>
              <p className="h3 mt-3 text-center text-dark">452</p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} className="col-6">
          <Card>
            <Card.Body className=" text-center">
              <div className="h1 m-0"><i
                className="mdi mdi-account-multiple-outline text-primary mx-2"></i><strong>90</strong>
              </div>
              <div className="text-muted mb-0">Work</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} className="col-6 ">
          <Card>
            <Card.Body className=" text-center">
              <div className="h1 m-0"><i
                className="mdi mdi-cash-multiple text-primary mx-2"></i><strong>82</strong></div>
              <div className="text-muted mb-0">Business</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} className="col-6 ">
          <Card>
            <Card.Body className=" text-center">
              <div className="h1 m-0"><i className="mdi mdi-chart-line text-primary mx-2"></i><strong>85</strong></div>
              <div className="text-muted mb-0"> Research</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} className="col-6 ">
          <Card>
            <Card.Body className=" text-center">
              <div className="h1 m-0"><i className="mdi mdi-account-outline text-primary"></i><strong>42</strong></div>
              <div className="text-muted mb-0">Estimation</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card className="bg-primary">
            <Card.Body>
              <div className="d-flex no-block align-items-center">
                <div>
                  <h6 className="text-white">Voice Process</h6>
                  <h2 className="text-white m-0 ">565</h2>
                </div>
                <div className="ms-auto">
                  <span className="text-white display-6"><i
                    className="fa fa-file-text-o fs-1"></i></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} >
          <Card className="bg-info">
            <Card.Body>
              <div className="d-flex no-block align-items-center">
                <div>
                  <h6 className="text-white">Graphs of Sales</h6>
                  <h2 className="text-white m-0 ">67k</h2>
                </div>
                <div className="ms-auto">
                  <span className="text-white display-6"><i
                    className="fa fa-signal fs-1"></i></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3}>
          <Card className=" bg-success">
            <Card.Body>
              <div className="d-flex no-block align-items-center">
                <div>
                  <h6 className="text-white">Profits Of Projects</h6>
                  <h2 className="text-white m-0 ">71K</h2>
                </div>
                <div className="ms-auto">
                  <span className="text-white display-6"><i
                    className="fa fa-usd fs-1"></i></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3}>
          <Card className=" bg-danger">
            <Card.Body>
              <div className="d-flex no-block align-items-center">
                <div>
                  <h6 className="text-white">Services</h6>
                  <h2 className="text-white m-0 ">192</h2>
                </div>
                <div className="ms-auto">
                  <span className="text-white display-6"><i
                    className="fa fa-newspaper-o fs-1"></i></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col xl={3} md={6} lg={6} sm={6} className=" m-b-3">
          <Card>
            <div className="">
              <Row>

                <div className="col-12">
                  <div className="p-2 bg-primary br-tr-7 br-tl-7">
                    <div className="text-center text-white social mt-3">
                      <h4>Shares of Projects</h4>
                    </div>
                  </div>
                  <div className="mt-7 chart-circle chart-circle-md donutShadow"
                    data-value="0.67" data-thickness="20" data-color="#467fcf ">
                    <div className="chart-circle-value fs">
                      <i className="fa fa-share-square-o"></i>
                    </div>
                    <Project1 />
                  </div>
                  <Card.Body className=" mt-4">
                    <div className="d-flex  align-items-center">
                      <div>
                        <h4 className="font-medium mb-1">10%</h4>
                        <p className="mb-0"><span className="text-primary"><i
                          className="fa fa-plus me-1"></i>Positive</span></p>
                      </div>
                      <div className="ms-auto">
                        <h4 className="font-medium mb-1">20%</h4>
                        <p className=" mb-0"><span className="text-danger"><i
                          className="fa fa-minus me-1"></i> Negative</span>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Row>
            </div>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6} className=" m-b-3">
          <Card>
            <div className="">
              <Row>
                <div className="col-12">
                  <div className="p-2 bg-blue br-tr-7 br-tl-7">
                    <div className="text-center text-white social mt-3">
                      <h4>Total Projects</h4>
                    </div>
                  </div>
                  <div className="mt-7 chart-circle chart-circle-md donutShadow"
                    data-value="0.67" data-thickness="20" data-color="#32cafe ">
                    <div className="chart-circle-value fs"><i
                      className="fa fa-envelope-open-o"></i>
                    </div>
                    <Project2 />
                  </div>
                  <Card.Body className=" mt-4">
                    <div className="d-flex  align-items-center">
                      <div>
                        <h4 className="font-medium mb-1">10%</h4>
                        <p className="mb-0"><span className="text-primary"><i
                          className="fa fa-plus me-1"></i>Positive</span></p>
                      </div>
                      <div className="ms-auto">
                        <h4 className="font-medium mb-1">20%</h4>
                        <p className=" mb-0"><span className="text-danger"><i
                          className="fa fa-minus me-1"></i> Negative</span>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Row>
            </div>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6} className=" m-b-3">
          <Card>
            <div className="">
              <Row>
                <div className="col-12">
                  <div className="p-2 bg-yellow br-tr-7 br-tl-7">
                    <div className="text-center text-white social mt-3">
                      <h4>Users Of Projects</h4>
                    </div>
                  </div>
                  <div className="mt-7 chart-circle chart-circle-md donutShadow"
                    data-value="0.67" data-thickness="20" data-color="#fdb901 ">
                    <div className="chart-circle-value fs"><i className="fa fa-users"></i></div>
                    <Project3 />
                  </div>
                  <Card.Body className=" mt-4">
                    <div className="d-flex  align-items-center">
                      <div>
                        <h4 className="font-medium mb-1">10%</h4>
                        <p className="mb-0"><span className="text-primary"><i
                          className="fa fa-plus me-1"></i>Positive</span></p>
                      </div>
                      <div className="ms-auto">
                        <h4 className="font-medium mb-1">20%</h4>
                        <p className=" mb-0"><span className="text-danger"><i
                          className="fa fa-minus me-1"></i> Negative</span>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Row>
            </div>
          </Card>
        </Col>


        <Col xl={3} md={6} lg={6} sm={6} className=" m-b-3">
          <Card>
            <div className="">
              <Row>
                <div className="col-12">
                  <div className="p-2 bg-green br-tr-7 br-tl-7">
                    <div className="text-center text-white social mt-3">
                      <h4>Review Projects</h4>
                    </div>
                  </div>
                  <div className="mt-7 chart-circle chart-circle-md donutShadow"
                    data-value="0.67" data-thickness="20" data-color="#5ed84f ">
                    <div className="chart-circle-value fs"><i className="fa fa-repeat"></i>
                    </div>
                    <Project4 />
                  </div>
                  <Card.Body className=" mt-4">
                    <div className="d-flex  align-items-center">
                      <div>
                        <h4 className="font-medium mb-1">10%</h4>
                        <p className="mb-0"><span className="text-primary"><i
                          className="fa fa-plus me-1"></i>Positive</span></p>
                      </div>
                      <div className="ms-auto">
                        <h4 className="font-medium mb-1">20%</h4>
                        <p className=" mb-0"><span className="text-danger"><i
                          className="fa fa-minus me-1"></i> Negative</span>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Row>
            </div>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col md={12} sm={12} lg={12} >
          <Card>
            <Card.Header>
              <Card.Title>Best Pictures for Today</Card.Title>
            </Card.Header>
            <Card.Body>

              <LightboxGallery />
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row className=" row-cards">
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Price</Card.Title>
              <Link className="btn btn-sm btn-primary" to="#">View</Link>
            </Card.Header>
            <Card.Body>
              <h5 className="mb-1">Total Price</h5>
              <h3 className="text-dark count mb-2 font-30">4,657</h3>
              <div className="progress progress-sm mt-0 mb-2">
                <div className="progress-bar bg-gradient-primary w-75" role="progressbar"></div>
              </div>
              <div className="text-muted-dark"><i className="fa fa-caret-up text-green me-1"></i>10% increases</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Stock</Card.Title>
              <Link className="btn btn-sm btn-secondary" to="#">View</Link>
            </Card.Header>
            <Card.Body>
              <h5 className="mb-1">Total Stock</h5>
              <h3 className="text-dark count mb-2 font-30">2,592</h3>
              <div className="progress progress-sm mt-0 mb-2">
                <div className="progress-bar bg-gradient-secondary w-75" role="progressbar"></div>
              </div>
              <div className="text-muted-dark"><i className="fa fa-caret-down text-danger me-1"></i>12% decrease</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Revenue</Card.Title>
              <Link className="btn btn-sm btn-warning" to="#">View</Link>
            </Card.Header>
            <Card.Body>
              <h5 className="mb-1">Total Revenue</h5>
              <h3 className="text-dark count mb-2 font-30">3,517</h3>
              <div className="progress progress-sm mt-0 mb-2">
                <div className="progress-bar bg-gradient-warning w-75" role="progressbar"></div>
              </div>
              <div className="text-muted-dark"><i className="fa fa-caret-down text-danger me-1"></i>5% decrease</div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={6} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Investiment</Card.Title>
              <Link className="btn btn-sm btn-danger" to="#">View</Link>
            </Card.Header>
            <Card.Body>
              <h5 className="mb-1">Total Investiment</h5>
              <h3 className="text-dark count mb-2 font-30">5,759</h3>
              <div className="progress progress-sm mt-0 mb-2">
                <div className="progress-bar bg-gradient-danger w-75" role="progressbar"></div>
              </div>
              <div className="text-muted-dark"><i className="fa fa-caret-down text-danger me-1"></i>5% decrease</div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col lg={12} xl={4} sm={12} >
          <Card className=" mb-5">
            <Card.Body >
              <div className="media mt-0">
                <img src={imagesData('female19')}
                  alt="Generic placeholder image"
                  className="avatar brround avatar-md me-3" />
                <div className="media-body lh-1">
                  <h5 className="time-title p-0 mb-0 fw-semibold leading-normal">Victoria</h5>
                  <span className="fs-13 text-muted-dark">New york, UK</span>
                </div>
                <button className="btn btn-primary btn-sm d-none d-sm-block me-2 my-auto"><i
                  className="fa fa-comments"></i> </button>
                <button className="btn btn-info btn-sm d-none d-sm-block my-auto"><i className="fa fa-phone"></i>
                </button>
              </div>
            </Card.Body>
            <Card.Footer className=" text-dark border-top">
              Email: <Link to="#">victoriacott@Sparic.com</Link>
            </Card.Footer>
          </Card>
        </Col>

        <Col lg={12} xl={4} sm={12}>
          <Card className=" mb-5">
            <Card.Body>
              <div className="media mt-0">
                <img src={imagesData('male32')}
                  alt="Generic placeholder image"
                  className="avatar brround avatar-md me-3" />
                <div className="media-body lh-1">
                  <h5 className="mb-0 fw-semibold leading-normal">Thomas Jaim
                  </h5>
                  <span className="text-muted-dark fs-13">Sparic, UN</span>
                </div>
                <button className="btn btn-primary btn-sm d-none d-sm-block me-2 my-auto"><i
                  className="fa fa-comments"></i> </button>
                <button className="btn btn-info btn-sm d-none d-sm-block my-auto"><i className="fa fa-phone"></i>
                </button>
              </div>
            </Card.Body>
            <Card.Footer className=" text-dark border-top">
              Email: <Link to="#">thomasjaim@Sparic.com</Link>
            </Card.Footer>
          </Card>
        </Col>

        <Col lg={12} xl={4} sm={12}>
          <Card className=" mb-5">
            <Card.Body>
              <div className="media mt-0">
                <img src={imagesData('female21')}
                  alt="Generic placeholder image"
                  className="avatar brround avatar-md me-3" />
                <div className="media-body lh-1">
                  <h5 className="time-title p-0 fw-semibold leading-normal mb-0">Rebbaca
                    wisely
                  </h5>
                  <span className="text-muted-dark fs-13">Japan, UN</span>
                </div>
                <button className="btn btn-primary btn-sm d-none d-sm-block me-2 my-auto"><i
                  className="fa fa-comments"></i> </button>
                <button className="btn btn-info btn-sm d-none d-sm-block my-auto"><i className="fa fa-phone"></i>
                </button>
              </div>
            </Card.Body>
            <Card.Footer className=" text-dark border-top">
              Email: <Link to="#">rebbacawisely@Sparic.com</Link>
            </Card.Footer>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col lg={6} xl={3} md={6} sm={6} className=" m-b-3">
          <Card>
            <Card.Header className=" p-0">
              <div className="facebook p-4 br-tr-7 br-tl-7">
                <div className="text-center text-white social">
                  <i className="fa fa-facebook"></i>
                </div>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="font-medium mb-1">50k</h3>
                  <h5 className="text-muted mb-0">Following</h5>
                </div>
                <div>
                  <h3 className="font-medium mb-1">21k</h3>
                  <h5 className="text-muted mb-0">Friends</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6} className=" m-b-3">
          <Card>
            <Card.Header className=" p-0">
              <div className="twitter p-4 br-tr-7 br-tl-7">
                <div className="text-center text-white social">
                  <i className="fa fa-twitter"></i>
                </div>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="font-medium mb-1">92k</h3>
                  <h5 className="text-muted mb-0">Following</h5>
                </div>
                <div>
                  <h3 className="font-medium mb-1">14k</h3>
                  <h5 className="text-muted mb-0">Friends</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6} className=" m-b-3">
          <Card>
            <Card.Header className=" p-0">
              <div className="linkedin p-4 br-tr-7 br-tl-7">
                <div className="text-center text-white social">
                  <i className="fa fa-linkedin"></i>
                </div>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="font-medium mb-1">34k</h3>
                  <h5 className="text-muted mb-0">Following</h5>
                </div>
                <div>
                  <h3 className="font-medium mb-1">19k</h3>
                  <h5 className="text-muted mb-0">Friends</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} xl={3} md={6} sm={6} className=" m-b-3">
          <Card>
            <Card.Header className=" p-0">
              <div className="instagram p-4 br-tr-7 br-tl-7">
                <div className="text-center text-white social">
                  <i className="fa fa-instagram"></i>
                </div>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="font-medium mb-1">143k</h3>
                  <h5 className="text-muted mb-0">Following</h5>
                </div>
                <div>
                  <h3 className="font-medium mb-1">43k</h3>
                  <h5 className="text-muted mb-0">Friends</h5>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col md={6} lg={12} xl={4} sm={12} >
          <Card>
            <Card.Header>
              <Card.Title>Category</Card.Title>
            </Card.Header>
            <div>

              <Table className="table card-table ">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>

                  <tr className="border-bottom">
                    <td>Admin Template</td>
                    <td className="text-end">
                      <Badge bg='primary' >29</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>Landing Page</td>
                    <td className="text-end">
                      <Badge bg='success' >12</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>Backend UI</td>
                    <td className="text-end">
                      <Badge bg='danger' >12</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>Personal Blog</td>
                    <td className="text-end">
                      <Badge bg='default' className="badge badge-default">60</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>E-mail Templates</td>
                    <td className="text-end">
                      <Badge bg='warning' >15</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td>Corporate Website</td>
                    <td className="text-end">
                      <Badge bg='cyan' >45</Badge>
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td> Educational Templates</td>
                    <td className="text-end">
                      <Badge bg='info' >35</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Valuable Customers
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-4 align-items-center br-5 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={imagesData('female20')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                  <div className="p-1 ms-3">
                    <h6 className="mb-1 fw-semibold">Jordon Matey</h6>
                    <p className="mb-0 text-muted fs-12">matey@gmail.com</p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-gradient-success shadow">+ $246</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4 align-items-center br-5 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={imagesData('female21')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                  <div className="p-1 ms-3">
                    <h6 className="mb-1 fw-semibold">carolen valie</h6>
                    <p className="mb-0 text-muted fs-12">valie@02gmail.com</p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-gradient-info shadow">- $58</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4 align-items-center br-5 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={imagesData('male14')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                  <div className="p-1 ms-3">
                    <h6 className="mb-1 fw-semibold">Jordon Matey</h6>
                    <p className="mb-0 text-muted fs-12">Matey@gmail.com</p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-gradient-primary shadow">+ $124</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4 align-items-center br-5 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={imagesData('male30')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                  <div className="p-1 ms-3">
                    <h6 className="mb-1 fw-semibold">Sunee Jun</h6>
                    <p className="mb-0 text-muted fs-12">sunee24@gmail.com</p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-gradient-secondary shadow">- $168</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center br-5">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={imagesData('female23')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                  <div className="p-1 ms-3">
                    <h6 className="mb-1 fw-semibold">Drow Kano</h6>
                    <p className="mb-0 text-muted fs-12">kano@gmail.com</p>
                  </div>
                </div>
                <div>
                  <span className="badge badge-gradient-purple shadow">+ $86</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={4} sm={12} >
          <Card>
            <Card.Header>
              <Card.Title>Browser Usage</Card.Title>
            </Card.Header>
         
            <Card.Body className=" p-0">
              <div className="table-responsive">
                <table className="table border-0 mb-0 text-nowrap">
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
                        <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser1')} />
                        <p className="fw-semibold text-dark mb-0">Chrome</p>
                      </td>
                      <td>
                        <h6 className="mb-1 mt-1 text-dark fw-semibold">26,230</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>86.29%</span>
                        <ProgressBar className="md h-1" striped variant="primary" animated now={85} />
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex align-items-center border-bottom-0">
                        <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser4')} />
                        <p className="fw-semibold text-dark mb-0">Opera</p>
                      </td>
                      <td>
                        <h6 className="mb-1 mt-1 text-dark fw-semibold">12,420</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="fw-semibold"><i className="fe fe-arrow-down text-danger me-1"></i>42.05%</span>
                        <ProgressBar className="md h-1" striped variant="primary" animated now={40} />
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex align-items-center border-bottom-0">
                        <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser5')} />
                        <p className="fw-semibold text-dark mb-0">Safari</p>
                      </td>
                      <td>
                        <h6 className="mb-1 mt-1 text-dark fw-semibold">23,120</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>30.52%</span>
                        <ProgressBar className="md h-1" striped variant="primary" animated now={35} />
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex align-items-center border-bottom-0">
                        <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser3')} />
                        <p className="fw-semibold text-dark mb-0">Firefox</p>
                      </td>
                      <td>
                        <h6 className="mb-1 mt-1 text-dark fw-semibold">42,021</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="fw-semibold"><i className="fe fe-arrow-up text-success me-1"></i>26.65%</span>

                        <ProgressBar className="md h-1" striped variant="primary" animated now={25} />
                      </td>
                    </tr>
                    <tr className="border-bottom-0">
                      <td className="ps-5 d-flex align-items-center border-bottom-0">
                        <img alt="browser-image" className="avatar br-7 me-2" src={imagesData('browser2')} />
                        <p className="fw-semibold text-dark mb-0">Edge</p>
                      </td>
                      <td>
                        <h6 className="mb-1 mt-1 text-dark fw-semibold">20,402</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="fw-semibold"><i className="fe fe-arrow-down text-danger me-1"></i>34.12%</span>
                        <ProgressBar className="md h-1" striped variant="primary" animated now={35} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6} lg={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Customer Feedbacks</Card.Title>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="list-group list-lg-group list-group-flush">
                <Link className="list-group-item list-group-item-action py-4" to="#">
                  <div className="media mt-0">
                    <img className="avatar-lg rounded-circle me-3"
                      src={imagesData('female25')}
                      alt="Image description" />
                    <div className="media-body">
                      <div className="d-md-flex align-items-center">
                        <h4 className="mb-1 text-dark">
                          Samantha Wilson
                        </h4>
                        <small className="text-primary fw-semibold fw-semibold ms-md-auto"><i
                          className="fe fe-calendar me-1"></i> 28 Feb 2019</small>
                      </div>

                      <p className="mb-0 text-muted">Itaque earum rerum hic
                        reiciendis
                        voluptatibus.</p>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item list-group-item-action py-4" to="#">
                  <div className="media mt-0">
                    <img className="avatar-lg rounded-circle me-3"
                      src={imagesData('male26')} alt="Image description" />
                    <div className="media-body">
                      <div className="d-md-flex align-items-center">
                        <h4 className="mb-1 text-dark">
                          Kevin North
                        </h4>
                        <small className="text-primary fw-semibold fw-semibold ms-md-auto"><i
                          className="fe fe-calendar me-1"></i> 26 Feb 2019</small>
                      </div>

                      <p className="mb-0 text-muted">Itaque earum rerum hic tenetur
                        reiciendis
                        voluptatibus.</p>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item list-group-item-action py-4" to="#">
                  <div className="media mt-0">
                    <img className="avatar-lg rounded-circle me-3"
                      src={imagesData('male25')}
                      alt="Image description" />
                    <div className="media-body">
                      <div className="d-md-flex align-items-center">
                        <h4 className="mb-1 text-dark">
                          Steven Fisher
                        </h4>
                        <small className="text-primary fw-semibold fw-semibold ms-md-auto"><i
                          className="fe fe-calendar me-1"></i> 26 Feb 2019</small>
                      </div>

                      <p className="mb-0 text-muted">Itaque
                        reiciendis
                        voluptatibus.</p>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item list-group-item-action py-4" to="#">
                  <div className="media mt-0">
                    <img className="avatar-lg rounded-circle me-3"
                      src={imagesData('male33')}
                      alt="Image description" />
                    <div className="media-body">
                      <div className="d-md-flex align-items-center">
                        <h4 className="mb-1 text-dark">
                          Steven Fisher
                        </h4>
                        <small className="text-primary fw-semibold ms-md-auto"><i
                          className="fe fe-calendar me-1"></i> 26 Feb 2019</small>
                      </div>

                      <p className="mb-0 text-muted">Itaque earum rerum
                        reiciendis
                        voluptatibus.</p>
                    </div>
                  </div>
                </Link>
                <Link className="list-group-item list-group-item-action br-br-7 br-bl-7" to="#">
                  <div className="media mt-0">
                    <img className="avatar-lg rounded-circle me-3"
                      src={imagesData('female23')}
                      alt="Image description" />
                    <div className="media-body">
                      <div className="d-md-flex align-items-center">
                        <h4 className="mb-1 text-dark">
                          Joanne Taylor
                        </h4>
                        <small className="text-primary fw-semibold ms-md-auto"><i
                          className="fe fe-calendar me-1"></i> 25 Feb 2019</small>
                      </div>

                      <p className="mb-0 text-muted">Itaque a sapiente
                        reiciendis
                        voluptatibus.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={6} >
          <Card>
            <Card.Header>
              <Card.Title>Top Ongoing Projects</Card.Title>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="list-group projects-list">
                <Link to="#"
                  className="list-group-item list-group-item-action flex-column align-items-start border-top-0">
                  <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1 text-dark fw-sembold">PSD Projects</p>
                    <span className="text-danger badge bg-danger-transparent my-auto"><i className="fa fa-caret-down me-1"></i>5
                      days
                      ago</span>
                  </div>
                  <p className="mb-0 text-muted-dark">Started:17-02-2019</p>
                  <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                    diam
                    eget risus varius blandit.</small>
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1 text-dark fw-sembold">Wordpress Projects</p>
                    <small className="text-success badge bg-success-transparent my-auto"><i className="fa fa-caret-up me-1"></i>2
                      days
                      ago</small>
                  </div>
                  <p className="mb-0 text-muted-dark">Started:15-02-2019</p>
                  <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                    diam
                    eget risus varius blandit.</small>
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1 text-dark fw-sembold">HTML &amp; CSS3 Projects</p>
                    <small className="text-danger badge bg-danger-transparent my-auto"><i className="fa fa-caret-down me-1"></i>1
                      days
                      ago</small>
                  </div>
                  <p className="mb-0 text-muted-dark">Started:26-02-2019</p>
                  <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                    diam
                    eget risus varius blandit.</small>
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action flex-column align-items-start br-br-7 br-bl-7">
                  <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1 text-dark fw-sembold">Java Projects</p>
                    <small className="text-success badge bg-success-transparent my-auto"><i className="fa fa-caret-up me-1"></i>10
                      days
                      ago</small>
                  </div>
                  <p className="mb-0 text-muted-dark">Started:06-02-2019</p>
                  <small className="text-muted">Donec id elit non mi porta gravida at eget metus. Maecenas sed
                    diam
                    eget risus varius blandit.</small>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}

