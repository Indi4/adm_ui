import React, { Fragment } from 'react'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import { Link } from 'react-router-dom'
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap'

export default function Login() {
  
  return (
    <Fragment>
      <div className="page_content">
        <div className="container text-center text-dark">
          <Row>
            <Col lg={4} className=" d-block mx-auto">
              <Row>
                <Col xl={12} md={12}>
                  <Card>
                    <Card.Body>
                      <div className="text-center mb-2">
                        <Link className="header-brand1" to={`${import.meta.env.BASE_URL}dashboard`}>
                          <img src={logo}
                            className="header-brand-img main-logo" alt="Sparic logo" />
                          <img src={logolight}
                            className="header-brand-img darklogo" alt="Sparic logo" />
                        </Link>
                      </div>
                      <h3>Login</h3>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="input-group mb-3">
                        <span className="input-group-addon bg-white"><i className="fa fa-user text-dark"></i></span>
                        <input type="text" className="form-control" placeholder="Username" />
                      </InputGroup>
                      <InputGroup className="input-group mb-4">
                        <span className="input-group-addon bg-white"><i
                          className="fa fa-unlock-alt text-dark"></i></span>
                        <input type="password" className="form-control" placeholder="Password" />
                      </InputGroup>
                      <Row>
                        <div>
                          <Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-primary btn-block">Login</Link>
                        </div>
                        <div className="col-12">
                          <Link to={`${import.meta.env.BASE_URL}authentication/forgotpassword`}
                            className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                        </div>
                      </Row>
                      <div className="mt-6 btn-list">
                        <Button type="button" variant="facebook" className=" btn-icon "><i
                          className="fa fa-facebook"></i></Button>
                        <Button type="button" variant='google' className=" btn-icon "><i
                          className="fa fa-google"></i></Button>
                        <Button type="button" variant='twitter' className="btn-icon "><i
                          className="fa fa-twitter"></i></Button>
                        <Button type="button" variant='dribbble' className=" btn-icon"><i
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
