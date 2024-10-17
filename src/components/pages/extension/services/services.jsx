import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Card, Col, ProgressBar, Row } from 'react-bootstrap'
import { Cardsdata, Defaultdata } from './data/servicesdata'
import CountUp from 'react-countup'


export default function Services() {
  const breadcrumbs = ["Pages", "Extension", "Services"];
  const now = 55
  const now1 = 70
  const now2 = 80
  const now3 = 75
  const now4 = 65
  const now5 = 69
  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />

      <Row>
        <div className="mb-4">
          <h4 className="fw-semibold text-uppercase mb-1">Our services</h4>
          <h6 className="fw-semibold text-muted-dark">How our team empowering your success.</h6>
        </div>
        {Cardsdata.map((idx, cd) => (
          <Col sm={12} md={12} lg={6} xl={3} key={cd}>
            <Card className="card service">
              <Card.Body className="card-body">
                <div className="item-box text-center">
                  <div className={`text-center text-${idx.color} mb-4`}><i className={`bi bi-${idx.icon}`}></i>
                  </div>
                  <div className="item-box-wrap">
                    <h5 className="mb-2 fw-semibold">{idx.title}</h5>
                    <p className="text-default mb-0">{idx.text}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>



      <Row >
        {Defaultdata.map((idx, df1) => (
          <Col lg={6} md={6} key={df1}>
            <Card>
              <Card.Body>
                <Row >
                  <Col xl={2} lg={3} className="col-xl-2 col-lg-3 feature">
                    <div className={`fa-stack fa-lg fa-1x border bg-gradient-${idx.color} mb-3`}>
                      <i className={`fa fa-${idx.icon} fa-stack-1x text-white`}></i>
                    </div>
                  </Col>
                  <Col xl={10} lg={9} className="col-xl-10 col-lg-9">
                    <div className="mt-1">
                      <h4 className="fw-semibold">{idx.title}</h4>
                      <p className="text-default">
                        {idx.text}</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body className="card-body p-4 text-dark">
              <div className="statistics-info">
                <Row className="row text-center">
                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <span
                        className="bg-danger-transparent icon-service text-danger mb-3">
                        <i className="fa fa-users"></i>
                      </span>
                      <h5>Employees</h5>

                      <CountUp className='h2 text-danger' end={2569} />
                    </div>
                  </Col>
                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <span className="bg-info-transparent icon-service text-info mb-3">
                        <i className="fa fa-bar-chart-o"></i>
                      </span>
                      <h5>Growth</h5>

                      <CountUp className='h2 text-info' end={7253} />
                    </div>
                  </Col>
                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-status">
                      <span
                        className="bg-warning-transparent icon-service text-warning mb-3">
                        <i className="fa fa-rocket"></i>
                      </span>
                      <h5>Total Sales</h5>

                      <CountUp className='h2 text-warning' end={1765} />
                    </div>
                  </Col>
                  <Col lg={3} md={6} className=" mt-4 mb-4">
                    <div className="counter-statuss">
                      <span
                        className="bg-success-transparent icon-service text-success mb-3">
                        <i className="fa fa-file-text"></i>
                      </span>
                      <h5>Total Projects</h5>

                      <CountUp className='h2 text-success' end={846} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col md={12} lg={12} >
          <Card>
            <Card.Header className=" border-bottom">
              <Card.Title>Our features</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p className="text-default">There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need
                  to be
                  sure there isn't anything embarrassing hidden in the middle of text</p>
                <Row className="mt-3">
                  <Col md={6}>
                    <label>Web Design</label>

                    <ProgressBar animated now={now} variant='teal' label={`${now}%`} />
                  </Col>
                  <Col md={6}>
                    <label>Web Development</label>

                    <ProgressBar animated now={now1} variant='primary' label={`${now1}%`} />
                  </Col>
                  <Col md={6}>
                    <label>Wordpress</label>

                    <ProgressBar animated now={now2} variant='cyan' label={`${now2}%`} />
                  </Col>
                  <Col md={6}>
                    <label>Photography</label>

                    <ProgressBar animated now={now3} variant='orange' label={`${now3}%`} />
                  </Col>
                  <Col md={6}>
                    <label>Development</label>

                    <ProgressBar animated now={now4} variant='danger' label={`${now4}%`} />
                  </Col>
                  <Col md={6}>
                    <label>Android</label>

                    <ProgressBar animated now={now5} variant='success' label={`${now5}%`} />
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


    </Fragment>
  )
}
