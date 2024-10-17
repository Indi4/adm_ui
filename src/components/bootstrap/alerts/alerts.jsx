import React, { Fragment, useState } from 'react'
import { Alert, Card, CloseButton, Col, Collapse, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { AlertswithIcons, Defaultalerts, Dismissing, Icon, Linkwithalert, Style } from './data/alertsdata'


export default function Alerts() {
  const breadcrumbs = ["Bootstrap", "Alerts"];

  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(!show)
  // Default
  const [list, setList] = useState(Defaultalerts)

  const handleLinkRemove = (id) => {
    const newList = list.filter((idx) => idx.id !== id)
    setList(newList)
  }
  //  Dissmissing
  const [alerticon, setAlerticon] = useState(Dismissing)

  const handleLinkRemove1 = (id) => {
    const newList = alerticon.filter((idx) => idx.id !== id)
    setAlerticon(newList)
  }
  //  Linkwithalert
  const [linkalert, setLinkalert] = useState(Linkwithalert)
  const handleLinkalertRemove = (id) => {
    const newlist = linkalert.filter((idx) => idx.id !== id)
    setLinkalert(newlist)
  }

  //  Icon
  const [icon, setIcon] = useState(Icon)
  const handleLinkRemove2 = (id) => {
    const newlist = icon.filter((idx) => idx.id !== id)
    setIcon(newlist)
  }
  //  Style
  const [style, setStyle] = useState(Style)
  const handleLinkRemove3 = (id) => {
    const newlist = style.filter((idx) => idx.id !== id)
    setStyle(newlist)
  }

  //  Showcode
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);


  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Col xl={12}>
          <Card className=" custom-card">
            <Card.Header>
              <Card.Title>
                Dismissing
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="card-area">
                <Alert variant='warning' className=" fade show" role="alert" show={show} onClick={toggleShow}>
                  <strong>Holy guacamole!</strong> You should check in on some of those fields
                  below.
                  <CloseButton type="button" className="btn-close" data-bs-dismiss="alert"
                    aria-label="Close">x</CloseButton>
                </Alert>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title >Default alerts</Card.Title>

              <Form.Check type="switch" id="custom-switch" label="Show Code" className='ms-auto' onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="">
                  {list.map((idx, alt) => (<Alert role="alert" key={alt} variant={idx.color}>
                    <CloseButton type="button" onClick={() => handleLinkRemove(idx.id)}
                      className="btn-close"
                    >{idx.close}</CloseButton>
                    {idx.text}

                  </Alert>
                  ))}

                </div>
              </div>

            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`export default function Alerts () {
const [list, setList] = useState(Defaultalerts)
const handleLinkRemove = (id) => {
    const newList = list.filter((idx) => idx.id !== id)
    setList(newList)
  }
     return ( 
      {list.map((idx, alt) => (
           <Alert role="alert" key={alt} variant={idx.color}>
           <CloseButton type="button" onClick={() => handleLinkRemove(idx.id)} className="btn-close">{idx.close}</CloseButton>
              {idx.text}
           </Alert>
      ))}
     )}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Alerts With Icons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto d-flex align-items-center" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="">
                  {AlertswithIcons.map((idx, ion) => (<Alert role="alert" key={ion} variant={idx.color}>
                    <span className="alert-inner--icon"><i
                      className={`me-2 fe fe-${idx.icon}`}></i></span>
                    <span className="alert-inner--text">
                      {idx.text}</span></Alert>
                  ))}


                </div>
              </div>

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`<Alert variant="primary" role="alert">
<span className="alert-inner--icon"><i className="fe fe-check-square me-2"></i></span>
<span className="alert-inner--text"><strong>Primary!</strong> This is a warning alert—check it out that has an icon too!</span>
   </Alert> `}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title className="  mb-0">Alerts With Icons Dismissing</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="">
                  {alerticon.map((idx, dis) => (
                    <Alert className="alert  alert-dismissible fade show" key={dis} variant={idx.color}
                      role="alert">
                      <span className="alert-inner--icon">
                        <i className={`me-2 fe fe-${idx.icon}`}></i></span>
                      <span className="alert-inner--text">

                        {idx.text}
                      </span>
                      <CloseButton type="button" className="btn-close me-2" data-bs-dismiss="alert" onClick={() => handleLinkRemove1(idx.id)}
                        aria-label="Close">{idx.close}
                      </CloseButton>
                    </Alert>
                  ))}

                </div>
              </div>

            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`export default function Alerts () {       
const [show, setShow] = useState(true)
const toggleShow = () => setShow(!show)
      return ( 
     <Alert variant="warning" className="alert alert-warning alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
    <span className="alert-inner--icon"><i className="fe fe-info me-2"></i></span>
    <span className="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
    <CloseButton type="button" className="btn-close me-2" data-bs-dismiss="alert" aria-label="Close">x</CloseButton>
    </Alert>
        )}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Links in alerts</Card.Title>

              <Form.Check type="switch" id="custom-switch" label="Show Code" className='ms-auto' onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="">
                  {linkalert.map((idx, lk) => (

                    <Alert variant={idx.color} role="alert" key={lk}>
                      <CloseButton type="button" onClick={() => handleLinkalertRemove(idx.id)}
                        className="btn-close"
                        aria-hidden="true">{idx.close}</CloseButton>
                      <strong>{idx.text}</strong>

                      <Link to="#" className="alert-link">{idx.text1}</Link>
                      {idx.text2}
                    </Alert>
                  ))}
                </div></div>

            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`export default function Alerts () {
const [linkalert, setLinkalert] = useState(Linkwithalert)
const handleLinkalertRemove = (id) => {
        const newlist = linkalert.filter((idx) => idx.id !== id)
        setLinkalert(newlist)
      }
     return ( 
      {linkalert.map((idx, lk) => (
    <Alert variant={idx.color} role="alert" key={lk}>
    <CloseButton type="button" onClick={() => handleLinkalertRemove(idx.id)} className="btn-close"  aria-hidden="true">{idx.close}</CloseButton>
       <strong>{idx.text}</strong>
    <Link to="#" className="alert-link">{idx.text1}</Link>
          {idx.text2}
      </Alert>
        ))}
        )}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Alert with icon</Card.Title>
              <Form.Check type="switch" id="custom-switch" label="Show Code" className='ms-auto' onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="">
                  {icon.map((idx, al) => (
                    <Alert role="alert" key={al} variant={idx.color}>
                      <CloseButton type="button" onClick={() => handleLinkRemove2(idx.id)}
                        className="btn-close" data-bs-dismiss="alert"
                        aria-hidden="true">{idx.close}</CloseButton>
                      <i className={`me-2 fa fa-${idx.icon}`} aria-hidden="true"></i>
                      {idx.text}
                    </Alert>
                  ))}

                </div>

              </div>

            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`export default function Alerts () {
                     
const [show, setShow] = useState(true)
const toggleShow = () => setShow(!show)
   return ( 
    <Alert variant="warning" className="alert alert-warning alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
    <span className="alert-inner--icon"><i className="fe fe-info me-2"></i></span>
    <span className="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
    <CloseButton type="button" className="btn-close me-2" data-bs-dismiss="alert" aria-label="Close">x</CloseButton>
     </Alert>
          )}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Alerts style</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <Row>
                {style.map((idx, sl) => (

                  <Col sm={6} md={6} key={sl}>
                    <Alert variant={idx.color}>
                      <CloseButton type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => handleLinkRemove3(idx.id)}
                        aria-hidden="true">x</CloseButton>
                      <strong>{idx.text}</strong>
                      <hr className="message-inner-separator" />
                      <p>{idx.text1}</p>
                    </Alert>
                  </Col>
                ))}</Row>

            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`export default function Alerts () {
const [style, setStyle] = useState(Style)
const handleLinkRemove3 = (id) => {
    const newlist = style.filter((idx) => idx.id !== id)
    setStyle(newlist)
}
return( 
         {style.map((idx, sl) => (
<Col sm={6} md={6} key={sl}>
  <Alert variant={idx.color}>
    <CloseButton type="button" className="btn-close"  data-bs-dismiss="alert" onClick={() => handleLinkRemove3(idx.id)} aria-hidden="true">x</CloseButton>
    <strong>{idx.text}</strong>
    <hr className="message-inner-separator" />
    <p>{idx.text1}</p>
  </Alert>
</Col>
))}
  )}
`}</code>
              </pre>
            </Collapse>

          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
