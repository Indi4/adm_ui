import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Popover, Row, Tooltip, OverlayTrigger, Form, Collapse } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Basicpopover, Interactive, Static } from './data/tooltipdata'


export default function Tooltipandpopover() {
  const breadcrumbs = ["Bootstrap", "Tooltip & Popovers"];
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title>Static Tooltip</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body className="text-center">
              <div className="bd-example bd-example-tooltip-static">
                {Static.map((idx, st) => (
                  <div className={`tooltip tooltip-${idx.place}`} role="tooltip" key={st}>
                    <div className="tooltip-arrow" id="tooltip-arrow-individual"></div>
                    <div className="tooltip-inner">
                      {idx.title}
                    </div>
                  </div>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>
                  {`
 <div className="tooltip tooltip-bottom" role="tooltip">
 <div className="tooltip-arrow" id="tooltip-arrow-individual"></div>
 <div className="tooltip-inner">
   Tooltip on the bottom
 </div>
</div>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </div>

        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title>Interactive Demo Tooltip</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>

              <Row className="row text-center">
                {Interactive.map((idx, t1) => (
                  <Col md={6} xl={3} key={t1}>
                    <OverlayTrigger placement={idx.placement} overlay={<Tooltip className='tooltip-primary'>{idx.title}</Tooltip>}>
                      <Button variant={idx.color} data-bs-toggle="tooltip" data-bs-placement={idx.placement} className='mt-3'>{idx.title}</Button>
                    </OverlayTrigger>
                  </Col>
                ))} </Row>

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`{Interactive.map((idx, t1) => (
  <Col md={6} xl={3} key={t1}>
    <OverlayTrigger placement={idx.placement} overlay={<Tooltip className='tooltip-primary'>{idx.title}</Tooltip>}>
      <Button variant={idx.color} data-bs-toggle="tooltip" data-bs-placement={idx.placement}>{idx.title}</Button>
    </OverlayTrigger>
  </Col>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </div>


        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title>Basic Popover</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <Row className=" text-center">
                {Basicpopover.map((idx, p1) => (
                  <Col sm={6} lg={3} className="mt-2 mb-2" key={p1}>
                    <OverlayTrigger trigger="click"
                      placement={idx.placement}
                      autoclose='true'
                      overlay={
                        <Popover placement={idx.placement} target="auto">
                          <Popover.Header> {idx.title}</Popover.Header>
                          <Popover.Body>
                            {idx.text}
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button variant={idx.color} data-bs-container="body"
                        data-bs-toggle="popover" data-bs-popover-color="default"
                        data-bs-placement={idx.placement}>{idx.title}</Button>
                    </OverlayTrigger>
                  </Col>
                ))}

              </Row>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`{Basicpopover.map((idx, p1) => (
<Col sm={6} lg={3} className="mt-2 mb-2" key={p1}>
<OverlayTrigger trigger="click"
    placement={idx.placement}
    autoclose= 'true'
      overlay={
       <Popover placement={idx.placement}>
          <Popover.Header> {idx.title}</Popover.Header>
          <Popover.Body>
           {idx.text}
          </Popover.Body>
        </Popover>
      }>
<Button variant={idx.color} data-bs-container="body"
        data-bs-toggle="popover" data-bs-popover-color="default"
        data-bs-placement={idx.placement}>{idx.title}</Button>
    </OverlayTrigger>
  </Col>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </div>

      </Row>



    </Fragment>
  )
}
