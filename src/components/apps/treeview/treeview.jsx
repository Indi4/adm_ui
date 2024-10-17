import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import TreeView from '@mui/lab/TreeView'

// Matterial ICONS
import { TreeItem } from '@mui/lab'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
export default function Treeviews() {
  const breadcrumbs = ["Apps", "Treeview"];
  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />


      <Row>
        <Col md={12}>
          <Card className=" mg-b-20">
            <Card.Header>
              <Card.Title>
                Basic Treeview
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>

                <Col lg={4}>
                  <TreeView className='treeview'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<VisibilityOutlinedIcon />}
                    defaultExpandIcon={<VisibilityOffOutlinedIcon />}
                  >
                    <TreeItem className="branch" nodeId="1" label="TECH">
                      <TreeItem className="branch" nodeId="2" label="Company Maintenance" />
                      <TreeItem className="branch" nodeId="3" label="Employees">
                        <TreeItem className="branch" nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem className="branch" nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem className="branch" nodeId="6" label="XRP">
                      <TreeItem className="branch" nodeId="7" label="Company Maintenance" />
                      <TreeItem className="branch" nodeId="8" label="Employees">
                        <TreeItem className="branch" nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem className="branch" nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>



                <Col lg={4} className=" mt-4 mt-lg-0">
                  <TreeView className='treeview tree'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<VisibilityOutlinedIcon />}
                    defaultExpandIcon={<VisibilityOffOutlinedIcon />}
                  >
                    <TreeItem className="branch" nodeId="1" label="TECH">
                      <TreeItem className="branch" nodeId="2" label="Company Maintenance" />
                      <TreeItem className="branch" nodeId="3" label="Employees">
                        <TreeItem className="branch" nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem className="branch" nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem className="branch" nodeId="6" label="XRP">
                      <TreeItem className="branch" nodeId="7" label="Company Maintenance" />
                      <TreeItem className="branch" nodeId="8" label="Employees">
                        <TreeItem className="branch" nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem className="branch" nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>



                <Col lg={4} className=" mt-4 mt-lg-0">
                  <TreeView className='treeview'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<VisibilityOutlinedIcon />}
                    defaultExpandIcon={<VisibilityOffOutlinedIcon />}
                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>

              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>
                Tree View Styles
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>

                <Col lg={6} xl={4} md={12} sm={12}>
                  <TreeView className='treeview'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<VisibilityOutlinedIcon />}
                    defaultExpandIcon={<VisibilityOffOutlinedIcon />}
                  >
                    <TreeItem nodeId="1" label="Treeview1">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports">
                          <TreeItem nodeId="5" label="Report1" />
                          <TreeItem nodeId="6" label="Report2" />
                          <TreeItem nodeId="7" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="8" label="Employee Maint.">
                          <TreeItem nodeId="9" label="Reports">
                            <TreeItem nodeId="10" label="Report1" />
                            <TreeItem nodeId="11" label="Report2" />
                            <TreeItem nodeId="12" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="13" label="Employee Maint." >
                            <TreeItem nodeId="14" label="Reports">
                              <TreeItem nodeId="15" label="Report1" />
                              <TreeItem nodeId="16" label="Report2" />
                              <TreeItem nodeId="17" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="18" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="19" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="20" label="Treeview2">
                      <TreeItem nodeId="21" label="Company Maintenance" />
                      <TreeItem nodeId="22" label="Employees">
                        <TreeItem nodeId="23" label="Reports">
                          <TreeItem nodeId="24" label="Report1" />
                          <TreeItem nodeId="25" label="Report2" />
                          <TreeItem nodeId="26" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="27" label="Employee Maint.">
                          <TreeItem nodeId="28" label="Reports">
                            <TreeItem nodeId="29" label="Report1" />
                            <TreeItem nodeId="30" label="Report2" />
                            <TreeItem nodeId="31" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="32" label="Employee Maint." >
                            <TreeItem nodeId="33" label="Reports">
                              <TreeItem nodeId="34" label="Report1" />
                              <TreeItem nodeId="35" label="Report2" />
                              <TreeItem nodeId="36" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="37" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="38" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="39" label="Treeview3">
                      <TreeItem nodeId="40" label="Company Maintenance" />
                      <TreeItem nodeId="41" label="Employees">
                        <TreeItem nodeId="42" label="Reports">
                          <TreeItem nodeId="43" label="Report1" />
                          <TreeItem nodeId="44" label="Report2" />
                          <TreeItem nodeId="45" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="46" label="Employee Maint.">
                          <TreeItem nodeId="47" label="Reports">
                            <TreeItem nodeId="48" label="Report1" />
                            <TreeItem nodeId="49" label="Report2" />
                            <TreeItem nodeId="50" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="51" label="Employee Maint.">
                            <TreeItem nodeId="52" label="Reports">
                              <TreeItem nodeId="53" label="Report1" />
                              <TreeItem nodeId="54" label="Report2" />
                              <TreeItem nodeId="55" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="56" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="57" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="58" label="Treeview4">
                      <TreeItem nodeId="59" label="Company Maintenance" />
                      <TreeItem nodeId="60" label="Employees">
                        <TreeItem nodeId="61" label="Reports">
                          <TreeItem nodeId="62" label="Report1" />
                          <TreeItem nodeId="63" label="Report2" />
                          <TreeItem nodeId="64" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="65" label="Employee Maint.">
                          <TreeItem nodeId="66" label="Reports">
                            <TreeItem nodeId="67" label="Report1" />
                            <TreeItem nodeId="68" label="Report2" />
                            <TreeItem nodeId="69" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="70" label="Employee Maint." >
                            <TreeItem nodeId="71" label="Reports">
                              <TreeItem nodeId="72" label="Report1" />
                              <TreeItem nodeId="73" label="Report2" />
                              <TreeItem nodeId="74" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="75" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="76" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="77" label="Treeview5">
                      <TreeItem nodeId="78" label="Company Maintenance" />
                      <TreeItem nodeId="79" label="Employees">
                        <TreeItem nodeId="80" label="Reports">
                          <TreeItem nodeId="81" label="Report1" />
                          <TreeItem nodeId="82" label="Report2" />
                          <TreeItem nodeId="83" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="84" label="Employee Maint.">
                          <TreeItem nodeId="85" label="Reports">
                            <TreeItem nodeId="86" label="Report1" />
                            <TreeItem nodeId="87" label="Report2" />
                            <TreeItem nodeId="88" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="89" label="Employee Maint." >
                            <TreeItem nodeId="90" label="Reports">
                              <TreeItem nodeId="91" label="Report1" />
                              <TreeItem nodeId="92" label="Report2" />
                              <TreeItem nodeId="93" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="94" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="95" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="96" label="Treeview6">
                      <TreeItem nodeId="97" label="Company Maintenance" />
                      <TreeItem nodeId="98" label="Employees">
                        <TreeItem nodeId="99" label="Reports">
                          <TreeItem nodeId="100" label="Report1" />
                          <TreeItem nodeId="101" label="Report2" />
                          <TreeItem nodeId="102" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="103" label="Employee Maint.">
                          <TreeItem nodeId="104" label="Reports">
                            <TreeItem nodeId="105" label="Report1" />
                            <TreeItem nodeId="106" label="Report2" />
                            <TreeItem nodeId="107" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="108" label="Employee Maint." >
                            <TreeItem nodeId="109" label="Reports">
                              <TreeItem nodeId="110" label="Report1" />
                              <TreeItem nodeId="111" label="Report2" />
                              <TreeItem nodeId="112" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="113" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="114" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>



                <Col lg={6} xl={4} md={12} sm={12} className=" mt-4 mt-lg-0">
                  <TreeView className='treeview'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<FolderOpenIcon />}
                    defaultExpandIcon={<FolderOutlinedIcon />}
                  >
                    <TreeItem nodeId="1" label="Treeview1">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports">
                          <TreeItem nodeId="5" label="Report1" />
                          <TreeItem nodeId="6" label="Report2" />
                          <TreeItem nodeId="7" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="8" label="Employee Maint.">
                          <TreeItem nodeId="9" label="Reports">
                            <TreeItem nodeId="10" label="Report1" />
                            <TreeItem nodeId="11" label="Report2" />
                            <TreeItem nodeId="12" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="13" label="Employee Maint." >
                            <TreeItem nodeId="14" label="Reports">
                              <TreeItem nodeId="15" label="Report1" />
                              <TreeItem nodeId="16" label="Report2" />
                              <TreeItem nodeId="17" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="18" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="19" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="20" label="Treeview2">
                      <TreeItem nodeId="21" label="Company Maintenance" />
                      <TreeItem nodeId="22" label="Employees">
                        <TreeItem nodeId="23" label="Reports">
                          <TreeItem nodeId="24" label="Report1" />
                          <TreeItem nodeId="25" label="Report2" />
                          <TreeItem nodeId="26" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="27" label="Employee Maint.">
                          <TreeItem nodeId="28" label="Reports">
                            <TreeItem nodeId="29" label="Report1" />
                            <TreeItem nodeId="30" label="Report2" />
                            <TreeItem nodeId="31" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="32" label="Employee Maint." >
                            <TreeItem nodeId="33" label="Reports">
                              <TreeItem nodeId="34" label="Report1" />
                              <TreeItem nodeId="35" label="Report2" />
                              <TreeItem nodeId="36" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="37" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="38" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="39" label="Treeview3">
                      <TreeItem nodeId="40" label="Company Maintenance" />
                      <TreeItem nodeId="41" label="Employees">
                        <TreeItem nodeId="42" label="Reports">
                          <TreeItem nodeId="43" label="Report1" />
                          <TreeItem nodeId="44" label="Report2" />
                          <TreeItem nodeId="45" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="46" label="Employee Maint.">
                          <TreeItem nodeId="47" label="Reports">
                            <TreeItem nodeId="48" label="Report1" />
                            <TreeItem nodeId="49" label="Report2" />
                            <TreeItem nodeId="50" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="51" label="Employee Maint.">
                            <TreeItem nodeId="52" label="Reports">
                              <TreeItem nodeId="53" label="Report1" />
                              <TreeItem nodeId="54" label="Report2" />
                              <TreeItem nodeId="55" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="56" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="57" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="58" label="Treeview4">
                      <TreeItem nodeId="59" label="Company Maintenance" />
                      <TreeItem nodeId="60" label="Employees">
                        <TreeItem nodeId="61" label="Reports">
                          <TreeItem nodeId="62" label="Report1" />
                          <TreeItem nodeId="63" label="Report2" />
                          <TreeItem nodeId="64" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="65" label="Employee Maint.">
                          <TreeItem nodeId="66" label="Reports">
                            <TreeItem nodeId="67" label="Report1" />
                            <TreeItem nodeId="68" label="Report2" />
                            <TreeItem nodeId="69" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="70" label="Employee Maint." >
                            <TreeItem nodeId="71" label="Reports">
                              <TreeItem nodeId="72" label="Report1" />
                              <TreeItem nodeId="73" label="Report2" />
                              <TreeItem nodeId="74" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="75" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="76" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="77" label="Treeview5">
                      <TreeItem nodeId="78" label="Company Maintenance" />
                      <TreeItem nodeId="79" label="Employees">
                        <TreeItem nodeId="80" label="Reports">
                          <TreeItem nodeId="81" label="Report1" />
                          <TreeItem nodeId="82" label="Report2" />
                          <TreeItem nodeId="83" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="84" label="Employee Maint.">
                          <TreeItem nodeId="85" label="Reports">
                            <TreeItem nodeId="86" label="Report1" />
                            <TreeItem nodeId="87" label="Report2" />
                            <TreeItem nodeId="88" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="89" label="Employee Maint." >
                            <TreeItem nodeId="90" label="Reports">
                              <TreeItem nodeId="91" label="Report1" />
                              <TreeItem nodeId="92" label="Report2" />
                              <TreeItem nodeId="93" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="94" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="95" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="96" label="Treeview6">
                      <TreeItem nodeId="97" label="Company Maintenance" />
                      <TreeItem nodeId="98" label="Employees">
                        <TreeItem nodeId="99" label="Reports">
                          <TreeItem nodeId="100" label="Report1" />
                          <TreeItem nodeId="101" label="Report2" />
                          <TreeItem nodeId="102" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="103" label="Employee Maint.">
                          <TreeItem nodeId="104" label="Reports">
                            <TreeItem nodeId="105" label="Report1" />
                            <TreeItem nodeId="106" label="Report2" />
                            <TreeItem nodeId="107" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="108" label="Employee Maint." >
                            <TreeItem nodeId="109" label="Reports">
                              <TreeItem nodeId="110" label="Report1" />
                              <TreeItem nodeId="111" label="Report2" />
                              <TreeItem nodeId="112" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="113" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="114" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>



                <Col lg={6} xl={4} md={12} sm={12} className=" mt-4 mt-lg-0">
                  <TreeView className='treeview arrow-tree'
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ArrowCircleRightOutlinedIcon />}
                    defaultExpandIcon={<ArrowCircleDownIcon />}
                  >
                    <TreeItem nodeId="1" label="Treeview1">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports">
                          <TreeItem nodeId="5" label="Report1" />
                          <TreeItem nodeId="6" label="Report2" />
                          <TreeItem nodeId="7" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="8" label="Employee Maint.">
                          <TreeItem nodeId="9" label="Reports">
                            <TreeItem nodeId="10" label="Report1" />
                            <TreeItem nodeId="11" label="Report2" />
                            <TreeItem nodeId="12" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="13" label="Employee Maint." >
                            <TreeItem nodeId="14" label="Reports">
                              <TreeItem nodeId="15" label="Report1" />
                              <TreeItem nodeId="16" label="Report2" />
                              <TreeItem nodeId="17" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="18" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="19" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="20" label="Treeview2">
                      <TreeItem nodeId="21" label="Company Maintenance" />
                      <TreeItem nodeId="22" label="Employees">
                        <TreeItem nodeId="23" label="Reports">
                          <TreeItem nodeId="24" label="Report1" />
                          <TreeItem nodeId="25" label="Report2" />
                          <TreeItem nodeId="26" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="27" label="Employee Maint.">
                          <TreeItem nodeId="28" label="Reports">
                            <TreeItem nodeId="29" label="Report1" />
                            <TreeItem nodeId="30" label="Report2" />
                            <TreeItem nodeId="31" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="32" label="Employee Maint." >
                            <TreeItem nodeId="33" label="Reports">
                              <TreeItem nodeId="34" label="Report1" />
                              <TreeItem nodeId="35" label="Report2" />
                              <TreeItem nodeId="36" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="37" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="38" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="39" label="Treeview3">
                      <TreeItem nodeId="40" label="Company Maintenance" />
                      <TreeItem nodeId="41" label="Employees">
                        <TreeItem nodeId="42" label="Reports">
                          <TreeItem nodeId="43" label="Report1" />
                          <TreeItem nodeId="44" label="Report2" />
                          <TreeItem nodeId="45" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="46" label="Employee Maint.">
                          <TreeItem nodeId="47" label="Reports">
                            <TreeItem nodeId="48" label="Report1" />
                            <TreeItem nodeId="49" label="Report2" />
                            <TreeItem nodeId="50" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="51" label="Employee Maint.">
                            <TreeItem nodeId="52" label="Reports">
                              <TreeItem nodeId="53" label="Report1" />
                              <TreeItem nodeId="54" label="Report2" />
                              <TreeItem nodeId="55" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="56" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="57" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="58" label="Treeview4">
                      <TreeItem nodeId="59" label="Company Maintenance" />
                      <TreeItem nodeId="60" label="Employees">
                        <TreeItem nodeId="61" label="Reports">
                          <TreeItem nodeId="62" label="Report1" />
                          <TreeItem nodeId="63" label="Report2" />
                          <TreeItem nodeId="64" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="65" label="Employee Maint.">
                          <TreeItem nodeId="66" label="Reports">
                            <TreeItem nodeId="67" label="Report1" />
                            <TreeItem nodeId="68" label="Report2" />
                            <TreeItem nodeId="69" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="70" label="Employee Maint." >
                            <TreeItem nodeId="71" label="Reports">
                              <TreeItem nodeId="72" label="Report1" />
                              <TreeItem nodeId="73" label="Report2" />
                              <TreeItem nodeId="74" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="75" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="76" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="77" label="Treeview5">
                      <TreeItem nodeId="78" label="Company Maintenance" />
                      <TreeItem nodeId="79" label="Employees">
                        <TreeItem nodeId="80" label="Reports">
                          <TreeItem nodeId="81" label="Report1" />
                          <TreeItem nodeId="82" label="Report2" />
                          <TreeItem nodeId="83" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="84" label="Employee Maint.">
                          <TreeItem nodeId="85" label="Reports">
                            <TreeItem nodeId="86" label="Report1" />
                            <TreeItem nodeId="87" label="Report2" />
                            <TreeItem nodeId="88" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="89" label="Employee Maint." >
                            <TreeItem nodeId="90" label="Reports">
                              <TreeItem nodeId="91" label="Report1" />
                              <TreeItem nodeId="92" label="Report2" />
                              <TreeItem nodeId="93" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="94" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="95" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="96" label="Treeview6">
                      <TreeItem nodeId="97" label="Company Maintenance" />
                      <TreeItem nodeId="98" label="Employees">
                        <TreeItem nodeId="99" label="Reports">
                          <TreeItem nodeId="100" label="Report1" />
                          <TreeItem nodeId="101" label="Report2" />
                          <TreeItem nodeId="102" label="Report3" />
                        </TreeItem>
                        <TreeItem nodeId="103" label="Employee Maint.">
                          <TreeItem nodeId="104" label="Reports">
                            <TreeItem nodeId="105" label="Report1" />
                            <TreeItem nodeId="106" label="Report2" />
                            <TreeItem nodeId="107" label="Report3" />
                          </TreeItem>
                          <TreeItem nodeId="108" label="Employee Maint." >
                            <TreeItem nodeId="109" label="Reports">
                              <TreeItem nodeId="110" label="Report1" />
                              <TreeItem nodeId="111" label="Report2" />
                              <TreeItem nodeId="112" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="113" label="Employee Maint." />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                      <TreeItem nodeId="114" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
