import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Basic, Content, Custom, Reverseimg, Video } from './data/thumbdata'

export default function Thumbnails () {
  const breadcrumbs = ["Bootstrap", "Thumbnails"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

            
            <Row>
              <Col md={12} lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Basic Thumbnails</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {Basic.map((idx, tb1) => (
                      <Col md={3} className="col-6" key={tb1}>
                        <Link to="#" className="thumbnail mb-md-0">
                          <img src={idx.src1} alt="thumb1"
                            className="thumbimg" />
                        </Link>
                      </Col>
                      ))}
                  
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            
            </Row>

            
            <Row>
              <Col md={12} lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Custom content Thumbnails</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {Custom.map((idx, tb2) => (
                      <Col md={12} lg={4} key={tb2}>
                        <div className="thumbnail mb-lg-0">
                          <Link to="#">
                            <img src={idx.src1} alt="thumb1"
                              className="thumbimg" />
                          </Link>
                          <div className="caption">
                            <h4><strong>{idx.h1}</strong></h4>
                            <p>{idx.text}
                              </p>
                            <div className="btn-list">
                              <Link to="#" className="btn btn-primary"
                                role="button">{idx.btn}</Link>
                              <Link to="#" className="btn btn-success"
                                role="button">{idx.btn}</Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                      ))}
                     
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            
            </Row>
           

            
            <Row>
              <Col md={12} lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Custom content Thumbnails</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {Content.map((idx, tb3) => (
                      <Col md={12} lg={6} xl={3} key={tb3}>
                        <div className="thumbnail mb-xl-0">
                          <Link to="#">
                            <img src={idx.src1} alt="thumb1"
                              className="thumbimg" />
                          </Link>
                          <div className="caption">
                            <h4><strong>{idx.h1}</strong></h4>
                            <p>{idx.text}</p>
                          </div>
                        </div>
                      </Col>
                      ))}
                      
                      {Reverseimg.map((idx, tb4) => (
                      <Col md={12} lg={6} xl={3} key={tb4}>
                        <div className="thumbnail mb-lg-0">
                          <div className="caption">
                            <h4><strong>{idx.h1}</strong></h4>
                            <p>{idx.text}</p>
                          </div>
                          <Link to="#">
                            <img src={idx.src1} alt="thumb1"
                              className="thumbimg" />
                          </Link>
                        </div>
                      </Col>
                      ))}
                      
                    </Row>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title>Video List Thumbnail</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="">
                      <Row className="list-unstyled video-list-thumbs row mb-0 gy-3">
                        {Video.map((idx, tb5) => (
                        <Col sm={12} lg={3} md={6} className=" border-0 mb-lg-0" key={tb5}>
                          <Link to="https://www.youtube.com/embed/f3NWvUV8MD8"
                            title="sed do eiusmod tempor incidi dunt ut labore et dolore magna">
                            <img src={idx.src1} alt="Barca"
                              className="img-responsive" />

                            <span className="fa fa-play-circle-o"></span>
                            <span className="duration">{idx.text}</span>
                          </Link>
                        </Col>
                        ))}
                       
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            
            </Row>
           
        

    </Fragment>
  )
}
