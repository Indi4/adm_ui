import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { EuropewithGraticule, MapWithTooltip, UsaMapwithAnnotation, WorldMap } from './data/simplemapdata'

export default function SimpleMaps() {
  const breadcrumbs = ["Maps", "Simple Maps"];
  const [content, setContent] = useState('')
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />
      <Row className="row-sm">
        <Col lg={6} className="">
          <Card className="mg-b-20">
            <Card.Body className="">
              <div className="main-content-label mg-b-5">
                <h4>Simple Map:<strong> World with tooltip</strong></h4>
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
              </p>
              <div className="World-map text-center">
                {' '}
                <WorldMap setTooltipContent={setContent} />

              </div>
              {content}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20">
            <Card.Body className="">
              <div className="main-content-label mg-b-5">
                <h4>Simple Map:<strong> South America with Marker </strong></h4>
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
              </p>
              <div className="SouthAmerica text-center">
                <MapWithTooltip setTooltipContent={setContent} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} >
          <Card className="mg-b-20" id="map2">
            <Card.Body className=''>
              <div className="main-content-label mg-b-5">
                <h4> Simple Map: <strong>Europe with graticule </strong></h4>
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
              </p>
              <div className="Europe-Map text-center" >
                <EuropewithGraticule />
              </div>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mg-b-20" id="map6">
            <Card.Body className="">
              <div className="main-content-label mg-b-5">
                <h4> Vector Map: <strong>Germany</strong></h4>
              </div>
              <p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
              </p>
              <div className="Usa-Map text-center">
                <UsaMapwithAnnotation />
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>




    </Fragment>
  )
}
