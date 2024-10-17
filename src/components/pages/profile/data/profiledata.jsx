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
import maxion from '../../../../assets/images/brand/maxion.png'
import media1 from '../../../../assets/images/media/1.jpg'
import media2 from '../../../../assets/images/media/2.jpg'
import media3 from '../../../../assets/images/media/3.jpg'
import media4 from '../../../../assets/images/media/4.jpg'
import media5 from '../../../../assets/images/media/5.jpg'
import media6 from '../../../../assets/images/media/6.jpg'
import media7 from '../../../../assets/images/media/7.jpg'
import media8 from '../../../../assets/images/media/8.jpg'
import media9 from '../../../../assets/images/media/9.jpg'
import media10 from '../../../../assets/images/media/10.jpg'
import media11 from '../../../../assets/images/media/11.jpg'

import male1 from '../../../../assets/images/users/male/1.jpg'
import male2 from '../../../../assets/images/users/male/2.jpg'
import male3 from '../../../../assets/images/users/male/3.jpg'
import male4 from '../../../../assets/images/users/male/4.jpg'
import male5 from '../../../../assets/images/users/male/5.jpg'
import male6 from '../../../../assets/images/users/male/6.jpg'
import male7 from '../../../../assets/images/users/male/7.jpg'
import male8 from '../../../../assets/images/users/male/8.jpg'
import male9 from '../../../../assets/images/users/male/9.jpg'
import male10 from '../../../../assets/images/users/male/10.jpg'
import male11 from '../../../../assets/images/users/male/11.jpg'
import male12 from '../../../../assets/images/users/male/12.jpg'
import male13 from '../../../../assets/images/users/male/13.jpg'
import male14 from '../../../../assets/images/users/male/14.jpg'
import male15 from '../../../../assets/images/users/male/15.jpg'
import male16 from '../../../../assets/images/users/male/16.jpg'

import female1 from '../../../../assets/images/users/female/1.jpg'
import female2 from '../../../../assets/images/users/female/2.jpg'
import female3 from '../../../../assets/images/users/female/3.jpg'
import female4 from '../../../../assets/images/users/female/4.jpg'
import female5 from '../../../../assets/images/users/female/5.jpg'
import female6 from '../../../../assets/images/users/female/6.jpg'
import female7 from '../../../../assets/images/users/female/7.jpg'
import female8 from '../../../../assets/images/users/female/8.jpg'
import female9 from '../../../../assets/images/users/female/9.jpg'
import female10 from '../../../../assets/images/users/female/10.jpg'
import female11 from '../../../../assets/images/users/female/11.jpg'
import female12 from '../../../../assets/images/users/female/12.jpg'
import female13 from '../../../../assets/images/users/female/13.jpg'
import female14 from '../../../../assets/images/users/female/14.jpg'
import female15 from '../../../../assets/images/users/female/15.jpg'

// gallery

export const Gallery = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Row className="masonry">
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media1} alt='media1' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media2} alt='media2' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media3} alt='media3' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
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
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media8} alt='media8' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media9} alt='media9' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media10} alt='media10' onClick={() => setOpen(true)} />
        </Col>
        <Col xs={6} sm={4} md={4} xl={3} className="mb-5 border-bottom-0 col-12">
          <img src={media11} alt='media11' onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
      }}
        slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }, { src: media9 }, { src: media10 }, { src: media11 }

        ]}
        />
    </div>
  )
}

// Friends
export const Friendsdata = [
  { src: male14, name: 'James Thomas', role: 'Web designer', mail: 'james@gmail.com' },
  { src: male3, name: 'Mike Edward', role: 'Web designer', mail: 'edward@gmail.com' },
  { src: male4, name: 'Mark Thmason', role: 'Web designer', mail: 'mark@gmail.com' },
  { src: male7, name: 'Jefferson', role: 'Web designer', mail: 'jeffer@gmail.com' },
  { src: male11, name: 'Helen Voizekh', role: 'Web designer', mail: 'helen@gmail.com' },
  { src: male12, name: 'Jak Scarlet', role: 'Web designer', mail: 'scarlet@gmail.com' },
  { src: male13, name: 'Ronald mef', role: 'Web designer', mail: 'ronald@gmail.com' },
  { src: male7, name: 'Valmdir Raksh', role: 'Web designer', mail: 'valmdir@gmail.com' }
 
]

export const Timeline = [
  { src: male15, name: 'Robert Ani' },
  { src: female5, name: 'Marvin Steward' },
  { src: male13, name: 'Hakim Abdul' },
  { src: female10, name: 'Dina Rose' },
  { src: female11, name: 'Angel Henry' },
  { src: male16, name: 'Bek Romes' },
  { src: male8, name: 'Adam Jeph' },
  { src: female7, name: 'Molly Meph' }

]
