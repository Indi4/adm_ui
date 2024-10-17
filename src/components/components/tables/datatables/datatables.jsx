import React, { Fragment } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { DataTabless, ExportCSV, ResponsiveDataTable } from './data/responsivedatatable'

export default function DataTables() {
  const breadcrumbs = ["Components", "Tables", "Data Table"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Responsive DataTable</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">

                <ResponsiveDataTable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>File Export</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive table-page Export-datatable">
                <ExportCSV />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Deleted Row DataTable</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive deleted-table">
                <DataTabless />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
