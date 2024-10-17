import React, { Fragment } from 'react'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Gallerylist } from './data/gallerydata'
import { Col, PageItem, Pagination, Row } from 'react-bootstrap'


export default function Gallery() {
  const breadcrumbs = ["Pages", "Gallery"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <div className="demo-gallery card">
        <div className="card-header">
          <div className="card-title">Light Gallery</div>
        </div>
        <div className="card-body">
          <Gallerylist />
        </div>
      </div>

      <Row className=" row mb-5">
        <Col md={6} className=" col-md-6 mt-1 d-none d-md-block">1 - 10 of 234 photos</Col>
        <Col md={6} className=" col-md-6">
          <div className=" float-end">
            <Pagination as="ul" className="pagination ">
              <PageItem disabled href='#' className="" tabIndex="-1">Prev
              </PageItem>
              <PageItem active href="#" className="page-item ">1</PageItem>
              <PageItem href="#" className="page-item">2</PageItem>
              <PageItem href="#" className="page-item">3</PageItem>
              <PageItem href="#" className="page-item">4</PageItem>
              <PageItem href="#" className="page-item">5</PageItem>
              <PageItem href="#" className="page-item page-next">
                Next
              </PageItem>
            </Pagination>
          </div>
        </Col>

      </Row>



    </Fragment>
  )
}
