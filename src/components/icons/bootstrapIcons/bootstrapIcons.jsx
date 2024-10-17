import React, { Fragment } from 'react'
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function BootstrapIcons() {
  const breadcrumbs = ["Icons", "Bootstrap Icons"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row className="row-cards">
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Bootstrap Icons</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={12} sm={12}>
                  <p>Powered by Bootstrap 5 set. For more info <Link
                    to="https://icons.getbootstrap.com/" target="_blank">click
                    here</Link>.</p>
                  <p><code>&lt;i className="bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                </Col>
                <Col lg={12} sm={12}>
                  <div className="icons-list-wrap">
                    <ul className="icons-list">
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-alarm
                        </Tooltip>}>
                          <i className="bi-alarm" data-bs-toggle="tooltip" title="bi bi-alarm"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-alarm-fill
                        </Tooltip>}>
                          <i className="bi-alarm-fill" data-bs-toggle="tooltip" title="bi-alarm-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-bottom
                        </Tooltip>}>
                          <i className="bi-align-bottom" data-bs-toggle="tooltip" title="bi-align-bottom"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-center
                        </Tooltip>}>
                          <i className="bi-align-center" data-bs-toggle="tooltip" title="bi-align-center"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-end
                        </Tooltip>}>
                          <i className="bi-align-end" data-bs-toggle="tooltip" title="bi-align-end"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-middle
                        </Tooltip>}>
                          <i className="bi-align-middle" data-bs-toggle="tooltip" title="bi-align-middle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-start
                        </Tooltip>}>
                          <i className="bi-align-start" data-bs-toggle="tooltip" title="bi-align-start"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-align-top
                        </Tooltip>}>
                          <i className="bi-align-top" data-bs-toggle="tooltip" title="bi-align-top"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-alt
                        </Tooltip>}>
                          <i className="bi-alt" data-bs-toggle="tooltip" title="bi-alt"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-app
                        </Tooltip>}>
                          <i className="bi-app" data-bs-toggle="tooltip" title="bi-app"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-app-indicator
                        </Tooltip>}>
                          <i className="bi-app-indicator" data-bs-toggle="tooltip" title="bi-app-indicator"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-archive
                        </Tooltip>}>
                          <i className="bi-archive" data-bs-toggle="tooltip" title="bi-archive"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-archive-fill
                        </Tooltip>}>
                          <i className="bi-archive-fill" data-bs-toggle="tooltip" title="bi-archive-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-90deg-down
                        </Tooltip>}>
                          <i className="bi-arrow-90deg-down" data-bs-toggle="tooltip" title="bi-arrow-90deg-down"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-90deg-left
                        </Tooltip>}>
                          <i className="bi-arrow-90deg-left" data-bs-toggle="tooltip" title="bi-arrow-90deg-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-90deg-right
                        </Tooltip>}>
                          <i className="bi-arrow-90deg-right" data-bs-toggle="tooltip" title="bi-arrow-90deg-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-90deg-up
                        </Tooltip>}>
                          <i className="bi-arrow-90deg-up" data-bs-toggle="tooltip" title="bi-arrow-90deg-up"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-bar-down
                        </Tooltip>}>
                          <i className="bi-arrow-bar-down" data-bs-toggle="tooltip" title="bi-arrow-bar-down"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-bar-left
                        </Tooltip>}>
                          <i className="bi-arrow-bar-left" data-bs-toggle="tooltip" title="bi-arrow-bar-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-bar-right
                        </Tooltip>}>
                          <i className="bi-arrow-bar-right" data-bs-toggle="tooltip" title="bi-arrow-bar-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-bar-up
                        </Tooltip>}>
                          <i className="bi-arrow-bar-up" data-bs-toggle="tooltip" title="bi-arrow-bar-up"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-clockwise
                        </Tooltip>}>
                          <i className="bi-arrow-clockwise" data-bs-toggle="tooltip" title="bi-arrow-clockwise"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-counterclockwise
                        </Tooltip>}>
                          <i className="bi-arrow-counterclockwise" data-bs-toggle="tooltip" title="bi-arrow-counterclockwise"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-circle
                        </Tooltip>}>
                          <i className="bi-arrow-down-circle" data-bs-toggle="tooltip" title="bi-arrow-down-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-down-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-down-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-left
                        </Tooltip>}>
                          <i className="bi-arrow-down-left" data-bs-toggle="tooltip" title="bi-arrow-down-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-left-circle
                        </Tooltip>}>
                          <i className="bi-arrow-down-left-circle" data-bs-toggle="tooltip" title="bi-arrow-down-left-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-left-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-down-left-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-down-left-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-left-square
                        </Tooltip>}>
                          <i className="bi-arrow-down-left-square" data-bs-toggle="tooltip" title="bi-arrow-down-left-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-left-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-down-left-square-fill" data-bs-toggle="tooltip" title="bi-arrow-down-left-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-right
                        </Tooltip>}>
                          <i className="bi-arrow-down-right" data-bs-toggle="tooltip" title="bi-arrow-down-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-right-circle
                        </Tooltip>}>
                          <i className="bi-arrow-down-right-circle" data-bs-toggle="tooltip" title="bi-arrow-down-right-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-right-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-down-right-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-down-right-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-right-square
                        </Tooltip>}>
                          <i className="bi-arrow-down-right-square" data-bs-toggle="tooltip" title="bi-arrow-down-right-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-short
                        </Tooltip>}>
                          <i className="bi-arrow-down-short" data-bs-toggle="tooltip" title="bi-arrow-down-short"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-square
                        </Tooltip>}>
                          <i className="bi-arrow-down-square" data-bs-toggle="tooltip" title="bi-arrow-down-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-down-square-fill" data-bs-toggle="tooltip" title="bi-arrow-down-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-down-up
                        </Tooltip>}>
                          <i className="bi-arrow-down-up" data-bs-toggle="tooltip" title="bi-arrow-down-up"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left
                        </Tooltip>}>
                          <i className="bi-arrow-left" data-bs-toggle="tooltip" title="bi-arrow-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-circle
                        </Tooltip>}>
                          <i className="bi-arrow-left-circle" data-bs-toggle="tooltip" title="bi-arrow-left-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-circle-fil
                        </Tooltip>}>
                          <i className="bi-arrow-left-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-left-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-right
                        </Tooltip>}>
                          <i className="bi-arrow-left-right" data-bs-toggle="tooltip" title="bi-arrow-left-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-short
                        </Tooltip>}>
                          <i className="bi-arrow-left-short" data-bs-toggle="tooltip" title="bi-arrow-left-short"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-square
                        </Tooltip>}>
                          <i className="bi-arrow-left-square" data-bs-toggle="tooltip" title="bi-arrow-left-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-left-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-left-square-fill" data-bs-toggle="tooltip" title="bi-arrow-left-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-repeat
                        </Tooltip>}>
                          <i className="bi-arrow-repeat" data-bs-toggle="tooltip" title="bi-arrow-repeat"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-return-left
                        </Tooltip>}>
                          <i className="bi-arrow-return-left" data-bs-toggle="tooltip" title="bi-arrow-return-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-return-right
                        </Tooltip>}>
                          <i className="bi-arrow-return-right" data-bs-toggle="tooltip" title="bi-arrow-return-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right
                        </Tooltip>}>
                          <i className="bi-arrow-right" data-bs-toggle="tooltip" title="bi-arrow-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-circle
                        </Tooltip>}>
                          <i className="bi-arrow-right-circle" data-bs-toggle="tooltip" title="bi-arrow-right-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-circle-fill"
                        </Tooltip>}>
                          <i className="bi-arrow-right-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-right-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-short
                        </Tooltip>}>
                          <i className="bi-arrow-right-short" data-bs-toggle="tooltip" title="bi-arrow-right-short"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-square
                        </Tooltip>}>
                          <i className="bi-arrow-right-square" data-bs-toggle="tooltip" title="bi-arrow-right-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-square-fill"
                        </Tooltip>}>
                          <i className="bi-arrow-right-square-fill" data-bs-toggle="tooltip" title="bi-arrow-right-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-angle-contract
                        </Tooltip>}>
                          <i className="bi-arrows-angle-contract" data-bs-toggle="tooltip" title="bi-arrows-angle-contract"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-right-square-fill"
                        </Tooltip>}>
                          <i className="bi-arrow-right-square-fill" data-bs-toggle="tooltip" title="bi-arrow-right-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-angle-expand
                        </Tooltip>}>
                          <i className="bi-arrows-angle-expand" data-bs-toggle="tooltip" title="bi-arrows-angle-expand"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-collapse
                        </Tooltip>}>
                          <i className="bi-arrows-collapse" data-bs-toggle="tooltip" title="bi-arrows-collapse"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-expand
                        </Tooltip>}>
                          <i className="bi-arrows-expand" data-bs-toggle="tooltip" title="bi-arrows-expand"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-fullscreen
                        </Tooltip>}>
                          <i className="bi-arrows-fullscreen" data-bs-toggle="tooltip" title="bi-arrows-fullscreen"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrows-move
                        </Tooltip>}>
                          <i className="bi-arrows-move" data-bs-toggle="tooltip" title="bi-arrows-move"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up
                        </Tooltip>}>
                          <i className="bi-arrow-up" data-bs-toggle="tooltip" title="bi-arrow-up"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-circle
                        </Tooltip>}>
                          <i className="bi-arrow-up-circle" data-bs-toggle="tooltip" title="bi-arrow-up-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-up-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-left
                        </Tooltip>}>
                          <i className="bi-arrow-up-left" data-bs-toggle="tooltip" title="bi-arrow-up-left"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-left-circle
                        </Tooltip>}>
                          <i className="bi-arrow-up-left-circle" data-bs-toggle="tooltip" title="bi-arrow-up-left-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-left-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-left-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-up-left-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-left-square
                        </Tooltip>}>
                          <i className="bi-arrow-up-left-square" data-bs-toggle="tooltip" title="bi-arrow-up-left-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-left-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-left-square-fill" data-bs-toggle="tooltip" title="bi-arrow-up-left-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-right
                        </Tooltip>}>
                          <i className="bi-arrow-up-right" data-bs-toggle="tooltip" title="bi-arrow-up-right"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-right-circle
                        </Tooltip>}>
                          <i className="bi-arrow-up-right-circle" data-bs-toggle="tooltip" title="bi-arrow-up-right-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-rrow-up-right-circle-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-right-circle-fill" data-bs-toggle="tooltip" title="bi-arrow-up-right-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-right-square
                        </Tooltip>}>
                          <i className="bi-arrow-up-right-square" data-bs-toggle="tooltip" title="bi-arrow-up-right-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-right-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-right-square-fill" data-bs-toggle="tooltip" title="bi-arrow-up-right-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-short
                        </Tooltip>}>
                          <i className="bi-arrow-up-short" data-bs-toggle="tooltip" title="bi-arrow-up-short"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-square
                        </Tooltip>}>
                          <i className="bi-arrow-up-square" data-bs-toggle="tooltip" title="bi-arrow-up-square"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-arrow-up-square-fill
                        </Tooltip>}>
                          <i className="bi-arrow-up-square-fill" data-bs-toggle="tooltip" title="bi-arrow-up-square-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-aspect-ratio
                        </Tooltip>}>
                          <i className="bi-aspect-ratio" data-bs-toggle="tooltip" title="bi-aspect-ratio"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-aspect-ratio-fill
                        </Tooltip>}>
                          <i className="bi-aspect-ratio-fill" data-bs-toggle="tooltip" title="bi-aspect-ratio-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-asterisk
                        </Tooltip>}>
                          <i className="bi-asterisk" data-bs-toggle="tooltip" title="bi-asterisk"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-at
                        </Tooltip>}>
                          <i className="bi-at" data-bs-toggle="tooltip" title="bi-at"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-award
                        </Tooltip>}>
                          <i className="bi-award" data-bs-toggle="tooltip" title="bi-award"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-award-fill
                        </Tooltip>}>
                          <i className="bi-award-fill" data-bs-toggle="tooltip" title="bi-award-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-back
                        </Tooltip>}>
                          <i className="bi-back" data-bs-toggle="tooltip" title="bi-back"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-backspace
                        </Tooltip>}>
                          <i className="bi-backspace" data-bs-toggle="tooltip" title="bi-backspace"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-backspace-fill
                        </Tooltip>}>
                          <i className="bi-backspace-fill" data-bs-toggle="tooltip" title="bi-backspace-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-backspace-reverse
                        </Tooltip>}>
                          <i className="bi-backspace-reverse" data-bs-toggle="tooltip" title="bi-backspace-reverse"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-backspace-reverse-fill
                        </Tooltip>}>
                          <i className="bi-backspace-reverse-fill" data-bs-toggle="tooltip" title="bi-backspace-reverse-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-3d
                        </Tooltip>}>
                          <i className="bi-badge-3d" data-bs-toggle="tooltip" title="bi-badge-3d"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-3d-fill
                        </Tooltip>}>
                          <i className="bi-badge-3d-fill" data-bs-toggle="tooltip" title="bi-badge-3d-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-4k
                        </Tooltip>}>
                          <i className="bi-badge-4k" data-bs-toggle="tooltip" title="bi-badge-4k"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-4k-fill
                        </Tooltip>}>
                          <i className="bi-badge-4k-fill" data-bs-toggle="tooltip" title="bi-badge-4k-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-8k
                        </Tooltip>}>
                          <i className="bi-badge-8k" data-bs-toggle="tooltip" title="bi-badge-8k"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-4k
                        </Tooltip>}>
                          <i className="bi-badge-4k" data-bs-toggle="tooltip" title="bi-badge-4k"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-8k-fill
                        </Tooltip>}>
                          <i className="bi-badge-8k-fill" data-bs-toggle="tooltip" title="bi-badge-8k-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-ad
                        </Tooltip>}>
                          <i className="bi-badge-ad" data-bs-toggle="tooltip" title="bi-badge-ad"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-ad-fill
                        </Tooltip>}>
                          <i className="bi-badge-ad-fill" data-bs-toggle="tooltip" title="bi-badge-ad-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-ar
                        </Tooltip>}>
                          <i className="bi-badge-ar" data-bs-toggle="tooltip" title="bi-badge-ar"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-ar-fill
                        </Tooltip>}>
                          <i className="bi-badge-ar-fill" data-bs-toggle="tooltip" title="bi-badge-ar-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-cc
                        </Tooltip>}>
                          <i className="bi-badge-cc" data-bs-toggle="tooltip" title="bi-badge-cc"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-cc-fill
                        </Tooltip>}>
                          <i className="bi-badge-cc-fill" data-bs-toggle="tooltip" title="bi-badge-ad-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-hd
                        </Tooltip>}>
                          <i className="bi-badge-hd" data-bs-toggle="tooltip" title="bi-badge-hd"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-hd-fill
                        </Tooltip>}>
                          <i className="bi-badge-hd-fill" data-bs-toggle="tooltip" title="bi-badge-hd-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-tm
                        </Tooltip>}>
                          <i className="bi-badge-tm" data-bs-toggle="tooltip" title="bi-badge-tm"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-tm-fill
                        </Tooltip>}>
                          <i className="bi-badge-tm-fill" data-bs-toggle="tooltip" title="bi-badge-tm-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-vo
                        </Tooltip>}>
                          <i className="bi-badge-vo" data-bs-toggle="tooltip" title="bi-badge-vo"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-vo-fill
                        </Tooltip>}>
                          <i className="bi-badge-vo-fill" data-bs-toggle="tooltip" title="bi-badge-vo-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-vr
                        </Tooltip>}>
                          <i className="bi-badge-vr" data-bs-toggle="tooltip" title="bi-badge-vr"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-vr-fill
                        </Tooltip>}>
                          <i className="bi-badge-vr-fill" data-bs-toggle="tooltip" title="bi-badge-vr-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-wc
                        </Tooltip>}>
                          <i className="bi-badge-wc" data-bs-toggle="tooltip" title="bi-badge-wc"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-badge-wc-fill
                        </Tooltip>}>
                          <i className="bi-badge-wc-fill" data-bs-toggle="tooltip" title="bi-badge-wc-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bag-check
                        </Tooltip>}>
                          <i className="bi-bag-check" data-bs-toggle="tooltip" title="bi-bag-check"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bag-dash
                        </Tooltip>}>
                          <i className="bi-bag-dash" data-bs-toggle="tooltip" title="bi-bag-dash"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bag-fill
                        </Tooltip>}>
                          <i className="bi-bag-fill" data-bs-toggle="tooltip" title="bi-bag-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bag-plus
                        </Tooltip>}>
                          <i className="bi-bag-plus" data-bs-toggle="tooltip" title="bi-bag-plus"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bag-x
                        </Tooltip>}>
                          <i className="bi-bag-x" data-bs-toggle="tooltip" title="bi-bag-x"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bank
                        </Tooltip>}>
                          <i className="bi-bank" data-bs-toggle="tooltip" title="bi-bank"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bank2
                        </Tooltip>}>
                          <i className="bi-bank2" data-bs-toggle="tooltip" title="bi-bank2"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bar-chart
                        </Tooltip>}>
                          <i className="bi-bar-chart" data-bs-toggle="tooltip" title="bi-bar-chart"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bar-chart-fill
                        </Tooltip>}>
                          <i className="bi-bar-chart-fill" data-bs-toggle="tooltip" title="bi-bar-chart-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bar-chart-line
                        </Tooltip>}>
                          <i className="bi-bar-chart-line" data-bs-toggle="tooltip" title="bi-bar-chart-line"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bar-chart-steps
                        </Tooltip>}>
                          <i className="bi-bar-chart-steps" data-bs-toggle="tooltip" title="bi-bar-chart-steps"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-basket
                        </Tooltip>}>
                          <i className="bi-basket" data-bs-toggle="tooltip" title="bi-basket"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-basket2
                        </Tooltip>}>
                          <i className="bi-basket2" data-bs-toggle="tooltip" title="bi-basket2"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-basket3
                        </Tooltip>}>
                          <i className="bi-basket3" data-bs-toggle="tooltip" title="bi-basket3"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-battery
                        </Tooltip>}>
                          <i className="bi-battery" data-bs-toggle="tooltip" title="bi-battery"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-battery-charging
                        </Tooltip>}>
                          <i className="bi-battery-charging" data-bs-toggle="tooltip" title="bi-battery-charging"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-battery-full
                        </Tooltip>}>
                          <i className="bi-battery-full" data-bs-toggle="tooltip" title="bi-battery-full"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-battery-half
                        </Tooltip>}>
                          <i className="bi-battery-half" data-bs-toggle="tooltip" title="bi-battery-half"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bell
                        </Tooltip>}>
                          <i className="bi-bell" data-bs-toggle="tooltip" title="bi-bell"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bell-fill
                        </Tooltip>}>
                          <i className="bi-bell-fill" data-bs-toggle="tooltip" title="bi-bell-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bell-slash
                        </Tooltip>}>
                          <i className="bi-bell-slash" data-bs-toggle="tooltip" title="bi-bell-slash"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bell-slash-fill
                        </Tooltip>}>
                          <i className="bi-bell-slash-fill" data-bs-toggle="tooltip" title="bi-bell-slash-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-book
                        </Tooltip>}>
                          <i className="bi-book" data-bs-toggle="tooltip" title="bi-book"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bookmarks
                        </Tooltip>}>
                          <i className="bi-bookmarks" data-bs-toggle="tooltip" title="bi-bookmarks"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bookmark-x
                        </Tooltip>}>
                          <i className="bi-bookmark-x" data-bs-toggle="tooltip" title="bi-bookmark-x"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bootstrap
                        </Tooltip>}>
                          <i className="bi-bootstrap" data-bs-toggle="tooltip" title="bi-bootstrap"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-bootstrap-fill
                        </Tooltip>}>
                          <i className="bi-bootstrap-fill" data-bs-toggle="tooltip" title="bi-bootstrap-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calculator
                        </Tooltip>}>
                          <i className="bi-calculator" data-bs-toggle="tooltip" title="bi-calculator"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar
                        </Tooltip>}>
                          <i className="bi-calendar" data-bs-toggle="tooltip" title="bi-calendar"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2
                        </Tooltip>}>
                          <i className="bi-calendar2" data-bs-toggle="tooltip" title="bi-calendar2"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-check
                        </Tooltip>}>
                          <i className="bi-calendar2-check" data-bs-toggle="tooltip" title="bi-calendar2-check"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-date
                        </Tooltip>}>
                          <i className="bi-calendar2-date" data-bs-toggle="tooltip" title="bi-calendar2-date"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-day
                        </Tooltip>}>
                          <i className="bi-calendar2-day" data-bs-toggle="tooltip" title="bi-calendar2-day"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-event
                        </Tooltip>}>
                          <i className="bi-calendar2-event" data-bs-toggle="tooltip" title="bi-calendar2-event"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-fill
                        </Tooltip>}>
                          <i className="bi-calendar2-fill" data-bs-toggle="tooltip" title="bi-calendar2-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-minus
                        </Tooltip>}>
                          <i className="bi-calendar2-minus" data-bs-toggle="tooltip" title="bi-calendar2-minus"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-calendar2-month
                        </Tooltip>}>
                          <i className="bi-calendar2-month" data-bs-toggle="tooltip" title="bi-calendar2-month"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-camera
                        </Tooltip>}>
                          <i className="bi-camera" data-bs-toggle="tooltip" title="bi-camera"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-camera2
                        </Tooltip>}>
                          <i className="bi-camera2" data-bs-toggle="tooltip" title="bi-camera2"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-camera-fill
                        </Tooltip>}>
                          <i className="bi-camera-fill" data-bs-toggle="tooltip" title="bi-camera-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-camera-reels
                        </Tooltip>}>
                          <i className="bi-camera-reels" data-bs-toggle="tooltip" title="bi-camera-reels"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-camera-video
                        </Tooltip>}>
                          <i className="bi-camera-video" data-bs-toggle="tooltip" title="bi-camera-video"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-capslock
                        </Tooltip>}>
                          <i className="bi-capslock" data-bs-toggle="tooltip" title="bi-capslock"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-clock
                        </Tooltip>}>
                          <i className="bi-clock" data-bs-toggle="tooltip" title="bi-clock"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dash
                        </Tooltip>}>
                          <i className="bi-dash" data-bs-toggle="tooltip" title="bi-dash"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dash-circle
                        </Tooltip>}>
                          <i className="bi-dash-circle" data-bs-toggle="tooltip" title="bi-dash-circle"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dash-circle-dotted
                        </Tooltip>}>
                          <i className="bi-dash-circle-dotted" data-bs-toggle="tooltip" title="bi-dash-circle-dotted"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dash-circle-fill
                        </Tooltip>}>
                          <i className="bi-dash-circle-fill" data-bs-toggle="tooltip" title="bi-dash-circle-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dash-lg
                        </Tooltip>}>
                          <i className="bi-dash-lg" data-bs-toggle="tooltip" title="bi-dash-lg"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-diagram-2
                        </Tooltip>}>
                          <i className="bi-diagram-2" data-bs-toggle="tooltip" title="bi-diagram-2"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-diamond
                        </Tooltip>}>
                          <i className="bi-diamond" data-bs-toggle="tooltip" title="bi-diamond"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dice-1
                        </Tooltip>}>
                          <i className="bi-dice-1" data-bs-toggle="tooltip" title="bi-dice-1"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-display
                        </Tooltip>}>
                          <i className="bi-display" data-bs-toggle="tooltip" title="bi-display"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-display-fill
                        </Tooltip>}>
                          <i className="bi-display-fill" data-bs-toggle="tooltip" title="bi-display-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-distribute-horizontal
                        </Tooltip>}>
                          <i className="bi-distribute-horizontal" data-bs-toggle="tooltip" title="bi-distribute-horizontal"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-door-closed
                        </Tooltip>}>
                          <i className="bi-door-closed" data-bs-toggle="tooltip" title="bi-door-closed"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-door-open
                        </Tooltip>}>
                          <i className="bi-door-open" data-bs-toggle="tooltip" title="bi-door-open"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-dot
                        </Tooltip>}>
                          <i className="bi-dot" data-bs-toggle="tooltip" title="bi-dot"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-earbuds
                        </Tooltip>}>
                          <i className="bi-earbuds" data-bs-toggle="tooltip" title="bi-earbuds"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-easel
                        </Tooltip>}>
                          <i className="bi-easel" data-bs-toggle="tooltip" title="bi-easel"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-egg
                        </Tooltip>}>
                          <i className="bi-egg" data-bs-toggle="tooltip" title="bi-egg"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-eject
                        </Tooltip>}>
                          <i className="bi-eject" data-bs-toggle="tooltip" title="bi-eject"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-emoji-angry
                        </Tooltip>}>
                          <i className="bi-emoji-angry" data-bs-toggle="tooltip" title="bi-emoji-angry"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-eraser
                        </Tooltip>}>
                          <i className="bi-eraser" data-bs-toggle="tooltip" title="bi-eraser"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file
                        </Tooltip>}>
                          <i className="bi-file" data-bs-toggle="tooltip" title="bi-file"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-facebook
                        </Tooltip>}>
                          <i className="bi-facebook" data-bs-toggle="tooltip" title="bi-facebook"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-arrow-down
                        </Tooltip>}>
                          <i className="bi-file-arrow-down" data-bs-toggle="tooltip" title="bi-file-arrow-down"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-arrow-down-fill
                        </Tooltip>}>
                          <i className="bi-file-arrow-down-fill" data-bs-toggle="tooltip" title="bi-file-arrow-down-fill"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-binary
                        </Tooltip>}>
                          <i className="bi-file-binary" data-bs-toggle="tooltip" title="bi-file-binary"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-break
                        </Tooltip>}>
                          <i className="bi-file-break" data-bs-toggle="tooltip" title="bi-file-break"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-check
                        </Tooltip>}>
                          <i className="bi-file-check" data-bs-toggle="tooltip" title="bi-file-check"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-code
                        </Tooltip>}>
                          <i className="bi-file-code" data-bs-toggle="tooltip" title="bi-file-code"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-file-diff
                        </Tooltip>}>
                          <i className="bi-file-diff" data-bs-toggle="tooltip" title="bi-file-diff"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-film
                        </Tooltip>}>
                          <i className="bi-film" data-bs-toggle="tooltip" title="bi-film"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-gear
                        </Tooltip>}>
                          <i className="bi-gear" data-bs-toggle="tooltip" title="bi-gear"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-gem
                        </Tooltip>}>
                          <i className="bi-gem" data-bs-toggle="tooltip" title="bi-gem"></i>
                        </OverlayTrigger> </li>
                      <li className="icons-list-item">
                        <OverlayTrigger placement="top" overlay={<Tooltip>
                          bi-gift
                        </Tooltip>}>
                          <i className="bi-gift" data-bs-toggle="tooltip" title="bi-gift"></i>
                        </OverlayTrigger> </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}

