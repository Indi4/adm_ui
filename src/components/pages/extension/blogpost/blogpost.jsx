import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import SunEditor from 'suneditor-react'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'

const Options = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Food', label: 'Food' },
  { value: 'Fashion', label: 'Fashion' }
]
export default function Blogpost() {
  const breadcrumbs = ["Pages", "Extension", "Blog Post"];
  // sun editor
  const htmlWithTableImages = '<center>  </center>'
  const [files, setFiles] = useState([])
  const [selected2, setSelected2] = useState([])

  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: 'free'
  })
  
  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />
             

     
      <Row>
        <Col xl={8}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Post</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="row mb-4">
                <Form.Label className="col-md-3 form-label">Post Title :</Form.Label>
                <div className="">
                  <Form.Control type="text" className="form-control" defaultValue="Typing....." />
                </div>
              </div>
            
             <div className="row mb-4">
                <label className="col-md-3 form-label">Categories :</label>

                <div className="">

                  <Select classNamePrefix="Select2" options={Options} className="multi-select" 
                    defaultValue={Options[0]} /> </div>
              </div>


              <Row>
                <Form.Label className="col-md-3 form-label mb-4">Post Description :</Form.Label>
                <div>

                  <SunEditor />

                </div>
              </Row>


              <Form.Group className="form-group mb-0 mt-4">
                <Form.Label className="col-md-3 form-label mb-4">File Upload :</Form.Label>

                <UploadButton uploader={uploader}
                  options={{ multi: true }}
                  onComplete={files => console.log(files)}>
                  {({ onClick }) =>
                    <Form.Control className='file_input text-center' onClick={onClick} placeholder='click here and upload attachment' />
                  }
                </UploadButton>
              </Form.Group>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button href="#" variant="primary" className="btn btn-primary me-1">Post</Button>
              <Button href="#" variant="light" className="btn btn-light float-end">Discard</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Recent Posts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div className="d-flex overflow-visible">
                  <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-recent-post cover-image">
                    <img src={imagesData('photo9')} className="br-7" alt="image" />
                  </Link>
                  <div className="ps-3 flex-column">
                    <span className="badge bg-danger me-1 mb-1 mt-1">Lifestyle</span>
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>Generator on the Internet..</Link></h6>
                    <div className="text-muted-dark">Excepteur sint occaecat cupidatat non
                      proident,
                      accusantium sunt in culpa qui officia deserunt mollit anim id
                      est
                      laborum....</div>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-recent-post cover-image">
                    <img src={imagesData('photo1')} className="br-7" alt="image" />
                  </Link>
                  <div className="ps-3 flex-column">
                    <span className="badge bg-primary me-1 mb-1 mt-1">Business</span>
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h6>
                    <div className="text-muted-dark">Excepteur sint occaecat cupidatat non
                      proident,
                      accusantium sunt in culpa qui officia deserunt mollit anim id
                      est
                      laborum....</div>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-recent-post cover-image">
                    <img src={imagesData('photo10')} className="br-7" alt="image" />
                  </Link>
                  <div className="ps-3 flex-column">
                    <span className="badge bg-secondary me-1 mb-1 mt-1">Travel</span>
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>Generator on the Internet..</Link></h6>
                    <div className="text-muted-dark">Excepteur sint occaecat cupidatat non
                      proident,
                      accusantium sunt in culpa qui officia deserunt mollit anim id
                      est
                      laborum....</div>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-recent-post cover-image">
                    <img src={imagesData('photo4')} className="br-7" alt="image" />
                  </Link>
                  <div className="ps-3 flex-column">
                    <span className="badge bg-success me-1 mb-1 mt-1">Meeting</span>
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>Voluptatem quia voluptas...</Link></h6>
                    <div className="text-muted-dark">Excepteur sint occaecat cupidatat non
                      proident,
                      accusantium sunt in culpa qui officia deserunt mollit anim id
                      est
                      laborum....</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Professional Blog Writers</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div
                  className="d-flex justify-content-center align-content-center overflow-visible">
                  <img className="avatar br-7 avatar-xl me-3"
                    src={imagesData('female20')} alt="avatar-img" />
                  <div className="media-body valign-middle">
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/profile`}>John Paige</Link></h6>
                    <p className="text-muted-dark mb-0">There are many Lorem ipsum dolor sit
                      amet.variations of passages of
                      Lorem Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <img className="avatar br-7 avatar-xl me-3"
                    src={imagesData('male30')} alt="avatar-img" />
                  <div className="media-body valign-middle">
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/profile`}>Peter Hill</Link></h6>
                    <p className="text-muted-dark mb-0">There are many Lorem ipsum dolor sit amet
                      consectetur.variations of passages of
                      Lorem Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <img className="avatar br-7 avatar-xl me-3"
                    src={imagesData('male24')} alt="avatar-img" />
                  <div className="media-body valign-middle">
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/profile`}>Irene Harris</Link></h6>
                    <p className="text-muted-dark mb-0">There are many Lorem ipsum dolor, sit
                      amet
                      consectetur adipisicing.variations of passages of
                      Lorem Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-5">
                  <img className="avatar br-7 avatar-xl me-3"
                    src={imagesData('male33')} alt="avatar-img" />
                  <div className="media-body valign-middle">
                    <h6 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/profile`}>Harry Fisher</Link></h6>
                    <p className="text-muted-dark mb-0">There are many Lorem ipsum dolor sit amet
                      consectetur elit. Saepe.variations of passages of
                      Lorem Ipsum available ...</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
