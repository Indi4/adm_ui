import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.jpg'
import product3 from '../../../assets/images/products/3.jpg'
import product4 from '../../../assets/images/products/4.jpg'
import product5 from '../../../assets/images/products/5.jpg'
import product6 from '../../../assets/images/products/6.jpg'
import product7 from '../../../assets/images/products/7.jpg'
import product8 from '../../../assets/images/products/8.jpg'
import product9 from '../../../assets/images/products/9.jpg'
import product10 from '../../../assets/images/products/10.jpg'
import product11 from '../../../assets/images/products/11.jpg'
import product12 from '../../../assets/images/products/12.jpg'
import product13 from '../../../assets/images/products/13.jpg'
import product14 from '../../../assets/images/products/14.jpg'
import product15 from '../../../assets/images/products/15.jpg'
import product16 from '../../../assets/images/products/16.jpg'
import product17 from '../../../assets/images/products/17.jpg'
import product18 from '../../../assets/images/products/18.jpg'
import product19 from '../../../assets/images/products/19.png'
import product20 from '../../../assets/images/products/20.png'
import product21 from '../../../assets/images/products/21.png'
import product22 from '../../../assets/images/products/22.png'
import product23 from '../../../assets/images/products/23.png'
import product24 from '../../../assets/images/products/24.png'
import product25 from '../../../assets/images/products/25.png'
import product26 from '../../../assets/images/products/26.png'
import product27 from '../../../assets/images/products/27.png'
import product28 from '../../../assets/images/products/28.png'
import product29 from '../../../assets/images/products/29.png'
import product30 from '../../../assets/images/products/30.jpg'
import product31 from '../../../assets/images/products/31.jpg'
import product32 from '../../../assets/images/products/32.jpg'
import product33 from '../../../assets/images/products/33.png'
import product34 from '../../../assets/images/products/34.png'
import product35 from '../../../assets/images/products/35.png'
import product36 from '../../../assets/images/products/36.png'
import product37 from '../../../assets/images/products/37.png'
import product38 from '../../../assets/images/products/38.png'
import product39 from '../../../assets/images/products/39.png'
import product40 from '../../../assets/images/products/40.png'
import product41 from '../../../assets/images/products/41.png'
import { imagesData } from '../../../common/commomimages/imagedata'

let ribbonData = <div className="ribbone"><span className="ribbon1"><span>25%</span></span></div>
let ribbonData1 = <div className="ribbone"><span className="ribbon1"><span>15%</span></span></div>
let ribbonData2 = <div className="ribbone"><div className="ribbon4"><span>new</span></div> </div>
let ribbonData3 = <div className="ribbone"><span className="ribbon1"><span>30%</span></span></div>
export const Ecommercedata = [
  { id: '1', src: imagesData('product6'), productname:'Backpack Bag', price1: '$999.00', price2: '$799.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '25%', ribbon: ribbonData },
  { id: '2', src: imagesData('product7'), productname:'Home Decores', price1: '$80.00', price2: '$59.00', rating1: 'star', rating2: 'star', rating3: 'star-half-o', rating4: 'star-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '3', src: imagesData('product3'), productname:'Lather Hand Watch', price1: '$56.00', price2: '$38.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star-half-o', class: '', ribbon: '' },
  { id: '4', src: imagesData('product8'), productname:'Casual Shoes', price1: '$76.00', price2: '$58.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '', ribbon: '' },

  { id: '5', src: imagesData('product5'), productname:'Head Phones', price1: '$99.00', price2: '$74.00', rating1: 'star', rating2: 'star-half-o', rating3: 'star-o', rating4: 'star-o', rating5: 'star-o', class: '15%', ribbon: ribbonData1 },
  { id: '6', src: imagesData('product4'), productname:'Black Smart Watch', price1: '$45.00', price2: '$23.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star-half-o', class: 'new', ribbon: ribbonData2 },

  { id: '7', src: imagesData('product30'),productname:'Light Pink Sofa Chair', price1: '$25.00', price2: '$15.00', rating1: 'star', rating2: 'star', rating3: 'star-half-o', rating4: 'star-o', rating5: 'star-o ', class: '', ribbon: '' },
  { id: '8', src: imagesData('product31'),productname:'Black Digital Camera', price1: '$56.00', price2: '$39.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '9', src: imagesData('product32'),productname:'Lather Hand Bag', price1: '$28.00', price2: '$15.00', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star-half-o', class: '30%', ribbon: ribbonData3 }, 
  
  // end shop
  { id: '10', src: imagesData('product25'),productname:'Furniture', price1: '$552', price2: '$425', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '', ribbon: '' }, // wishlist
  { id: '11', src: imagesData('product26'),productname:'Smart Watch', price1: '$452', price2: '$365', rating1: 'star', rating2: 'star', rating3: 'star-half-o', rating4: 'star-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '12', src: imagesData('product28'),productname:'Headphones', price1: '$520', price2: '$325', rating1: 'star', rating2: 'star', rating3: 'star-half-o', rating4: 'star-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '13', src: imagesData('product27'),productname:'Women Hand Bag', price1: '$758', price2: '$652', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '14', src: imagesData('product29'),productname:'Black DIgital Camera', price1: '$320', price2: '$224', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star-half-o', class: '', ribbon: '' },
  { id: '15', src: imagesData('product1'), productname:'Leather Coat', price1: '$430', price2: '$310', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star-half-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '16', src: imagesData('product19'),productname:'T-shirt', price1: '$462', price2: '$320', rating1: 'star', rating2: 'star-half-o', rating3: 'star-o', rating4: 'star-o', rating5: 'star-o', class: '', ribbon: '' },
  { id: '17', src: imagesData('product24'),productname:'Womens Party wear', price1: '$764', price2: '$524', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star-half-o', class: '', ribbon: '' },
  //shoppingcart
  { id: '18', src: imagesData('product7'), productname:'flowers', price1: '$426', price2: '',  rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star', class: '', ribbon: '' },
  { id: '19', src: imagesData('product4'), productname:'Smart Watch', price1: '$1,984', price2: '', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star', lass: '', ribbon: '' },
  { id: '20', src: imagesData('product5'), productname:'Headphones', price1: '$128', price2: '', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star', lass: '', ribbon: '' },
  { id: '21', src: imagesData('product30'),productname:'Furniture ( chair )', price1: '$2,120', price2: '', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star', lass: '', ribbon: '' },
  { id: '22', src: imagesData('product8'), productname:'Running Shoes', price1: '$654', price2: '', rating1: 'star', rating2: 'star', rating3: 'star', rating4: 'star', rating5: 'star', lass: '', ribbon: '' }
]

export const Wishlist = [
  { id: '10', src: imagesData('product25'), productname: 'Furniture', price1: '$552', price2: '$425', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' }, // wishlist
  { id: '11', src: imagesData('product26'), productname: 'Smart Watch', price1: '$452', price2: '$365', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '12', src: imagesData('product28'), productname: 'Headphones', price1: '$520', price2: '$325', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '13', src: imagesData('product27'), productname: 'Women Hand Bag', price1: '$758', price2: '$652', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '14', src: imagesData('product29'), productname: 'Black DIgital Camera', price1: '$320', price2: '$224', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '15', src: imagesData('product1'), productname: 'Leather Coat', price1: '$430', price2: '$310', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '16', src: imagesData('product19'), productname: 'T-shirt', price1: '$462', price2: '$320', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' },
  { id: '17', src: imagesData('product24'), productname: 'Womens Party wear', price1: '$764', price2: '$524', rating: '', class: '', btn1: 'Add to cart', btn2: 'Remove' }
]
export const Shoppingcart = [
  { id: '', src: product7, productname: 'flowers', price: '$426' },
  { id: '', src: product4, productname: 'Smart Watch', price: '$1,984' },
  { id: '', src: product5, productname: 'Headphones', price: '$128' },
  { id: '', src: product30, productname: 'Furniture ( chair )', price: '$2,120' },
  { id: '', src: product8, productname: 'Running Shoes', price: '$654' }

]
