import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Content } from './data/termsdata'


export default function Terms() {
  const breadcrumbs = ["Pages", "Extension", "Terms"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <div>
          <p className="fw-semibold text-uppercase text-muted-dark mb-1 fs-13">Agreement</p>
          <h2 className="fw-semibold">Terms of services</h2>
        </div>
        {Content.map((idx, t1) => (
          <Col md={12} key={t1}>
            <Card>
              <Card.Body>
                <h5 className="fw-semibold">{idx.title}</h5>
                <p className="text-muted-dark">{idx.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}


        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fw-semibold">Terms and Conditions</h5>
              <p className="text-muted-dark">I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system,
                and
                expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids
                pleasure
                itself, because it is pleasure, but because those who do not know how to
                pursue
                pleasure rationally encounter consequences</p>
              <ul className="text-muted-dark">
                <li><i className="fa fa-angle-double-right me-1"></i> ducimus qui blanditiis
                  praesentium
                  voluptatum deleniti atque corrupti quos dolores </li>
                <li><i className="fa fa-angle-double-right me-1"></i> quas molestias excepturi sint
                  occaecati cupiditate non provident</li>
                <li><i className="fa fa-angle-double-right me-1"></i> Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque</li>
                <li><i className="fa fa-angle-double-right me-1"></i> Temporibus autem quibusdam et
                  aut
                  officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                </li>
                <li><i className="fa fa-angle-double-right me-1"></i> repudiandae sint et molestiae
                  non
                  recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
                <li><i className="fa fa-angle-double-right me-1"></i> ut aut reiciendis voluptatibus
                  maiores alias consequatur aut perferendis doloribus asperiores repellat
                </li>
              </ul>
              <div className="d-flex align-items-center mt-5">
                <Link to="#" className="fs-15 fw-semibold">
                  <i className="bi bi-file-earmark-pdf fs-5"></i>
                  Download
                </Link>
                <div className="btn-list ms-auto text-end">
                  <Button variant='default' className="btn btn-outline-default fw-semibold" href="#">Not right now...</Button>
                  <Button variant='' className="btn btn-primary fw-semibold" href="#">I agree with terms</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



    </Fragment>
  )
}
