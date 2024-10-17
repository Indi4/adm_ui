import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Dashedline, LineColumnArea, StackedAreaChart, StackedBar, StackedColumn } from './apexchartdata/apexchartsdata'
import Pageheader from '../../../layouts/pageheader/pageheader'


export default function ApexCharts() {
  const breadcrumbs = ["Charts", "Apex Charts"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />


      <Row>
        <Col sm={12} md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>STACKED BAR CHART
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <StackedBar />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title> STACKED AREA CHART
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <StackedAreaChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>DASHED LINE CHART WITH GRADIENT COLOR
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <Dashedline />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title> STACKED COLUMN CHART
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <StackedColumn />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>LINE , COLUMN AND AREA CHART
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <LineColumnArea />
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>


    </Fragment>
  )
}
