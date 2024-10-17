import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Badge, Button, Card, Col, Dropdown, Form, ListGroup, Row } from 'react-bootstrap'
import { Inboxdata } from './data/mailinboxdata'


export default function MailInbox() {
  const breadcrumbs = ["Pages", "Mail Inbox"];
  const [allData, setAllData] = useState(Inboxdata);

  let inboxdata = [];

  let myfunction = (idx) => {
    let Data
    for (Data of Inboxdata) {
      if (Data.title[0] == " ") {
        Data.title = Data.title.trim()
      }
      if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
          inboxdata.push(Data);
        }
      }

    }
    setAllData(inboxdata);
  };
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />
      <Row>
        <Col xl={3} lg={12} md={12} sm={12}>
          <Card>
            <ListGroup className="list-group list-group-transparent border-bottom-0 mb-0 mail-inbox">
              <div className="m-4 text-center">
                <Button href={`${import.meta.env.BASE_URL}pages/mailcompose`}
                  className="btn btn-primary btn-lg d-grid">Compose</Button>
              </div>

              <ListGroup.Item
                className=" d-flex align-items-center">
                <span className="icons"><i className="fa fa-inbox"></i></span> Inbox <span
                  className="ms-auto badge bg-primary bradius">4</span>
              </ListGroup.Item>

              <ListGroup.Item
                className=" d-flex align-items-center">
                <span className="icons"><i className="fa fa-star-o"></i></span> Stared
              </ListGroup.Item>
              <ListGroup.Item
                className=" d-flex align-items-center">
                <span className="icons"><i className="fa fa-rocket"></i></span>Sent
              </ListGroup.Item>
              <ListGroup.Item
                className=" d-flex align-items-center">
                <span className="icons"><i className="fa fa-trash-o"></i></span> Trash
              </ListGroup.Item>
              <ListGroup.Item
                className=" d-flex align-items-center">Important
              </ListGroup.Item>
              <Link to="#"><ListGroup.Item
                className=" d-flex align-items-center">
                <span className="icons"><i className="fa fa-cog"></i></span> Settings<span className=" ms-auto brradius badge bg-danger">6</span>
              </ListGroup.Item>
              </Link>
            </ListGroup>
            <nav className="p-0">
              <h4 className="pt-4 ps-4 fw-semibold">Labels</h4>
              <ul className="label-inbox">
                <li> <Link to="#"> <i className=" fa fa-stop text-primary"></i> Work </Link> </li>
                <li> <Link to="#"> <i className=" fa fa-stop text-secondary"></i> Design </Link> </li>
                <li> <Link to="#"> <i className=" fa fa-stop text-info "></i> Family </Link></li>
                <li> <Link to="#"> <i className=" fa fa-stop text-warning "></i> Friends </Link></li>
                <li className="mb-3"> <Link to="#"> <i className=" fa fa-stop text-success "></i> Office
                </Link>
                </li>
              </ul>
            </nav>
          </Card>
        </Col>
        <Col xl={9} lg={12} md={12} sm={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Inbox</Card.Title>
              <div className="mailsearch">
                <Form.Control type="search" placeholder="Search" onChange={(ele) => { myfunction(ele.target.value) }}
                  aria-label="Search" />
                <Button className="btn btn-primary"><i className="fa fa-search"></i></Button>
              </div>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="inbox p-0">
                <div className="p-3">
                  <div className="toolbar d-none d-lg-block">
                    <div className="btn-group ">
                      <Button variant='light' type="button" className="btn ">
                        <span className="fa fa-envelope"></span>
                      </Button>
                      <Button variant='light' type="button" className="btn ">
                        <span className="fa fa-star"></span>
                      </Button>
                      <Button variant='light' type="button" className="btn">
                        <span className="fa fa-star-o"></span>
                      </Button>
                      <Button variant='light' type="button" className="btn me-2">
                        <span className="fa fa-bookmark-o"></span>
                      </Button>
                    </div>
                    <div className="btn-group ">
                      <Button variant='light' type="button" className="btn" >
                        <span className="fa fa-mail-reply"></span>
                      </Button>
                      <Button variant='light' type="button" className="btn">
                        <span className="fa fa-mail-reply-all"></span>
                      </Button>
                      <Button variant='light' type="button" className="btn me-2">
                        <span className="fa fa-mail-forward"></span>
                      </Button>
                    </div>
                    <Button variant='light' type="button" className=" btn me-2">
                      <span className="fa fa-trash-o"></span>
                    </Button>
                    <div className="btn-group">
                      <Dropdown>
                        <Dropdown.Toggle variant='light' type="button" className="btn dropdown-toggle"
                          data-bs-toggle="dropdown">
                          <span className="fa fa-tags"></span>
                          <span className="caret"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item className="dropdown-item" href="#">add label <Badge bg="danger"
                          > Home</Badge></Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">add label <Badge bg="info"
                          >
                            Job</Badge></Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">add label <Badge bg="success"
                          > Clients</Badge></Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">add label <Badge bg="warning"
                          > News</Badge></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="btn-group float-end">
                      <Button variant='' type="button" className="btn btn-sm btn-light">
                        <span className="fa fa-chevron-left"></span>
                      </Button>
                      <Button variant='' type="button" className="btn btn-sm btn-light">
                        <span className="fa fa-chevron-right"></span>
                      </Button>
                    </div>
                  </div>
                </div>

                <ListGroup as='ul' className="mail_list list-group list-unstyled">
                  {allData.map((idx, li1) => (
                    <ListGroup.Item as='li' className="" key={li1}>
                      <div className="media">
                        <div className="pull-left">
                          <div className="controls">
                            <Form.Check className="custom-checkbox custom-control">
                              <Form.Check.Input type="checkbox" data-checkboxes="mygroup"
                                className="custom-control-input" id={idx.id} />
                              <Form.Check.Label htmlFor={idx.id}
                                className="custom-control-label"></Form.Check.Label>
                            </Form.Check>
                            <Link to="#"
                              className={`favourite text-${idx.star} hidden-sm-down `}
                              data-bs-toggle="active">  
                                  <i className="fa fa-star mt-0 me-3"></i>                            
                                </Link>
                            
                          </div>
                        </div>
                        <div className="media-body">
                          <div className="media-heading">
                            <Link to="#" className="me-2">{idx.title}</Link>
                            <span className={`badge bg-${idx.class} text-white`}>{idx.badge}</span>
                            <small className="float-end text-muted-dark fw-semibold mt-1"><time className="hidden-sm-down ms-auto"
                              dateTime="2017">{idx.time}</time><i
                                className="fa fa-paperclip ms-2"></i> </small>
                          </div>
                          <p className="msg">{idx.text} </p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}

                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
