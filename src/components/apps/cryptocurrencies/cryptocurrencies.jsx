import React, { Fragment } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Tablebody } from './data/currenciesdata'



export default function Cryptocurrencies () {
  const breadcrumbs = ["Apps", "Crypto Currencies"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs}/>

            <Card className=" overflow-hidden">
              <Card.Header>
                <Card.Title>Crypto Currencies</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table className="table table-bordered text-nowrap crypto-currencies">
                    <thead className="text-dark">
                      <tr className="border-bottom">
                        <th className="fw-semibold">Name</th>
                        <th className="fw-semibold">Icon</th>
                        <th className="fw-semibold">Price</th>
                        <th className="fw-semibold">% 24h</th>
                        <th className="fw-semibold">Market Cap</th>
                        <th className="fw-semibold">Circulating Supply</th>
                        <th className="fw-semibold">Volume 24H</th>
                        <th className="fw-semibold">CMGR/Month</th>
                        <th className="fw-semibold">Inflation</th>
                      </tr>
                      </thead>
                      {Tablebody.map((idx, spk) => (
                      <tbody className="text-dark" key={spk}>
                        <tr>
                          <td>{idx.name}</td>
                          <td><img className="w-5 h-5" src={idx.icon}/> </td>
                          <td>{idx.price}</td>
                          <td className={`text-${idx.class1}`}>{idx.percentage}</td>
                          <td>{idx.marketcap}</td>
                          <td>{idx.circulatingsupply}
                          <span className={`text-${idx.class3}`}> {idx.class2}</span></td>
                          <td>{idx.volume}</td>
                          <td>{idx.cmgr}</td>
                          <td>{idx.inflation} <i className={`fe fe-arrow-${idx.direction} text-${idx.color} mx-1`}></i>
                          </td>
                        </tr>

                      </tbody>
                      ))}
                      
                  </Table>
                </div>
              </Card.Body>
            </Card>
        

    </Fragment>
  )
}
