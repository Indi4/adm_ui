import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Badge, Button, Card, Col, Dropdown, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'


export default function MailRead() {
  const breadcrumbs = ["Pages", "Mail Read"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Col xl={3}>
          <Card>
            <ListGroup className="list-group-transparent border-bottom-0 mb-0 mail-inbox">
              <div className="m-4 text-center">
                <Button href={`${import.meta.env.BASE_URL}pages/mailcompose`}
                  className="btn btn-primary btn-lg d-grid">Compose</Button>
              </div>
              <Link to={`${import.meta.env.BASE_URL}pages/mailinbox`}
                className=" list-group-item d-flex align-items-center">
                <span className="icons"><i className="fe fe-mail"></i></span> Inbox <Badge bg="info"
                  className="ms-auto  bradius">14</Badge>
              </Link>
              <ListGroup.Item
                className="d-flex align-items-center">
                <span className="icons"><i className="fe fe-download-cloud"></i></span> Drafts
              </ListGroup.Item>
              <ListGroup.Item
                className="d-flex align-items-center">
                <span className="icons"><i className="fe fe-star"></i></span> Starred <Badge bg="success"
                  className="ms-auto  bradius">03</Badge>
              </ListGroup.Item>
              <ListGroup.Item
                className="d-flex align-items-center">
                <span className="icons"><i className="fe fe-tag"></i></span> Tags
              </ListGroup.Item>
              <ListGroup.Item
                className="d-flex align-items-center">
                <span className="icons"><i className="fe fe-send"></i></span> Sent Mail
              </ListGroup.Item>
              <ListGroup.Item
                className="d-flex align-items-center">
                <span className="icons"><i className="fe fe-trash"></i></span> Trash
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="border-top p-0">
              <ListGroup className="list-group list-group-transparent mb-0 mail-inbox">
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-primary me-2"></span> Friends
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-secondary me-2"></span> Family
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-success me-2"></span> Social
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-info me-2"></span> Office
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-warning me-2"></span> Work
                </ListGroup.Item>
                <ListGroup.Item
                  className="list-group-item-action d-flex align-items-center py-2">
                  <span className="w-3 h-3 brround bg-danger me-2"></span> Settings
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Card>
            <Card.Header>
              <Card.Title>Mail Read</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="email-media">
                <div className="mt-0 d-sm-flex">
                  <img className="me-2 rounded-circle avatar avatar-lg"
                    src={imagesData('female10')} alt="avatar" />
                  <div className="media-body pt-0 overflow-visible">
                    <div className="float-end d-none d-md-flex fs-15">
                      <small className="me-3 mt-3 text-muted-dark fw-semibold">Sep 13 , 2021 12:45
                        pm</small>
                      <OverlayTrigger placement="top" overlay={<Tooltip>Rated </Tooltip>}>
                        <Link to="#" className="me-3 email-icon text-primary bg-primary-transparent"> <i
                          className="fe fe-star"></i></Link>
                      </OverlayTrigger>

                      <OverlayTrigger placement="top" overlay={<Tooltip>Reply </Tooltip>}>
                        <Link to="#" className="me-3 email-icon text-secondary bg-secondary-transparent"> <i
                          className="fa fa-reply"></i></Link>
                      </OverlayTrigger>
                      <div className="me-3">
                        <Dropdown>
                          <Dropdown.Toggle as='a' to="#"
                            className=" no-caret text-danger email-icon bg-danger-transparent"
                            data-bs-toggle="dropdown" role="button"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fe fe-more-horizontal"></i></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                            <Dropdown.Item to="#"><i
                              className="fe fe-share me-2"></i> Reply</Dropdown.Item>
                            <Dropdown.Item to="#"><i
                              className="fe fe-alert-circle me-2"></i>Report
                              Spam</Dropdown.Item>
                            <Dropdown.Item to="#"><i
                              className="fe fe-trash me-2"></i>Delete</Dropdown.Item>
                            <Dropdown.Item to="#"><i
                              className="fe fe-printer me-2"></i>Print</Dropdown.Item>
                            <Dropdown.Item to="#"><i
                              className="fe fe-filter me-2"></i>Filter</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                    </div>
                    <div className="media-title text-dark fw-semibold mt-1">Cherry
                      Blossom <span className="text-muted-dark fw-semibold">(
                        cherryblosso@gmail.com )</span></div>
                    <small className="mb-0 fw-semibold text-dark">to Percy Kewshun ( percykewshun@gmail.com )
                    </small>
                    <small className="me-2 d-md-none">Sep 13 , 2021 12:45 pm</small>
                  </div>
                </div>
              </div>
              <div className="eamil-body mt-5">
                <h6 className="fw-semibold">Hi Sir/Madam</h6><br /><br />
                <p className="fw-semibold text-dark">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. </p>
                <p className="fw-semibold text-dark"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia.</p>
                <p className="fw-semibold text-dark"> Nor again is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally circumstances
                  occur in which toil and pain can procure him some great pleasure. To
                  take a trivial example, which of us ever undertakes laborious physical
                  exercise, except to obtain some advantage from it?</p>
                <br /><br />
                <p className="mb-0">Thanking you Sir/Madam</p>
                <div className="border-top my-4"></div>
                <div className="d-flex align-items-center mb-2">
                  <p className="fw-semibold mb-0">3 Attachments</p>
                  <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`} className="mx-1">View</Link>
                </div>
                <div className="row attachments-doc">
                  <Col xl={3} lg={3} md={4} sm={4} className=" mb-2 mb-sm-0">
                    <div className="border overflow-hidden p-0 br-7">
                      <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}><img
                        src={imagesData('media8')} className="card-img-top"
                        alt="img" /></Link>
                      <div className="p-3 text-center">
                        <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}
                          className="fw-semibold fs-15 text-dark">Image.jpg</Link>
                        <p className="text-muted.ms-2 mb-0 fs-11">(223 KB)</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} md={4} sm={4} className=" mb-2 mb-sm-0">
                    <div className="border overflow-hidden p-0 br-7">
                      <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}><img
                        src={imagesData('media11')} className="card-img-top"
                        alt="img" /></Link>
                      <div className="p-3 text-center">
                        <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}
                          className="fw-semibold fs-15 text-dark">Image2.jpg</Link>
                        <p className="text-muted.ms-2 mb-0 fs-11">(122 KB)</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} md={4} sm={4} className="col-xl-3 col-lg-3 col-md-4 col-sm-4 mb-2 mb-sm-0">
                    <div className="border overflow-hidden p-0 br-7">
                      <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}><img
                        src={imagesData('media6')} className="card-img-top"
                        alt="img" /></Link>
                      <div className="p-3 text-center">
                        <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}
                          className="fw-semibold fs-15 text-dark">Image3.jpg</Link>
                        <p className="text-muted.ms-2 mb-0 fs-11">(345 KB)</p>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button variant='primary' className="btn btn-primary me-1 mb-1" href="#"><i
                className="fa fa-reply"></i> Reply</Button>
              <Button variant='info' className="btn btn-info me-1 mb-1" href="#"><i
                className="fa fa-share"></i> Forward</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
