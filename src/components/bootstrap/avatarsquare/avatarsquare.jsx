import React, { Fragment } from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Avatarbadge, Avataricon, Avatarinitials, Avatarlist, Avatarsize, Avatarstatus, Simple } from './data/avatar'

export default function Avatarsquare() {
  const breadcrumbs = ["Bootstrap", "Avatarsquare"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Simple avatar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes<code className="highlighter-rouge">.avatar</code>.</p>
                <div className="example">
                  <div className="avatar-list">
                    {Simple.map((idx, av1) => (
                      <img className="avatar cover-image br-2" src={idx.src1} key={av1} />
                    ))}

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatars list</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes <code className="highlighter-rouge">.avatar-list </code> and
                  <code className="highlighter-rouge">.avatar-list-stacked</code>.
                </p>
                <div className="example">
                  <div className="avatar-list avatar-list-stacked">
                    {Avatarlist.map((idx, av2) => (
                      <img className="avatar cover-image br-2"
                        src={idx.src1} key={av2} />
                    ))}

                    <Link href="#;">
                      <span className="avatar bg-primary br-2">+8</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


      <Row>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatar status</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes <code className="highlighter-rouge">.avatar-status</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avatarstatus.map((idx, av3) => (
                      <span key={av3} className="avatar cover-image br-2">
                        <img className="avatar cover-image br-2"
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

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatar with Badges</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes <code className="highlighter-rouge">.avatar-badges</code> .</p>
                <div className="example">
                  <div className="avatar-list">
                    {Avatarbadge.map((idx, av4) => (
                      <span className='avatar avatar-md cover-image br-2' key={av4}>
                        <img className="avatar avatar-md cover-image br-2"
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
      </Row>


      <Row>

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatar with icons</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="p-3">
                  <p>Use classes <code className="highlighter-rouge">.avatar-icons</code> .</p>
                  <div className="avatar-list">
                    {Avataricon.map((idx, av5) => (
                      <span className="avatar avatar-xl cover-image br-2" key={av5}>
                        <img className="avatar avatar-xl cover-image br-2"
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

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatar size</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code
                  className="highlighter-rouge">.avatar-md</code> , <code
                    className="highlighter-rouge">.avatar-lg</code> , <code
                      className="highlighter-rouge">.avatar-xl</code> , <code
                        className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                  {Avatarsize.map((idx, av6) => (
                    <img className={` cover-image br-2 avatar avatar-${idx.size} `}
                      src={idx.src1} key={av6} />
                  ))}

                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Avatar initials with colors</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>Use classes <code className="highlighter-rouge">.avatar-sm</code> , <code
                  className="highlighter-rouge">.avatar-md</code> , <code
                    className="highlighter-rouge">.avatar-lg</code> , <code
                      className="highlighter-rouge">.avatar-xl</code> , <code
                        className="highlighter-rouge">.avatar-xxl</code> .</p>
                <div className="avatar-list">
                  {Avatarinitials.map((idx, av7) => (
                    <span className={` br-2 avatar avatar-${idx.size} bg-${idx.color} `} key={av7}>{idx.text}</span>
                  ))}

                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>




    </Fragment>
  )
}
