import React, { Fragment, useState } from 'react'
import { Card, Carousel, Col, Collapse, Form, Row } from 'react-bootstrap'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Carouseldata1, Carouseldata2, Carouseldata3, Carouseldata4, Carouseldata5, Carouseldata6,  Carouseldata8,  } from './data/carouseldata'

export default function Carousels () {
  const breadcrumbs = ["Bootstrap", "Carousel"];
  const [ show1, setShow1 ] = useState(false);
  const [ show2, setShow2 ] = useState(false);
  const [ show3, setShow3 ] = useState(false);
  const [ show4, setShow4 ] = useState(false);
  const [ show5, setShow5 ] = useState(false);
  const [ show6, setShow6 ] = useState(false);
  const [ show7, setShow7 ] = useState(false);
  const [ show8, setShow8 ] = useState(false);
  const [ show9, setShow9 ] = useState(false);
  const [ show10, setShow10 ] = useState(false);
  const [ show11, setShow11 ] = useState(false);
  const [index, setIndex] = useState(0)


  return (
    <Fragment>
 <Pageheader items={breadcrumbs} />

          
            <Row>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
                  </Card.Header>
                  <Card.Body>

                   
                    <Carouseldata1/>
                  </Card.Body>
                  <Collapse in={show1}>
                    <pre>
										<code>
                      
                      {` export function Carousel () {
  return (
    <>
<Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
<img className="d-block w-100" alt="" src={imagesData('photo19')} />
<img className="d-block w-100" alt="" src={imagesData('photo20')} />
<img className="d-block w-100" alt="" src={imagesData('photo21')} />
<img className="d-block w-100" alt="" src={imagesData('photo22')} />
<img className="d-block w-100" alt="" src={imagesData('photo23')} />
</Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with indicators</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
                  </Card.Header>
                  <Card.Body>
                   

                    <Carouseldata2/>
                  </Card.Body>
                  <Collapse in={show2}>
                    <pre>
										<code>
                      
                      {` export function Carouselwithindicator () {
  return (
    <>
    <Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
    <img className="d-block w-100" alt="" src={imagesData('photo24')} />
    <img className="d-block w-100" alt="" src={imagesData('photo25')} />
    <img className="d-block w-100" alt="" src={imagesData('photo1')} />
    <img className="d-block w-100" alt="" src={imagesData('photo2')} />
    <img className="d-block w-100" alt="" src={imagesData('photo3')} />
    </Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
             
              <Col md={12} xl={6} xxl={4} >
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with controls</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
                  </Card.Header>
                  <Card.Body>
                    <Carousel id="carouselExampleIndicators" className="carousel slide" >
                    <Carousel.Item className="carousel-item active">
                       <img className="d-block w-100" alt=""
                           src={imagesData('photo4')} data-holder-rendered="true"/>
                     </Carousel.Item>
                     <Carousel.Item className="carousel-item">
                       <img className="d-block w-100" alt=""
                           src={imagesData('photo5')} data-holder-rendered="true"/>
                     </Carousel.Item>
                     <Carousel.Item className="carousel-item">
                       <img className="d-block w-100" alt=""
                           src={imagesData('photo6')} data-holder-rendered="true"/>
                     </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                  <Collapse in={show3}>
                    <pre>
										<code>
                      
                      {`  <Carousel id="carouselExampleIndicators" className="carousel slide">
      <Carousel.Item className="carousel-item active">
         <img className="d-block w-100" alt=""
             src={imagesData('photo4')} data-holder-rendered="true"/>
       </Carousel.Item>
       <Carousel.Item className="carousel-item">
         <img className="d-block w-100" alt=""
             src={imagesData('photo5')} data-holder-rendered="true"/>
       </Carousel.Item>
       <Carousel.Item className="carousel-item">
         <img className="d-block w-100" alt=""
             src={imagesData('photo6')} data-holder-rendered="true"/>
       </Carousel.Item>
      </Carousel>`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
           
              <Col md={12} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with captions</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
                  </Card.Header>
                  <Card.Body>
                    <Carousel id="carouselExampleIndicators" className="carousel slide" >
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo9')} data-holder-rendered="true" />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo10')} data-holder-rendered="true" />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo11')} data-holder-rendered="true" />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                  <Collapse in={show4}>
                    <pre>
										<code>
                      
                      {` <Carousel id="carouselExampleIndicators" className="carousel slide" >
                 <Carousel.Item>
                   <img className="d-block w-100" alt=""
        src={imagesData('photo9')} data-holder-rendered="true" />
                   <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                   </Carousel.Caption></Carousel.Item>
                 <Carousel.Item><img className="d-block w-100" alt=""
        src={imagesData('photo10')} data-holder-rendered="true" />
          <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </Carousel.Caption></Carousel.Item>
                 <Carousel.Item><img className="d-block w-100" alt=""
        src={imagesData('photo11')} data-holder-rendered="true" />
         <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> </Carousel.Caption>
                 </Carousel.Item>
               </Carousel>`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with top controls</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
                  </Card.Header>
                  <Card.Body >

                    <Carouseldata3/>
                  </Card.Body>
                  <Collapse in={show5}>
                    <pre>
										<code>
                      
                      {` export function Carouselwithtopcontrols () {
  return (
    <>
    <Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
    <img className="d-block w-100" alt="" src={imagesData('photo14')} />
    <img className="d-block w-100" alt="" src={imagesData('photo15')} />
    <img className="d-block w-100" alt="" src={imagesData('photo16')} />
    <img className="d-block w-100" alt="" src={imagesData('photo17')} />
    <img className="d-block w-100" alt="" src={imagesData('photo18')} />
    </Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with top-right controls</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
                  </Card.Header>
                  <Card.Body>
 
                    <Carouseldata4/>
                  </Card.Body>
                  <Collapse in={show6}>
                    <pre>
										<code>
                      
                      {` export function Carouselwithtop-rightcontrols () {
  return (
    <>
    <Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
    <img className="d-block w-100" alt="" src={imagesData('photo19')} />
   <img className="d-block w-100" alt="" src={imagesData('photo20')} />
   <img className="d-block w-100" alt="" src={imagesData('photo21')} />
   <img className="d-block w-100" alt="" src={imagesData('photo22')} />
   <img className="d-block w-100" alt="" src={imagesData('photo23')} />
    </Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
            </Row>
          

           
            <Row>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with top-left controls</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
                  </Card.Header>
                  <Card.Body>

                    <Carouseldata5/>
                  </Card.Body>
                  <Collapse in={show7}>
                    <pre>
										<code>
                      
                      {` export function Carouselwithtop-rightcontrols () {
  return (
    <>
    <Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
      <img className="d-block w-100" alt="" src={imagesData('photo24')} />
      <img className="d-block w-100" alt="" src={imagesData('photo25')} />
      <img className="d-block w-100" alt="" src={imagesData('photo1')} />
      <img className="d-block w-100" alt="" src={imagesData('photo2')} />
      <img className="d-block w-100" alt="" src={imagesData('photo3')} />
     </Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
              <Col md={6} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with bottom-right controls</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow8(!show8) }} />
                  </Card.Header>
                  <Card.Body>
 
                    <Carouseldata6/>
                  </Card.Body>
                  <Collapse in={show8}>
                    <pre>
										<code>
                      
                      {` export function Carouselwithtop-rightcontrols () {
  return (
    <>
    <Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true}>
    <img className="d-block w-100" alt="" src={imagesData('photo4')} />
    <img className="d-block w-100" alt="" src={imagesData('photo5')} />
    <img className="d-block w-100" alt="" src={imagesData('photo6')} />
    <img className="d-block w-100" alt="" src={imagesData('photo7')} />
    <img className="d-block w-100" alt="" src={imagesData('photo8')} />
    </Carousel>
    </>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
              <Col md={12} xl={6} xxl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with Crossfade</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow9(!show9) }} />
                  </Card.Header>
                  <Card.Body>

                    <Carouseldata8/>
                  </Card.Body>
                  <Collapse in={show9}>
                    <pre>
										<code>
                      
                      {` export function Carouseldata8 () {
  return (
    <Swiper navigation={true} effect={'fade'} 
    modules={[EffectFade, Navigation, Pagination]}
    pagination={{
      clickable: true
    }}
        slidesPerView={3}
    >
 <SwiperSlide>
  <img className="d-block w-100" alt="" src={imagesData('photo4')} />
     </SwiperSlide>
   <SwiperSlide><img className="d-block w-100" alt="" 
    src={imagesData('photo5')} /></SwiperSlide>
  <SwiperSlide><img className="d-block w-100" alt="" 
    src={imagesData('photo7')} /></SwiperSlide>
    </Swiper>
  )
}`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
             
              <Col md={12} xl={6} xxl={4} >
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with GradientBackground  caption</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow10(!show10) }} />
                  </Card.Header>
                  <Card.Body>

                    <Carousel>
                      <Carousel.Item>
                      <img className="d-block w-100" alt="" src={imagesData('photo46')} data-holder-rendered="true"/>
													<Carousel.Caption className="carousel-caption">
														<h3 className="text-white">Slide label</h3>
														<p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures.</p>
													</Carousel.Caption>
                       
                      </Carousel.Item>
                      <Carousel.Item>
                      <img className="d-block w-100" alt="" src={imagesData('photo47')} data-holder-rendered="true"/>
													<div className="carousel-item-background d-none d-md-block"></div>
													<Carousel.Caption className="carousel-caption d-none d-md-block">
														<h3 className="text-white">Slide label</h3>
														<p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
													</Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img className="d-block w-100" alt="" src={imagesData('photo48')} data-holder-rendered="true"/>
													<div className="carousel-item-background d-none d-md-block"></div>
													<Carousel.Caption className="carousel-caption d-none d-md-block">
														<h3 className="text-white">Slide label</h3>
														<p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
													</Carousel.Caption>
                
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                  <Collapse in={show10}>
                    <pre>
										<code>
                      
                      {` <Carousel>
                      <Carousel.Item>
          <img className="d-block w-100" alt="" src={imagesData('photo46')} 
          data-holder-rendered="true"/>
			<Carousel.Caption className="carousel-caption">
			<h3 className="text-white">Slide label</h3>
			<p>The wise man therefore always holds in these matters to 
    this principle of selection: he rejects pleasures.</p>
				</Carousel.Caption></Carousel.Item>
          <Carousel.Item>
      <img className="d-block w-100" alt="" src={imagesData('photo47')}
      data-holder-rendered="true"/>
	<div className="carousel-item-background d-none d-md-block"></div>
	<Carousel.Caption className="carousel-caption d-none d-md-block">
		<h3 className="text-white">Slide label</h3>
		<p>The wise man therefore always holds in these matters to 
    this principle of selection he rejects pleasures
    .</p></Carousel.Caption></Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" alt="" src={imagesData('photo48')} 
          data-holder-rendered="true"/>
	<div className="carousel-item-background d-none d-md-block"></div>
     	<Carousel.Caption className="carousel-caption d-none d-md-block">
     <h3 className="text-white">Slide label</h3>
    <p>The wise man therefore always holds in these matters to 
    this principle of selection he rejects pleasures.</p>
			</Carousel.Caption> </Carousel.Item>
                    </Carousel>`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
          
              <Col md={12} xl={6} xxl={4} >
                <Card>
                  <Card.Header>
                    <Card.Title>Carousel with Background color captions</Card.Title>
                    <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow11(!show11) }} />
                  </Card.Header>
                  <Card.Body>
                    <Carousel id="carouselExampleIndicators" className="carousel slide" >
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo55')} data-holder-rendered="true" />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Some representative placeholder content for the second slide.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo39')} data-holder-rendered="true" />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Some representative placeholder content for the second slide.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" alt=""
                          src={imagesData('photo49')} data-holder-rendered="true" />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                          Some representative placeholder content for the second slide.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                  <Collapse in={show11}>
                    <pre>
										<code>
                      
   {`   <Carousel id="carouselExampleIndicators" className="carousel slide" >
   <Carousel.Item>
     <img className="d-block w-100" alt=""
       src={imagesData('photo55')} data-holder-rendered="true" />
     <Carousel.Caption>
       <h3>First slide label</h3>
       <p>Some representative placeholder content for the second slide.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img className="d-block w-100" alt=""
       src={imagesData('photo39')} data-holder-rendered="true" />

     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Some representative placeholder content for the second slide.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img className="d-block w-100" alt=""
       src={imagesData('photo49')} data-holder-rendered="true" />

     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>
       Some representative placeholder content for the second slide.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>`}
                        </code>
                        </pre>
                        </Collapse>
                </Card>
              </Col>
            </Row>
           
        

    </Fragment>
  )
}
