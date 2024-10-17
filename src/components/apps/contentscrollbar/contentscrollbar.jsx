import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Contentscrollbar () {
  const breadcrumbs = ["Apps", "Content Scroll Bar"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

            <Row>
              <Col md={12}>
                <Card className="overflow-hidden">
                  <Card.Header>
                    <Card.Title>Default-scroll</Card.Title>
                  </Card.Header>
                  <Card.Body>
 
                    <PerfectScrollbar className='h-200'>
                    <div className="content vscroll ">
                      <p>It seems that only fragments of the original text remain in the Lorem
                        Ipsum
                        texts used today. One may speculate that over the course of time certain
                        lettersm</p>
                      <p>The spread of computers and layout programmes thus made dummy text better
                        known. While in earlier times several lines of the Lorem Ipsum text were
                        repeated in the creation of dummy texts, today the full text of Cicero's
                        'De
                        finibus' serves as the basis for many dummy </p>
                      <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est,
                        qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                      <p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                        et
                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                        aliquid
                        ex ea commodi consequatur</p>
                      <p>explain to you need to be sure there isn't anything embarrassing hidden
                        in
                        the middle of text. All the Lorem Ipsum generators on the Internet tend
                        to
                        repeat predefined chunks as necessary, making this the first true
                        generator
                        on the Internet. It uses a dictionary oyou how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I will give you a
                        complete account of the system, and expound the actual teachings of the
                        great explorer of the truth, the master-builder of human happiness. No
                        one
                        rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                      <p>There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are
                        going
                        to use a passage of Lorem Ipsum</p>
                      <p> you need to be sure there isn't anything embarrassing hidden in the
                        middle
                        of text. All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true generator on
                        the
                        Internet. It uses a dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem Ipsum which
                        looks
                        reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or non-characteristic words etc</p>
                      <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est,
                        qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                      <p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                        et
                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                        aliquid
                        ex ea commodi consequatur</p>
                      <p>explain to you how all this mistaken idea of denouncing pleasure and
                        praising
                        pain was born and I will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects, dislikes, or avoids
                        pleasure itself, because it is pleasure</p>

                    </div>
                    </PerfectScrollbar>
                  </Card.Body>
                </Card>
                <Card className=" overflow-hidden">
                  <Card.Header>
                    <Card.Title>Minimal-scroll</Card.Title>
                  </Card.Header>
                  <Card.Body>

                    <PerfectScrollbar className='h-200'>
                    <div className="content scroll-1">
                      <p>Certain internet providers exploit the fact that fill text cannot be
                        recognized by automatic search engines - meaningful information cannot
                        be
                        distinguished from meaningless: Target-generated dummy text mixed with a
                        certain combination of search terms can lead to an increased frequency
                        of
                        visits by search machine users.</p>
                      <p>There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are
                        going
                        to use a passage of Lorem Ipsum</p>
                      <p> you need to be sure there isn't anything embarrassing hidden in the
                        middle
                        of text. All the Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first true generator on
                        the
                        Internet. It uses a dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem Ipsum which
                        looks
                        reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or non-characteristic words etc</p>
                      <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est,
                        qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                      <p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                        et
                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                        aliquid
                        ex ea commodi consequatur</p>
                      <p>explain to you how all this mistaken idea of denouncing pleasure and
                        praising
                        pain was born and I will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects, dislikes, or avoids
                        pleasure itself, because it is pleasure</p>
                    </div>
                    </PerfectScrollbar>
                  </Card.Body>

                </Card>

                <Card className=" overflow-hidden">
                  <Card.Header>
                    <Card.Title>Image Horizontal scroll Bar</Card.Title>
                  </Card.Header>
                      <PerfectScrollbar className='h-200'>
                  <Card.Body>
                    <div className="imagescroll">
                      <ul>
                        <li><img src={imagesData('photo3')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo5')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo13')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo17')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo3')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo5')} className="item br-7"
                          alt="image" /></li>
                        <li><img src={imagesData('photo13')} className="item br-7"
                          alt="image" /></li>

                      </ul>
                    </div>
                  </Card.Body>
                        </PerfectScrollbar>
                </Card>
              </Col>

            </Row>

         

    </Fragment>
  )
}
