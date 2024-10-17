import React, { Component, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Carousel from 'react-elastic-carousel'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { Col, Row } from 'react-bootstrap'


import media1 from '../../../../../assets/images/media/1.jpg'
import media2 from '../../../../../assets/images/media/2.jpg'
import media4 from '../../../../../assets/images/media/4.jpg'
import media5 from '../../../../../assets/images/media/5.jpg'
import media6 from '../../../../../assets/images/media/6.jpg'
import media7 from '../../../../../assets/images/media/7.jpg'
import media8 from '../../../../../assets/images/media/8.jpg'
import media10 from '../../../../../assets/images/media/10.jpg'
import media11 from '../../../../../assets/images/media/11.jpg'
import { imagesData } from '../../../../../common/commomimages/imagedata'


export const Recentimages = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media1} alt='media1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media4} alt='media4' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media5} alt='media5' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media6} alt='media6' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media7} alt='media7' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media8} alt='media8' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media11} alt='media10' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media10} alt='media11' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0 col-12">
          <img src={media2} alt='media2' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
      }}
        slides={[{ src: media1 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }, { src: media11 }, { src: media10 }, { src: media2 }

        ]}
        />
    </div>
  )
}

export function Carouseldata () {
  return (
    <>
<Carousel itemsToShow={3} itemPadding={[10, 10]} pagination={false} enableAutoPlay={true} disableArrowsOnEnd={false} >
                           <img src={imagesData('photo44')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo41')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo42')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo43')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo44')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo45')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo41')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo43')}
                            className="w-100" alt="img" />
                            <img src={imagesData('photo45')}
                            className="w-100" alt="img" />
</Carousel>
    </>
  )
}

