import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'


export default function MailCompose() {
  const breadcrumbs = ["Pages", "Mail Compose"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={4} md={12} sm={12}>
          <Card>
            <ListGroup className="list-group list-group-transparent mb-0 mail-inbox">
              <div className="m-4 text-center">
                <Link to="#" className="btn btn-primary br-7 btn-lg btn-block">Compose</Link>
              </div>
              <div>
                <Link to={`${import.meta.env.BASE_URL}pages/mailinbox`} 
                  className="list-group-item list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-inbox"></i></span>Inbox <span
                    className="ms-auto badge bg-success">14</span>
                </Link>
                <ListGroup.Item 
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-send"></i></span>Sent Mail
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i
                    className="fe fe-alert-circle"></i></span>Important
                  <span className="ms-auto badge bg-danger">3</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-star"></i></span>Starred
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-file"></i></span>Drafts
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-tag"></i></span>Tags
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center">
                  <span className=" fw-semibold me-3"><i className="fe fe-trash-2"></i></span>Trash
                </ListGroup.Item>
              </div>
            </ListGroup>
          </Card>
          <Card className=" overflow-hidden">
            <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
              <Card.Title >Chats</Card.Title>
              <p className="mb-0 d-flex justify-content-center"><span className="legend bg-secondary"></span> Online</p>
            </Card.Header>
            <Card.Body className=" p-0">
              <ul className="mail-chats p-2 m-0">
                <li className="chat-persons">
                  <Link to={`${import.meta.env.BASE_URL}apps/chat`} >
                    <span className="pro-pic"><img src={imagesData('male32')}
                      alt="" /></span>
                  </Link>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user mt-1">
                      <p className="u-name">David</p>
                      <p className="u-designation">Python Developer</p>
                    </div>
                    <p className="mb-0 fs-12 fw-semibold text-primary">04:32 PM</p>
                  </div>
                </li>

                <li className="chat-persons">
                  <Link to={`${import.meta.env.BASE_URL}apps/chat`} >
                    <span className="pro-pic"><img src={imagesData('female23')}
                      alt="" /></span>
                  </Link>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user mt-1">
                      <p className="u-name">Stella Johnson</p>
                      <p className="u-designation">SEO Expert</p>
                    </div>
                    <p className="mb-0 fs-12 fw-semibold text-primary">02:12 AM</p>
                  </div>
                </li>

                <li className="chat-persons">
                  <Link to={`${import.meta.env.BASE_URL}apps/chat`} >
                    <span className="pro-pic"><img src={imagesData('male28')}
                      alt="" /></span>
                  </Link>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user mt-1">
                      <p className="u-name">Ronaldz</p>
                      <p className="u-designation">Business Development</p>
                    </div>
                    <p className="mb-0 fs-12 fw-semibold text-primary">12:24 AM</p>
                  </div>
                </li>

                <li className="chat-persons">
                  <Link to={`${import.meta.env.BASE_URL}apps/chat`} >
                    <span className="pro-pic"><img src={imagesData('female25')}
                      alt="" /></span>
                  </Link>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user">
                      <p className="u-name">Edward Fletcher</p>
                      <p className="u-designation">UI/UX Designer</p>
                    </div>
                    <p className="mb-0 fs-12 fw-semibold text-primary">08:10 PM</p>
                  </div>
                </li>


              </ul>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={8} md={12} sm={12}>
          <Card>
            <Card.Body className="inbox card-body">
              <Form>
                <div className="form-row mb-4">
                  <Form.Label htmlFor="to"
                    className="col-3 col-sm-2 col-md-3 col-lg-2 col-form-label">To:</Form.Label>
                  <Col sm={10} md={9} lg={10} className="col-9 col-sm-10 col-md-9 col-lg-10">
                    <Form.Control type="email" id="to"
                      placeholder="Type email" />
                  </Col>
                </div>
                <div className="form-row mb-4">
                  <Form.Label htmlFor="cc"
                    className="col-3 col-sm-2 col-md-3 col-lg-2 col-form-label">CC:</Form.Label>
                  <Col sm={10} md={9} lg={10} className="col-9 ">
                    <Form.Control type="email" id="cc"
                      placeholder="Type email" />
                  </Col>
                </div>
                <div className="form-row mb-4">
                  <Form.Label
                    className="col-3 col-sm-2 col-md-3 col-lg-2 col-form-label">Subject</Form.Label>
                  <Col sm={10} md={9} lg={10} className="col-9">
                    <Form.Control type="email" id="subject"
                      placeholder="Type Subject" />
                  </Col>
                </div>
                <div className="form-row mb-4">
                  <Form.Label
                    className="col-3 col-sm-2 col-md-3 col-lg-2 col-form-label">Message</Form.Label>
                  <Col sm={10} md={9} lg={10} className="col-9">
                    <Form.Control as='textarea' id="message" name="body" rows="12"
                      placeholder="Click here to reply"></Form.Control>
                  </Col>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="card-footer d-flex">
              <div className="btn-list">
                <Button variant='primary' type="button" className="btn btn-icon "><i className="fa fa-paperclip text-white"></i></Button>
                <Button variant='secondary' type="button" className="btn btn-icon "><i className="fa fa-picture-o text-white"></i></Button>
                <Button variant='info' type="button" className="btn btn-icon "><i className="fa fa-link text-white"></i></Button>
                <Button variant='success' type="button" className="btn btn-icon "><i className="fa fa-smile-o text-white"></i></Button>
                <Button variant='warning' type="button" className="btn btn-icon "><i className="fa fa-trash-o text-white"></i></Button>
                <Button variant='teal' type="button" className="btn btn-icon  me-2"><i className="fa fa-file text-white"></i></Button>
              </div>
              <div className="ms-auto btn-list">
                <Button variant='danger' type="button" className="btn btn-danger btn-space me-2">Discard</Button>
                <Button variant='primary' type="submit" className="btn btn-primary btn-space">Send message</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
