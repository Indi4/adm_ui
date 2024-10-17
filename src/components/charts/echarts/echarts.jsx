import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Echart, Echart1, Echart2, Echart3, Echart4, Echart5, Echart6, Echart7, Echart8, Echart9 } from './echartdata/Echartdata'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function ECharts() {
  const breadcrumbs = ["Charts", "Echarts"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Line chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Combination of Line & Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Line chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart2 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Combination of Line & Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart3 />
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart4 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Horizontal Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart5 />
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="pb-0">
              <Card.Title>Single line chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart6 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Single smooth line chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart7 />
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Radar chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart8 />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Live Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>

              <Echart9 />
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
