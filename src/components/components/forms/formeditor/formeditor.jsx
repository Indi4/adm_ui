import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import SunEditor from 'suneditor-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function FormEditor () {
  const breadcrumbs = ["Components", "Forms", "Form Editor"];
  const [value1, setValue1] = useState('')
  // sun editor
  const htmlWithTableImages = '<center>  </center>'
  // Editor
  const [value, setValue] = React.useState(htmlWithTableImages)

  // Modal Editor
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Fragment>


          <Pageheader items={breadcrumbs} />
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Sun Editor</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <SunEditor />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

        
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Sun Editor With Value</Card.Title>
                  </Card.Header>
                  <Card.Body>

                    <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    [
                      'bold',
                      'underline',
                      'italic',
                      'strike',
                      'subscript',
                      'superscript'
                    ],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
              <hr />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
           

           
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Quill Editor
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>

                    <div className="ql-wrapper ql-wrapper-demo">
                      <div>  
                        <ReactQuill theme="snow" value={value1} onChange={setValue1} height={330}/>
                      </div>
                      <div id="quillEditor">
                        <p><strong>Quill</strong> is a free, open source <Link
                          to="https://github.com/quilljs/quill/">Quill Editor</Link> built
                          for the modern web. With its <Link
                            to="https://quilljs.com/docs/modules/">modular
                            architecture</Link> and expressive API, it is completely
                          customizable to fit any need.</p><br />
                        <p>The icons use here as a replacement to default svg icons are from <Link
                          to="https://icons8.com/line-awesome">Line Awesome Icons</Link>.
                        </p>
                      </div>
                      

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
         

            
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Form Editor in Modal
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center p-4 bg-light border">
                      <Link className="btn btn-primary" data-bs-target="#modalQuill" onClick={handleShow}
                        data-bs-toggle="modal" to="#">View Live Demo</Link>
                         <Modal show={show} onHide={handleClose} size="lg" variant='primary' aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header className='pd-20'>
                    <Modal.Title as='h6'>Create New Document</Modal.Title>
                    <Link as="span" href="#" className="text-dark d-flex ms-auto my-auto" onClick={() => { handleClose('Basic') }}><i className='fe fe-x ms-auto'></i></Link>
                  </Modal.Header>
                  <Modal.Body className="">
                    <SunEditor />
                  </Modal.Body>
                  <Modal.Footer className="pd-20">
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                    </div>
                   
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            

          
         

    </Fragment>
  )
}
