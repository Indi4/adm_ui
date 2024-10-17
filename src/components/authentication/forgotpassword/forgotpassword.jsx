import React, { Fragment } from 'react'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import { Link } from 'react-router-dom'
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap'

export default function ForgotPassword () {
  return (
    <Fragment>

    
      <div className="page-content">
        <div className="container text-center text-dark">
          <Row>
            <Col lg={4} className="d-block mx-auto">
              <Row>
                <Col xl={12} md={12} className="col-md-12">
                  <Card>
                    <Card.Body>
                      <div className="text-center mb-6">
                        <Link className="header-brand1" to={`${import.meta.env.BASE_URL}dashboard`}>
                          <img src={logo}
                            className="header-brand-img main-logo" alt="Sparic logo" />
                          <img src={logolight}
                            className="header-brand-img darklogo" alt="Sparic logo" />
                        </Link>
                      </div>
                      <h4 className="fw-semiboild">Forgot password</h4>
                      <InputGroup className="input-group  me-auto ms-auto mb-4">
                        <span className="input-group-addon bg-white"><i
                          className="fa fa-envelope text-muted-dark"></i></span>
                        <input type="password" className="form-control" placeholder="Email address" />
                      </InputGroup>
                      <div className="text-center">
                        <Button variant='primary' href={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-block">Send</Button>
                      </div>
                      <div className="mt-6 btn-list">
                        <Button variant="facebook" type="button" className="btn btn-icon btn-facebook"><i
                          className="fa fa-facebook"></i></Button>
                        <Button variant="google" type="button" className="btn btn-ico"><i
                          className="fa fa-google"></i></Button>
                        <Button variant="twitter" type="button" className="btn btn-icon"><i
                          className="fa fa-twitter"></i></Button>
                        <Button variant="dribbble" type="button" className="btn btn-icon "><i
                          className="fa fa-dribbble"></i></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
     

    </Fragment>
  )
}
