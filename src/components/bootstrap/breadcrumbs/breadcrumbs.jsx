import React, { Fragment, useState } from 'react'
import { Breadcrumb, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Link } from 'react-router-dom';

export default function Breadcrumbs() {
  const breadcrumbs = ["Bootstrap", "Breadcrumbs"];

  //
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);


  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Simple Breadcrumbs</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body className='simple-breadcrumbs'>
              <Breadcrumb  className="breadcrumb1 br-7">
                <Breadcrumb.Item as="li" className="">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="  ">About</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 br-7">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item >Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 br-7">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Library</Breadcrumb.Item>
                <Breadcrumb.Item >Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>

                  {`       <Breadcrumb className="br-7">
       <Breadcrumb.Item active className="">Home</Breadcrumb.Item>
       <Breadcrumb.Item className="  ">About</Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className="br-7">
       <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item >Library</Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className=" br-7">
       <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item active href="#">Library</Breadcrumb.Item>
       <Breadcrumb.Item >Data</Breadcrumb.Item>
     </Breadcrumb>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Breadcrumbs-Center align</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body className='simple-breadcrumbs'>

              <Breadcrumb className=" breadcrumb1 justify-content-center  br-7">
                <Breadcrumb.Item active> Home</Breadcrumb.Item>
                <Breadcrumb.Item >about</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb className="breadcrumb1 br-7 justify-content-center">
                <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item >Library</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb className="breadcrumb1 br-7 justify-content-center mb-0">
                <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item >Data</Breadcrumb.Item>
              </Breadcrumb>

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>

                  {`     <Breadcrumb className="justify-content-center  br-7">
     <Breadcrumb.Item active> Home</Breadcrumb.Item>
     <Breadcrumb.Item active>about</Breadcrumb.Item>
   </Breadcrumb>
  
   <Breadcrumb className=" br-7 justify-content-center">
     <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
     <Breadcrumb.Item active>Library</Breadcrumb.Item>
   </Breadcrumb>
   
   <Breadcrumb className=" br-7 justify-content-center mb-0">
     <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
     <Breadcrumb.Item active href="#">Library</Breadcrumb.Item>
     <Breadcrumb.Item >Data</Breadcrumb.Item>
   </Breadcrumb>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Breadcrumbs-Right align</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body className='simple-breadcrumbs'>

              <Breadcrumb className=" breadcrumb1 br-7 justify-content-end">
                <Breadcrumb.Item active >Home</Breadcrumb.Item>
                <Breadcrumb.Item>about</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb className=" breadcrumb1 br-7 justify-content-end">
                <Breadcrumb.Item active >Home</Breadcrumb.Item>
                <Breadcrumb.Item active >Library</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb className="breadcrumb1 br-7 justify-content-end mb-0">
                <Breadcrumb.Item active >Home</Breadcrumb.Item>
                <Breadcrumb.Item active >Library</Breadcrumb.Item>
                <Breadcrumb.Item>Data</Breadcrumb.Item>
              </Breadcrumb>

            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>

                  {`     <Breadcrumb as="ol" className="br-7 justify-content-end">
        <Breadcrumb.Item active >Home</Breadcrumb.Item>
        <Breadcrumb.Item>about</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb as="ol" className="br-7 justify-content-end">
        <Breadcrumb.Item active >Home</Breadcrumb.Item>
        <Breadcrumb.Item active >Library</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb as="ol" className="br-7 justify-content-end mb-0">
        <Breadcrumb.Item active >Home</Breadcrumb.Item>
        <Breadcrumb.Item active >Library</Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item>
      </Breadcrumb>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Color Breadcrumbs</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <Breadcrumb className="breadcrumb1 br-7 bg-blue color-breadcrumbs">
                <Breadcrumb.Item className="breadcrumb-item1 active text-white">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 active text-white">About</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 br-7 bg-purple color-breadcrumbs">
                <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 active text-white">Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 br-7 bg-orange color-breadcrumbs">
                <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item1 active text-white">Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>

                  {`      <Breadcrumb className="breadcrumb1 br-7 bg-blue">
       <Breadcrumb.Item className="breadcrumb-item1 active text-white">Home</Breadcrumb.Item>
       <Breadcrumb.Item className="breadcrumb-item1 active text-white">About</Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className="breadcrumb1 br-7 bg-purple">
       <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item className="breadcrumb-item1 active text-white">Library</Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className="breadcrumb1 br-7 bg-orange">
       <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item className="breadcrumb-item1 text-white" href="#">Library</Breadcrumb.Item>
       <Breadcrumb.Item className="breadcrumb-item1 active text-white">Data</Breadcrumb.Item>
     </Breadcrumb>`}
                </code>
              </pre>
            </Collapse>
          </Card>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Color Breadcrumbs</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <Breadcrumb className=" breadcrumb-arrow mt-3">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className=" breadcrumb-arrow mt-3">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className=" breadcrumb-arrow mt-3">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
                <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>

                  {`     <Breadcrumb className=" breadcrumb-arrow mt-3">
       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className=" breadcrumb-arrow mt-3">
       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
       <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
     </Breadcrumb>
     <Breadcrumb className=" breadcrumb-arrow mt-3">
       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
       <Breadcrumb.Item href="#">Elements</Breadcrumb.Item>
       <Breadcrumb.Item active className="active"><span>Data</span></Breadcrumb.Item>
     </Breadcrumb>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}

