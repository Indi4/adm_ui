import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Form, Placeholder, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Contextual, Gradient, Other } from './data/colordata'


export default function Colors() {
  const breadcrumbs = ["Bootstrap", "Colors"];
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Fragment>

 <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between aglin-items-center">
              <Card.Title>Contextual colors</Card.Title>
              <Form.Check className='ms-auto' type="switch" id="custom-switch" label="Show Code" onClick={() => { setShow(!show) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example p-0">
                  <Row>
                    {Contextual.map((idx, col) => (

                      <Col md={6} lg={4} sm={6} key={col} >
                        <div className="d-flex align-items-center mb-3 mt-3">
                          <div className={`w-8 h-8 br-7 me-4 bg-${idx.color}`}></div>
                          <div>
                            <strong>{idx.text}</strong>
                            <br />
                            <code>{idx.cd}</code>
                          </div>
                        </div>
                      </Col>
                    ))}

                  </Row>
                </div>
              </div>
              <Collapse in={show}>
                <pre>
                  <code>{`
 Example: <div className="d-flex align-items-center mb-3 mt-3">
 <div className="w-7 h-7 bg-primary rounded me-4"></div>
 <div>
   <strong>Primary</strong><br />
   <code>.bg-primary</code>
 </div>
 </div>`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header className=" d-flex align-items-center justify-content-between">
              <Card.Title>Gradient colors</Card.Title>
              <Form.Check className='ms-auto' type="switch" id="custom-switch" label="Show Code" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example p-0">
                  <Row>
                    {Gradient.map((idx, gd) => (

                      <Col md={12} lg={6} sm={12} xl={4} key={gd}>
                        <div className="d-flex align-items-center mb-3 mt-3">
                          <div className={`w-8 h-8 br-7  me-4  bg-${idx.color} `}></div>
                          <div>
                            <strong>{idx.text}</strong>
                            <br />
                            <code>{idx.cd}</code>
                          </div>
                        </div>
                      </Col>
                    ))}

                  </Row>
                </div>

              </div>
              <Collapse in={show1}>
                <pre>
                  <code>{`Example:<div className="d-flex align-items-center mb-3 mt-3">
 <div className="w-8 h-8 br-7  bg-gradient-success  me-4"></div>
 <div>
   <strong>Success</strong>
   <br />
   <code>.bg-gradient-success</code>
 </div>
</div>`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Other colors</Card.Title>
              <Form.Check className='ms-auto' type="switch" id="custom-switch" label="Show Code" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example p-0">
                  <Row>
                    {Other.map((idx, ot) => (

                      <Col md={6} lg={4} sm={6} key={ot}>
                        <div className="d-flex align-items-center mb-3 mt-3">
                          <div className={`w-8 h-8 br-7  me-4  bg-${idx.color} `}></div>
                          <div>
                            <strong>{idx.text}</strong>
                            <br />
                            <code>{idx.cd}</code>
                          </div>
                        </div>
                      </Col>
                    ))}

                  </Row>

                </div>
              </div>
              <Collapse in={show2}>
                <pre>
                  <code>
                    {`
 Example:<div className="d-flex align-items-center mb-3 mt-3">
 <div className="w-8 h-8 br-7  bg-red  me-4"></div>
 <div>
   <strong>Red</strong>
   <br />
   <code>.bg-red</code>
 </div>
</div>`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Fragment>
  )
}
