import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Animated, Basic, Contextual, Contextuallabel, Label, Mixed, Sizes, Striped } from './data/progressdata'


export default function Progress() {
  const breadcrumbs = ["Bootstrap", "Progress"];
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Progress</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              {Basic.map((idx, p1) => (

                <ProgressBar key={p1} variant='primary' now={idx.width} className={`progress-${idx.size}`} />

              ))}
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`<ProgressBar  variant='primary' now={15} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={20} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={40} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={60} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={80} className=" progress-md mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>Contextual Progress</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              {Contextual.map((idx, p2) => (

                <ProgressBar key={p2} variant={idx.color} now={idx.width} className={`progress-${idx.size}`} />

              ))}

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`<ProgressBar  variant='pink' now={15} className=" progress-md mb-3" />
<ProgressBar  variant='green' now={20} className=" progress-md mb-3" />
<ProgressBar  variant='yellow' now={40} className=" progress-md mb-3" />
<ProgressBar  variant='info' now={60} className=" progress-md mb-3" />
<ProgressBar  variant='orange' now={80} className=" progress-md mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Basic Progress with label</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              {Label.map((idx, p3) => (

                <ProgressBar key={p3} variant='primary' now={idx.width} className={`progress-${idx.size}`} />
              ))} </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`<ProgressBar  variant='primary' now={15} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={20} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={40} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={60} className=" progress-md mb-3" />
<ProgressBar  variant='primary' now={80} className=" progress-md mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Contextual Progress with label</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              {Contextuallabel.map((idx, p4) => (
                <ProgressBar key={p4} variant={idx.color} now={idx.width} className={`progress-${idx.size}`} />
              ))}

            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`<ProgressBar  variant='pink' now={15} className=" progress-md mb-3" />
<ProgressBar  variant='green' now={20} className=" progress-md mb-3" />
<ProgressBar  variant='yellow' now={40} className=" progress-md mb-3" />
<ProgressBar  variant='info' now={60} className=" progress-md mb-3" />
<ProgressBar  variant='orange' now={80} className=" progress-md mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>Progress Sizes</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>

              {Sizes.map((idx, p5) => (
                <ProgressBar key={p5} variant='info' now={idx.width} className={`progress-${idx.size}`} />
              ))}


            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`
<ProgressBar  variant='info' now={30} className=" progress-xs mb-3" />
<ProgressBar  variant='info' now={60} className=" progress-sm mb-3" />
<ProgressBar  variant='info' now={70} className=" progress-md mb-3" />
<ProgressBar  variant='info' now={80} className=" progress-lg mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Mixed color Progress with Sizes</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              {Mixed.map((idx, p6) => (
                <ProgressBar className={`progress progress-${idx.size}`} key={p6}>
                  <ProgressBar variant={idx.color1} now={idx.w1} />
                  <ProgressBar variant={idx.color2} now={idx.w2} />
                  <ProgressBar variant={idx.color3} now={idx.w3} />
                </ProgressBar>
              ))}

            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>
                  {`<ProgressBar className="progress progress-sm mb-3">
<ProgressBar variant='pink' className="  w-1"></ProgressBar>
<ProgressBar variant='yellow' className="  w-15"></ProgressBar>
<ProgressBar variant='teal' className="  w-15"></ProgressBar>
</ProgressBar>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>Striped Progress</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />
            </Card.Header>
            <Card.Body>

              {Striped.map((idx, p7) => (
                <ProgressBar variant={idx.color} key={p7} now={idx.width} animated
                  className={`pregress-${idx.size} `} />
              ))}

            </Card.Body>
            <Collapse in={show8}>
              <pre>
                <code>{`<ProgressBar  variant='teal'  animated now={30} className=" progress-bar-striped progress-xs mb-3" />
<ProgressBar  variant='info' animated now={60} className=" progress-bar-striped progress-sm mb-3" />
<ProgressBar  variant='yellow' animated now={70} className=" progress-bar-striped progress-md mb-3" />
<ProgressBar  variant='green'  animated now={80} className=" progress-bar-striped progress-lg mb-3" />
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Animated Progress</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow9(!show9) }} />
            </Card.Header>
            <Card.Body>
              {Animated.map((idx, p8) => (
                <ProgressBar className={`progress progress-${idx.size}`} key={p8}>
                  <ProgressBar animated className={`progress-bar-indeterminate bg-${idx.color}`} />
                </ProgressBar>
              ))}
            </Card.Body>
            <Collapse in={show9}>
              <pre>
                <code>{`<ProgressBar animated className="progress-md mb-3 progress-bar-indeterminate bg-pink"/>
<ProgressBar animated className="progress-md mb-3 progress-bar-indeterminate bg-cyan"/>
<ProgressBar animated className="progress-md mb-3 progress-bar-indeterminate bg-teal"/>
<ProgressBar animated className="progress-md mb-3 progress-bar-indeterminate bg-purple"/>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
