import React, { Fragment } from 'react'
import { Card, Carousel, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Carouseldata, Recentimages } from './data/detailsdata'

export default function FileDetails () {
  const breadcrumbs = ["Components", "Filemanager", "File Details"];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800
  
  }
  return (
    <Fragment>



          <Pageheader  items={breadcrumbs} />
        

            <Row className="row-sm">
              <Col xl={8} lg={8} md={12}>
                <Card className="custom-card overflow-hidden">
                  <Card.Body>
                    <Link to="#"><img src={imagesData('photo28')}
                      alt="img" className="cover-image br-7 w-100" /></Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
        <Carouseldata/>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} m={12}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>
                      File Information
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table className="table table-bordered text-nowrap mb-0">
                        <thead></thead>
                        <tbody className="text-dark">
                          <tr>
                            <th className="fw-semibold">File Name</th>
                            <td>sample-image.jpg</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">File Size</th>
                            <td>12.45mb</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Date</th>
                            <td>07-10-2021</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Uploaded By</th>
                            <td>prityy hnyy</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Width</th>
                            <td>1008</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Height</th>
                            <td>403</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Format</th>
                            <td>jpg</td>
                          </tr>
                          <tr>
                            <th className="fw-semibold">Location</th>
                            <td>storage/My Folder/sample-image.jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Recent Images</Card.Title>
                  </Card.Header>
                  <Card.Body>
                  
                    <Recentimages/>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
         


    </Fragment>
  )
}
