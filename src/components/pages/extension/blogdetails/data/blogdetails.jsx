import React, { Component, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { Col, Row } from 'react-bootstrap'

import media13 from '../../../../../assets/images/media/13.jpg'
import media14 from '../../../../../assets/images/media/14.jpg'
import media15 from '../../../../../assets/images/media/15.jpg'
import media16 from '../../../../../assets/images/media/16.jpg'
import media17 from '../../../../../assets/images/media/17.jpg'
import media18 from '../../../../../assets/images/media/18.jpg'
import media19 from '../../../../../assets/images/media/19.jpg'


// gallery

export const Gallery1 = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Row className="masonry">
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media13} alt='media1' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media14} alt='media2' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media16} alt='media3' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media15} alt='media4' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media18} alt='media5' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media14} alt='media6' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media16} alt='media7' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media17} alt='media8' onClick={() => setOpen(true)} />
        </Col>
        <Col sm={6} lg={4} className="mb-5 border-bottom-0">
          <img src={media19} alt='media9' onClick={() => setOpen(true)} />
        </Col>

      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
      }}
        slides={[{ src: media13 }, { src: media14 }, { src: media16 }, { src: media15 }, { src: media18 }, { src: media14 }, { src: media16 }, { src: media17 }, { src: media19 }

        ]}
        />
    </div>
  )
}
