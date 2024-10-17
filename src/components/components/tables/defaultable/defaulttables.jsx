import React, { Fragment } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Bordered, Borderless, Colorstable, Contextual, Darktable, Hoverable, Simpletable, Small, Striped, Tableheadprimary } from './data/defaultdata'

export default function DefaultTables() {
  const breadcrumbs = ["Components", "Tables", "Default Table"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Simple Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Using the most basic table markup, here’s how <code
                className="highlighter-rouge">.table</code> based tables look in Bootstrap.
              </p>
              <div className="table-responsive">
                <Table className="table text-nowrap border text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Simpletable.map((idx, tb1) => (
                      <tr className="border-bottom" key={tb1}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}

                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Striped Rows</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use <code className="highlighter-rouge">.table-striped</code>to add
                zebra-striping to any table row within the <code
                  className="highlighter-rouge">.tbody</code>.</p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap table-striped mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Striped.map((idx, tb2) => (
                      <tr key={tb2}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bordered Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use <code className="highlighter-rouge">.table-bordered</code>to add
                zebra-striping to any table row within the <code
                  className="highlighter-rouge">.tbody</code>.</p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap table-bordered table-stripped mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Bordered.map((idx, tb3) => (
                      <tr key={tb3}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Hoverable Rows Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use <code className="highlighter-rouge">.table-hover</code>to add zebra-striping
                to any table row within the <code className="highlighter-rouge">.tbody</code>.
              </p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap table-hover mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Hoverable.map((idx, tb4) => (
                      <tr key={tb4}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Borderless Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use <code className="highlighter-rouge">.table-borderless</code>to add
                zebra-striping to any table row within the <code
                  className="highlighter-rouge">.tbody</code>.</p>
              <div className="table-responsive">
                <Table
                  className="table border text-nowrap text-md-nowrap table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Borderless.map((idx, tb5) => (
                      <tr key={tb5}>
                        <td>{idx.id}</td>
                        <td>{idx.name} </td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Small Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Add <code className="highlighter-rouge">.table-sm</code> to make any <code
                className="highlighter-rouge">.table</code> more compact by cutting all cell
                <code className="highlighter-rouge">padding</code> in half.
              </p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap table-sm mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Small.map((idx, tb6) => (
                      <tr key={tb6}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Nested Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Border styles, active styles, and table variants are not inherited by nested
                tables.</p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Joan Powell</td>
                      <td>Associate Developer</td>
                      <td>$450,870</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <Table
                          className="table border text-nowrap bg-light text-md-nowrap  mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Salary</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Joan Powell</td>
                              <td>Associate Developer</td>
                              <td>$450,870</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Gavin Gibson</td>
                              <td>Account manager</td>
                              <td>$230,540</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Julian Kerr</td>
                              <td>Senior Javascript Developer</td>
                              <td>$55,300</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Cedric Kelly</td>
                              <td>Accountant</td>
                              <td>$234,100</td>
                            </tr>
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Julian Kerr</td>
                      <td>Senior Javascript Developer</td>
                      <td>$55,300</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Cedric Kelly</td>
                      <td>Accountant</td>
                      <td>$234,100</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Samantha May</td>
                      <td>Junior Technical Author</td>
                      <td>$43,198</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Contextual Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use contextual classNamees to color tables, table rows or individual cells.</p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Contextual.map((idx, tb7) => (
                      <tr className={`table-${idx.color}`} key={tb7}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Table head Primary</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Similar to tables and dark tables, use the modifier classNamees <code
                className="highlighter-rouge">.table-primary</code> or <code
                  className="highlighter-rouge">.table-dark</code> to make <code
                    className="highlighter-rouge">&lt;thead&gt;</code>

              </p>
              <div className="table-responsive">
                <Table className="table border text-nowrap text-md-nowrap mb-0">
                  <thead className="table-primary">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Tableheadprimary.map((idx, tb8) => (
                      <tr key={tb8}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Table Dark</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Use <code className="highlighter-rouge">.table-dark</code>to add zebra-striping
                to any table row within the <code className="highlighter-rouge">.tbody</code>.
              </p>
              <div className="table-responsive">
                <Table striped variant="dark"
                  className="table border text-nowrap text-md-nowrap  mb-0">
                  <thead>
                    <tr>
                      <th className="border-bottom-0">ID</th>
                      <th className="border-bottom-0">Name</th>
                      <th className="border-bottom-0">Position</th>
                      <th className="border-bottom-0">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Darktable.map((idx, tb9) => (
                      <tr key={tb9}>
                        <td>{idx.id}</td>
                        <td>{idx.name}</td>
                        <td>{idx.position}</td>
                        <td>{idx.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {Colorstable.map((idx, tb10) => (
          <Col xl={6} key={tb10}>
            <Card>
              <Card.Header>
                <Card.Title>{idx.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>Use <code className="highlighter-rouge">.table-primary</code>to add zebra-striping
                  to any table row within the <code className="highlighter-rouge">.tbody</code>.
                </p>
                <div className="table-responsive">
                  <Table variant={idx.color}
                    className={`mb-0 table table-bordered text-nowrap text-md-nowrap table-${idx.color}`} >
                    <thead>
                      <tr>
                        <th>{idx.id}</th>
                        <th>{idx.h1}</th>
                        <th>{idx.h2}</th>
                        <th>{idx.h3}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{idx.id1}</td>
                        <td>{idx.name1}</td>
                        <td>{idx.position1}</td>
                        <td>{idx.salary1}</td>
                      </tr>
                      <tr>
                        <td>{idx.id2}</td>
                        <td>{idx.name2}</td>
                        <td>{idx.position2}</td>
                        <td>{idx.salary2}</td>
                      </tr>
                      <tr>
                        <td>{idx.id3}</td>
                        <td>{idx.name3}</td>
                        <td>{idx.position3}</td>
                        <td>{idx.salary3}</td>
                      </tr>
                      <tr>
                        <td>{idx.id4}</td>
                        <td>{idx.name4}</td>
                        <td>{idx.position4}</td>
                        <td>{idx.salary4}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>



    </Fragment>
  )
}
