import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Collapse, Container, Dropdown, Form, Nav, NavDropdown, NavItem, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Colornav } from './data/navigationdata'


export default function Navigation() {
  const breadcrumbs = ["Bootstrap", "Navigation"];
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);


  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>Navbar with sub-component</Card.Title>
            </Card.Header>
            <Card.Body>
              <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg bg-light br-7 nav-dropdown">
                <Container fluid>
                  <Navbar.Brand className="active" href="#">Navbar</Navbar.Brand>
                  <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="ri-menu-fill"></span>
                  </Navbar.Toggle>
                  <Navbar.Collapse bg="light" className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
                    <Nav className="navbar-nav me-auto mb-lg-0">
                      <Nav.Item>
                        <Nav.Link className="nav-link active" aria-current="page" href="#">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#">Link</Nav.Link>
                      </Nav.Item>
                      <NavDropdown className="nav-item dropdown" title="Dropdown" id="basic-nav-dropdown">

                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something else  here</NavDropdown.Item>

                      </NavDropdown>
                      <Nav.Item>
                        <Nav.Link className="nav-link disabled">Disabled</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Form className="d-flex" role="search">
                      <Form.Control className=" me-2" type="search" placeholder="Search"
                        aria-label="Search" />
                      <Button variant='outline-success'
                        type="submit">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Nav</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <Nav as="ul" className="nav1">
                <Nav.Item as="li" className="nav-item1">
                  <Nav.Link className="active" href="#">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item1">
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item1">
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="nav-item1">
                  <Nav.Link className="disabled" href="#">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`
<Nav as="ul" className="nav1">
<Nav.Item as="li" className="nav-item1">
<Nav.Link className="active" href="#">Active</Nav.Link>
</Nav.Item>
<Nav.Item as="li" className="nav-item1">
<Nav.Link href="#">Link</Nav.Link>
</Nav.Item>
<Nav.Item as="li" className="nav-item1">
<Nav.Link href="#">Link</Nav.Link>
</Nav.Item>
<Nav.Item as="li" className="nav-item1">
<Nav.Link className="disabled" href="#">Disabled</Nav.Link>
</Nav.Item>
</Nav>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Color Nav</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <Nav variant='pills' as='ul'>
                <Nav.Item as='li' className="nav-item m-2">
                  <Nav.Link className="nav-link active" href="#">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  
                <Dropdown className="nav-item dropdown m-2" title="Dropdown" id="nav-dropdown">
                  <Dropdown.Toggle className="nav-link dropdown-toggle" variant=""
                    role="button" aria-haspopup="true" text="dark"
                    aria-expanded="false">Dropdown</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Nav.Item>
                <Nav.Item as='li' className="nav-item m-2">
                  <Link className="nav-link" href="#">Link</Link>
                </Nav.Item>
                <Nav.Item as='li' className="nav-item m-2">
                  <Nav.Link className='disabled' href="#">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`
<Nav variant='pills'>
<Nav.Item className="nav-item m-2">
      <Nav.Link className="nav-link active" href="#">Active</Nav.Link>
</Nav.Item>

  <Dropdown as="li" className="nav-item dropdown m-2" title="Dropdown" id="nav-dropdown">
      <Dropdown.Toggle className="nav-link dropdown-toggle" href="#"  role="button" aria-haspopup="true" variant="light" text="dark" aria-expanded="false">Dropdown</Dropdown.Toggle>
      <Dropdown.Menu>
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<Nav.Item className="nav-item m-2">
      <Link className="nav-link" href="#">Link</Link>
    </Nav.Item>
<Nav.Item className="nav-item m-2">
      <Nav.Link eventKey="disabled" href="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav>
`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <div className="row">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Icon With Title</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <Nav variant='pills' className="nav nav-pills nav-pills-circle" id="tabs_2" role="tablist" defaultActiveKey="link-3">
                <Nav.Item>
                  <Nav.Link className="nav-link border p-2 m-2" id="tab1" data-bs-toggle="tab" eventKey="link-1"
                    href="#tabs_2_1" role="tab" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="fe fe-home me-1"></i>
                      Home</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border p-2 m-2" id="tab2" data-bs-toggle="tab" eventKey="link-2"
                    href="#tabs_2_2" role="tab" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="fe fe-unlock me-1"></i>
                      Lock
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link p-2 border  show m-2" id="tab3" eventKey="link-3"
                    data-bs-toggle="tab" href="#tabs_2_3" role="tab"
                    aria-selected="true">
                    <span className="nav-link-icon d-block"><i className="fe fe-play me-1"></i>
                      Videos</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border p-2 m-2" id="tab4" data-bs-toggle="tab" eventKey="link-4"
                    href="#tabs_2_3" role="tab" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="fe fe-layers me-1"></i>
                      Severs</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border p-2 m-2" id="tab5" data-bs-toggle="tab" eventKey="link-5"
                    href="#tabs_2_4" role="tab" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="fe fe-image me-1"></i>
                      Gallery
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`
<Nav variant='pills' className=" nav-pills-circle" id="tabs_2" role="tablist" defaultActiveKey="#tabs_2_1">
<Nav.Item>
    <Nav.Link className="nav-link border p-2 m-2" id="tab1" data-bs-toggle="tab" eventKey="link-1"
        href="#tabs_2_1" role="tab" aria-selected="false">
    <span className="nav-link-icon d-block"><i className="fe fe-home"></i>
          Home</span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border p-2 m-2" id="tab2" data-bs-toggle="tab" eventKey="link-2"
        href="#tabs_2_2" role="tab" aria-selected="false">
        <span className="nav-link-icon d-block"><i className="fe fe-unlock"></i>
          Lock
        </span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link p-2 border  show m-2" id="tab3" eventKey="link-3"
        data-bs-toggle="tab" href="#tabs_2_3" role="tab"
        aria-selected="true">
        <span className="nav-link-icon d-block"><i className="fe fe-play"></i>
          Videos</span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border p-2 m-2" id="tab4" data-bs-toggle="tab" eventKey="link-4"
        href="#tabs_2_3" role="tab" aria-selected="false">
        <span className="nav-link-icon d-block"><i className="fe fe-layers"></i>
          Severs</span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border p-2 m-2" id="tab5" data-bs-toggle="tab" eventKey="link-5"
        href="#tabs_2_4" role="tab" aria-selected="false">
        <span className="nav-link-icon d-block"><i className="fe fe-image"></i>
          Gallery
        </span>
      </Nav.Link>
</Nav.Item>
  </Nav>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Icon Nav Bar</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <Nav variant='pills' className="nav nav-pills nav-pills-circle" id="tabs_3" role="tablist" defaultActiveKey="link-3">
                <Nav.Item>
                  <Nav.Link className="nav-link border w-7 h-7 text-center br-100 m-2" id="tab21" eventKey="link-1"
                    href="#tabs_2_1" aria-selected="false">
                    <span className="nav-link-icon d-block text-center mx-auto"><i
                      className="fe fe-home"></i></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border w-7 h-7 br-100 m-2" id="tab22" eventKey="link-2"
                    href="#tabs_2_2" aria-selected="false">
                    <span className="nav-link-icon d-block text-center mx-auto"><i
                      className="fe fe-unlock"></i></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border  show w-7 h-7 br-100 m-2" id="tab23" eventKey="link-3"
                    href="#tabs_2_3" aria-selected="true">
                    <span className="nav-link-icon d-block text-center mx-auto"><i
                      className="fe fe-play"></i></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border w-7 h-7 br-100 m-2" id="tab24" eventKey="link-4"
                    href="#tabs_2_3" aria-selected="false">
                    <span className="nav-link-icon d-block text-center mx-auto"><i
                      className="fe fe-layers"></i></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link border  w-7 h-7 br-100 m-2" id="tab25" eventKey="link-5"
                    href="#tabs_2_4" aria-selected="false">
                    <span className="nav-link-icon d-block text-center mx-auto"><i
                      className="fe fe-image"></i> </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`
<Nav variant='pills' className="nav nav-pills nav-pills-circle" id="tabs_3" role="tablist" defaultActiveKey="#tabs_2_1">
<Nav.Item>
      <Nav.Link className="nav-link border w-7 h-7 text-center br-100 m-2" id="tab21" eventKey="link-1"
       href="#tabs_2_1"  aria-selected="false">
        <span className="nav-link-icon d-block text-center mx-auto"><i
          className="fe fe-home"></i></span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border w-7 h-7 br-100 m-2" id="tab22" eventKey="link-2"
       href="#tabs_2_2"  aria-selected="false">
        <span className="nav-link-icon d-block text-center mx-auto"><i
          className="fe fe-unlock"></i></span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border  show w-7 h-7 br-100 m-2" id="tab23" eventKey="link-3"
       href="#tabs_2_3"  aria-selected="true">
        <span className="nav-link-icon d-block text-center mx-auto"><i
          className="fe fe-play"></i></span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border w-7 h-7 br-100 m-2" id="tab24" eventKey="link-4"
       href="#tabs_2_3"  aria-selected="false">
        <span className="nav-link-icon d-block text-center mx-auto"><i
          className="fe fe-layers"></i></span>
      </Nav.Link>
</Nav.Item>
<Nav.Item>
      <Nav.Link className="nav-link border  w-7 h-7 br-100 m-2" id="tab25" eventKey="link-5"
       href="#tabs_2_4"  aria-selected="false">
        <span className="nav-link-icon d-block text-center mx-auto"><i
          className="fe fe-image"></i> </span>
      </Nav.Link>
</Nav.Item>
  </Nav>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </div>


      <div className="row">
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Nav Tabs</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <Nav variant='pills' className="nav nav-pills nav-fill flex-column flex-sm-row" id="tabs-text" defaultActiveKey="link-2"
                role="tablist">
                <Nav.Item>
                  <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-1-tab"
                    data-bs-toggle="tab" href="#tabs-text-1" role="tab"
                    aria-selected="false">UI/UX Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-2-tab" eventKey="link-1"
                    data-bs-toggle="tab" href="#tabs-text-2" role="tab"
                    aria-selected="false">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link mt-2 me-2  border show p-3" eventKey="link-2"
                    id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-3"
                    role="tab" aria-selected="true">Graphic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-4-tab" eventKey="link-3"
                    data-bs-toggle="tab" href="#tabs-text-4" role="tab"
                    aria-selected="false">Developing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-5-tab" eventKey="link-4"
                    data-bs-toggle="tab" href="#tabs-text-5" role="tab"
                    aria-selected="false">Photoshop</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`<Nav variant='pills' className="nav nav-pills nav-fill flex-column flex-sm-row" id="tabs-text" defaultActiveKey="#tabs-text-1" role="tablist">
<Nav.Item>
       <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-1-tab"
         data-bs-toggle="tab" href="#tabs-text-1" role="tab"
         aria-selected="false">UI/UX Design</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-2-tab" eventKey="link-1"
         data-bs-toggle="tab" href="#tabs-text-2" role="tab"
         aria-selected="false">Programming</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link className="nav-link mt-2 me-2  border show p-3"eventKey="link-2"
         id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-3"
         role="tab" aria-selected="true">Graphic</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-4-tab" eventKey="link-3"
         data-bs-toggle="tab" href="#tabs-text-4" role="tab"
         aria-selected="false">Developing</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link className="nav-link mt-2 me-2 border p-3" id="tabs-text-5-tab" eventKey="link-4"
         data-bs-toggle="tab" href="#tabs-text-5" role="tab"
         aria-selected="false">Photoshop</Nav.Link>
     </Nav.Item>
   </Nav>
`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </div>



      <div className="row">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Color Nav</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              {Colornav.map((idx, nv1) => (
                <Nav as="ul" className={`nav1 bg-${idx.color}`} key={nv1}>
                  <Nav.Item as="li" className="nav-item1">
                    <Link className="nav-link text-white active" to="#">{idx.text1}</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item1">
                    <Link className="nav-link text-white" to="#">{idx.text2}</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item1">
                    <Link className="nav-link text-white" to="#">{idx.text2}</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item1">
                    <Link className="nav-link disabled text-white-50" to="#">{idx.text3}</Link>
                  </Nav.Item>
                </Nav>
              ))}

            </Card.Body>
            <Collapse in={show6} className="mt-2 max-height-250">
              <pre>
                <code>
                  {`
    <Nav as='ul' className="nav1 bg-info mt-4">
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white active" to="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link disabled text-white-50" to="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav>
  <Nav as='ul' className="nav1 bg-success mt-4">
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white active" to="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link disabled text-white-50" to="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav>
  <Nav as='ul' className="nav1 bg-danger mt-4">
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white active" to="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link disabled text-white-50" to="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav>
  <Nav as='ul' className="nav1 bg-secondary mt-4">
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white active" to="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link disabled text-white-50" to="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav>
  <Nav as='ul' className="nav1 bg-yellow mt-4">
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white active" to="#">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link text-white" to="#">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as='li' className="nav-item1">
      <Nav.Link className="nav-link disabled text-white-50" to="#">Disabled</Nav.Link>
    </Nav.Item>
  </Nav> 
`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Nav Vertical</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              <Nav as='ul' className="nav1 flex-column">
                <Nav as='li' className="nav-item1">
                  <Nav.Link className="active" href="#">Active</Nav.Link>
                </Nav>
                <Nav as='li' className="nav-item1">
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav>
                <Nav as='li' className="nav-item1">
                  <Nav.Link href="#">Link</Nav.Link>
                </Nav>
                <Nav as='li' className="nav-item1">
                  <Nav.Link className=" disabled" href="#">Disabled</Nav.Link>
                </Nav>
              </Nav>
            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>
                  {`
     <Nav as='ul' className="nav1 flex-column">
     <Nav as='li' className="nav-item1">
       <Nav.Link className=" active" href="#">Active</Nav.Link>
     </Nav>
     <Nav as='li' className="nav-item1">
       <Nav.Link href="#">Link</Nav.Link>
     </Nav>
     <Nav as='li' className="nav-item1">
       <Nav.Link  href="#">Link</Nav.Link>
     </Nav>
     <Nav as='li' className="nav-item1">
       <Nav.Link className=" disabled" href="#">Disabled</Nav.Link>
     </Nav>
   </Nav>
`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </div>



    </Fragment>
  )
}
