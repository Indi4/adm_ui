import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Colordata, Listdata } from './data/tagsdata'

export default function Tags() {
  const breadcrumbs = ["Bootstrap", "Tags"];
  const [selected, setSelected] = useState(['One', 'Two', 'Three', 'Four'])
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
        <Col lg={6} md={12} >
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Default tag</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    <span className="tag">First tag</span>
                    <span className="tag">Second tag</span>
                    <span className="tag">Third tag</span>
                  </div>
                </div>

              </div>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>{`<span className="tag">First tag</span>
<span className="tag">Second tag</span>
<span className="tag">Third tag</span>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
        <Col lg={6} md={12} >
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Link tag</Card.Title>

              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    <Link to="#" className="tag">First tag</Link>
                    <Link to="#" className="tag">Second tag</Link>
                    <Link to="#" className="tag">Third tag</Link>
                  </div>
                </div>


              </div>

            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>{`<Link to="#" className="tag">First tag</Link>
<Link to="#" className="tag">Second tag</Link>
<Link to="#" className="tag">Third tag</Link>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <Card.Title>Avatar tag</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    <span className="tag">
                      <span className=""><img src={imagesData('female21')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Victoria
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('male33')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Nathan
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('female23')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Alice
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('female20')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Rose
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('male25')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Peter
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('male32')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Wayne
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('female20')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Michelle
                    </span>
                    <span className="tag">
                      <span className=""><img src={imagesData('female24')}
                        className="tag-avatar avatar" alt="img" /></span>
                      Debra
                    </span>
                  </div>
                </div>


              </div>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>{`<span className="tag">
<span className=""><img src={imagesData('female24')}
className="tag-avatar avatar" alt="img" /></span>
  Victoria
</span>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between align-items-center">
              <Card.Title>Tag remove</Card.Title>

              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">

                    <span className="tag">
                      One
                      <Link to="#" className="tag-addon"><i
                        className="fe fe-x"></i></Link>
                    </span>
                    <span className="tag">
                      Two
                      <Link to="#" className="tag-addon"><i
                        className="fe fe-x"></i></Link>
                    </span>
                    <span className="tag">
                      Three
                      <Link to="#" className="tag-addon"><i
                        className="fe fe-x"></i></Link>
                    </span>
                    <span className="tag">
                      Four
                      <Link to="#" className="tag-addon"><i
                        className="fe fe-x"></i></Link>
                    </span>
                  </div>
                </div>


              </div>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>{`<div className="tags">
                      
<span className="tag">
One
<Link to="#" className="tag-addon"><i
    className="fe fe-x"></i></Link>
</span>
<span className="tag">
Two
<Link to="#" className="tag-addon"><i
    className="fe fe-x"></i></Link>
</span>
<span className="tag">
  Three
<Link to="#" className="tag-addon"><i
    className="fe fe-x"></i></Link>
</span>
<span className="tag">
Four
<Link to="#" className="tag-addon"><i
    className="fe fe-x"></i></Link>
</span>
       </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col lg={6}>
          <Card>
            <div className="card-header d-flex justify-content-between align-items-center">
              <Card.Title>Tag addons</Card.Title>

              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    <div className="tag">
                      npm
                      <Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
                    </div>
                    <div className="tag tag-danger">
                      npm
                      <span className="tag-addon"><i className="fe fe-activity"></i></span>
                    </div>
                    <div className="tag">
                      bundle
                      <span className="tag-addon tag-success">passing</span>
                    </div>
                    <span className="tag tag-dark">
                      CSS gzip size
                      <span className="tag-addon tag-warning">20.9 kB</span>
                    </span>
                  </div>
                </div>


              </div>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>{`<div className="tags">
<div className="tag">
npm
<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
</div>
<div className="tag tag-danger">
 npm
<span className="tag-addon"><i className="fe fe-activity"></i></span>
</div>
<div className="tag">
     bundle
<span className="tag-addon tag-success">passing</span>
</div>
<span className="tag tag-dark">
     CSS gzip size
<span className="tag-addon tag-warning">20.9 kB</span>
</span>
       </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Rounded tag</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    <span className="tag tag-rounded">First tag</span>
                    <span className="tag tag-rounded">Second tag</span>
                    <span className="tag tag-rounded">Third tag</span>
                  </div>
                </div>

              </div>
            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>{`<div className="tags">
<span className="tag tag-rounded">First tag</span>
<span className="tag tag-rounded">Second tag</span>
<span className="tag tag-rounded">Third tag</span>
       </div>`}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Color tag</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example border">
                  <div className="tags">
                    {Colordata.map((idx, tg1) => (
                      <span className={`tag tag-${idx.color}`} key={tg1}>{idx.title} </span>
                    ))}

                  </div>
                </div>

              </div>
            </Card.Body>
            <Collapse in={show7}>
              <pre>
                <code>{`<span className="tag tag-azure">Azure tag</span>
 <span className="tag tag-indigo">Indigo tag</span>
 <span className="tag tag-purple">Purple tag</span>
 <span className="tag tag-pink">Pink tag</span>
 <span className="tag tag-red">Red tag</span>
 <span className="tag tag-orange">Orange tag</span>
 <span className="tag tag-yellow">Yellow tag</span>
 <span className="tag tag-lime">Lime tag</span>
 <span className="tag tag-green">Green tag</span>
 <span className="tag tag-teal">Teal tag</span>
 <span className="tag tag-cyan">Cyan tag</span>
 <span className="tag tag-gray">Gray tag</span>
 <span className="tag tag-gray-dark">Dark gray tag</span> `}</code>
              </pre>
            </Collapse>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>List of tags</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>You can create a list of tags with the <code
                  className="highlighter-rouge">.tags</code> container.</p>
                <div className="example border">
                  <div className="tags">
                    <span className="tag">First tag</span>
                    <span className="tag">Second tag</span>
                    <span className="tag">Third tag</span>
                  </div>
                </div>
                <p className="mt-4">If the list is very long, it will automatically wrap on
                  multiple
                  lines, while keeping all tags evenly spaced.</p>
                <div className="example">
                  <div className="tags">
                    {Listdata.map((idx, tg2) => (
                      <span className="tag tag-default" key={tg2}>{idx.title}</span>
                    ))}

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>




    </Fragment>
  )
}
