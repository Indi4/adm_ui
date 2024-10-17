import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Basic1, Basic2, Basicmaps } from './leafletdata/leafletdata'

export default function LeafletMaps() {
  const breadcrumbs = ["Maps", "Leaflet Maps"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row className="row row-sm">
        <Col lg={12}>
          <Card className="mg-b-20" id="map">
            <Card.Header>
              <Card.Title>Basic</Card.Title>
            </Card.Header>
            <Card.Body>

              <Basicmaps />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className=" mg-b-20" id="map2">
            <Card.Header>
              <Card.Title>With Popup</Card.Title>
            </Card.Header>
            <Card.Body>

              <Basic1 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card id="map1">
            <Card.Header>
              <Card.Title>Map With Circle</Card.Title>
            </Card.Header>
            <Card.Body>

              <Basic2 />

            </Card.Body>
          </Card>
        </Col>
      </Row>




    </Fragment>
  )
}
