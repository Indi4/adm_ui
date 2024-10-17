import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { General } from './data/settings'


export default function Settings() {
  const breadcrumbs = ["Pages", "Extension", "Settings"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={6} xl={3}>
          <Card>
            <Card.Header>
              <Card.Title>Settings</Card.Title>
            </Card.Header>
            <Card.Body className=" px-0 py-2">
              <div className="list-group list-group-transparent mb-0 mail-inbox">
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-user fs-18 text-success p-2"></i></span>Account
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-eye fs-18 text-primary p-2"></i></span>Appearances
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-lock fs-18 text-teal p-2"></i></span>Privacy & Security
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-flag fs-18 text-info p-2"></i></span>Languages
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-database fs-18 text-pink p-2"></i></span>Data Usage Control
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-bell fs-18 text-warning p-2"></i></span>Notifications
                  <span className="badge bg-warning ms-auto">08</span>
                </Link>
                <Link to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-help-circle fs-18 text-danger p-2"></i></span>About
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className="card bg-gradient-primary">
            <Card.Body>
              <div className="mb-2">
                <p className="mb-0 font-weight-semibold">Do you still need our help <Link to="#" className="fe fe-help-circle float-end text-white"></Link></p>
                <small className="tx-white-7">Send Your request via email</small>
              </div>
              <Link to="#" className="btn btn-sm fw-semibold btn-light text-dark">Contact Us</Link>
            </Card.Body>
          </div>
        </Col>
        <Col lg={6} xl={9} >
          <Row className=" row-sm">
            {General.map((idx, s1) => (
              <Col xl={12} xxl={6} key={s1}>
                <Card>
                  <Card.Body>
                    <Row className="row-sm">
                      <Col xl={2} sm={2} md={12}>
                        <div className="mt-3 mb-5">
                          <span
                            className={`settings-icon bg-${idx.color}-transparent text-${idx.color}`}>
                            <i className={`fe fe-${idx.icon}`}></i></span>
                        </div>
                      </Col>
                      <Col xl={10} sm={10} md={12} className="col-xl-10 col-sm-10 col-md-12">
                        <Link to="#">
                          <h4 className="mb-1 text-dark">{idx.title}</h4>
                        </Link>
                        <p className="mb-0 text-muted-dark">{idx.text}
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link to="#" className="tx-14 mb-0 d-flex align-items-center">{idx.footer1}</Link>
                    <label className="custom-switch">
                      <Link to="#" className="me-2 text-end mt-0">{idx.footer2}</Link>
                      <Form.Check type="switch" id="custom-switch" label="" className='mt-2 ms-4 ' />

                    </label>
                  </div>
                </Card>
              </Col>
            ))}

          </Row>
        </Col>
      </Row>


    </Fragment>
  )
}
