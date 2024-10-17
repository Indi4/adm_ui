import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Collapse, Dropdown, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Appbtn, Btnsize, Colorbtn, Defaultdata, Disabled, Icon, Iconbtn, Iconloader, Outline, Outlinedisabled, Rounded, Socialbtn, Socialicon, Squarebtn } from './data/buttondata'

export default function Buttons() {
  const breadcrumbs = ["Bootstrap", "Buttons"];
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
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Defaultdata.map((idx, df) => (
                  <Button href="#" key={df} variant={idx.color}>{idx.title}</Button>
                ))}
              </div>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`{Defaultdata.map((idx, df) => (
<Button href="#" key={df} variant={idx.color}>{idx.title}</Button>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Disabled buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Disabled.map((idx, df) => (
                  <Button disabled href="#" key={df} variant={idx.color}>{idx.title}</Button>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`{Disabled.map((idx, df) => (
 <Button disabled href="#" key={df} variant={idx.color}>{idx.title}</Button>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Square buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Squarebtn.map((idx, sq) => (
                  <Button href="#" key={sq} variant={idx.color} className="btn btn-square">{idx.title}</Button>
                ))}
              </div>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`<div className="btn-list">
{Squarebtn.map((idx, sq) => (
  <Button href="#" key={sq} variant={idx.color} className="btn btn-square">{idx.title}</Button>
))}
</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Rounded.map((idx, ro) => (
                  <Button key={ro} href="#" variant={idx.color} className="btn btn-pill ">{idx.title}</Button>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`{Rounded.map((idx, ro) => (
<Button key={ro} href="#" variant={idx.color} className="btn btn-pill ">{idx.title}</Button>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Btn Outline buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Outline.map((idx, out) => (
                  <Button key={out} href="#" variant={idx.color} >{idx.title}</Button>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`{Outline.map((idx, out) => (
<Button key={out} href="#" variant={idx.color} >{idx.title}</Button>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Btn Outline Disabled buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Outlinedisabled.map((idx, outdis) => (
                  <Button key={outdis} href="#" variant={idx.color} disabled>{idx.title}</Button>
                ))}</div>
            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`<div className="btn-list">
{Outlinedisabled.map((idx, outdis) => (
<Button key={outdis} href="#" variant={idx.color} disabled>{idx.title}</Button>
))}</div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title className=" mb-0">App buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              {Appbtn.map((idx, ap) => (
                <Button key={ap} variant={idx.color} className="btn btn-app  me-3 mt-1 mb-1">
                  <i className={`me-2 fs-13 fa fa-${idx.icon}`}></i>{idx.title}
                </Button>
              ))}

            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>{`<Button variant="secondary"className="btn btn-app  me-2 mt-1 mb-1">
<i className="fa fa-play me-2 fs-13"></i> Play
</Button>
<Button variant='info'className="btn btn-app  me-2 mt-1 mb-1">
<i className="fa fa-pause me-2 fs-13"></i> Pause
</Button>
<Button variant='danger' className="btn btn-app me-2 mt-1 mb-1">
<i className="fa fa-save me-2 fs-13"></i> Save
</Button>
<Button variant='yellow' className="btn btn-app  me-2 mt-1 mb-1">
<i className="fa fa-bullhorn me-2 fs-13"></i> Notifications
</Button>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button with icon</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Icon.map((idx, ic) => (
                  <Button type="button" variant={idx.color} key={ic}>
                    <i className={`me-2 fe fe-${idx.icon} `}></i>
                    <span>{idx.title}</span></Button>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show8}>
              <pre>
                <code>{`<Button type="button" variant="warning">
<i className="fe fe-heart me-2"></i>
<span>I like</span>
  </Button>

<Button type="button" variant="success">
<i className="fe fe-check me-2"></i>
  <span>I agree</span>
</Button>

<Button type="button" variant="primary">
<i className="fe fe-plus me-2"></i>
  <span>More</span>
</Button>

<Button type="button" variant="danger">
<i className="fe fe-link me-2"></i>
  <span>Link</span>
</Button>

<Button type="button" variant="info">
<i className="fe fe-mail me-2"></i>
  <span>Comment</span>
</Button>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button with icon-loader</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow9(!show9) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Iconloader.map((idx, load) => (
                  <Button type="button" variant={idx.color} key={load}>{idx.title}
                    <i className={`fa-spin ms-2 fa fa-${idx.icon} `}></i></Button>
                ))}</div>
            </Card.Body>
            <Collapse in={show9}>
              <pre>
                <code>{`<Button type="button" variant="warning">I like 
<i className="fa fa-refresh fa-spin ms-2"></i></Button>

<Button type="button" variant="success">I agree
 <i className="fa fa-rotate-right fa-spin ms-2"></i></Button>

<Button type="button" cvariant="primary">More
 <i className="fa fa-spinner fa-spin ms-2"></i></Button>

<Button type="button" variant="danger">Link 
<i className="fa fa-history fa-spin ms-2"></i></Button>

<Button type="button" variant="info">Comment 
<i className="fa fa-undo fa-spin ms-2"></i></Button>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Button size</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow10(!show10) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                <Row>
                  {Btnsize.map((idx, size) => (
                    <Col md={4} className="mb-2" key={size}>
                      <Button variant={idx.color} size={idx.class} type="button" className=" mb-1">
                        {idx.title}</Button>
                    </Col>
                  ))}
                </Row>
                <Button variant="primary" type="button" className=" btn-block">Block level
                  button</Button>
              </div>
            </Card.Body>
            <Collapse in={show10}>
              <pre>
                <code>{`{Btnsize.map((idx, size) => (
<Col md={4} className="mb-2" key={size}>
<Button variant={idx.color} size={idx.class} type="button" className=" mb-1">
    {idx.title}</Button>
</Col>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Social buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow11(!show11) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Socialbtn.map((idx, so) => (
                  <Button variant={idx.color} type="button" key={so} >
                    <i className={`me-2 fa fa-${idx.icon}`}></i>
                    {idx.title}</Button>
                ))}</div>
            </Card.Body>
            <Collapse in={show11}>
              <pre>
                <code>{`<Button variant='twitter' type="button" >
<i className="fa fa-twitter me-2"></i>Twitter</Button>
<Button variant='google' type="button" >
<i className="fa fa-google me-2"></i>Google</Button>
<Button variant='youtube' type="button" >
<i className="fa fa-youtube me-2"></i>Youtube</Button>
<Button variant='vimeo' type="button" >
<i className="fa fa-vimeo me-2"></i>Vimeo</Button>
<Button variant='dribbble' type="button" >
<i className="fa fa-dribbble me-2"></i>Dribble</Button>
<Button variant='github' type="button" className="btn btn-github">
<i className="fa fa-github me-2"></i>Github</Button>
<Button variant='instagram' type="button">
<i className="fa fa-instagram me-2"></i>Instagram</Button>
<Button variant='pinterest' type="button">
<i className="fa fa-pinterest me-2"></i>Pinterest</Button>
<Button variant="vk" type="button" >
<i className="fa fa-vk me-2"></i>VKontakte</Button>
<Button variant="rss" type="button" >
<i className="fa fa-rss me-2"></i>RSS</Button>
<Button variant="flickr" type="button" >
<i className="fa fa-flickr me-2"></i>Flickr</Button> `}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Color variations</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow12(!show12) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Colorbtn.map((idx, cl) => (
                  <Button variant={idx.color} href="#" key={cl} >{idx.title}</Button>
                ))}

              </div>
            </Card.Body>
            <Collapse in={show12}>
              <pre>
                <code>{`{Colorbtn.map((idx, cl) => (
<Button variant={idx.color} href="#" key={cl} >{idx.title}</Button>
))}`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Social buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow13(!show13) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Socialicon.map((idx, soi) => (
                  <Button variant={idx.color} type="button" key={soi} >
                    <i className={`fa fa-${idx.icon}`}></i></Button>
                ))}
              </div>
            </Card.Body>
            <Collapse in={show13}>
              <pre>
                <code>{`<Button variant="twitter" type="button">
        <i className="fa fa-twitter"></i></Button>
     <Button variant="google" type="button">
        <i className="fa fa-google"></i></Button>
     <Button variant="youtube" type="button">
       <i className="fa fa-youtube"></i></Button>
     <Button variant="vimeo" type="button" >
       <i className="fa fa-vimeo"></i></Button>
     <Button variant="dribbble" type="button">
       <i className="fa fa-dribbble"></i></Button>
     <Button variant="github" type="button">
        <i className="fa fa-github"></i></Button>
     <Button variant="instagram" type="button">
       <i className="fa fa-instagram"></i></Button>
     <Button variant="pinterest" type="button">
       <i className="fa fa-pinterest"></i></Button> `}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Icon buttons</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow14(!show14) }} />
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                {Iconbtn.map((idx, ib) => (
                  <Button variant={idx.color} type="button" key={ib} >
                    <i className={`fe fe-${idx.icon}`}></i></Button>
                ))}
              </div>
            </Card.Body>
            <Collapse in={show14}>
              <pre>
                <code>{`<Button variant='dark' type="button">
<i className="fe fe-github"></i></Button>
<Button variant='success' type="button" >
<i className="fe fe-bell"></i></Button>
<Button variant='warning' type="button" >
<i className="fe fe-star"></i></Button>
<Button variant='danger' type="button" >
<i className="fe fe-trash"></i></Button>
<Button variant='purple' type="button" >
<i className="fe fe-bar-chart"></i></Button>
<Button variant='secondary' type="button" >
<i className="fe fe-git-merge"></i></Button> `}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Loading button</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Add <code className="highlighter-rouge">.btn-loading</code> to use a loading
                  state on a button. The width of the button depends on the length of the
                  text
                  inside Since the loading spinner is implemented using the element.</p>
                <div className="example p-0">
                  <div className="btn-list">

                    <Button variant="primary" type="button" className="btn-loading">
                      Button text
                    </Button>

                    <br />

                    <Button variant='success' type="button"
                      className=" btn-loading btn-icon">
                      <i
                        className="fe fe-check"></i>
                    </Button>
                    <Button variant='warning' type="button"
                      className=" btn-loading btn-sm">Button
                      text</Button><br />
                    <Button variant='danger' type="button"
                      className=" btn-loading btn-lg">Button
                      text</Button>
                    <Button variant='info' type="button"
                      className=" btn-loading btn-block">Button
                      text</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Button dropdown</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Wrap the dropdown’s toggle using different colors and icons implemented
                  in
                  different dropdowns styles (your button or link) and the dropdown menu
                  within <code className="highlighter-rouge">.dropdown</code>, or another
                  element
                  that declares <code
                    className="highlighter-rouge">position: relative;</code>.
                  Dropdowns can be triggered from <code
                    className="highlighter-rouge">&lt;a&gt;</code> or <code
                      className="highlighter-rouge">&lt;button&gt;</code> elements to better
                  fit
                  your potential needs.</p>
                <div className="example p-0">
                  <div className="btn-list dropstart">
                    <Dropdown>
                      <Dropdown.Toggle variant='secondary' type="button" 
                        data-bs-toggle="dropdown">
                        <i className="fe fe-calendar"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu role="menu">
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle variant='info' type="button"
                        data-bs-toggle="dropdown">
                        <i className="fe fe-calendar me-2"></i>Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu role='menu'>
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle variant='danger' type="button" 
                        data-bs-toggle="dropdown">
                        Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu role="menu">
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                        <Dropdown.Item href="#">Dropdown
                          link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>List of buttons</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>You can now create a list of buttons with the <code
                  className="highlighter-rouge">.btn-list</code> container.</p>
                <div className="example p-0">
                  <div className="btn-list">
                    <Button variant='primary' href="#" >Save changes</Button>
                    <Button variant='secondary' href="#" >Save and continue</Button>
                    <Button variant='danger' href="#" >Cancel</Button>
                  </div>
                </div>
              </div>
              <div className="text-wrap mt-6">
                <p>Use the <code className="highlighter-rouge">.text-center</code> modifiers to
                  alter the alignment.</p>
                <div className="example p-0">
                  <div className="btn-list text-center">
                    <Button variant='primary' href="#" >Save changes</Button>
                    <Button variant='secondary' href="#" >Save and continue</Button>
                    <Button variant='danger' href="#" >Cancel</Button>
                  </div>
                </div>
              </div>
              <div className="text-wrap mt-6">
                <p>Use the <code className="highlighter-rouge">.text-end</code> modifiers to
                  alter
                  the alignment.</p>
                <div className="example p-0">
                  <div className="btn-list text-end">
                    <Button variant='primary' href="#" >Save changes</Button>
                    <Button variant='secondary' href="#">Save and continue</Button>
                    <Button variant='danger' href="#" className="me-2">Cancel</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>)
}
