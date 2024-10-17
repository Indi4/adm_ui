import React, { Fragment } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { imagesData } from '../../../common/commomimages/imagedata'
import { imagesData } from '../../../../common/commomimages/imagedata'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Defaultfile, Imagetag, Lightfile, Mediumimagedata, Outlinefile, Outlineroundedfile, Roundedfile, Roundedlightfile, Sizes, Smallimagedata } from './data/attachmentsdata'

export default function FileAttachments () {
  const breadcrumbs = ["Components", "Filemanager", "File Attachments"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

         
            <Row className="sidemenu-height">
              <Col lg={6}>
                <Card className="card custom-card">
                  <Card.Header>
                    <Card.Title>File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Defaultfile.map((idx, at1) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at1}
                        aria-label="Basic example">
                        <Button variant={idx.color} type="button"><i
                          className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} type="button"
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close} </span>
                        </Button>
                      </div>
                      ))}  
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Roundedfile.map((idx, at2) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at2}
                        aria-label="Basic example">
                        <Button variant={idx.color} type="button"
                          className=" btn-pill attachment-pil"><i
                            className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} type="button"
                          className=" btn-pill attachment-pill"
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close} </span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Outline File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Outlinefile.map((idx, at3) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at3}
                        aria-label="Basic example">
                        <Button variant={idx.color} type="button" ><i
                          className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} type="button"

                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close} </span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded Outline File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Outlineroundedfile.map((idx, at4) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at4}
                        aria-label="Basic example">
                        <Button variant={idx.color} type="button"
                          className="btn-pill attachment-pill"><i
                            className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} type="button"
                          className="btn-pill attachment-pill"
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close}</span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Light File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Lightfile.map((idx, at5) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at5}
                        aria-label="Basic example">
                        <Button type="button" variant={idx.color}><i className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color}
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close}</span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded Light File Attachments</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Roundedlightfile.map((idx, at6) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at6}
                        aria-label="Basic example">
                        <Button text="primary" type="button" variant={idx.color}
                          className="btn-pill attachment-pill"><i
                            className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button text="primary" type="button" variant={idx.color}
                          className="btn-pill attachment-pill"
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close}</span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>File Attachment Sizes</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Sizes.map((idx, s1) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={s1}
                        aria-label="Basic example">
                        <Button variant={idx.color} text="white" type="button" size={idx.size}><i
                          className={`mdi mdi-${idx.icon}  me-2`}></i>{idx.title}</Button>
                        <Button variant={idx.color} size={idx.size} type="button"
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close}</span>
                        </Button>
                      </div>
                      ))}


                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Defaultfile.map((idx, at8) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at8}
                        aria-label="Basic example">
                        <Button href="#" variant={idx.color}><i
                          className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button href="#" variant={idx.color}
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close} </span>
                        </Button>
                      </div>
                      ))}
                     
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Roundedfile.map((idx, at9) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at9}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"
                          className="btn-pill attachment-pill"><i
                            className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} href="#"
                          className="btn-pill attachment-pill"
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close} </span>
                        </Button>
                      </div>
                      ))}
   
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Outline File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Outlinefile.map((idx, at10) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at10}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"><i
                            className="mdi mdi-file-image  me-1"></i>{idx.title}</Button>
                        <Button variant={idx.color} href="#"
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close}</span>
                        </Button>
                      </div>
                      ))}

                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded Outline File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Outlineroundedfile.map((idx, at11) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at11}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"
                          className="btn btn-pill attachment-pill "><i
                            className={`me-1 mdi mdi-${idx.icon}`}></i>{idx.title}</Button>
                        <Button variant={idx.color} href="#"
                          className="btn btn-pill attachment-pill "
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close} </span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Light File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Lightfile.map((idx, at12) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at12}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"
                          className="btn "><i
                            className={`mdi mdi-${idx.icon}  me-1`}></i>{idx.title}</Button>
                        <Button variant={idx.color} href="#"
                          className={`btn  text-${idx.color}`}
                          aria-label="Close">
                          <span aria-hidden="true"> {idx.close} </span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Rounded Light File Attachments With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                      {Roundedlightfile.map((idx, at13) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={at13}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"
                          className="btn-pill attachment-pill"><i
                            className={`mdi mdi-${idx.icon}  me-1`}></i>{idx.title}</Button>
                        <Button variant={idx.color} text="primary" href="#"
                          className="btn-pill attachment-pill "
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close}</span>
                        </Button>
                      </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Attachment Sizes With Anchor Link</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="tags">
                    {Sizes.map((idx, s2) => (
                      <div className="btn-group tag-attachments m-2" role="group" key={s2}
                        aria-label="Basic example">
                        <Button variant={idx.color} href="#"
                          className="btn btn-sm  text-white"><i
                            className={`mdi mdi-${idx.icon}  me-2`}></i>{idx.title}</Button>
                        <Button variant={idx.color} href="#"
                          className="btn btn-sm "
                          aria-label="Close">
                          <span aria-hidden="true">{idx.close}</span>
                        </Button>
                      </div>
                    ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              {Imagetag.map((idx, ig1) => (
              <Col xl={3} lg={6} sm={12} key={ig1}>
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Image Attachment Tags</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="h-100 attached-file-container">
                      <div className="attached-file-image">
                        <Link to="#">
                          <img className="br-7 wp-100" src={idx.src}
                            alt="attached-file-image" /><span
                              className="image-pic">{idx.title}</span>
                        </Link>
                        <ul className="icons">
                          <li className="me-1">
                            <Button type="button" className="btn btn-icon  btn-primary">
                              <i className={`fe fe-${idx.icon1}`}></i></Button></li>
                          <li className="me-1">
                            <Button type="button" className="btn btn-icon  btn-primary">
                              <i className={`fe fe-${idx.icon2}`}></i></Button></li>
                          <li className="me-1">
                            <Button type="button" className="btn btn-icon  btn-primary">
                              <i className={`fe fe-${idx.icon3}`}></i></Button></li>
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              ))}

            </Row>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Image File_Attachment Small Size</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap pb-3">
                      {Smallimagedata.map((idx, ig2) => (
                      <div className="file-image-1" key={ig2}>
                        <div className="product-image">
                          <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}>
                            <img src={idx.src} className="rounded-3" alt="" />
                          </Link>
                          <ul className="icons">
                            <li><Link to="#" className={`bg-${idx.color1}`}><i className={`fe fe-${idx.icon1}`}></i></Link></li>
                            <li><Link to="#" className={`bg-${idx.color2}`}><i className={`fe fe-${idx.icon2}`}></i></Link></li>
                            <li><Link to="#" className={`bg-${idx.color3}`}><i className={`fe fe-${idx.icon3}`}></i></Link></li>
                          </ul>
                        </div>
                        <span className="file-name-1">{idx.title}</span>
                      </div>
                      ))}

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Image File_Attachment Medium Size</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap pb-3">
                        {Mediumimagedata.map((idx, ig3) => (
                      <div className="file-image-1 file-image-md" key={ig3}>
                        <div className="product-image">
                          <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}>
                            <img src={idx.src} className="rounded-3" alt="" />
                          </Link>
                          <ul className="icons">
                            <li><Link to="#" className={`bg-${idx.color1}`}><i className={`fe fe-${idx.icon1}`}></i></Link></li>
                            <li><Link to="#" className={`bg-${idx.color2}`}><i className={`fe fe-${idx.icon2}`}></i></Link></li>
                            <li><Link to="#" className={`bg-${idx.color3}`}><i className={`fe fe-${idx.icon3}`}></i></Link></li>
                          </ul>
                        </div>
                        <span className="file-name-1">{idx.title}</span>
                      </div>
                        ))}

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          
       
    </Fragment>
  )
}
