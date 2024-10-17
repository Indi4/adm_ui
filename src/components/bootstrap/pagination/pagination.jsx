import React, { Fragment } from 'react'
import { Card, Col, Collapse, Form, Nav, PageItem, Pagination, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { useState } from 'react';

export default function Paginations() {
  const breadcrumbs = ["Bootstrap", "Pagination"];
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />


      <Row>
        <Col md={6}>
          <Card className=" overflow-hidden">
            <Card.Header>
              <Card.Title>Basic pagination</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="pagination-wrapper">
                <Nav aria-label="Page navigation">
                  <Pagination as="ul" className="pagination mb-0">
                    <Pagination.Item active className="" href="#">1
                    </Pagination.Item>
                    <Pagination.Item className="page-item" href="#">2
                    </Pagination.Item>
                    <Pagination.Item className="page-item" href="#">3
                    </Pagination.Item>
                    <Pagination.Item className="page-item" href="#">4
                    </Pagination.Item>
                    <Pagination.Item className="page-item" href="#">5
                    </Pagination.Item>
                    <Pagination.Item className="page-item" href="#">
                      <i className="fa fa-angle-right"></i>
                    </Pagination.Item>
                  </Pagination>
                </Nav>
              </div>


            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`
<Pagination as="ul" className="pagination mb-0">
<Pagination.Item active href="#">1</Pagination.Item>
<Pagination.Item href="#">2</Pagination.Item>
<Pagination.Item href="#">3</Pagination.Item>
<Pagination.Item href="#"></Pagination.Item>
<Pagination.Item href="#">5</Pagination.Item>
<Pagination.Item href="#">
<i className="fa fa-angle-right"></i></Pagination.Item>
</Pagination>
`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col md={6} >
          <Card>
            <Card.Header className='flex-wrap gap-2'>
              <Card.Title>Disabled and active states</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <Pagination as="ul" className="pagination ">
                <Pagination.Item disabled href='#' className="" tabIndex="-1">Prev</Pagination.Item>
                <Pagination.Item active href="#" className="page-item ">1</Pagination.Item>
                <Pagination.Item href="#" className="page-item">2</Pagination.Item>
                <Pagination.Item href="#" className="page-item">3</Pagination.Item>
                <Pagination.Item href="#" className="page-item">4</Pagination.Item>
                <Pagination.Item href="#" className="page-item page-next"> Next</Pagination.Item>
              </Pagination>


            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`
<Pagination as="ul" className="pagination ">
<Pagination.Item disabled href='#' className="" tabIndex="-1">Prev</Pagination.Item>
<Pagination.Item active href="#" className="page-item ">1</Pagination.Item>
<Pagination.Item href="#" className="page-item">2</Pagination.Item>
<Pagination.Item href="#" className="page-item">3</Pagination.Item>
<Pagination.Item href="#" className="page-item">4</Pagination.Item>
<Pagination.Item href="#" className="page-item page-next"> Next</Pagination.Item>
</Pagination>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col md={6} >
          <Card>
            <Card.Header>
              <Card.Title>Model Pagination</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <Pagination as="ul" className=" mg-b-0 page-0 ">
                <Pagination.Item href="#">
                  <i className="fa fa-angle-double-left"></i></Pagination.Item>
                <Pagination.Item href="#">
                  <i className="fa fa-angle-left"></i></Pagination.Item>
                <Pagination.Item href="#">2 </Pagination.Item>
                <Pagination.Item active>3</Pagination.Item>
                <Pagination.Item href="#">4</Pagination.Item>
                <Pagination.Item href="#">
                  <i className="fa fa-angle-right"></i></Pagination.Item>
                <Pagination.Item href="#">
                  <i className="fa fa-angle-double-right"></i></Pagination.Item>
              </Pagination>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`
<Pagination as="ul" className=" mg-b-0 page-0 ">
<Pagination.Item href="#">
<i className="fa fa-angle-double-left"></i></Pagination.Item>
<Pagination.Item href="#">
<i className="fa fa-angle-left"></i></Pagination.Item>
<Pagination.Item href="#">2 </Pagination.Item>
<Pagination.Item active>3</Pagination.Item>
<Pagination.Item href="#">4</Pagination.Item>
<Pagination.Item href="#">
<i className="fa fa-angle-right"></i></Pagination.Item>
<Pagination.Item href="#">
<i className="fa fa-angle-double-right"></i></Pagination.Item>
 </Pagination>
`}</code>
              </pre>
            </Collapse>

          </Card>

        </Col>

        <Col md={6}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Model Pagination2</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <nav aria-label="Page navigation">
                <Pagination as="ul" className="pagination pagination-success mb-0">
                  <Pagination.Item className="page-item page-0">
                    <i className="fa fa-angle-left"></i></Pagination.Item>
                  <Pagination.Item href="#">
                    <i className="fa fa-angle-double-left"></i></Pagination.Item>
                  <Pagination.Item href="#" active>4</Pagination.Item>
                  <Pagination.Item href="#" disabled className="page-item disabled">...</Pagination.Item>
                  <Pagination.Item href="#">10</Pagination.Item>
                  <Pagination.Item href="#" className="page-item page-0">
                    <i className="fa fa-angle-right"></i></Pagination.Item>
                  <Pagination.Item href="#">
                    <i className="fa fa-angle-double-right"></i></Pagination.Item>
                </Pagination>
              </nav>

            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`
 <Pagination as="ul" className="pagination pagination-success mb-0">
 <Pagination.Item className="page-item page-0">
  <i className="fa fa-angle-left"></i></Pagination.Item>
 <Pagination.Item href="#">
 <i className="fa fa-angle-double-left"></i></Pagination.Item>
 <Pagination.Item href="#" active>4</Pagination.Item>
 <Pagination.Item href="#"disabled className="page-item disabled">...</Pagination.Item>
 <Pagination.Item href="#">10</Pagination.Item>
 <Pagination.Item href="#" className="page-item page-0">
 <i className="fa fa-angle-right"></i></Pagination.Item>
 <Pagination.Item href="#">
  <i className="fa fa-angle-double-right"></i></Pagination.Item>
</Pagination>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col md={6}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Model Pagination2</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <Nav aria-label="Page navigation example">
                <Pagination className="pagination mb-0">
                  <Pagination.Item href="#" className="page-item">
                    <i className="fa fa-angle-left"></i></Pagination.Item>
                  <Pagination.Item href="#" className="page-item">1</Pagination.Item>
                  <Pagination.Item href="#" className="page-item">2</Pagination.Item>
                  <Pagination.Item href="#" className="page-item">3</Pagination.Item>
                  <Pagination.Item href="#" className="page-item">
                    <i className="fa fa-angle-right"></i></Pagination.Item>
                </Pagination>
              </Nav>
              <Collapse in={show5}>
                <pre>
                  <code>{`
<Pagination className="pagination mb-0">
<Pagination.Item href="#" className="page-item">
<i className="fa fa-angle-left"></i></Pagination.Item>
<Pagination.Item href="#" className="page-item">1</Pagination.Item>
<Pagination.Item href="#" className="page-item">2</Pagination.Item>
<Pagination.Item href="#" className="page-item">3</Pagination.Item>
<Pagination.Item href="#" className="page-item">
<i className="fa fa-angle-right"></i></Pagination.Item>
</Pagination>
`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pagination left alignment</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <Nav aria-label="Page navigation example">
                <Pagination className="pagination mb-0">
                  <Pagination.Item href="#" disabled className="page-item disabled">
                    <i className="fa fa-angle-left"></i></Pagination.Item>
                  <Pagination.Item href="#">1</Pagination.Item>
                  <Pagination.Item href="#" active >2</Pagination.Item>
                  <Pagination.Item href="#">3</Pagination.Item>
                  <Pagination.Item href="#">
                    <i className="fa fa-angle-right"></i></Pagination.Item>
                </Pagination>
              </Nav>
            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`
 <Pagination className="pagination mb-0">
 <Pagination.Item href="#" disabled className="page-item disabled">
   <i className="fa fa-angle-left"></i></Pagination.Item>
 <Pagination.Item href="#">1</Pagination.Item>
 <Pagination.Item href="#" active >2</Pagination.Item>
 <Pagination.Item href="#">3</Pagination.Item>
 <Pagination.Item href="#">
 <i className="fa fa-angle-right"></i></Pagination.Item>
</Pagination>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pagination center alignment</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              <Nav className="justify-content-center" aria-label="Page navigation example">
                <Pagination className="pagination justify-content-center mb-0">
                  <Pagination.Item href="#" disabled className="page-item disabled">
                    <i className="fa fa-angle-left"></i></Pagination.Item>
                  <Pagination.Item href="#">1</Pagination.Item>
                  <Pagination.Item href="#" active >2</Pagination.Item>
                  <Pagination.Item href="#">3</Pagination.Item>
                  <Pagination.Item href="#">
                    <i className="fa fa-angle-right"></i></Pagination.Item>
                </Pagination>
              </Nav>
            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>{`
<Pagination className="pagination justify-content-center mb-0">
<Pagination.Item href="#" disabled className="page-item disabled">
 <i className="fa fa-angle-left"></i></Pagination.Item>
<Pagination.Item href="#">1</Pagination.Item>
<Pagination.Item href="#"active >2</Pagination.Item>
<Pagination.Item href="#">3</Pagination.Item>
<Pagination.Item href="#">
   <i className="fa fa-angle-right"></i></Pagination.Item>
</Pagination>
`} </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pagination Right Alignment</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />
            </Card.Header>
            <Card.Body>
              <Nav className="justify-content-end" aria-label="Page navigation example">
                <Pagination className="pagination justify-content-end mb-0">
                  <Pagination.Item href="#" disabled className="page-item disabled">
                    <i className="fa fa-angle-left"></i> </Pagination.Item>
                  <Pagination.Item href="#" >1</Pagination.Item>
                  <Pagination.Item href="#" active>2</Pagination.Item>
                  <Pagination.Item href="#" >3</Pagination.Item>
                  <Pagination.Item href="#" >
                    <i className="fa fa-angle-right"></i> </Pagination.Item>
                </Pagination>
              </Nav>
            </Card.Body>
            <Collapse in={show8}>
              <pre>
                <code>{`
<Pagination className="pagination justify-content-end mb-0">
<Pagination.Item href="#" disabled className="page-item disabled">
<i className="fa fa-angle-left"></i> </Pagination.Item>
<Pagination.Item href="#" >1</Pagination.Item>
<Pagination.Item href="#" active>2</Pagination.Item>
<Pagination.Item href="#" >3</Pagination.Item>
<Pagination.Item href="#" >
<i className="fa fa-angle-right"></i> </Pagination.Item>
</Pagination>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pagination Sizing</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow9(!show9) }} />
            </Card.Header>
            <Card.Body className=" d-sm-inline-flex justify-content-between align-items-center">
              <Nav aria-label="..." className="mb-2">
                <Pagination size="lg">
                  <Pagination.Item href="#" className="page-item active" aria-current="page">1</Pagination.Item>
                  <Pagination.Item href="#">2</Pagination.Item>
                  <Pagination.Item href="#">3</Pagination.Item>
                </Pagination>
              </Nav>
              <Nav aria-label="...">
                <Pagination size="sm">
                  <Pagination.Item href="#" active className="page-item active" aria-current="page">1</Pagination.Item>
                  <Pagination.Item href="#">2</Pagination.Item>
                  <Pagination.Item href="#">3</Pagination.Item>
                </Pagination>
              </Nav>
            </Card.Body>
            <Collapse in={show9}>
              <pre>
                <code>{`
<Nav aria-label="..." className="mb-2">
<Pagination size="lg">
  <Pagination.Item href="#" className="page-item active" aria-current="page">1</Pagination.Item>
  <Pagination.Item href="#">2</Pagination.Item>
  <Pagination.Item href="#">3</Pagination.Item>
</Pagination>
   </Nav>
<Nav aria-label="...">
<Pagination size="sm">
       <Pagination.Item href="#" active className="page-item active" aria-current="page">1</Pagination.Item>
       <Pagination.Item href="#">2</Pagination.Item>
       <Pagination.Item href="#">3</Pagination.Item>
</Pagination>
   </Nav>
`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


    </Fragment>
  )
}
