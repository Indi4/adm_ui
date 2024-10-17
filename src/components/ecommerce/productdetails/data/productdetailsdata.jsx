import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { imagesData } from '../../../../common/commomimages/imagedata'

export const Quantitydata = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' }
]


export const Menswear = [
  { value: 'Foot wear', label: 'Foot wear' },
  { value: 'Top wear', label: 'Top wear' },
  { value: 'Bootom wear', label: 'Bootom wear' },
  { value: 'Men s Groming', label: 'Men s Groming' },
  { value: 'Accessories', label: 'Accessories' }
]
export const Womenswear = [
  { value: 'Foot wear', label: 'Foot wear' },
  { value: 'Top wear', label: 'Top wear' },
  { value: 'Bootom wear', label: 'Bootom wear' },
  { value: 'Beuty Groming', label: 'Beuty Groming' },
  { value: 'Accessories', label: 'Accessories' },
  { value: 'jewellery', label: 'jewellery' }
]

export const Babies = [
  
  { value: 'Boys Clothing ', label: 'Boys Clothing' },
  { value: 'Girls Clothing ', label: 'Girls Clothing' },
  { value: 'Toys', label: 'Toys' },
  { value: 'Baby Care', label: 'Baby Care' },
  { value: 'Kids footwear', label: 'Kids footwear' }

]

export const Electronics = [
  
  { value: 'Mobiles ', label: 'Mobiles' },
  { value: 'Laptops ', label: 'Laptops' },
  { value: 'Gaming & Accessories', label: 'Gaming & Accessories' },
  { value: 'Health care Appliances', label: 'Health care Appliances' }

]
export const Sportsdata = [

  { value: 'Stationery ', label: 'Stationery' },
  { value: 'Books ', label: 'Books' },
  { value: 'Gaming ', label: 'Gaming ' },
  { value: 'Music', label: 'Music' },
  { value: 'Exercise & Fitness', label: 'Exercise & Fitness' }

]

export function Swiperdata () {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
    <div className="product-carousel product-gallery">
                      <div id="Slider" className="carousel slide border" data-bs-ride="false">
    <div className="carousel-inner">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
<SwiperSlide><div className=" active product-item"><img src={imagesData('product23')} alt="img" className="img-fluid mx-auto d-block" />
<div className="text-center mb-5 mt-5 btn-list">
                            </div>
                            </div></SwiperSlide>
<SwiperSlide><div><img src={imagesData('product22')} alt="img" className="img-fluid mx-auto d-block" /> <div className="text-center mb-5 mt-5 btn-list">
                            </div></div></SwiperSlide>
<SwiperSlide><div><img src={imagesData('product21')} alt="img" className="img-fluid mx-auto d-block" /> <div className="text-center mb-5 mt-5 btn-list">
                            </div></div></SwiperSlide>
<SwiperSlide><div><img src={imagesData('product20')} alt="img" className="img-fluid mx-auto d-block" /> <div className="text-center mb-5 mt-5 btn-list">
                            </div></div></SwiperSlide>
      </Swiper>
      </div>
      </div>
      </div>
      <div className="text-center carousel-slider">
        <div id='thumbcarousel' className='carousel slide ' data-bs-interval="t">
                   <div className="carousel-inner">
                   <ul className="carousel-item active product-sm-gallery">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
     
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        
        <SwiperSlide><li className="thumb active me-2 item-gallery">
                    <img src={imagesData('product23')} alt="img" />
                    </li>
                    </SwiperSlide>
                    <SwiperSlide><li className="thumb me-2 item-gallery">
                    <img src={imagesData('product22')} alt="img" />
                    </li>
                    </SwiperSlide>
                    <SwiperSlide><li className="thumb me-2 item-gallery">
                    <img src={imagesData('product21')} alt="img" />
                    </li>
                    </SwiperSlide>
                    <SwiperSlide><li className="thumb me-2 item-gallery">
                    <img src={imagesData('product20')} alt="img" />
                    </li>
                    </SwiperSlide>

      </Swiper>
      </ul>
      </div>
      </div>
      </div>
    </>
  )
}
