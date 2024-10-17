import React, { Fragment } from 'react'
import { Badge, Breadcrumb, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Basiclist, Content, Defaultbadge, Defaultlist, Disabled, Input, Listicons } from './data/listdata'
import { Link } from 'react-router-dom';

export default function ListGroups() {
  const breadcrumbs = ["Bootstrap", "List Group"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />


      <Row>
        {Defaultlist.map((idx, list1) => (
          <Col sm={12} md={12} lg={4} xl={4} key={list1}>
            <Card >
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className={`panel panel-${idx.color}`}>
                  <ListGroup>
                    <ListGroup.Item><Link to="#">{idx.item1} </Link></ListGroup.Item>
                    <ListGroup.Item className="active"><Link to="#">{idx.item2}</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#">{idx.item3}</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#">{idx.item4}</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="#">{idx.item5} </Link></ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
 </Row>

 <Row>
        {Basiclist.map((idx, list2) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list2}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" className={idx.active}>{idx.item1}</ListGroup.Item>
                  <ListGroup.Item as="li">{idx.item2}</ListGroup.Item>
                  <ListGroup.Item as="li">{idx.item3}</ListGroup.Item>
                  <ListGroup.Item as="li">{idx.item4}</ListGroup.Item>
                  <ListGroup.Item as="li">{idx.item5}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
</Row>

      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Order list</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item as="li" className="listorder">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li" className="listorder">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" className="listorder">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li" className="listorder">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li" className="listorder">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Unorder list</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup as="ul">
                <li className="listunorder">Cras justo odio</li>
                <li className="listunorder">Dapibus ac facilisis in</li>
                <li className="listunorder">Morbi leo risus</li>
                <li className="listunorder">Porta ac consectetur ac</li>
                <li className="listunorder">Vestibulum at eros</li>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    <Row>
        {Disabled.map((idx, list3) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list3}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" className={idx.class} >{idx.item1}</ListGroup.Item>
                  <ListGroup.Item as="li" variant={idx.color1}>{idx.item2}</ListGroup.Item>
                  <ListGroup.Item as="li" variant={idx.color2}>{idx.item3}</ListGroup.Item>
                  <ListGroup.Item as="li" variant={idx.color3}>{idx.item4}</ListGroup.Item>
                  <ListGroup.Item as="li" variant={idx.color4}>{idx.item5}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
 </Row>

    <Row>
        {Listicons.map((idx, list4) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list4}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li"><i className={`me-2 fa fa-${idx.icon1}`} aria-hidden="true"></i>
                    {idx.item1} </ListGroup.Item>
                  <ListGroup.Item as="li"><i className={`me-2 fa fa-${idx.icon2}`} aria-hidden="true"></i>
                    {idx.item2}</ListGroup.Item>
                  <ListGroup.Item as="li"><i className={`me-2 fa fa-${idx.icon3}`} aria-hidden="true"></i>
                    {idx.item3}</ListGroup.Item>
                  <ListGroup.Item as="li"><i className={`me-2 fa fa-${idx.icon4}`} aria-hidden="true"></i>
                    {idx.item4}</ListGroup.Item>
                  <ListGroup.Item as="li"><i className={`me-2 fa fa-${idx.icon5}`} aria-hidden="true"></i>
                    {idx.item5}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
  </Row>

<Row>
        {Defaultbadge.map((idx, list5) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list5}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    Cras justo odio
                    <Badge bg={idx.bg1} text={idx.color} className="badgetext rounded-pill">{idx.badge1}</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                    <Badge bg={idx.bg2} text={idx.color} className=" badgetext badge badge-default rounded-pill">{idx.badge2}</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Morbi leo risus
                    <Badge bg={idx.bg3} text={idx.color} className=" badgetext badge badge-default rounded-pill">{idx.badge3}</Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
</Row>

<Row>
        {Input.map((idx, list6) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list6}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul">
                  <ListGroup.Item as="li"> <Form.Check defaultChecked className=" me-1" type={idx.class} value="" name={idx.name} aria-label="..." />
                    <span className="ms-5">{idx.item1}</span>
                  </ListGroup.Item>
                  <ListGroup.Item as="li"> <Form.Check className=" me-1" type={idx.class} value="" name={idx.name} aria-label="..." />
                    <span className="ms-5">{idx.item2}</span>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">  <Form.Check className=" me-1" type={idx.class} value="" name={idx.name} aria-label="..." />
                    <span className="ms-5">{idx.item3}</span>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">  <Form.Check className=" me-1" type={idx.class} value="" name={idx.name} aria-label="..." />
                    <span className="ms-5">{idx.item4}</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>

 <Row>
        {Content.map((idx, list7) => (
          <Col sm={12} md={12} lg={6} xl={6} key={list7}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item to="#"
                    className={`list-group-item list-group-item-action flex-column align-items-start ${idx.class}`}>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className={`mb-1 text-${idx.color}`}>{idx.text1}</h5>
                      <small>{idx.text2}</small>
                    </div>
                    <p className="mb-1">{idx.text3} </p>
                    <small>{idx.text4}</small>
                  </ListGroup.Item>
                  <ListGroup.Item to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{idx.text1}</h5>
                      <small className="text-muted">{idx.text2}</small>
                    </div>
                    <p className="mb-1">{idx.text3}</p>
                    <small className="text-muted">{idx.text4}</small>
                  </ListGroup.Item>
                  <ListGroup.Item to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{idx.text1}</h5>
                      <small className="text-muted">{idx.text2}</small>
                    </div>
                    <p className="mb-1">{idx.text3}</p>
                    <small className="text-muted">{idx.text4}</small>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
 </Row>



    </Fragment>
  )
}
