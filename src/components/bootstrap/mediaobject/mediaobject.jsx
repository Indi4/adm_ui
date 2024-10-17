import React, { Fragment } from 'react'
import { Card, Row } from 'react-bootstrap'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function MediaObject() {
  const breadcrumbs = ["Bootstrap", "Mediaobject"];
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />

      <Row>
        <div className="col-12">
          <Card className=" Relatedpost nested-media">
            <Card.Header>
              <Card.Title>Default Media Object</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="media media-lg mt-0">
                <img className="me-3 br-7" src={imagesData('photo50')}
                  alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mb-1 fw-semibold">Media heading</h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>


      <Row>
        <div className="col-12">
          <Card className="card Relatedpost nested-media overflow-hidden">
            <Card.Header>
              <Card.Title>Nesting Media Object</Card.Title>
            </Card.Header>
            <Card.Body className=" overflow-hidden">
              <div className="media media-lg mt-0">
                <img className="me-3 br-7" src={imagesData('photo51')}
                  alt="Generic placeholder image" />
                <div className="media-body overflow-hidden">
                  <h5 className="mb-1 fw-semibold">Media heading</h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  <div className="media media-lg mt-3">
                    <img className="me-3 br-7" src={imagesData('photo53')}
                      alt="Generic placeholder image" />
                    <div className="media-body overflow-hidden">
                      <h5 className="mb-1 fw-semibold">Media heading</h5>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae
                      vitae
                      dicta sunt explicabo.
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>


      <Row>
        <div className="col-12">
          <Card className=" Relatedpost nested-media">
            <Card.Header>
              <Card.Title>List Media Object</Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li className="media media-lg mt-0">
                  <img className="me-3 br-7" src={imagesData('photo52')}
                    alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mb-1 fw-semibold">Media heading 01</h5>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                  </div>
                </li>
                <li className="media media-lg my-4">
                  <img className="me-3 br-7" src={imagesData('photo54')}
                    alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mb-1 fw-semibold">Media heading 02</h5>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                  </div>
                </li>
                <li className="media media-lg">
                  <img className="me-3 br-7" src={imagesData('photo50')}
                    alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mb-1 fw-semibold">Media heading 03</h5>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Row>



      <Row>
        <div className="col-12">
          <Card className="card Relatedpost nested-media">
            <Card.Header>
              <Card.Title>Alignments Media Object</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="media media-lg mt-0">
                <img className="align-self-start me-3 br-7"
                  src={imagesData('photo51')}
                  alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mb-1 fw-semibold">Top-aligned media</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but
                    the
                    majority have suffered alteration in some form, by injected humour,
                    or
                    randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit repudiandae doloremque cupiditate reprehenderit asperiores pariatur non fuga animi at.
                  </p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed hic ipsam, qui reprehenderit repellat expedita omnis aliquam maiores doloribus sapiente.
                  </p>
                </div>
              </div>
              <div className="media media-lg">
                <img className="align-self-center me-3 br-7"
                  src={imagesData('photo53')}
                  alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mb-1 fw-semibold">Center-aligned media</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but
                    the
                    majority have suffered alteration in some form, by injected humour,
                    or
                    randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim id maiores voluptatum facilis maxime impedit et sit, repudiandae incidunt.
                  </p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, repellat voluptate quam debitis ducimus dolore corrupti praesentium aliquid harum earum?
                  </p>
                </div>
              </div>
              <div className="media media-lg">
                <img className="align-self-end me-3 br-7"
                  src={imagesData('photo54')}
                  alt="Generic placeholder image" />
                <div className="media-body">
                  <h5 className="mb-1 fw-semibold">Bottom-aligned media</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but
                    the
                    majority have suffered alteration in some form, by injected humour,
                    or
                    randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugit aut excepturi, eius eveniet animi labore magnam aliquam similique laborum!
                  </p>
                  <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae
                    vitae
                    dicta sunt explicabo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ex. A at quidem natus optio quasi ducimus, aliquid perferendis nobis.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>



      <Row>
        <div className="col-12">
          <Card className=" Relatedpost nested-media ">
            <Card.Header>
              <Card.Title>Order Media Object</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="media media-lg mt-0">
                <div className="media-body mt-0">
                  <h5 className="mt-0 mb-4 fw-semibold">Media object</h5>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
                <img className="ms-2 mt-3 mb-3 br-7" src={imagesData('photo54')}
                  alt="Generic placeholder image" />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>



    </Fragment>
  )
}
