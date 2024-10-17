import React, { Fragment, useEffect } from 'react'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Button, Card, Row } from 'react-bootstrap'
import * as switcherdata from '../../../layouts/switcher/switcherdata'

export default function Switcher() {
	const breadcrumbs = ["Pages", "Switcher"];
	useEffect(() => {
		switcherdata.LocalBackup();
	}, [])
	return (
		<Fragment>

			<Pageheader items={breadcrumbs} />

			<div className="container">
				<Row>
					<div className="col-lg-6 m-auto">
						<Card className="sidebar-right1">
							<Card.Body>
								<div className="predefined_styles">
									<div className="swichermainleft text-center">
										<h5 className="fw-semibold text-start">LTR AND RTL VERSIONS</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">LTR</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" onClick={() => switcherdata.Ltr()}
														id="myonoffswitch54" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch54" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">RTL</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" onClick={() => switcherdata.Rtl()}
														id="myonoffswitch55" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch55" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft">
										<h5 className="fw-semibold text-start">Theme Style</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex">
													<span className="me-auto text-muted-dark">Light Theme</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" onClick={() => switcherdata.Lightmode()}
														id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">Dark Theme</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" onClick={() => switcherdata.Darktheme()}
														id="myonoffswitch2" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft switcher-nav">
										<h5 className="fw-semibold text-start">Navigation Style</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex" >
													<span className="me-auto text-muted-dark">Vertical Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" onClick={() => switcherdata.Verticalmenu()}
														id="myonoffswitch34" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch34" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Horizantal Click Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" onClick={() => switcherdata.Horizontalmenu()}
														id="myonoffswitch35" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch35" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Horizantal Hover Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch15" onClick={() => switcherdata.HorizontalHoverMenu()}
														id="myonoffswitch111" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch111" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft horizontal-switcher">
										<h5 className="text-start fw-semibold">Horizontal layout Styles</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex">
													<span className="me-auto text-muted-dark">Default Logo</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch16" id="switchbtn-defaultlogo" className="onoffswitch2-checkbox"
														onClick={() => switcherdata.Defaultlogo()} defaultChecked />
														<label htmlFor="switchbtn-defaultlogo" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">Center Logo</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch16" id="switchbtn-centerlogo" className="onoffswitch2-checkbox"
														onClick={() => switcherdata.Centerlogo()} />
														<label htmlFor="switchbtn-centerlogo" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft">
										<h5 className="fw-semibold text-start">Theme Primary Color</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex">
													<span className="me-auto text-muted-dark">Primary Color</span>
													<div className="">

														<switcherdata.ThemePrimaryColor />
													</div>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">Background Color</span>
													<div className="">

														<switcherdata.Backgroundcolor />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft leftmenu-styles">
										<h5 className="fw-semibold text-start">Menu Styles</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex" >
													<span className="me-auto text-muted-dark">Light Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" onClick={() => switcherdata.Lightmenu()}
														id="myonoffswitch3" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch3" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Color Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" onClick={() => switcherdata.Colormenu()}
														id="myonoffswitch4" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch4" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Dark Menu</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch2" onClick={() => switcherdata.Darkmenu()}
														id="myonoffswitch5" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch5" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft header-styles">
										<h5 className="fw-semibold text-start">Header Styles</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex" >
													<span className="me-auto text-muted-dark">Light Header</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" onClick={() => switcherdata.Lightheader()}
														id="myonoffswitch6" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch6" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">Color Header</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" onClick={() => switcherdata.Colorheader()}
														id="myonoffswitch7" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch7" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Dark Header</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch3" onClick={() => switcherdata.Darkheader()}
														id="myonoffswitch8" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch8" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft">
										<h5 className="fw-semibold text-start">Layout Width Styles</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex" >
													<span className="me-auto text-muted-dark">Full Width</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch04" onClick={() => switcherdata.Fullwidth()}
														id="myonoffswitch9" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch9" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2" >
													<span className="me-auto text-muted-dark">Boxed</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch04" onClick={() => switcherdata.Boxedwidth()}
														id="myonoffswitch10" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch10" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft switcher-layout">
										<h5 className="fw-semibold text-start">Layout Positions</h5>
										<div className="skin-body">
											<div className="switch_section">
												<div className="switch-toggle d-flex" >
													<span className="me-auto text-muted-dark">Fixed</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch5" onClick={() => switcherdata.Fixed()}
														id="myonoffswitch11" className="onoffswitch2-checkbox" defaultChecked />
														<label htmlFor="myonoffswitch11" className="onoffswitch2-label"></label>
													</p>
												</div>
												<div className="switch-toggle d-flex mt-2">
													<span className="me-auto text-muted-dark">Scrollable</span>
													<p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch5" onClick={() => switcherdata.Scrollable()}
														id="myonoffswitch12" className="onoffswitch2-checkbox" />
														<label htmlFor="myonoffswitch12" className="onoffswitch2-label"></label>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="swichermainleft">
										<h5 className="fw-semibold text-start">Reset All Styles</h5>
										<div className="skin-body">
											<div className="switch_section px-2">
												<Button className="btn btn-danger btn-block" type="button" onClick={() => switcherdata.Resetall()} >Reset All
												</Button>
											</div>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Row>
			</div>



		</Fragment>
	)
}
