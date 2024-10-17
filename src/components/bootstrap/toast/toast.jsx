import React, { Fragment, useState } from 'react'
import { Button, Card, CloseButton, Col, Collapse, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import icon1 from '../../../assets/images/brand/icon.png'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function Toasts() {
  const breadcrumbs = ["Bootstrap", "Toast"];
  // Basic toast
  const [show, setShow] = useState(false)
  // Translucent toast
  const [showA, setShowA] = useState(true)
  const toggleShowA = () => setShowA(!showA)
  // Custom content toast
  const [showB, setShowB] = useState(true)
  const toggleShowB = () => setShowB(!showB)
  // close
  const [showC, setShowC] = useState(true)
  const toggleShowC = () => setShowC(!showC)
  // Color toast
  const [showD, setShowD] = useState(true)
  const toggleShowD = () => setShowD(!showD)

  const [showE, setShowE] = useState(true)
  const toggleShowE = () => setShowE(!showE)

  const [showF, setShowF] = useState(true)
  const toggleShowF = () => setShowF(!showF)

  const [showG, setShowG] = useState(true)
  const toggleShowG = () => setShowG(!showG)
  // Stacking toast
  const [showH, setShowH] = useState(true)
  const toggleShowH = () => setShowH(!showH)

  const [show1, setShow1] = useState(true)
  const toggleShow1 = () => setShow1(!show1)
  // Placement toast
  const [show2, setShow2] = useState(true)
  const toggleShow2 = () => setShow2(!show2)

  //showcode

  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />


      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Toasts</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <div className="p-4">
                <Row>

                  <Col md={12}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} className="toast show mb-2" role="alert">
                      <Toast.Header>
                        <img
                          src={icon1} alt=""
                          className="me-2" height="18"
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                  </Col>
                  <Col md={12} className="mt-3 mt-md-0 mb-1">
                    <Button onClick={() => setShow(true)}>Show live Toast</Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>
                  {`      export function Defaultlink() {
  const [show, setShow] = useState(false);

  return (
    <>
                 <Col md={12}>
           <Toast onClose={() => setShow(false)} show={show} delay={3000} className="toast show" role="alert">
                            <Toast.Header>
                              <img
                                src={icon1} alt=""
                                className="me-2" height="18"
                              />
                              <strong className="me-auto">Bootstrap</strong>
                              <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                          </Toast>
                        </Col>
                        <Col md={12} className="mt-2 mt-md-0">
                          <Button onClick={() => setShow(true)}>Show live Toast</Button>
                        </Col>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>

              <Card.Title>Translucent Toasts</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />

            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border br-7">
                <Toast show={showA} onClose={toggleShowA} className="toast show"
                  role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                  <Toast.Header>
                    <img
                      src={icon1} alt=""
                      className="me-2" height="18" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                </Toast>
              </div>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>
                  {`      export function Defaultlink() {
    const [showA, setShowA] = useState(true)
    const toggleShowA = () => setShowA(!showA)

  return (
    <>
    <Toast show={showA} onClose={toggleShowA} className="toast show"
                        role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                        <Toast.Header>
                          <img
                            src={icon1} alt=""
                            className="me-2" height="18"
                          />
                          <strong className="me-auto">Bootstrap</strong>
                          <small>11 mins ago</small>
                        
                        </Toast.Header>
                        <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                      </Toast>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Custom content Toasts</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12} xl={6} className=" mt-1">

                  <Toast role="alert" aria-live="assertive" className="toast align-items-center show" show={showB}
                    aria-atomic="true" data-bs-autohide="false">
                    <CloseButton aria-label="Close" className="btn-close fs-15 mt-2 me-2" onClick={toggleShowB}
                      data-bs-dismiss="toast"></CloseButton>

                    <Toast.Body className=" text-dark" > Hello, world! This is a toast message.</Toast.Body>
                  </Toast>
                </Col>
                <Col md={12} xl={6} className=" mt-1">
                  <Toast className="show" role="alert" aria-live="assertive" show={showC}
                    aria-atomic="true" data-bs-autohide="false">
                    <Toast.Body>
                      Hello, world! This is a toast message.
                      <div className="mt-2 pt-2 border-top">
                        <Button type="button" size="sm" className="btn btn-primary btn-sm me-1">Take
                          action</Button>
                        <Button type="button" size="sm" className="btn btn-secondary btn-sm" onClick={toggleShowC}
                          data-bs-dismiss="toast">Close</Button>
                      </div>
                    </Toast.Body>
                  </Toast>
                </Col>
              </Row>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>
                  {`export function Defaultlink() {
     const [showB, setShowB] = useState(true)
     const toggleShowB = () => setShowB(!showB)
  
     const [showC, setShowC] = useState(true)
     const toggleShowC = () => setShowC(!showC)

  return (
    <>
    <Row>
             <Col md={12} xl={6} className=" mt-1">
         <Toast role="alert" aria-live="assertive" className="toast 
       align-items-center show" show={showB} onClick={toggleShowB}
                          aria-atomic="true" data-bs-autohide="false">
                            <CloseButton aria-label="Close" className="btn-close fs-15 mt-2 me-2"
                              data-bs-dismiss="toast"></CloseButton>
                   <Toast.Body className=" text-dark" > Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                      </Col>

                       <Col md={12} xl={6} className=" mt-1">
               <Toast className="show" role="alert" aria-live="assertive" show={showC} onClick={toggleShowC}
                          aria-atomic="true" data-bs-autohide="false">
                          <Toast.Body>
                            Hello, world! This is a toast message.
                            <div className="mt-2 pt-2 border-top">
                              <Button type="button" size="sm" className="btn btn-primary btn-sm me-1">Take
                                action</Button>
                              <Button type="button" size="sm" className="btn btn-secondary btn-sm"
                                data-bs-dismiss="toast">Close</Button>
                            </div>
                          </Toast.Body>
                        </Toast>
                      </Col>
                    </Row>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Color Toasts</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />

            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Toast className="toast align-items-center text-white bg-primary border-0 show"
                    role="alert" aria-live="assertive" aria-atomic="true"
                    data-bs-autohide="false" show={showD}  >
                    <CloseButton aria-label="Close" className="btn-close background-none me-2 fs-15" onClick={toggleShowD}
                      data-bs-dismiss="toast">
                      <span aria-hidden="true">&times;</span>
                    </CloseButton>
                    <Toast.Body className=" text-white" >Hello, world! This is a toast message. </Toast.Body>
                  </Toast>
                </Col>
                <Col md={6} className=" mt-2 mt-md-0">
                  <Toast className="toast align-items-center text-white bg-secondary border-0 show" show={showE}
                    role="alert" aria-live="assertive" aria-atomic="true"
                    data-bs-autohide="false">
                    <CloseButton aria-label="Close" className="btn-close fs-15 background-none me-2" onClick={toggleShowE}
                      data-bs-dismiss="toast">
                      <span aria-hidden="true">&times;</span>
                    </CloseButton>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </Col>
                <Col md={6} className="mt-2">
                  <Toast className="toast align-items-center text-white bg-success border-0 show" show={showF}
                    role="alert" aria-live="assertive" aria-atomic="true"
                    data-bs-autohide="false">
                    <CloseButton aria-label="Close" className="btn-close fs-15 background-none me-2" onClick={toggleShowF}
                      data-bs-dismiss="toast">
                      <span aria-hidden="true">&times;</span>
                    </CloseButton>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>

                  </Toast>
                </Col>
                <Col md={6} className=" mt-2">
                  <Toast className="toast align-items-center text-white bg-danger border-0 show" show={showG}
                    role="alert" aria-live="assertive" aria-atomic="true"
                    data-bs-autohide="false">

                    <CloseButton aria-label="Close" className="btn-close fs-15 background-none me-2" onClick={toggleShowG}
                      data-bs-dismiss="toast">
                      <span aria-hidden="true">&times;</span>
                    </CloseButton>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </Col>
              </Row>
            </Card.Body>

            <Collapse in={show6}>
              <pre>
                <code>
                  {`export function Defaultlink() {
     const [showD, setShowD] = useState(true)
     const toggleShowD = () => setShowD(!showD)
   
     

  return (
    <>
    <Row>
           <Col md={6}>
             <Toast className="toast align-items-center text-white bg-primary border-0 show"
               role="alert" aria-live="assertive" aria-atomic="true"
               data-bs-autohide="false" show={showD} onClick={toggleShowD} >
                 <CloseButton aria-label="Close" className="btn-close background-none me-2 fs-15"
    data-bs-dismiss="toast">
        <span aria-hidden="true">&times;</span>
    </CloseButton>
            <Toast.Body className=" text-white" >Hello, world! This is a toast message. </Toast.Body>
             </Toast>
           </Col>
           
         </Row>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Stacking Toasts</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border br-7">
                <ToastContainer>
                  <Toast show={showH} onClose={toggleShowH} className="toast show" role="alert" aria-live="assertive"
                    aria-atomic="true" data-bs-autohide="false">
                    <Toast.Header>
                      <img src={icon1} alt="" className="me-2"
                        height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body className="toast-body text-dark">See? Just like this.</Toast.Body>
                  </Toast>
                  <Toast show={show1} onClose={toggleShow1}>
                    <Toast.Header>
                      <img src={icon1} alt="" className="me-2"
                        height="18" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-muted">2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>
            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>
                  {`export function Defaultlink() {
     const [showH, setShowH] = useState(true)
     const toggleShowH = () => setShowH(!showH)
   
     const [show1, setShow1] = useState(true)
     const toggleShow1 = () => setShow1(!show1)

  return (
    <>
    <ToastContainer>
     <Toast show={showH} onClose={toggleShowH} className="toast show" role="alert" aria-live="assertive"
                          aria-atomic="true" data-bs-autohide="false">
                          <Toast.Header>
                            <img src={icon1} alt="" className="me-2"
                              height="18" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">just now</small>
                          </Toast.Header>
                          <Toast.Body className="toast-body text-dark">See? Just like this.</Toast.Body>
                        </Toast>
                        <Toast show={show1} onClose={toggleShow1}>
                          <Toast.Header>
                            <img src={icon1} alt="" className="me-2"
                              height="18" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small className="text-muted">2 seconds ago</small>
                          </Toast.Header>
                          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                        </Toast>
                      </ToastContainer>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>

              <Card.Title>Placement Toast</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />

            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border br-7">
                <Toast show={show2} onClose={toggleShow2} className="show" role="alert" aria-live="assertive"
                  aria-atomic="true" data-bs-autohide="false">
                  <Toast.Header>
                    <img src={icon1} alt="" className="me-2" height="18" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body className=" text-dark"> Hello, world! This is a toast message.</Toast.Body>
                </Toast>

              </div>
            </Card.Body>
            <Collapse in={show8}>
              <pre>
                <code>
                  {`export function Defaultlink() {
  const [show2, setShow2] = useState(true)
     const toggleShow2 = () => setShow2(!show2)

  return (
    <>
    <Toast show={show2} onClose={toggleShow2} className="show" role="alert" aria-live="assertive"
    aria-atomic="true" data-bs-autohide="false">
    <Toast.Header>
      <img src={icon1} alt="" className="me-2" height="18" />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">11 mins ago</small>
    </Toast.Header>
    <Toast.Body className=" text-dark"> Hello, world! This is a toast message.</Toast.Body>
  </Toast>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <ToastContainer
          className="position-fixed bottom-0 end-0 p-3 ms-auto"
          position="bottom-start"
          style={{ zIndex: 1 }}
        >
 <Toast onClose={() => setShow(false)} show={show} delay={3000} className="toast show " role="alert">
                      <Toast.Header>
                        <img
                          src={icon1} alt=""
                          className="me-2" height="18"
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                    </ToastContainer>
    </Fragment>
  )
}

