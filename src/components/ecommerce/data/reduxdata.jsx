
import img1 from '../../../assets/images/products/6.jpg'
import img11 from '../../../assets/images/products/6-1.jpg'
import img12 from '../../../assets/images/products/6-2.jpg'
import img2 from '../../../assets/images/products/7.jpg'
import img21 from '../../../assets/images/products/7-1.jpg'
import img22 from '../../../assets/images/products/7-2.jpg'
import img3 from '../../../assets/images/products/3.jpg'
import img31 from '../../../assets/images/products/3-1.jpg'
import img32 from '../../../assets/images/products/3-2.jpg'
import img4 from '../../../assets/images/products/8.jpg'
import img41 from '../../../assets/images/products/8-1.jpg'
import img42 from '../../../assets/images/products/8-2.jpg'
import img5 from '../../../assets/images/products/5.jpg'
import img51 from '../../../assets/images/products/5-1.jpg'
import img52 from '../../../assets/images/products/5-2.jpg'
import img6 from '../../../assets/images/products/4.jpg'
import img61 from '../../../assets/images/products/4-1.jpg'
import img62 from '../../../assets/images/products/4-2.jpg'
import img7 from '../../../assets/images/products/30.jpg'
import img71 from '../../../assets/images/products/30-1.jpg'
import img72 from '../../../assets/images/products/30-2.jpg'
import img8 from '../../../assets/images/products/31.jpg'
import img81 from '../../../assets/images/products/31-1.jpg'
import img82 from '../../../assets/images/products/31-2.jpg'
import img9 from '../../../assets/images/products/32.jpg'
import img91 from '../../../assets/images/products/32-1.jpg'
import img92 from '../../../assets/images/products/32-2.jpg'



let ribbonData = <div className="ribbone"><span className="ribbon1"><span>25%</span></span></div>
let ribbonData1 = <div className="ribbone"><span className="ribbon1"><span>15%</span></span></div>
let ribbonData2 = <div className="ribbone"><div className="ribbon4"><span>new</span></div> </div>
let ribbonData3 = <div className="ribbone"><span className="ribbon1"><span>30%</span></span></div>


export const ItemData = [
   {
      id: '1',
      preview: img1,
      title: 'Backpack Bag',
      oldpr: '$999.00',
      newpr: '$799.00',
      images: [
         { 'img': img1 },
         { 'img': img11 },
         { 'img': img12 }],
      ribbon: ribbonData,
   },
   {
      id: '2',
      preview: img2,
      title: 'Home Decores',
      oldpr: '$80.00',
      newpr: '$59.00',
      images: [
         { 'img': img2 },
         { 'img': img21 },
         { 'img': img22 }],
      ribbon: '',
   },
   {
      id: '3',
      preview: img3,
      title: 'Lather Hand Watch',
      oldpr: '$56.00',
      newpr: '$38.00',
      images: [
         { 'img': img3 },
         { 'img': img31 },
         { 'img': img32 }],
      ribbon: '',
   },
   {
      id: '4',
      preview: img4,
      title: 'Casual Shoes',
      oldpr: '$76.00',
      newpr: '$58.00',
      images: [
         { "img": img4 },
         { "img": img41 },
         { "img": img42 },],
      ribbon: '',
   },
   {
      id: '5',
      preview: img5,
      title: 'Head Phones',
      oldpr: '$99.00',
      newpr: '$74.00',
      images: [
         { 'img': img5 },
         { 'img': img51 },
         { 'img': img52 }],
      ribbon: ribbonData1,
   },
   {
      id: '6',
      preview: img6,
      title: 'Black Smart Watch',
      oldpr: '$45.00',
      newpr: '$23.00',
      images: [
         { 'img': img6 },
         { 'img': img61 },
         { 'img': img62 }],
      ribbon: ribbonData2,
   },
   {
      id: '7',
      preview: img7,
      title: 'Light Pink Sofa Chair',
      oldpr: '$25.00',
      newpr: '$15.00',
      images: [
         { 'img': img7 },
         { 'img': img71 },
         { 'img': img72 }],
      ribbon: '',
   },
   {
      id: '8',
      preview: img8,
      title: 'Black Digital Camera',
      oldpr: '$56.00',
      newpr: '$39.00',
      images: [
         { 'img': img8 },
         { 'img': img81 },
         { 'img': img82 }],
      ribbon: '',
   },
   {
      id: '9',
      preview: img9,
      title: 'Lather Hand Bag',
      oldpr: '$28.00',
      newpr: '$15.00',
      images: [
         { 'img': img9 },
         { 'img': img91 },
         { 'img': img92 }],
      ribbon: ribbonData3,
   },

  
]