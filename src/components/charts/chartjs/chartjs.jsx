import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { AreaChart, DonutChart, GradientBarChart, HorizontalBarChart, HorizontalBarChart1, HorizontalStackedBarChart, LineChart, PieChart, StackedBarChart, StackedBarChart1, VerticalStackedBarChart } from './chartdata/barcharts'
import Pageheader from '../../../layouts/pageheader/pageheader'
export default function ChartJS() {
  const breadcrumbs = ["Charts", "Chartjs"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />


      <Row>
        <Col sm={12} md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <StackedBarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Transparency </Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <StackedBarChart1 />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Gradient Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>

                <GradientBarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Horizontal Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <HorizontalBarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Horizontal Bar Chart Style2</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <HorizontalBarChart1 />
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Stacked Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <VerticalStackedBarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Horizontal Stacked Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <HorizontalStackedBarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <LineChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <AreaChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Donut Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <DonutChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pie Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">

                <PieChart />
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>




    </Fragment>
  )
}
