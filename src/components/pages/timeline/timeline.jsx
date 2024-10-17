import React, { Fragment } from 'react'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Timeline() {
  const breadcrumbs = ["Pages", "Timeline"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row className=" row-sm">
        <Col md={12} >
          <ul className="timelineleft">
            <li className="timeleft-label">
              <span className="bg-gradient-danger fs-10">01 Mar. 2019</span></li>
            <li>
              <i className="fe fe-mail bg-gradient-primary"></i>
              <div className="timelineleft-item">
                <span className="time"><i className="fa fa-clock-o text-danger"></i> 12:05</span>
                <h3 className="timelineleft-header"><Link to="#" className="fw-bold">Support Team</Link> <span
                  className="text-muted fs-13 mx-2">sent you an email</span></h3>
                <div className="timelineleft-body">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                  weebly ning heekya handango imeem plugg dopplr jibjab, movity
                  jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                  quora plaxo ideeli hulu weebly balihoo...
                </div>
                <div className="timelineleft-footer btn-list">
                  <Button variant='primary' className="btn  text-white btn-sm">Read more</Button>
                  <Button variant='secondary' className="btn text-white btn-sm ">Delete</Button>
                </div>
              </div>
            </li>
            <li>
              <i className="fe fe-user bg-gradient-secondary"></i>
              <div className="timelineleft-item">
                <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 mins
                  ago</span>
                <h3 className="timelineleft-header border-0 d-inline-flex"><Link to="#" className="fw-bold">Sarah Young</Link> <span
                  className="text-muted fs-13 mx-2">accepted your friend request</span></h3>
              </div>
            </li>
            <li>
              <i className="fe fe-message-circle bg-gradient-warning"></i>
              <div className="timelineleft-item">
                <span className="time"><i className="fa fa-clock-o text-danger"></i> 27 mins
                  ago</span>
                <h3 className="timelineleft-header"><Link to="#" className="fw-bold">Jay White</Link> <span
                  className="text-muted fs-13 mx-2">commented on your post</span></h3>
                <div className="timelineleft-body">
                  Take me to your leader!
                  Switzerland is small and neutral!
                  We are more like Germany, ambitious and misunderstood!
                </div>
                <div className="timelineleft-footer">
                  <a className="btn btn-info text-white btn-flat btn-sm">View comment</a>
                </div>
              </div>
            </li>
            <li className="timeleft-label">
              <span className="bg-gradient-success fs-10"> 25 Feb. 2019</span>
            </li>
            <li>
              <i className="fe fe-camera bg-gradient-orange"></i>
              <div className="timelineleft-item">
                <span className="time"><i className="fa fa-clock-o text-danger"></i> 2 days
                  ago</span>
                <h3 className="timelineleft-header"><Link to="#" className="fw-bold">Julian Horbet</Link><span
                  className="text-muted fs-13 mx-2">uploaded new photos</span></h3>
                <div className="timelineleft-body">
                  <Link to="#" className="margin mt-2 mb-2 br-7" >
                    <img src={imagesData('photo6')} alt="..."
                      className="ms-1 margin mt-2 mb-2 br-7" />
                  </Link>
                  <Link to="#" className="margin mt-2 mb-2 br-7" >
                    <img src={imagesData('photo10')} alt="..."
                      className="ms-1 margin mt-2 mb-2 br-7" />
                  </Link>
                  <Link to="#" className="margin mt-2 mb-2 br-7" >
                    <img src={imagesData('photo3')} alt="..."
                      className="ms-1 margin mt-2 mb-2 br-7" />
                  </Link>
                  <Link to="#" className="margin mt-2 mb-2 br-7" >
                    <img src={imagesData('photo4')} alt="..."
                      className="ms-1 margin mt-2 mb-2 br-7" />
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <i className="fe fe-map-pin bg-gradient-pink"></i>
              <div className="timelineleft-item">
                <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 days
                  ago</span>
                <h3 className="timelineleft-header"><Link to="#" className="fw-bold">Mr. Alison Robert</Link><span
                  className="text-muted fs-13 mx-2">
                  shared a Location</span></h3>
                <div className="timelineleft-body">
                  <div className="row clearfix">
                    <div className="col-lg-12">
                      <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" className="border-0 w-100" ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timelineleft-footer">
                  <Button variant='info' href="#" className="btn btn-sm text-white">See comments</Button>
                </div>
              </div>
            </li>
          </ul>
        </Col>

      </Row>

    </Fragment>
  )
}
