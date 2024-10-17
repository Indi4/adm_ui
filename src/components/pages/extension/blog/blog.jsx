import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Carddata, Carddata1 } from './data/blogdata'

export default function Blog() {
  const breadcrumbs = ["Pages", "Extension", "Blog"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        {Carddata.map((idx, b1) => (
          <Col xl={4} lg={4} md={12} key={b1}>
            <Card className={`${idx.class} overflow-hidden`}>
              <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>
                <Card.Img className="card-img-top w-100" src={idx.src} alt="" />
              </Link>
              <Card.Body>
                <Card.Title>{idx.title}</Card.Title>
                <p className="text-muted">{idx.text}</p>
                <Button className={`btn btn-${idx.color}`} href={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}>{idx.btn}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>


      <Row className="row row-cards">
        <Col lg={6}>
          <Card className=" card-aside overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-aside-column cover-image br-tl-5 br-bl-5"
            >
              <img src={imagesData('photo7')} height="100%" className='cover-image' />
            </Link>
            <Card.Body className=" flex-column">
              <div className="d-flex align-items-center mb-5">
                <div><img className="avatar brround avatar-md me-3"
                  src={imagesData('male6')} alt="img" /></div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Thomos Scott</Link>
                  <small className="d-block text-muted">1 day ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
              <h4><Link to="#">Publishing packages</Link></h4>
              <div className="text-muted ">Many desktop publishing packages and web page editors
                now
                use default model text, and a search for will uncover...</div>
              <Link to="#" className="mt-3 btn btn-md btn-secondary">Read more</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card card-aside overflow-hidden">
            <Card.Body className="card-body flex-column">
              <div className="d-flex align-items-center mb-5">
                <div className="avatar brround avatar-md me-3 cover-image"
                >
                  <img src={imagesData('male14')} className="avatar brround avatar-md me-3 cover-image" />
                </div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Irene Scott</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
              <h4><Link to="#">Nihil molestaturrgt.</Link></h4>
              <div className="text-muted ">Many desktop publishing packages and web page editors
                now
                use default model text, and a search for will uncover...</div>
              <Link to="" className=" mt-3 btn btn-md btn-primary">Read more</Link>
            </Card.Body>
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-aside-column cover-image br-tr-5 br-br-5"
            >
              <img src={imagesData('photo8')} height="100%" className='cover-image' />
            </Link>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card card-aside overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-aside-column cover-image br-tl-5 br-bl-5"
            >
              <img src={imagesData('photo2')} height="100%" className='cover-image' />
            </Link>
            <Card.Body className=" flex-column">
              <h4><Link to="#">Generator on the Internet..</Link></h4>
              <div className="text-muted">Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum....</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar  brround avatar-md me-3 cover-image"
                  data-image-src={imagesData('female15')}>
                  <img className="avatar  brround avatar-md me-3 cover-image" src={imagesData('female15')} />
                </div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Anna Ogden</Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card card-aside overflow-hidden">
            <Card.Body className="card-body flex-column">
              <h4><Link to="#">Nihil molestiae consequatur.</Link></h4>
              <div className="text-muted">Many desktop publishing packages and web page editors
                now
                use default model text, and a search for will uncover...</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar  brround avatar-md me-3 cover-image">
                  <img className="avatar  brround avatar-md me-3 cover-image" src={imagesData('male3')} />
                </div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Irene Scott</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </Card.Body>
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`} className="card-aside-column cover-image br-tr-5 br-br-5">
              <img src={imagesData('photo18')} height="100%" className='cover-image' />
            </Link>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card className=" overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}><img className="card-img-top " src={imagesData('photo13')}
              alt="And this isn&#39;t my nose. This is a false one." /></Link>
            <div className="card-body d-flex flex-column">
              <h4><Link to="#;">voluptatem quia voluptas.</Link></h4>
              <div className="text-muted">To take a trivial example, which of us ever undertakes
                laborious physical exerciser , except to obtain some advantage from it...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar brround avatar-md me-3 cover-image"
                >
                  <img className="avatar brround avatar-md me-3 cover-image" src={imagesData('female15')} /></div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Megan Peters</Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card className=" overflow-hidden">
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}><img className="card-img-top" src={imagesData('photo14')}
              alt="Well, I didn&#39;t vote for you." /></Link>
            <div className="card-body d-flex flex-column">
              <h4><Link to="#;">voluptatem quia voluptas.</Link></h4>
              <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces.</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar brround avatar-md me-3 cover-image">

                  <img className="avatar brround avatar-md me-3 cover-image" src={imagesData('male14')} />
                </div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Anna Ogden</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card className=" overflow-hidden">
            <div className="card-body d-flex flex-column">
              <h4><Link to="#">voluptatem quia voluptas</Link></h4>
              <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos
                ducimus
                qui blanditiis praesentium voluptatum deleniti atque...</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar  brround avatar-md me-3 cover-image">

                  <img className="avatar  brround avatar-md me-3 cover-image" src={imagesData('male19')} /></div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Carol Paige</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </div>
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}><img className="br-bl-5 br-br-5" src={imagesData('photo15')}
              alt="How do you know she is a witch?" /></Link>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card className=" overflow-hidden">
            <div className="card-body d-flex flex-column">
              <Link to="#;">voluptatem quia voluptas..</Link>
              <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut
                aut
                reiciendis voluptatibus maiores alias consequatur aut ..</div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <div className="avatar brround avatar-md me-3 cover-image">
                  <img className="avatar brround avatar-md me-3 cover-image" src={imagesData('female7')} /></div>
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">Fiona Hodges</Link>
                  <small className="d-block text-muted">5 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fe fe-heart me-1"></i></Link>
                  <Link to="#"
                    className="icon d-none d-md-inline-block ms-3"><i
                      className="fa fa-thumbs-o-up"></i></Link>
                </div>
              </div>
            </div>
            <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}><img className="br-bl-5 br-br-5" src={imagesData('photo16')}
              alt="Shut up!" /></Link>
          </Card>
        </Col>
      </Row>



      <Row>
        {Carddata1.map((idx, b2) => (
          <Col sm={6} xl={4} key={b2}>
            <Card className=" overflow-hidden">
              <Link to={`${import.meta.env.BASE_URL}pages/extension/blogdetails`}><Card.Img className="card-img-top" src={idx.src}
                alt="img" /></Link>
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center pb-5 mt-auto">
                  <div><img src={idx.src1} alt="img"
                    className="avatar brround avatar-md me-3" /></div>
                  <div>
                    <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-default fw-semibold">{idx.name}</Link>
                    <small className="d-block text-muted">{idx.text1}</small>
                  </div>
                  <div className="ms-auto text-muted">
                    <Link to="#"
                      className="icon d-none d-md-inline-block ms-3"><i
                        className="fe fe-heart me-1"></i></Link>
                    <Link to="#"
                      className="icon d-none d-md-inline-block ms-3"><i
                        className="fa fa-thumbs-o-up"></i></Link>
                  </div>
                </div>
                <h4><Link to="#">{idx.title}</Link></h4>
                <div className="text-muted">{idx.text}
                </div>
                <Link to="#" className="mt-3 btn btn-md btn-primary">{idx.btn}</Link>
              </div>
            </Card>
          </Col>
        ))}

      </Row>

    </Fragment>
  )
}
