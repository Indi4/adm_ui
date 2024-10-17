import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Collapse, Form, InputGroup, Modal, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

export default function Modals() {
  const breadcrumbs = ["Bootstrap", "Modal"];
  // Date picker function

  const [startDate, setStartDate] = React.useState(new Date())

  const [dateshow, datesetShow] = useState(false)

  const handleClosedt = () => datesetShow(false)
  const handleShowdt = () => datesetShow(true)
  //

  const option = [
    { value: 'Firefox', label: 'Firefox' },
    { value: 'Chrome', label: 'Chrome' },
    { value: 'Safari', label: 'Safari' },
    { value: 'Opera', label: 'Opera' },
    { value: 'Internet Explorer', label: 'Internet Explorer' }
  ]
  // Basic
  const [show1, setShow1] = useState(false)

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
  // Scrolling
  const [show2, setShow2] = useState(false)

  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  // Large
  const [lgShow, setLgShow] = useState(false)

  const handleClose3 = () => setLgShow(false)
  const handleShow3 = () => setLgShow(true)

  // Small
  const [smShow, setSmShow] = useState(false)
  const handleClose5 = () => setSmShow(false)
  const handleShow5 = () => setSmShow(true)
  // Grid
  const [modalShow, setModalShow] = useState(false)
  const handleClose4 = () => setModalShow(false)
  const handleShow4 = () => setModalShow(true)
  // Input
  const [show6, setShow6] = useState(false)

  const handleClose6 = () => setShow6(false)
  const handleShow6 = () => setShow6(true)
  //  Fullscreen
  const [fullscreen, setFullscreen] = useState(true)
  const [fullshow, fullsetShow] = useState(false)
  const handleClose7 = () => setFullscreen(false)
  function handleShow7(breakpoint) {
    setFullscreen(breakpoint)
    fullsetShow(true)
  }
  //  Select
  const [selectshow, selectsetShow] = useState(false)
  const handleClose8 = () => selectsetShow(false)
  const handleShow8 = () => selectsetShow(true)

  // Pop
  const [show9, setShow9] = useState(false)

  const handleClose9 = () => setShow9(false)
  const handleShow9 = () => setShow9(true)

  // Scrolling with content
  const [show, setShow] = useState(false)

  const handleClose10 = () => setShow(false)
  const handleShow10 = () => setShow(true)

  // centered
  const [showc, setShowc] = useState(false)

  const handleClosec = () => setShowc(false)
  const handleShowc = () => setShowc(true)


  //  Twomodals
  const [showt1, setShowt1] = useState(false)
  const [showt2, setShowt2] = useState(false)
  const handleCloset1 = () => setShowt1(false)
  const handleShowt1 = () => setShowt1(true)
  const handleCloset2 = () => setShowt2(false)
  const handleShowt2 = () => setShowt2(true)

  const Handleclose1 = () => {
    setShowt1(false)
    setShowt2(true)
  }
  const Handleclose2 = () => {
    setShowt2(false)
    setShowt1(true)
  }
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)
  const [six, setSix] = useState(false)
  const [seven, setSeven] = useState(false)
  const [eight, setEight] = useState(false)
  const [nine, setNine] = useState(false)
  const [ten, setTen] = useState(false)
  const [eleven, setEleven] = useState(false)
  const [twelve, setTwelve] = useState(false)
  const [thirteen, setThirteen] = useState(false)
  const [fourteen, setFourteen] = useState(false)

  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />

      <Row>
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setFirst(!first) }} />
            </Card.Header>
            <Card.Body>
              <Button variant="primary" onClick={handleShow1}>
                View Modal
              </Button>

              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body Text goes here!</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={first}>
              <pre>
                <code>{`   
export default function BasicModal () {   
const [show1, setShow1] = useState(false)

const handleClose1 = () => setShow1(false)
const handleShow1 = () => setShow1(true)
return(
   <Button variant="primary" onClick={handleShow1}>View Modal</Button>

     <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
       <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    <Modal.Body>Modal body Text goes here!</Modal.Body>
   <Modal.Footer>
     <Button variant="primary">Save Changes</Button>
     <Button variant="secondary" onClick={handleClose1}> Close</Button>
   </Modal.Footer>
  </Modal>)}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Scrolling Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setSecond(!second) }} />
            </Card.Header>
            <Card.Body>
              <Button variant="secondary" onClick={handleShow2}>
                View Modal
              </Button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                    saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                  <p>These cases are perfectly simple and easy to distinguish. In a free hour, when
                    our
                    power of choice is untrammelled and when nothing prevents our being able to do
                    what
                    we like best, every pleasure is to be welcomed and every pain avoided. </p>
                  <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit,
                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam
                    quaerat voluptatem.</p>
                  <p> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can procure him some
                    great
                    pleasure.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia
                    deserunt mollit anim id est laborum."</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={second}>
              <pre>
                <code>

                  {`   
       export default function Scrolling () {   
       const [show2, setShow2] = useState(false)

       const handleClose2 = () => setShow2(false)
       const handleShow2 = () => setShow2(true)
       return(
        <Button variant="secondary" onClick={handleShow2}>
        View Modal
      </Button>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <p> sed do eiusmod tempor incididunt ut labore
   et dolore magna aliqua. Ut enim adminim
    veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.</p>
  <p>Et harum quidem rerum facilis est et expedita 
  distinctio. Nam libero tempore, cum
    soluta nobis est eligendi optio cumque nihil impedit
     quo minus id quod maxime
    placeat facere possimus, omnis voluptas assumenda 
    est, omnis dolor repellendus.
    Temporibus autem quibusdam et aut officiis debitis
     aut rerum necessitatibus
    saepe
    eveniet ut et voluptates repudiandae sint et
     molestiae non recusandae.</p>
  <p>These cases are perfectly simple and easy to 
  distinguish. In a free hour, when our
   power of choice is untrammelled and when nothing 
    prevents our being able to do what
    we like best, every pleasure is to be welcomed
     and every pain avoided. </p>
  <p> Nemo enim ipsam voluptatem quia voluptas sit 
  aspernatur aut odit aut fugit, sed
    quia
    consequuntur magni dolores eos qui ratione 
    voluptatem sequi nesciunt. Neque porro
    quisquam est, qui dolorem ipsum quia dolor
     sit amet, consectetur, adipisci velit,
    sed quia non numquam eius modi tempora
     incidunt ut labore et dolore magnam aliquam
    quaerat voluptatem.</p>
  <p> No one rejects, dislikes, or avoids pleasure
   itself, because it is pleasure, but
    because those who do not know how to pursue
     pleasure rationally encounter
    consequences that are extremely painful. Nor
     again is there anyone who loves or
    pursues or desires to obtain pain of itself,
     because it is pain, but because

    occasionally circumstances occur in which toil 
    and pain can procure him some
    great
    pleasure.</p>
  <p>Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis
    nostrud
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat
    nulla
    pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui
    officia
    deserunt mollit anim id est laborum."</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Large Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setThird(!third) }} />
            </Card.Header>
            <Card.Body>
              <Button variant="danger" onClick={handleShow3}>
                View Modal
              </Button>
              <Modal show={lgShow} onHide={handleClose3} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body className=" pd-20">
                  <h5 className=" lh-3 mg-b-20"><Link to="#" className="fw-bold">Why We Use Electoral College,
                    Not
                    Popular Vote</Link></h5>
                  <p className="">It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    to
                    using 'Content here, content here', making it look like readable English. </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

            </Card.Body>
            <Collapse in={third}>
              <pre>
                <code>

                  {`   
       export default function Large () {   
       const [show3, setShow3] = useState(false)

       const handleClose3 = () => setShow3(false)
       const handleShow3 = () => setShow3(true)
       return(
        <Button variant="danger" onClick={handleShow3}>
        View Modal
      </Button>
      <Modal show={lgShow} onHide={handleClose3} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Message Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className=" pd-20">
     <h5 className=" lh-3 mg-b-20"><Link to="#" className="fw-bold">
     Why We Use Electoral College,
  Not Popular Vote</Link></h5>
<p className="">It is a long established fact that 
a reader will be distracted by the
  readable content of a page when looking at
   its layout. The point of using Lorem
  Ipsum is that it has a more-or-less normal 
  distribution of letters, as opposed
  to using 'Content here, content here', 
  making it look like readable English. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Grid Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setFour(!four) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="pink" onClick={handleShow4}>
                View modal
              </Button>


              <Modal className='fade' id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModal2" show={modalShow} onHide={handleClose4}
                aria-hidden="true">

                <Modal.Header closeButton>
                  <Modal.Title id="example-Modal2">Modal title</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col md={6}>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </Col>
                    <Col md={6}>
                      <p>But I must explain to you how all this mistaken idea of denouncing
                        pleasure
                        and praising pain was born and I will give you a complete account of the
                        who
                        loves toil and pain can procureor sit aspernatur system.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p>expound the actual teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects, dislikes, or avoids
                        pleasure itself, because it is pleasure desires to obtain pain.</p>
                    </Col>
                    <Col md={6}>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                        labore et
                        dolore magnam aliquam quaerat aut odit voluptatem.</p>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button type="button" className="btn btn-secondary br-7"
                    data-bs-dismiss="modal" onClick={handleClose4}>Close</Button>
                  <Button type="button" className="btn btn-primary br-7">Save changes</Button>
                </Modal.Footer>

              </Modal>
            </Card.Body>
            <Collapse in={four}>
              <pre>
                <code>

                  {`   
       export default function Grid () {   
       const [show4, setShow4] = useState(false)

       const handleClose4 = () => setShow4(false)
       const handleShow4 = () => setShow4(true)
       return(
        <Button variant="pink" onClick={handleShow4}>
        View modal
      </Button>
    <Modal className='fade' id="exampleModal2" tabIndex="-1"
     role="dialog" aria-labelledby="exampleModal2" show={modalShow}
      onHide={handleClose4} aria-hidden="true">
       <Modal.Header closeButton>
     <Modal.Title id="example-Modal2">Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
     <Col md={6}>
        <p>Sed ut perspiciatis unde omnis
       iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque 
      ipsa quae ab illoinventore veritatis et quasi architecto 
      beatae vitae dicta sunt explicabo.</p>
      </Col>
      <Col md={6}>
       <p>But I must explain to you how all this mistaken 
      idea of denouncing pleasure and praising pain was born
     and I will give you a complete account of the who
      loves toil and pain can procureor sit aspernatur system.</p>
     </Col>
        </Row>
        <Row>
    <Col md={6}>
        <p>expound the actual teachings of the great 
   explorer of the truth, the master-builder of human happiness.
   rejects, dislikes, or avoidspleasure itself,to obtain pain.</p>
       </Col>
     <Col md={6}>
       <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt ut
      labore et
      dolore magnam aliquam quaerat aut odit voluptatem.</p>
      </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" className="btn btn-secondary br-7"
          data-bs-dismiss="modal" onClick={handleClose4}>Close</Button>
        <Button type="button" className="btn btn-primary br-7"
        >Save changes</Button>
      </Modal.Footer>
        
      </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>

          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Small Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setFive(!five) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="teal" onClick={handleShow5}>
                View Modal
              </Button>
              <Modal show={smShow} onHide={handleClose5} size="sm">
                <Modal.Header closeButton>
                  <Modal.Title>Message Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a modal with small size </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={five}>
              <pre>
                <code>

                  {`   
       export default function SmallModal () {   
       const [show5, setShow5] = useState(false)

       const handleClose5 = () => setShow5(false)
       const handleShow5 = () => setShow5(true)
       return(
        <Button variant="teal" onClick={handleShow5}>
        View Modal
      </Button>
      <Modal show={smShow} onHide={handleClose5} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Message Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a modal with small size </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>

          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Input Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setSix(!six) }} />
            </Card.Header>
            <Card.Body>
              <Button variant="info" onClick={handleShow6}>
                View modal
              </Button>

              <Modal show={show6} onHide={handleClose6}>
                <Modal.Header closeButton>
                  <Modal.Title>New message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Recipient:</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message :</Form.Label>
                      <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  <Button variant="primary" >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={six}>
              <pre>
                <code>

                  {`   
       export default function InputModal () {   
       const [show6, setShow6] = useState(false)

       const handleClose6 = () => setShow6(false)
       const handleShow6 = () => setShow6(true)
       return(
        <Button variant="info" onClick={handleShow6}>
                      View modal
                    </Button>

    <Modal show={show6} onHide={handleClose6}>
      <Modal.Header closeButton>
        <Modal.Title>New message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recipient:</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Message :</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
          Close
        </Button>
        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Fullscreen Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setSeven(!seven) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="warning" onClick={handleShow7}>
                Full screen
              </Button>
              <Modal show={fullshow} fullscreen={fullscreen} onHide={() => fullsetShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body><Modal.Footer>

                  <Button variant="secondary" onClick={handleClose7} >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={seven}>
              <pre>
                <code>

                  {`   
       export default function Fullscreen () {   
        const [fullscreen, setFullscreen] = useState(true)
        const [fullshow, fullsetShow] = useState(false)
        function handleShow7 (breakpoint) {
          setFullscreen(breakpoint)
          fullsetShow(true)
        }
       return(
        <Button variant="warning" onClick={handleShow7}>
        Full screen
      </Button>
<Modal show={fullshow} fullscreen={fullscreen} 
onHide={() => fullsetShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>

                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Select2 Inside Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setEight(!eight) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="purple" onClick={handleShow8}>
                View Demo
              </Button>

              <Modal show={selectshow} onHide={handleClose8}>
                <Modal.Header closeButton>
                  <Modal.Title>Select2 Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      Modal Body<br />
                      <Select
                        defaultValue={2}
                        isMulti
                        options={option}
                        placeholder='Choose one'
                        classNamePrefix="Select2"
                      />
                    </Form.Group>
                  </Form>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success">
                    Save Changes
                  </Button>
                  <Button variant="danger" onClick={handleClose8}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal> </Card.Body>
            <Collapse in={eight}>
              <pre>
                <code>

                  {`   
       export default function SelectInside () {   
        const [selectshow, selectsetShow] = useState(false)
        const handleClose8 = () => selectsetShow(false)
        const handleShow8 = () => selectsetShow(true)

        const option = [
          { value: 'Firefox', label: 'Firefox' },
          { value: 'Chrome', label: 'Chrome' },
          { value: 'Safari', label: 'Safari' },
          { value: 'Opera', label: 'Opera' },
          { value: 'Internet Explorer', label: 'Internet Explorer' }
        ]
       return(
        <Button variant="purple" onClick={handleShow8}>
                      View Demo
                    </Button>

   <Modal show={selectshow} onHide={handleClose8}>
     <Modal.Header closeButton>
       <Modal.Title>Select2 Modal</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Modal Body<br />
           <Select
             defaultValue={2}
             isMulti
             options={option}
             placeholder='Choose one'
             classNamePrefix="Select"
           />
         </Form.Group>
       </Form>
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
        aut fugit, sed quia consequuntur magni dolores 
        eos qui ratione voluptatem sequi nesciunt.
     </Modal.Body>
     <Modal.Footer>
       <Button variant="success">
         Save Changes
       </Button>
       <Button variant="danger" onClick={handleClose8}>
         Close
       </Button>
     </Modal.Footer>
   </Modal> 

                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Toggle between modals</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setNine(!nine) }} />
            </Card.Header>
            <Card.Body>
              <Row className="row-sm">
                <Modal id="m1" className="fade" aria-hidden="true"
                  aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1} >
                  <Modal.Header closeButton>
                    <Modal.Title id="exampleModalToggleLabel">Modal 1</Modal.Title>

                  </Modal.Header>
                  <Modal.Body>
                    Show a second modal and hide this one with the button below. </Modal.Body>
                  <Modal.Footer>
                    <Button className="btn btn-primary" id="btn1" onClick={Handleclose1}>Open second modal</Button>
                  </Modal.Footer>

                </Modal>

                <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                  centered show={showt2} onHide={handleCloset2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal 2</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Hide this modal and show the first with the button below.</Modal.Body>
                  <Modal.Footer>
                    <Button className="btn btn-primary"
                      onClick={Handleclose2}>Back to first</Button>
                  </Modal.Footer>

                </Modal>
              </Row>
              <Button type="button" className="btn ripple btn-primary" data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal" onClick={handleShowt1}>View Demo</Button>
            </Card.Body>
            <Collapse in={nine}>
              <pre>
                <code>

                  {`   
       export default function Toggle () {   
        const [showt1, setShowt1] = useState(false)
        const [showt2, setShowt2] = useState(false)
        const handleCloset1 = () => setShowt1(false)
        const handleShowt1 = () => setShowt1(true)
        const Handleclose1 = () => {
          setShowt1(false)
          setShowt2(true)
        }
        const Handleclose2 = () => {
          setShowt2(false)
          setShowt1(true)
        }
       return(
        <Row className="row-sm">
    <Modal id="m1" className="fade" aria-hidden="true" 
    aria-labelledby="contained-modal-title-vcenter" 
    centered show={showt1} onHide={handleCloset1} >
   <Modal.Header closeButton>
        <Modal.Title id="exampleModalToggleLabel">Modal 1</Modal.Title>

      </Modal.Header>
      <Modal.Body>
  Show a second modal and hide this one with the button below.</Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-primary" id="btn1" 
        onClick={Handleclose1}>Open second modal</Button>
      </Modal.Footer>

    </Modal>

    <Modal id="m2" className='fade'
     aria-labelledby="contained-modal-title-vcenter" 
    centered show={showt2} onHide={handleCloset2}>
      <Modal.Header closeButton>
        <Modal.Title>Modal 2</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hide this modal and show the first with the 
        button below.</Modal.Body><Modal.Footer>
        <Button className="btn btn-primary"
          onClick={Handleclose2}>Back to first</Button>
      </Modal.Footer>

    </Modal>
  </Row>
  <Button type="button" className="btn ripple btn-primary"
   data-bs-target="#exampleModalToggle"
   data-bs-toggle="modal" onClick={handleShowt1}>View Demo</Button>

                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Popover Modal</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setTen(!ten) }} />
            </Card.Header>
            <Card.Body>
              <Button variant="success" onClick={handleShow9}>
                View Demo
              </Button>

              <Modal show={show9} onHide={handleClose9}>
                <Modal.Header closeButton>
                  <Modal.Title>Popover Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Popover in a modal</p>
                  <p> This
                    <OverlayTrigger trigger="click"
                      placement='right'
                      autoclose='true'
                      overlay={
                        <Popover placement='bottom'>
                          <Popover.Header> Popover bottom</Popover.Header>
                          <Popover.Body>
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <Button variant="success" className
                        ="me-2 ms-2">button</Button>
                    </OverlayTrigger>
                    triggers a popover on click.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose9}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={ten}>
              <pre>
                <code>

                  {`   
       export default function Popover () {   
        const [show9, setShow9] = useState(false)

        const handleClose9 = () => setShow9(false)
        const handleShow9 = () => setShow9(true)
      return(
        <Button variant="success" onClick={handleShow9}>
        View Demo
      </Button>

      <Modal show={show9} onHide={handleClose9}>
        <Modal.Header closeButton>
          <Modal.Title>Popover Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Popover in a modal</p>
          <p> This
            <OverlayTrigger trigger="click" placement='right' autoclose='true' overlay={
                <Popover placement='bottom'> <Popover.Header> Popover bottom</Popover.Header>
                  <Popover.Body>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="success">button</Button>
            </OverlayTrigger>
            triggers a popover on click.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                      )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className='flex-wrap gap-2'>
              <Card.Title>Vertically centered</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setEleven(!eleven) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="primary" onClick={handleShowc}>
                View Demo
              </Button>
              <Modal onHide={handleClosec} show={showc}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Vertically centered Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant='secondary' onClick={handleClosec}>Close</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={eleven}>
              <pre>
                <code>

                  {`   
       export default function Vertically () {   
        const [showc, setShowc] = useState(false)

        const handleClosec = () => setShowc(false)
        const handleShowc = () => setShowc(true)
      return(
        <Button variant="primary" onClick={handleShowc}>
                View Demo
              </Button>
              <Modal onHide={handleClosec} show={showc}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Vertically centered Modal
      </Modal.Title>
        </Modal.Header>
         <Modal.Body>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
      odit aut fugit, sed quia consequuntur magni dolores eos
       qui ratione voluptatem sequi nesciunt.</Modal.Body>
                <Modal.Footer>
      <Button variant="primary">
        Save Changes
      </Button>
      <Button variant='secondary' onClick={handleClosec}>Close</Button>
                </Modal.Footer>
              </Modal>
                )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Scrolling with Content</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setTwelve(!twelve) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="secondary" onClick={handleShow10}>
                View Modal
              </Button>
              <Modal show={show} onHide={handleClose10}>
                <Modal.Header closeButton>
                  <Modal.Title>Scrolling with Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PerfectScrollbar className='h-350'>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>

                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>

                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta maxime, consectetur inventore obcaecati quasi velit rem, vel accusamus incidunt ipsa. Sequi repellat amet facilis soluta obcaecati sunt porro commodi earum eum maiores iure, adipisci hic placeat quasi eligendi fuga architecto distinctio magni error laborum atque ad rem dicta? Deleniti.</p>
                  </PerfectScrollbar>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClose10}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={twelve}>
              <pre>
                <code>{`   
       export default function Scrolling () {   

const [show, setShow] = useState(false) 
const handleClose10 = () => setShow(false)
const handleShow10 = () => setShow(true)

      return(
<Button variant="secondary" onClick={handleShow10}>View Modal</Button>
      <Modal show={show} onHide={handleClose10}>
        <Modal.Header closeButton>
          <Modal.Title>Scrolling with Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PerfectScrollbar className='h-350'>
<p> Nemo enim ipsam voluptatem quia voluptassit aspernatur aut odit aut 
fugit, sed quiaconsequuntur magni dolores eos quiratione voluptatem sequi 
nesciunt.</p>

<p>But I must explain to you how all this 
mistaken idea of denouncing pleasure and praising pain was born and I
will give you acomplete account of the system, and expound the actual 
teachings of the great explorerof the truth, the master-builder of human 
happiness. No one rejects, dislikes, or avoids pleasure itself, because 
it is pleasure,but because those who do not know how to pursue pleasure
rationally encounter consequences that are extremely painful.</p>

<p>At vero eos et accusamus et iusto odio dignissimosducimus qui
blanditiis praesentium voluptatum deleniti atque corrupti quos 
doloreset quas molestias excepturi sint occaecati cupiditatenon provident,
similique sunt in culpa qui officia deserunt mollitia animi,id est laborum 
et dolorumfuga. Et harum quidem rerum facilis est et expedita distinctio.</p>

<p>On the other hand, we denounce with 
righteous indignation and dislike men who are so 
beguiled and demoralized by the charms of 
pleasure of the moment, so blinded by desire,
that they cannot foresee the pain and trouble
that are bound to ensue; and equal blame 
belongs to those who fail in their duty 
through weakness of will, which is the same as 
saying through shrinking from toil and pain.</p>

<p>These cases are perfectly simple and easy to
distinguish. In a free hour, when our 
power of choice is untrammelled and when
nothing prevents our being able to do what
we like best, every pleasure is to be
welcomed and every pain avoided. But in certain 
circumstances and owing to the claims 
of duty or the obligations of business it will 
frequently occur that pleasures have to
be repudiated and annoyances accepted. 
The wise man therefore always holds in 
these matters to this principle of selection:
he rejects pleasures to secure other  greater 
pleasures, or else he endures pains to avoid worse pains.</p>

<p>Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Ex soluta maxime,
consectetur inventore obcaecati quasi velit rem,
vel accusamus incidunt ipsa. Sequi
repellat amet facilis soluta obcaecati
sunt porro commodi earum eum maiores iure, 
adipisci hic placeat quasi eligendi fuga architecto
distinctio magni error laborum atque ad rem dicta? Deleniti.</p>
</PerfectScrollbar>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                )}`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Modal-Flatpicker</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setThirteen(!thirteen) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="blue" onClick={handleShowdt}>
                View Demo
              </Button>

              <Modal show={dateshow} onHide={handleClosedt}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <InputGroup className="input-group">
                    <InputGroup.Text className="input-group-text">
                      <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                    </InputGroup.Text>
                    <div> <DatePicker className="form-control" placeholder="Choose date" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                  </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save Changes
                  </Button>
                  <Button variant="secondary" onClick={handleClosedt}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Collapse in={thirteen}>
              <pre>
                <code>{`export default function ModalFlatpicker () {   

const [startDate, setStartDate] = React.useState(new Date())
const [dateshow, datesetShow] = useState(false)
const handleClosedt = () => datesetShow(false)
const handleShowdt = () => datesetShow(true)

      return(
<Button variant="blue" onClick={handleShowdt}>View Demo</Button>
    <Modal show={dateshow} onHide={handleClosedt}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <InputGroup className="input-group">
       <InputGroup.Text className="input-group-text">
    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
      </InputGroup.Text>
      <div>
       <DatePicker className="form-control"
      placeholder="Choose date" selected={startDate} 
     onChange={(date) => setStartDate(date)} />
       </div>
    </InputGroup>
     </Modal.Body>
    <Modal.Footer>
<Button variant="primary">Save Changes</Button>
<Button variant="secondary" onClick={handleClosedt}>Close</Button>
        </Modal.Footer>
      </Modal>
                )}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
