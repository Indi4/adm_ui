import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Default } from './data/typographydata'

export default function Typography () {
  const breadcrumbs = ["Bootstrap", "Typography"];
  return (
    <Fragment>

  <Pageheader items={breadcrumbs} />
           
            <Row>
              {Default.map((idx, t1) => (
              <Col lg={6} md={12} key={t1}>
                <Card>
                  <Card.Header>
                    <Card.Title>{idx.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>{idx.text1} <code>{idx.cd1}</code> {idx.text2} <code>{idx.cd2}</code> {idx.text3}</p>
                      <h1 className={`mt-0 ${idx.bg1}`}>{idx.h1}</h1>
                      <h2 className={idx.bg2}>{idx.h2}</h2>
                      <h3 className={idx.bg3}>{idx.h3}</h3>
                      <h4 className={idx.bg4}>{idx.h4}</h4>
                      <h5 className={idx.bg5}>{idx.h5}</h5>
                      <h6 className={idx.bg6}>{idx.h6}</h6>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              ))}
              
           
            </Row>
           

           
            <Row></Row>


           
            <Row>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Paragraph Text</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classNameical
                        literature.</p>
                      <p className="lead">Most designers set their type arbitrarily, either by pulling
                        values out of the sky or by adhering to a baseline grid. The former case
                        isn’t worth discussing here, but the latter requires a closer look.</p>
                      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>


           
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Text alignment</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>Easily realign text to components with text alignment classNamees.</p>
                      <div className="example border">
                        <p className="text-start">Left aligned text on all viewport sizes.</p>
                        <p className="text-center">Center aligned text on all viewport sizes.</p>
                        <p className="text-end">Right aligned text on all viewport sizes.</p>
                        <p className="text-justify m-0">Both aligned text on all viewport sizes.
                          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
                          sit
                          amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Text transform</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>Transform text in components with text capitalization classNamees.</p>
                      <div className="example border">
                        <p className="text-lowercase">Lowercased text.</p>
                        <p className="text-uppercase">Uppercased text.</p>
                        <p className="text-capitalize m-0">Capitalized text.</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Letter spacing</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>Utilities for controlling the tracking (letter spacing) of an element.
                      </p>
                      <div className="example border">
                        <p className="tracking-tight">Lorem ipsum dolor sit amet. Tight letter
                          spacing.
                        </p>
                        <p className="tracking-normal">Lorem ipsum dolor sit amet. Normal letter
                          spacing.</p>
                        <p className="tracking-wide m-0">Lorem ipsum dolor sit amet. Wide letter
                          spacing.</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Line Height</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-wrap">
                      <p>Utilities for controlling the leading (line height) of an element.</p>
                      <div className="example border">
                        <p className="leading-none">Lorem ipsum dolor sit amet.
                          Dolor sit amet.
                        </p>
                        <p className="leading-tight">Lorem ipsum dolor sit amet.
                          Dolor sit amet.
                        </p>
                        <p className="leading-normal">Lorem ipsum dolor sit amet.
                          Dolor sit amet.
                        </p>
                        <p className="leading-loose m-0">Lorem ipsum dolor sit amet.
                          Dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <Card.Title>Text-styles</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p>You can use the mark tag to
                      <mark>highlight</mark> text.
                    </p>
                    <p>
                      <del>This line of text is meant to be treated as deleted text.</del>
                    </p>
                    <p>
                      <s>This line of text is meant to be treated as no longer accurate.</s>
                    </p>
                    <p>
                      <ins>This line of text is meant to be treated as an addition to the
                        document.</ins>
                    </p>
                    <p><u>This line of text will render as underlined</u></p>
                    <p>
                      <small>This line of text is meant to be treated as fine print.</small>
                    </p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                    <p><b>This line rendered as italicized text.</b></p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
    

    </Fragment>
  )
}
