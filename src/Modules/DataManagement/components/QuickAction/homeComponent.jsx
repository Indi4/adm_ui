import React, { useEffect, useState, Fragment, startTransition } from "react";
import { Alert, Card, Button, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DatasetIcon from "@mui/icons-material/Dataset";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../../../../layouts/styles/Common.css'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`environment-tabpanel-${index}`}
            aria-labelledby={`environment-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ pt: 6 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function HomeComponent() {
    const navigate = useNavigate();

    const handleNavigate = (path, tab) => {
        startTransition(() => {
            navigate(path, { state: { tab } });
        });
    };

    const demandDetailsActions = [
        {
            label: "Annual Plan",
            path: "/cdc/demandCapture/annualPlan",
            tab: "demandDetails",
            icon: <CalendarMonthIcon fontSize="large" color="primary" />,
        },
        {
            label: "Dispatch Plan",
            path: "/cdc/demandCapture/rollingPlan",
            tab: "demandDetails",
            icon: <DatasetIcon fontSize="large" sx={{ color: "#f1c40f" }} />,
        },
        {
            label: "Week Wise Sequencing",
            path: "/cdc/demandCapture/weekWiseSequencing",
            tab: "demandDetails",
            icon: <CalendarMonthIcon fontSize="large" sx={{ color: "#7d3c98" }} />,
        },
    ];

    const reportsActions = [
        {
            label: "Finished & Unpainted Stock",
            path: "/cdc/report/finishedUnpaintedStock",
            tab: "stockDetails",
            icon: <ShoppingCartIcon fontSize="large" sx={{ color: "#16a085" }} />,
        },
        {
            label: "Delivery Requirement",
            path: "/cdc/report/deliveryRequirement",
            tab: "stockDetails",
            icon: <AssessmentIcon fontSize="large" sx={{ color: "#c0392b" }} />,
        },
        {
            label: "Procurement Plan",
            path: "/cdc/report/procurementPlan",
            tab: "stockDetails",
            icon: <AssessmentIcon fontSize="large" sx={{ color: "#2980b9" }} />,
        },
    ];

    const breadcrumbs = ["Quick Action"]

    return (
        <Fragment>
            <Pageheader items={breadcrumbs} />
            <Row>
                <Col xl={12}>
                    <Card className=" mg-b-20">
                        <Card.Header>
                            <Card.Title>
                                Demand Capture
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Grid container spacing={3} sx={{ padding: 4 }}>
                                {demandDetailsActions.map((action, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            onClick={() => handleNavigate(action.path, action.tab)}
                                            sx={{
                                                backgroundColor: "#f0f0f5",
                                                borderRadius: "12px",
                                                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
                                                padding: 3,
                                                textAlign: "center",
                                                cursor: "pointer",
                                                position: "relative", // Required for overlay positioning
                                                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    boxShadow: "0px 8px 5px rgba(0, 0, 0, 0.2)",
                                                    background: "#0d6b91a3",
                                                    // "linear-gradient(93deg, #6119a4 1%, #c53745 48%, #4520af 90%, #0c2655 100%)",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            {/* Content inside the Box */}

                                            <Box sx={{ fontSize: 40, mb: 1 }}>{action.icon}</Box>
                                            <Typography variant="h6" sx={{ mt: 1, fontWeight: "medium", opacity: 1 }}>
                                                {action.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                               Reports
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Grid container spacing={3} sx={{ padding: 4 }}>
                                {reportsActions.map((action, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Box
                                            onClick={() => handleNavigate(action.path, action.tab)}
                                            sx={{
                                                backgroundColor: "#f0f0f5",
                                                borderRadius: "12px",
                                                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
                                                padding: 3,
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "transform 0.3s, box-shadow 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    boxShadow: "0px 8px 5px rgba(0, 0, 0, 0.2)",
                                                    background: "#0d6b91a3",
                                                    // "linear-gradient(93deg, #6119a4 1%, #c53745 48%, #4520af 90%, #0c2655 100%)",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            <Box sx={{ fontSize: 40, mb: 1 }}>{action.icon}</Box>
                                            <Typography variant="h6" sx={{ mt: 1, fontWeight: "medium", opacity: 1 }}>
                                                {action.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment >
    )
}

export default HomeComponent
