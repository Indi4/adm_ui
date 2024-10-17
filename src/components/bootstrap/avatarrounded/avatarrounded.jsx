import React, { Fragment } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Avatarbadge, Avataricon, Avatarinitials, Avatarlist, Avatarsize, Avatarstatus, Simple } from './data/roundeddata'

export default function AvatarRounded() {
  const breadcrumbs = ["Bootstrap", "Avatarround"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>Simple Round avatar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees<code className="highlighter-rouge">.avatar</code> in <code
                  className="highlighter-rouge">.brround</code>.</p>
                <div className="example">
                  <div className="avatar-list">
                    {Simple.map((idx, avr1) => (
                      <img className="avatar  brround cover-image" key={avr1}
                        src={idx.src1} />
                    ))}

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>Round Avatars list</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees <code className="highlighter-rouge">.avatar-list</code> in <code
                  className="highlighter-rouge">.brround</code> and <code
                    className="highlighter-rouge">.avatar-list-stacked</code>.</p>
                <div className="example">
                  <div className="avatar-list avatar-list-stacked">
                    {Avatarlist.map((idx, avr2) => (
                      <img className="avatar brround cover-image" key={avr2}
                        src={idx.src1} />
                    ))}

                    <Link to="#;">
                      <span className="avatar brround cover-image bg-primary">+8</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>RoundAvatar with icons</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees <code className="highlighter-rouge">.avatar-icons</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avataricon.map((idx, avr3) => (
                      <span className="avatar avatar-xl brround cover-image" key={avr3}>
                        <img className="avatar avatar-xl  brround cover-image"
                          src={idx.src1} />
                        <span className={`avatar-icons bg-${idx.color}`}><i
                          className={` fs-12 fe fe-${idx.icon}`}></i></span>
                      </span>
                    ))}

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>RoundAvatar size</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees <code className="highlighter-rouge">.avatar-sm</code> , <code
                  className="highlighter-rouge">.avatar-md</code> , <code
                    className="highlighter-rouge">.avatar-lg</code> , <code
                      className="highlighter-rouge">.avatar-xl</code> , <code
                        className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avatarsize.map((idx, avr4) => (
                      <img className={`brround cover-image br-2 avatar avatar-${idx.size} `}
                        src={idx.src1} key={avr4} />
                    ))}

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>Round Avatar status</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees <code className="highlighter-rouge">.avatar-status</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avatarstatus.map((idx, avr5) => (
                      <span key={avr5} className="avatar brround cover-image br-2">
                        <img className="avatar brround cover-image br-2"
                          src={idx.src1} />
                        <span className={`avatar-status bg-${idx.color}`}></span>
                      </span>
                    ))}


                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>RoundAvatar with Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classNamees <code className="highlighter-rouge">.avatar-badges</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avatarbadge.map((idx, av2) => (
                      <span className='avatar avatar-md brround cover-image br-2' key={av2}>
                        <img className="avatar avatar-md brround cover-image br-2"
                          src={idx.src1} />
                        <Badge
                          className={`badge rounded-pill avatar-badges fs-10 bg-${idx.color}`}>{idx.badge}</Badge>
                      </span>
                    ))}


                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6} >
          <Card>
            <Card.Header>
              <Card.Title>Avatar initials with colors</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <p>Use classNamees <code className="highlighter-rouge">.avatar-sm</code> , <code
                    className="highlighter-rouge">.avatar-md</code> , <code
                      className="highlighter-rouge">.avatar-lg</code> , <code
                        className="highlighter-rouge">.avatar-xl</code> , <code
                          className="highlighter-rouge">.avatar-xxl</code> .</p>
                  <div className="avatar-list">
                    {Avatarinitials.map((idx, av7) => (
                      <span className={` br-2 avatar brround avatar-${idx.size} bg-${idx.color} `} key={av7}>{idx.text}</span>
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
