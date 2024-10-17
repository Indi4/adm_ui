import React, { Fragment } from 'react'
import { Badge, Button, Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Badges, Buttons, Buttonsoutline, Cardmodel, Default, Defaultbadge, Linkbadge } from './data/badgesdata'

export default function BadgesPills() {
  const breadcrumbs = ["Bootstrap", "Badge & Pills"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row>
        {Defaultbadge.map((idx, b1) => (
          <Col md={12} lg={6} key={b1}>
            <Card>
              <Card.Header>
                <Card.Title className="mb-0 ">{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Badge bg={idx.bg1} className={`me-1 my-1 ${idx.class}`}>{idx.badge1}</Badge>
                <Badge bg={idx.bg2} className={` me-1 my-1 ${idx.class}`}>{idx.badge2}</Badge>
                <Badge bg={idx.bg3} className={`  me-1 my-1 ${idx.class}`}>{idx.badge3}</Badge>
                <Badge bg={idx.bg4} className={`  me-1 my-1 ${idx.class}`}>{idx.badge4}</Badge>
                <Badge bg={idx.bg5} className={` me-1 my-1 ${idx.class}`}>{idx.badge5}</Badge>
                <Badge bg={idx.bg6} className={`  me-1 my-1 ${idx.class}`}>{idx.badge6}</Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

      <Row>
        {Badges.map((idx, b2) => (
          <Col md={12} lg={6} key={b2}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Badge bg={idx.bg1} className={`me-2 my-1 ${idx.class}`}>{idx.badge1}</Badge>
                <Badge bg={idx.bg2} className={`me-2 my-1 ${idx.class}`}>{idx.badge2}</Badge>
                <Badge bg={idx.bg3} className={`me-2 my-1 ${idx.class}`}>{idx.badge3}</Badge>
                <Badge bg={idx.bg4} className={`me-2 my-1 ${idx.class}`}>{idx.badge4}</Badge>
                <Badge bg={idx.bg5} className={`me-2 my-1 ${idx.class}`}>{idx.badge5}</Badge>
                <Badge bg={idx.bg6} className={`me-2 my-1 ${idx.class}`}>{idx.badge6}</Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>







      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Buttons with Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              {Buttons.map((idx, b3) => (
                <Button type="button" variant={idx.color} className=" mt-1 mb-1 me-2" key={b3}>
                  <span>{idx.title}</span>
                  <Badge bg={idx.bg} className='ms-2'>{idx.badge}</Badge>
                </Button>
              ))}

            </Card.Body>

          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Outline Buttons with Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              {Buttonsoutline.map((idx, b4) => (
                <Button type="button" variant={idx.color} className=" mt-1 mb-1 me-3" key={b4}>
                  <span>{idx.title}</span>
                  <Badge bg={idx.bg} className='ms-2'>{idx.badge}</Badge>
                </Button>
              ))}

            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Link Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 text-muted card-sub-title">Badges can be used as part of links or buttons to provide a counter.</p>
              <div className="text-wrap">
                {Linkbadge.map((idx, b5) => (
                  <Button type="button" variant={idx.color} className=" position-relative  me-5 my-3" key={b5}>
                    {idx.title}
                    <span className={`position-absolute start-100 translate-middle badge rounded-pill bg-${idx.bg}`}> {idx.text1}

                    </span>
                  </Button>
                ))}

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   

   
      <Row>
        {Default.map((idx, b6) => (
          <Col md={12} lg={6} key={b6}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <h1 className={idx.color1}>{idx.h1} <Badge bg={idx.bg1} text={idx.color}>{idx.badge}</Badge></h1>
                <h2 className={idx.color2}>{idx.h2} <Badge bg={idx.bg2} text={idx.color}>{idx.badge}</Badge></h2>
                <h3 className={idx.color3}>{idx.h3} <Badge bg={idx.bg3} text={idx.color}>{idx.badge}</Badge></h3>
                <h4 className={idx.color4}>{idx.h4} <Badge bg={idx.bg4} text={idx.color}>{idx.badge}</Badge></h4>
                <h5 className={idx.color5}>{idx.h5} <Badge bg={idx.bg5} text={idx.color}>{idx.badge}</Badge></h5>
                <h6 className={idx.color6}>{idx.h6} <Badge bg={idx.bg6} text={idx.color}>{idx.badge}</Badge></h6>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>



      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Card Model Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                {Cardmodel.map((idx, b7) => (
                  <Col xs={12} sm={6} lg={4} key={b7}>
                    <div className={`offer offer-${idx.color}`}>
                      <div className="shape">
                        <div className="shape-text">
                          {idx.title}
                        </div>
                      </div>
                      <div className="offer-content">
                        <h3 className="lead">
                          {idx.heading}
                        </h3>
                        <p className="mb-0">
                          {idx.text1}
                          <br />{idx.text2}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}

              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
