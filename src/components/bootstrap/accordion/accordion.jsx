import React, { Fragment, useState } from 'react'
import { Card, Col, Row, Accordion, Collapse, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'



export default function Accordions () {
  const breadcrumbs = ["Bootstrap", "Accordions"];

  const [ show, setShow ] = useState(false);
  const [ show1, setShow1 ] = useState(false);
  const [ show2, setShow2 ] = useState(false);
  const [ show3, setShow3 ] = useState(false)


  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

      
            <Row>
              <Col sm={12} md={12} lg={12} xl={12}>
                <Card className='default-accordion'>
                  <Card.Header>
                    
                    <Card.Title>Default Accordion</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow(!show) }} />
                    
                  </Card.Header>
                  <Card.Body>
                    <Accordion   className="panel-group" id="accordion" role="tablist"
                      aria-multiselectable="true">
                      <Accordion.Item eventKey="0" className="panel panel-default ">
                        <Accordion.Header className="panel-heading " role="tab" id="headingOne1">
                          Collapsible Group Item #1
                        </Accordion.Header>
                        <Accordion.Body className="panel-body border-top-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia aute,
                          non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                          put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                          vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                          synth nesciunt you probably haven't heard of them accusamus
                          labore sustainable VHS.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="panel panel-default mt-2" eventKey="1">
                        <Accordion.Header className="panel-heading" role="tab" id="headingTwo2">
                          Collapsible Group Item #2
                        </Accordion.Header>
                        <Accordion.Body className="panel-body border-top-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia aute,
                          non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                          put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                          vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                          synth nesciunt you probably haven't heard of them accusamus
                          labore sustainable VHS.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className="panel panel-default mt-2" eventKey="2">
                        <Accordion.Header className="panel-heading" role="tab" id="heading3">
                        <Link href="##collapse3">  Collapsible Group Item #3</Link>
                        </Accordion.Header>
                        <Accordion.Body className="panel-body border-top-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia aute,
                          non cupidatat skateboard dolor brunch. Food truck quinoa
                          nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                          put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                          vice lomo.
                          Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                          synth nesciunt you probably haven't heard of them accusamus
                          labore sustainable VHS.
                        </Accordion.Body>
                     
                      </Accordion.Item>
                    </Accordion>
           

                    
                  </Card.Body>
                  <Collapse in={show}>
                    <pre>
										<code>
{`<Accordion defaultActiveKey={['0']} alwaysOpen className="panel-group" id="accordion" role="tablist"
  aria-multiselectable="true">
  <Accordion.Item eventKey="0" className="panel panel-default ">
    <Accordion.Header className="panel-heading " role="tab" id="headingOne1">
      Collapsible Group Item #1
    </Accordion.Header>
    <Accordion.Body className="panel-body border-top-0">
      Anim pariatur cliche reprehenderit, enim eiusmod high life
      accusamus terry richardson ad squid. 3 wolf moon officia aute,
      non cupidatat skateboard dolor brunch. Food truck quinoa
      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
      put a bird
      on it squid single-origin coffee nulla assumenda shoreditch et.
      Nihil anim keffiyeh helvetica, craft beer labore wes anderson
      cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
      vice lomo.
      Leggings occaecat craft beer farm-to-table, raw denim aesthetic
      synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`}
                    </code>
                    </pre>
                    </Collapse>
                </Card>
              </Col>
            
              <Col sm={12} md={12} lg={12} xl={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Accordion style 1</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
                  </Card.Header>
                  <Card.Body>
                    <Accordion className="accordion" id="accordionExample">
                      <Accordion.Item eventKey="0" className="accordion-item border-bottom-0">
                        <Accordion.Header className="accordion-header" id="headingOne">
                            Accordion Item #1
                        </Accordion.Header>
                          <Accordion.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accordion-item border-bottom-0">
                        <Accordion.Header className="accordion-header" id="headingTwo">
                        
                            Accordion Item #2
                         
                        </Accordion.Header>
                     
                          <Accordion.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                    
                      </Accordion.Item>
                      <Accordion.Item eventKey="2" className="accordion-item">
                        <Accordion.Header id="headingThree">
                      
                            Accordion Item #3
                       
                        </Accordion.Header>
                       
                          <Accordion.Body className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                       
                      </Accordion.Item>
                    </Accordion>

                 
                  </Card.Body>
                  <Collapse in={show1}>
                    <pre>
										<code>{`<Accordion className="accordion" id="accordionExample">
<Accordion.Item eventKey="0" className="accordion-item border-bottom-0">
    <Accordion.Header className="accordion-header" id="headingOne">
         Accordion Item #1
     </Accordion.Header>
      <Accordion.Body>
         Anim pariatur cliche reprehenderit, enim eiusmod high life
         accusamus terry richardson ad squid. 3 wolf moon officia aute,
         non cupidatat skateboard dolor brunch. Food truck quinoa
         nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
         put a bird
         on it squid single-origin coffee nulla assumenda shoreditch et.
         Nihil anim keffiyeh helvetica, craft beer labore wes anderson
         cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
         vice lomo.
         Leggings occaecat craft beer farm-to-table, raw denim aesthetic
         synth nesciunt you probably haven't heard of them accusamus
         labore sustainable VHS.
       </Accordion.Body>
</Accordion.Item>
</Accordion>`} </code>
                    </pre>
                    </Collapse>
                </Card>
              </Col>
             
            </Row>
          

            
            <Row>
              <Col sm={12} md={12} lg={12} xl={12}>
                <Card className='default-accordion'>
                  <Card.Header>
                    <Card.Title>Accordion With Icons</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
                  </Card.Header>
                  <Card.Body>
                    <Accordion defaultActiveKey={['0']} alwaysOpen className="panel-group" id="accordion01" role="tablist"
                      aria-multiselectable="true">
                      <Accordion.Item eventKey='0' className="panel panel-default">
                        <Accordion.Header className="panel-heading " role="tab" id="headingOne01">
                          <h4 className="panel-title">
                          
                              <i className="fe fe-plus-circle me-2 float-start"></i>
                              <span>Collapsible Group Item #1</span>
                            
                          </h4>
                        </Accordion.Header>
                        
                          <Accordion.Body className="panel-body border-top-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                      
                      </Accordion.Item>
                      <Accordion.Item eventKey='1' className="panel panel-default mt-2">
                        <Accordion.Header className="panel-heading" role="tab" id="headingTwo02">
                          <h4 className="panel-title">
                            
                              <i className="fe fe-plus-circle me-2 float-start"></i>
                              <span>Collapsible Group Item #2</span>
                           
                          </h4>
                        </Accordion.Header>
                       
                          <Accordion.Body className="panel-body border-top-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                        
                      </Accordion.Item>
                      <Accordion.Item eventKey='2' className="panel panel-default mt-2">
                        <Accordion.Header className="panel-heading" role="tab" id="heading03">
                          <h4 className="panel-title">
                            
                              <i className="fe fe-plus-circle me-2 float-start"></i>
                              <span>Collapsible Group Item #3</span>
                            
                          </h4>
                        </Accordion.Header>
                        
                          <Accordion.Body className="panel-body border-top-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                            put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                            vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                            synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                          </Accordion.Body>
                        
                      </Accordion.Item>
                    </Accordion>
                   
                   
                  </Card.Body>
                  <Collapse in={show2}>
                    <pre>
										<code>{`<Accordion defaultActiveKey={['0']} alwaysOpen className="panel-group" id="accordion01" role="tablist"
          aria-multiselectable="true">
          <Accordion.Item eventKey='0' className="panel panel-default">
 <Accordion.Header className="panel-heading " role="tab" id="headingOne01">
   <h4 className="panel-title">
 <i className="fe fe-plus-circle me-2 float-start"></i>
 <span>Collapsible Group Item #1</span>
   </h4>
 </Accordion.Header>
   <Accordion.Body className="panel-body border-top-0">
     Anim pariatur cliche reprehenderit, enim eiusmod high life
     accusamus terry richardson ad squid. 3 wolf moon officia aute,
     non cupidatat skateboard dolor brunch. Food truck quinoa
     nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
     put a bird
     on it squid single-origin coffee nulla assumenda shoreditch et.
     Nihil anim keffiyeh helvetica, craft beer labore wes anderson
     cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
     vice lomo.
     Leggings occaecat craft beer farm-to-table, raw denim aesthetic
     synth nesciunt you probably haven't heard of them accusamus
     labore sustainable VHS.
   </Accordion.Body>
    </Accordion.Item>
</Accordion>`}
                    </code>
                    </pre>
                    </Collapse>
                </Card>
              </Col>
            </Row>
           

           
            <Row>
              <Col lg={12}>
                <Card className='default-accordion accordion-style2'>
                  <Card.Header>
                    <Card.Title>Accordion style 2</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />

                  </Card.Header>
                  <Card.Body>
                    <Accordion className="panel-group1" id="accordion1">
                      <Accordion.Item eventKey='0' className="panel panel-default mb-4">
                        <Accordion.Header className="panel-heading1 br-7">
                          <h4>
                            <Link className="accordion-toggle collapsed" data-bs-toggle="collapse"
                              data-bs-parent="#accordion" href="#collapseFour"
                              aria-expanded="false" 
                         
                              >
                                Section 1
                                </Link>
                          </h4>
                        </Accordion.Header>
                       
                          <Accordion.Body className="panel-body">
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat
                              predefined chunks as necessary, making this the first true
                              generator on the Internet. It uses a dictionary of over 200
                              Latin words </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s, when an unknown
                              printer took a galley of type
                              and scrambled.Nor again is there anyone who loves or pursues
                              or desires to obtain pain of itself, because it is pain, but
                              because occasionally circumstances occur in which toil and
                              pain can procure
                              him some great pleasure. To take a trivial example, which of
                              us ever undertakes laborious physical exercise</p>
                          </Accordion.Body>
                      
                      </Accordion.Item>
                      <Accordion.Item eventKey='1' className="panel panel-default">
                        <Accordion.Header className="panel-heading1 br-7">
                          <h4>
                            <Link className="accordion-toggle collapsed" data-bs-toggle="collapse"
                              data-bs-parent="#accordion" href="#collapseFive"
                              aria-expanded="false" onClick={()=>Remove()}>
                                Section 2
                                </Link>
                          </h4>
                        </Accordion.Header>
                       
                          <Accordion.Body className="panel-body">
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat
                              predefined chunks as necessary, making this the first true
                              generator on the Internet. It uses a dictionary of over 200
                              Latin words </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s, when an unknown
                              printer took a galley of type
                              and scrambled.Nor again is there anyone who loves or pursues
                              or desires to obtain pain of itself, because it is pain, but
                              because occasionally circumstances occur in which toil and
                              pain can procure
                              him some great pleasure. To take a trivial example, which of
                              us ever undertakes laborious physical exercise</p>
                          </Accordion.Body>
                    
                      </Accordion.Item>
                    </Accordion>



                  </Card.Body>
                  <Collapse in={show3}>
                    <pre>
										<code>{`<Accordion defaultActiveKey={['0']} alwaysOpen className="panel-group1" id="accordion1">
<Accordion.Item eventKey='0' className="panel panel-default mb-4">
    <Accordion.Header className="panel-heading1 br-7">
      <h4 >
     <Link className="accordion-toggle collapsed" data-bs-toggle="collapse"
       data-bs-parent="#accordion" href="#collapseFour"
       aria-expanded="false">
   Section 1
    </Link>
      </h4>
    </Accordion.Header>
   <Accordion.Body className="panel-body">
     <p>All the Lorem Ipsum generators on the Internet tend to repeat
   predefined chunks as necessary, making this the first true
   generator on the Internet. It uses a dictionary of over 200
   Latin words </p>
      <p>Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's
   standard dummy text ever since the 1500s, when an unknown
   printer took a galley of type
   and scrambled.Nor again is there anyone who loves or pursues
   or desires to obtain pain of itself, because it is pain, but
   because occasionally circumstances occur in which toil and
   pain can procure
   him some great pleasure. To take a trivial example, which of
   us ever undertakes laborious physical exercise</p>
    </Accordion.Body>
</Accordion.Item>
</Accordion>`}
                    </code>
                    </pre>
                    </Collapse>
                </Card>
              </Col>
            </Row>
           

        

    </Fragment>
  )
}
