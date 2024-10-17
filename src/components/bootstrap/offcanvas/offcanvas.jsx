import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Collapse, Dropdown, Form, Offcanvas, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function Offcanva() {
  const breadcrumbs = ["Bootstrap", "Offcanvas"];
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // OffCanvas end
  const [show1, setShow1] = useState(false)

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
  // OffCanvas left
  const [show2, setShow2] = useState(false)

  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)
  // OffCanvas Bottom
  const [show3, setShow3] = useState(false)

  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  // OffCanvas Enable
  const [show4, setShow4] = useState(false)

  const handleClose4 = () => setShow4(false)
  const handleShow4 = () => setShow4(true)

  // OffCanvas Enablebackdrop
  const [show5, setShow5] = useState(false)

  const handleClose5 = () => setShow5(false)
  const handleShow5 = () => setShow5(true)
  //  Offcanvas Scrolling&backdrop

  const [show6, setShow6] = useState(false)

  const handleClose6 = () => setShow6(false)
  const handleShow6 = () => setShow6(true)

  //show code
  const [showa, setShowa] = useState(false);
  const [showb, setShowb] = useState(false);
  const [showc, setShowc] = useState(false);


  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Offcanvas Demo</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShowa(!showa) }} />
            </Card.Header>
            <Card.Body>

              <p>Use the buttons below to show and hide an offcanvas element via
                JavaScript that toggles the .show className on an element with the
                .offcanvas class.</p>

              <Button variant="primary" className='me-2 mt-1 mb-1' onClick={handleShow}>
                Link with href
              </Button>
              <Button variant="info" className='me-2 mt-1 mb-1' onClick={handleShow}>
                Button with data-bs-target
              </Button>
              <Offcanvas show={show} onHide={handleClose} backdrop={true}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                  <Dropdown className=" mt-3">
                    <Dropdown.Toggle type="button" className="btn btn-primary" data-bs-toggle="dropdown">
                      Dropdown<span className="caret"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu role="menu">
                      <Dropdown.Item >Action</Dropdown.Item>
                      <Dropdown.Item >Another action</Dropdown.Item>
                      <Dropdown.Item >Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>

            <Collapse in={showa}>
              <pre>
                <code>
                  {`      export function Defaultlink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Link with href
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export function Databutton() {
  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow1}>
        Button with data-bs-target
      </Button>

      <Offcanvas show={show} onHide={handleClose1}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
        </Offcanvas.Header>

        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Dropdown className="mt-5">
            <Dropdown.Toggle>
              Dropdown button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventkey="1">Action</Dropdown.Item>
              <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
              <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Offcanvas Placements</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShowb(!showb) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="primary" onClick={handleShow} className="me-2 mt-1 mb-1">
                Toggle Left Offcanvas
              </Button>
              <Offcanvas placement='start' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas left</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed non, quas ipsa ipsum quod nemo.</p>
                </Offcanvas.Body>
              </Offcanvas>

              <Button variant="info" onClick={handleShow1} className="me-2 mt-1 mb-1">
                Toggle Top Offcanvas
              </Button>
              <Offcanvas placement='top' show={show1} onHide={handleClose1}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Top</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
                </Offcanvas.Body>
              </Offcanvas>

              <Button variant="secondary" onClick={handleShow2} className="me-2 mt-1 mb-1">
                Toggle Right Offcanvas
              </Button>
              <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
                </Offcanvas.Body>
              </Offcanvas>

              <Button variant="warning" onClick={handleShow3} className="me-2 mt-1 mb-1">
                Toggle bottom Offcanvas
              </Button>
              <Offcanvas placement='bottom' show={show3} onHide={handleClose3}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
                </Offcanvas.Body>
              </Offcanvas>

            </Card.Body>
            <Collapse in={showb}>
              <pre>
                <code>
                  {`      export function Defaultlink() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [show1, setShow1] = useState(false)

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
 
  const [show2, setShow2] = useState(false)

  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)
 
  const [show3, setShow3] = useState(false)

  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  return (
    <>
    <Button variant="primary" onClick={handleShow} className="me-2">
    Toggle Left Offcanvas
    </Button>
    <Offcanvas placement='start' show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas left</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed non, quas ipsa ipsum quod nemo.</p>
      </Offcanvas.Body>
    </Offcanvas>

    <Button variant="info" onClick={handleShow1} className="me-2">
   Toggle Top Offcanvas
    </Button>
    <Offcanvas placement='top' show={show1} onHide={handleClose1}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas Top</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
      </Offcanvas.Body>
    </Offcanvas>

    <Button variant="secondary" onClick={handleShow2} className="me-2">
   Toggle Right Offcanvas
    </Button>
    <Offcanvas placement='end' show={show2} onHide={handleClose2}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
      </Offcanvas.Body>
    </Offcanvas>

    <Button variant="warning" onClick={handleShow3} className="me-2">
   Toggle bottom Offcanvas
    </Button>
    <Offcanvas placement='bottom' show={show3} onHide={handleClose3}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsa nesciunt, natus ullam consequuntur animi. Quam cum quidem adipisci reprehenderit!</p>
      </Offcanvas.Body>
    </Offcanvas>
    </>
  );
}
                      `}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Offcanvas Scrolling Options</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShowc(!showc) }} />
            </Card.Header>
            <Card.Body>

              <Button variant="gray" onClick={handleShow4} className="me-2 mt-1 ">
                Enable body scrolling
              </Button>
              <Offcanvas show={show4} onHide={handleClose4}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil laborum deleniti aliquam, maiores, nam temporibus suscipit corporis animi laudantium mollitia doloremque nisi aliquid laboriosam, a eligendi nobis magni fuga! Repudiandae magnam aspernatur voluptate autem ut.</p>
                </Offcanvas.Body>
              </Offcanvas>

              <Button variant="primary" onClick={handleShow5} className="me-2 mt-1">
                Enable backdrop (default)
              </Button>
              <Offcanvas show={show5} onHide={handleClose5}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas with backdrop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus a odit voluptatem vitae maxime totam mollitia veritatis voluptate consequuntur minima suscipit dolor pariatur unde.</p>
                </Offcanvas.Body>
              </Offcanvas>

              <Button variant="dark" onClick={handleShow6} className="me-2 mt-1 ">
                scrolling& backdrop
              </Button>
              <Offcanvas show={show6} onHide={handleClose6}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Backdrop with scrolling</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque tenetur impedit labore nemo, atque temporibus asperiores illum non unde voluptate obcaecati, nulla quo incidunt! Accusamus magni, sunt corporis necessitatibus laboriosam quod perferendis nihil quisquam facere? Sint cupiditate eos repellendus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil laudantium excepturi officiis libero omnis nisi optio suscipit mollitia! Aliquam quo eveniet numquam distinctio iure neque dolorum. Vel reprehenderit repellat magnam ipsam. Libero aut vitae aliquid consequatur quasi voluptate, assumenda eligendi at! Aperiam eaque repellendus mollitia ut error. Laudantium vitae magnam praesentium ipsa quas, illo cum eum doloremque necessitatibus accusamus assumenda minus voluptate dolore aspernatur tenetur, accusantium ad repudiandae quos consectetur a amet distinctio dicta ratione ipsam. Maiores aliquam voluptatem alias odio possimus porro ex nulla voluptas consequuntur ratione voluptate, molestiae ad quae dolor inventore praesentium quidem reiciendis mollitia nisi?</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero officiis maiores nulla, illo tempore eligendi molestiae optio debitis nihil, explicabo nemo quam, praesentium ex! Quia sapiente nulla eveniet voluptas aspernatur corrupti eius vel tempore odio voluptatum alias, aut nam nihil eos distinctio dolorum totam nisi ducimus, laboriosam minus eum hic, blanditiis maiores. Distinctio laudantium similique quam aperiam, voluptatum dicta deleniti nemo laboriosam cumque reprehenderit in facilis, ut accusamus earum officiis? Sed odit corporis, cum quisquam omnis doloribus explicabo accusamus optio iusto officia non id aspernatur similique alias nobis at vel totam dignissimos natus! Earum optio amet magni modi atque nam! Tempora sunt, quo reiciendis id suscipit dolorum sed praesentium corrupti. Aliquam maiores reprehenderit ratione rerum nostrum iure dicta aspernatur quibusdam dolor! Distinctio labore similique pariatur autem totam dolor maiores itaque eaque. Fuga veniam id ipsum odit ducimus cum assumenda quia iure non, commodi ea illo quisquam corrupti cumque alias. Libero.</p>
                </Offcanvas.Body>
              </Offcanvas>


            </Card.Body>
            <Collapse in={showc}>
              <pre>
                <code>
                  {`      export function Defaultlink() {
  
   const [show4, setShow4] = useState(false)
 
   const handleClose4 = () => setShow4(false)
   const handleShow4 = () => setShow4(true)
 
  
   const [show5, setShow5] = useState(false)
 
   const handleClose5 = () => setShow5(false)
   const handleShow5 = () => setShow5(true)
   
 
   const [show6, setShow6] = useState(false)
 
   const handleClose6 = () => setShow6(false)
   const handleShow6 = () => setShow6(true)

  return (
    <>
    <Button variant="gray" onClick={handleShow4} className="me-2">
    Enable body scrolling
      </Button>
      <Offcanvas show={show4} onHide={handleClose4}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>Try scrolling the rest of the page to see this option in action.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil laborum deleniti aliquam, maiores, nam temporibus suscipit corporis animi laudantium mollitia doloremque nisi aliquid laboriosam, a eligendi nobis magni fuga! Repudiandae magnam aspernatur voluptate autem ut.</p>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" onClick={handleShow5} className="me-2">
    Enable backdrop (default)
      </Button>
      <Offcanvas show={show5} onHide={handleClose5}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas with backdrop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, natus a odit voluptatem vitae maxime totam mollitia veritatis voluptate consequuntur minima suscipit dolor pariatur unde.</p>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="dark" onClick={handleShow6} className="me-2">
    scrolling& backdrop
      </Button>
      <Offcanvas show={show6} onHide={handleClose6}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Backdrop with scrolling</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>Try scrolling the rest of the page to see this option in action.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque tenetur impedit labore nemo, atque temporibus asperiores illum non unde voluptate obcaecati, nulla quo incidunt! Accusamus magni, sunt corporis necessitatibus laboriosam quod perferendis nihil quisquam facere? Sint cupiditate eos repellendus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil laudantium excepturi officiis libero omnis nisi optio suscipit mollitia! Aliquam quo eveniet numquam distinctio iure neque dolorum. Vel reprehenderit repellat magnam ipsam. Libero aut vitae aliquid consequatur quasi voluptate, assumenda eligendi at! Aperiam eaque repellendus mollitia ut error. Laudantium vitae magnam praesentium ipsa quas, illo cum eum doloremque necessitatibus accusamus assumenda minus voluptate dolore aspernatur tenetur, accusantium ad repudiandae quos consectetur a amet distinctio dicta ratione ipsam. Maiores aliquam voluptatem alias odio possimus porro ex nulla voluptas consequuntur ratione voluptate, molestiae ad quae dolor inventore praesentium quidem reiciendis mollitia nisi?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero officiis maiores nulla, illo tempore eligendi molestiae optio debitis nihil, explicabo nemo quam, praesentium ex! Quia sapiente nulla eveniet voluptas aspernatur corrupti eius vel tempore odio voluptatum alias, aut nam nihil eos distinctio dolorum totam nisi ducimus, laboriosam minus eum hic, blanditiis maiores. Distinctio laudantium similique quam aperiam, voluptatum dicta deleniti nemo laboriosam cumque reprehenderit in facilis, ut accusamus earum officiis? Sed odit corporis, cum quisquam omnis doloribus explicabo accusamus optio iusto officia non id aspernatur similique alias nobis at vel totam dignissimos natus! Earum optio amet magni modi atque nam! Tempora sunt, quo reiciendis id suscipit dolorum sed praesentium corrupti. Aliquam maiores reprehenderit ratione rerum nostrum iure dicta aspernatur quibusdam dolor! Distinctio labore similique pariatur autem totam dolor maiores itaque eaque. Fuga veniam id ipsum odit ducimus cum assumenda quia iure non, commodi ea illo quisquam corrupti cumque alias. Libero.</p>
        </Offcanvas.Body>
      </Offcanvas>
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



    </Fragment>
  )
}
