import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
// import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectFade, Navigation, Pagination } from 'swiper'

import photo1 from '../../../../assets/images/photos/1.jpg'
import photo2 from '../../../../assets/images/photos/2.jpg'
import photo3 from '../../../../assets/images/photos/3.jpg'
import photo4 from '../../../../assets/images/photos/4.jpg'
import photo5 from '../../../../assets/images/photos/5.jpg'
import photo6 from '../../../../assets/images/photos/6.jpg'
import photo7 from '../../../../assets/images/photos/7.jpg'
import photo8 from '../../../../assets/images/photos/8.jpg'
import photo9 from '../../../../assets/images/photos/9.jpg'
import photo10 from '../../../../assets/images/photos/10.jpg'
import photo11 from '../../../../assets/images/photos/11.jpg'
import photo14 from '../../../../assets/images/photos/14.jpg'
import photo15 from '../../../../assets/images/photos/15.jpg'
import photo16 from '../../../../assets/images/photos/16.jpg'
import photo17 from '../../../../assets/images/photos/17.jpg'
import photo18 from '../../../../assets/images/photos/18.jpg'
import photo19 from '../../../../assets/images/photos/19.jpg'
import photo20 from '../../../../assets/images/photos/20.jpg'
import photo21 from '../../../../assets/images/photos/21.jpg'
import photo22 from '../../../../assets/images/photos/22.jpg'
import photo23 from '../../../../assets/images/photos/23.jpg'
import photo24 from '../../../../assets/images/photos/24.jpg'
import photo25 from '../../../../assets/images/photos/25.jpg'
import photo39 from '../../../../assets/images/photos/39.jpg'
import photo46 from '../../../../assets/images/photos/46.jpg'
import photo47 from '../../../../assets/images/photos/47.jpg'
import photo48 from '../../../../assets/images/photos/48.jpg'
import photo49 from '../../../../assets/images/photos/49.jpg'
import photo55 from '../../../../assets/images/photos/55.jpg'
import { imagesData } from '../../../../common/commomimages/imagedata'
export const Basic = [
  { src1: photo19 },
  { src1: photo20 },
  { src1: photo21 },
  { src1: photo22 },
  { src1: photo23 }
]
export const indicators = [
  { src1: photo24 },
  { src1: photo25 },
  { src1: photo1 },
  { src1: photo2 },
  { src1: photo3 }
]
export const Controls = [
  { title: 'Carousel with controls', heading1: '', text1: '', heading2: '', heading3: '', text2: '', text3: '', src1: photo4, src2: photo5, src3: photo6 },
  {
    title: 'Carousel with controls',
    heading1: 'First slide label',
    text1: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    heading2: 'Second slide label',
    heading3: 'Third slide label',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text3: ' Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    src1: photo9,
    src2: photo10,
    src3: photo11
  }
]

export const Topcontrols = [
  { src1: photo14 },
  { src1: photo15 },
  { src1: photo16 },
  { src1: photo17 },
  { src1: photo18 }
]

export const Topright = [
  { src1: photo19 },
  { src1: photo20 },
  { src1: photo21 },
  { src1: photo22 },
  { src1: photo23 }
]

export const Topleft = [
  { src1: photo24 },
  { src1: photo25 },
  { src1: photo1 },
  { src1: photo2 },
  { src1: photo3 }
]

export const Bottomright = [
  { src1: photo4 },
  { src1: photo5 },
  { src1: photo6 },
  { src1: photo7 },
  { src1: photo8 }

]
export const Crossfade = [
  { src1: photo4 },
  { src1: photo5 },
  { src1: photo7 }
]
export const Caption = [
  { title: 'Carousel with GradientBackground  caption', src1: photo46, src2: photo47, src3: photo48, h1: ' Slide label', h2: 'Slide label', h3: 'Slide label', text: 'The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.', color: 'text-white' },
  { title: 'Carousel with Background color captions', src1: photo55, src2: photo39, src3: photo49, h1: 'First slide label', h2: 'Second slide label', h3: ' Third slide label', text: ' Some representative placeholder content for the second slide.', color: '' }
]

export function Carouseldata1 () {
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
}
export function Carouseldata2 () {
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
}
// Top Controls
export function Carouseldata3 () {
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
}

//
export function Carouseldata4 () {
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
}
//
export function Carouseldata5 () {
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
}
//
export function Carouseldata6 () {
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
}
//
export function Carouseldata7 () {
  return (
    <>
<Carousel itemsToShow={1} showArrows={false} pagination={false} enableAutoPlay={true} initialActiveIndex={2}>
<img className="d-block w-100" alt="" src={imagesData('photo4')} />
<img className="d-block w-100" alt="" src={imagesData('photo5')} />
<img className="d-block w-100" alt="" src={imagesData('photo7')} />

</Carousel>
    </>
  )
}

//
export function Carouseldata8 () {
  return (
    <Swiper navigation={true} effect={"fade"}  dir="rtl" modules={[EffectFade, Navigation, Pagination]}
    pagination={{
      clickable: true
    }}
        slidesPerView={3}
    >
 <SwiperSlide>
  <img className="d-block w-100" alt="" src={imagesData('photo4')} />
  
  </SwiperSlide>
 <SwiperSlide><img className="d-block w-100" alt="" src={imagesData('photo5')} /></SwiperSlide>
 <SwiperSlide><img className="d-block w-100" alt="" src={imagesData('photo7')} /></SwiperSlide>
    </Swiper>
  )
}
