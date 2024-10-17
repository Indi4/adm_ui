import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function Lockscreen () {
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
                      <div className="text-center mb-3">
                        <Link className="header-brand1" to={`${import.meta.env.BASE_URL}dashboard`}>
                          <img src={logo}
                            className="header-brand-img main-logo" alt="Sparic logo" />
                          <img src={logolight}
                            className="header-brand-img darklogo" alt="Sparic logo" />
                        </Link>
                      </div>
                      <div className="text-center mb-4 ">
                        <img src={imagesData('male15')} alt="user-img"
                          className="avatar avatar-xl brround mCS_img_loaded" />
                      </div>
                      <span className="m-4 d-none d-lg-block text-center">
                        <span className="h4"><strong>Alison</strong></span>
                      </span>
                      <Form.Group className="form-group">
                        <Form.Control type="password" className="form-control" id="exampleInputPassword1"
                          placeholder="Password" />
                      </Form.Group>
                      <Link to={`${import.meta.env.BASE_URL}dashboard`} className="btn btn-primary btn-block">Unlock</Link>
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
