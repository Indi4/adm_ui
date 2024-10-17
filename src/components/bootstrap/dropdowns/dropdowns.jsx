import React, { Fragment, useState } from 'react'
import { Button, ButtonGroup, Card, Col, Collapse, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Icons, Rounded, RoundedCornerOutlined, Roundedsplit, Singlebtn, Singlesquare, Socialicon, Split, Splitoutline, Splitroundedoutline, Variation } from './data/dropdowndata'


export default function Dropdowns() {
  const breadcrumbs = ["Bootstrap", "Dropdowns"];
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
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Single button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Singlebtn.map((idx, dp1) => (

                      <Dropdown className='me-2' key={dp1}>
                        <Dropdown.Toggle variant={idx.color} text="dark" type="button" className='mt-4'
                        >
                          {idx.title}<span className="caret"></span>
                        </Dropdown.Toggle >
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up" aria-hidden="true"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
{Singlebtn.map((idx, dp1) => (
<Dropdown className='me-2' key={dp1}>
<Dropdown.Toggle variant={idx.color} text="dark" type="button">
  {idx.title}<span className="caret"></span>
</Dropdown.Toggle >
     <Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
    {idx.menu}
    <b className="fa fa-angle-up" aria-hidden="true"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Rounded.map((idx, dp2) => (

                      <Dropdown className='me-2' key={dp2}>
                        <Dropdown.Toggle variant={idx.color} text="dark" type="button"
                          className="btn btn-default btn-pill dropdown-toggle mt-4"
                          data-bs-toggle="dropdown">
                          {idx.title} <span className="caret"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up" aria-hidden="true"></b> 
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#"> {idx.item2}</Dropdown.Item>
                          <Dropdown.Item href="#">  {idx.item3}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>


                </div>
              </div>

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
{Rounded.map((idx, dp2) => (

<Dropdown className='me-2'key={dp2}>
<Dropdown.Toggle variant={idx.color} text="dark" type="button" className="btn btn-default btn-pill dropdown-toggle" data-bs-toggle="dropdown">
  {idx.title} <span className="caret"></span>
</Dropdown.Toggle>
<Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
    {idx.menu}
    <b className="fa fa-angle-up" aria-hidden="true"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#"> {idx.item2}</Dropdown.Item>
  <Dropdown.Item href="#">  {idx.item3}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Split button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body className='split-button-dropdowns'>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Split.map((idx, dp3) => (
                      <Dropdown as={ButtonGroup} className='me-3 mt-4' key={dp3}>
                        <Button variant={idx.color} text="dark" type="button" className='btn-split rounded'>Action</Button>
                        <Dropdown.Toggle type="button" variant={idx.color} className="btn rounded">
                          <span className="caret"></span>
                          <span className="sr-only">{idx.text}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
{Split.map((idx, dp3) => (
<Dropdown as={ButtonGroup} className='me-2' key={dp3}>
<Button variant={idx.color} text="dark" type="button" >Action</Button>
<Dropdown.Toggle type="button" variant={idx.color} className="btn btn-default btn-pill dropdown-toggle">
  <span className="caret"></span>
  <span className="sr-only">{idx.text}</span>
</Dropdown.Toggle>
<Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
    {idx.menu}
    <b className="fa fa-angle-up"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded Split button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body className='rounded-split-button-dropdowns'>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Roundedsplit.map((idx, dp4) => (
                      <Dropdown key={dp4} as={ButtonGroup} className='me-2 my-3' >
                        <Button variant={idx.color} text="dark"
                          className=" btn-pill btn-split">{idx.title}</Button>
                        <Dropdown.Toggle className="btn-pill" variant={idx.color} type="button"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">{idx.text}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`{Roundedsplit.map((idx, dp4) => (
  <Dropdown key={dp4} as={ButtonGroup} className='me-2' >
  <Button variant={idx.color} text="dark" className=" btn-pill ">{idx.title}</Button>
  <Dropdown.Toggle className="btn btn-pill" variant={idx.color} type="button">
    <span className="caret"></span>
    <span className="sr-only">{idx.text}</span>
  </Dropdown.Toggle>
  <Dropdown.Menu role="menu">
    <li className="dropdown-plus-title">
     {idx.menu}
      <b className="fa fa-angle-up"></b>
    </li>
    <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
    <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
    <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
    <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
  ))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Single Square outline button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-default">
                <div className="panel-body p-0">

                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Singlesquare.map((idx, dp5) => (
                      <Dropdown className='me-2 my-2' key={dp5}> 
                        <Dropdown.Toggle variant={idx.color} type="button" className={`btn btn-${idx.color} dropdown-toggle`}
                        >
                          {idx.title}<span className="caret"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up" aria-hidden="true"></b>
                          </li>
                         <li> <Dropdown.Item>{idx.item1}</Dropdown.Item></li>
                         <li> <Dropdown.Item>{idx.item2}</Dropdown.Item></li>
                         <li> <Dropdown.Item>{idx.item3}</Dropdown.Item></li>
                         <li> <Dropdown.Item>{idx.item4}</Dropdown.Item></li>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
{Singlesquare.map((idx, dp5) => (
<Dropdown className='me-2' key={dp5}>
<Dropdown.Toggle variant={idx.color} type="button">{idx.title}<span className="caret"></span>
</Dropdown.Toggle>
<Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
{idx.menu}
    <b className="fa fa-angle-up" aria-hidden="true"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {RoundedCornerOutlined.map((idx, dp6) => (
                      <Dropdown className='me-2 my-2' key={dp6}>
                        <Dropdown.Toggle variant={idx.color} type="button"
                          className=" btn-pill "
                        >
                          {idx.title} <span className="caret"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up" aria-hidden="true"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`
<div className="btn-group mt-2 mb-2">
{RoundedCornerOutlined.map((idx, dp6) => (
<Dropdown className='me-2' key={dp6}>
<Dropdown.Toggle variant={idx.color} type="button" className=" btn-pill "> {idx.title} <span className="caret"></span>
</Dropdown.Toggle>
<Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
   {idx.menu}
    <b className="fa fa-angle-up" aria-hidden="true"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item2}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item3}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4}</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>



        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Split button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body className='split-button-dropdowns'>
              <div className="panel panel-default">
                <div className="panel-body p-0">

                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Splitoutline.map((idx, dp7) => (
                      <Dropdown as={ButtonGroup} className='me-2 my-3' key={dp7}>
                        <Button type="button" variant={idx.color}  className="btn-split rounded"
                        >{idx.title}</Button>
                        <Dropdown.Toggle variant={idx.color} type="button" className="btn rounded"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">{idx.text}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}  </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4} </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
 {Splitoutline.map((idx, dp7) => (
  <Dropdown as={ButtonGroup} className='me-2' key={dp7}>
  <Button type="button" variant={idx.color}>{idx.title}</Button>
  <Dropdown.Toggle variant={idx.color} type="button">
    <span className="caret"></span>
    <span className="sr-only">{idx.text}</span>
  </Dropdown.Toggle>
  <Dropdown.Menu role="menu">
    <li className="dropdown-plus-title">
    {idx.menu}
      <b className="fa fa-angle-up"></b>
    </li>
    <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
    <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
    <Dropdown.Item href="#">{idx.item3}  </Dropdown.Item>
    <Dropdown.Item href="#">{idx.item4} </Dropdown.Item>
  </Dropdown.Menu>
  </Dropdown>
 ))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded Split button dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />
            </Card.Header>
            <Card.Body className='rounded-split-button-dropdowns'>
              <div className="panel panel-default">
                <div className="panel-body p-0">

                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Splitroundedoutline.map((idx, dp8) => (
                      <Dropdown as={ButtonGroup} className='me-2 my-3' key={dp8}>
                        <Button type="button" variant={idx.color}
                           className=" btn-pill btn-split">{idx.title}</Button>
                        <Dropdown.Toggle variant={idx.color} type="button"
                          className="btn-pill"
                          data-bs-toggle="dropdown">
                          <span className="caret"></span>
                          <span className="sr-only">{idx.text}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className=" fa fa-angle-up"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3} </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4} </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show8}>
              <pre>
                <code>{`<div className="btn-group mt-2 mb-2">
{Splitroundedoutline.map((idx, dp8) => (
<Dropdown as={ButtonGroup} className='me-2'key={dp8}>
<Button type="button" variant={idx.color} className="btn-pill">{idx.title}</Button>
<Dropdown.Toggle variant={idx.color} type="button" className="btn-pill" data-bs-toggle="dropdown">
  <span className="caret"></span>
  <span className="sr-only">{idx.text}</span>
</Dropdown.Toggle>
<Dropdown.Menu role="menu">
  <li className="dropdown-plus-title">
    {idx.menu}
    <b className=" fa fa-angle-up"></b>
  </li>
  <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
  <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
  <Dropdown.Item href="#">{idx.item3} </Dropdown.Item>
  <Dropdown.Item href="#">{idx.item4} </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title className="mb-0 card-title">Icons with drop-down</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow9(!show9) }} />
            </Card.Header>
            <Card.Body  className='split-button-dropdowns'>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Icons.map((idx, dp9) => (
                      <Dropdown as={ButtonGroup} className='me-2 my-2' key={dp9}>
                        <Button type="button" variant={idx.color}  className="btn-split rounded">{idx.title} <i
                          className={`fe fe-${idx.icon}`}></i></Button>
                        <Dropdown.Toggle variant={idx.color} type="button" className="btn rounded"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">{idx.text}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}  </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item4} </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show9}>
              <pre>
                <code>{`
<div className="btn-group mt-2 mb-2">
<Dropdown as={ButtonGroup} className='me-2'>
<Button variant='instagram' type="button" className="btn btn-instagram">instagram <i className="fe fe-instagram"></i></Button>
<Dropdown.Toggle variant='instagram' type="button">
      <span className="caret"></span>
      <span className="sr-only">Toggle Dropdown</span>
    </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dropup variation</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow10(!show10) }} />
            </Card.Header>
            <Card.Body>
              {Variation.map((idx, dp10) => (
                <div className={`btn-group mt-2 mb-2 ${idx.title}`} key={dp10}>

                  <Dropdown className='me-2'>
                    <DropdownButton drop={idx.dr} variant={idx.color} title={idx.menu}>
                      <Dropdown.Item eventKey="1">{idx.item1}</Dropdown.Item>
                      <Dropdown.Item eventKey="2">{idx.item2}</Dropdown.Item>
                      <Dropdown.Item eventKey="3">{idx.item3}</Dropdown.Item>
                      <Dropdown.Item eventKey="4">{idx.item4} </Dropdown.Item>
                    </DropdownButton>

                  </Dropdown>
                </div>

              ))}

            </Card.Body>
            <Collapse in={show10}>
              <pre>
                <code>{`
<div className="dropend btn-group mt-2 mb-2">
<Dropdown className='me-2'>
   <Dropdown.Toggle variant='primary' type="button">Dropright
     <span className="caret"></span>
   </Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item href="#">HTML</Dropdown.Item>
     <Dropdown.Item href="#">CSS</Dropdown.Item>
     <Dropdown.Item href="#">JavaScript</Dropdown.Item>
     <Dropdown.Item href="#">About Us</Dropdown.Item>
   </Dropdown.Menu>
   </Dropdown>
 </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Icon Drop Downs dropdowns</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow11(!show11) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2 flex-wrap">
                    {Socialicon.map((idx, dp11) => (
                      <Dropdown className='me-1 my-3' key={dp11}>
                        <Dropdown.Toggle variant={idx.color} type="button"
                          className=" btn-pill"
                          data-bs-toggle="dropdown">
                          <i className={`fa fa-${idx.icon}`}></i> <span className="caret"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu role="menu">
                          <li className="dropdown-plus-title">
                            {idx.menu}
                            <b className="fa fa-angle-up" aria-hidden="true"></b>
                          </li>
                          <Dropdown.Item href="#">{idx.item1}</Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item2} </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3}  </Dropdown.Item>
                          <Dropdown.Item href="#">{idx.item3} </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ))}
                  </div>

                </div>
              </div>

            </Card.Body>
            <Collapse in={show11}>
              <pre>
                <code>{`
<div className="btn-group mt-2 mb-2">
<Dropdown className='me-2'>
<Dropdown.Toggle variant='github' type="button" className=" btn-pill">
       <i className="fa fa-github"></i> <span className="caret"></span>
     </Dropdown.Toggle>
       <Dropdown.Menu role="menu">
            <li className="dropdown-plus-title">
         Dropdown
         <b className="fa fa-angle-up" aria-hidden="true"></b>
       </li>
       <Dropdown.Item href="#">Action</Dropdown.Item>
       <Dropdown.Item href="#">Another action</Dropdown.Item>
       <Dropdown.Item href="#">Something else here</Dropdown.Item>
       <Dropdown.Item href="#">Separated link</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
   </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
