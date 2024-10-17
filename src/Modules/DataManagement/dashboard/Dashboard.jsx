import React, { useEffect, useState } from 'react';
import { Col, Row } from "reactstrap";
import { connect } from 'react-redux'
import { Grid } from '@mui/material';
import TopCards from './TopCards';
import SalesChart from './SalesChart';
import BreadCrumb from '../../../commonComponent/Breadcrumb';
import RmRequirements from './rmRequirements';
import PlanByMonthComponent from './planByMonthComponent';
import ChangesMadeBycustomer from './changesMadeBycustomer';
import ChangeMadeByProductCode from './changeMadeByProductCode';
import { GET_CARDS_DATA } from "../../endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'

const Dashboard = (props) => {
  const breadcrumbs = [
    { title: "CDC Tool", link: `/main`, active: 0 },
    { title: "Dashboard", link: `dashboard`, active: 1 },
  ];

  const [data, setData] = useState([])

  useEffect(() => {
    props.getCards(GET_CARDS_DATA)
    return () => { reset() }
  }, [])

  useEffect(() => {
    if (props.cardsData && Object.keys(props.cardsData).length > 0) {
      console.log("data", data)
      setData(props.cardsData.data)
    }
  }, [props.cardsData])

  const reset = () => {
    setData([])
  }

  return (
    <>
      <div className="w3-metro-darken">
        {breadcrumbs && <BreadCrumb breadcrumbs={breadcrumbs} />}
      </div>


      {/* Sales & Feed */}
      {/* Full width row */}
      {/* <Grid item xs={12}>
          <QuarterlyChartComponent />
        </Grid> */}
      <Grid container spacing={2}>
        {/* First Graph */}
        <Grid item xs={6} >
          <Grid container spacing={2}>
          <Grid item xs={6}>
              <TopCards
                bg="bg-light-warning text-warning"
                title="New Project"
                subtitle="Rolling Plan Accuracy"
                earning={data.rolling_plan_accuracy}
                icon="bi bi-percent"
              />
              {/* // bg="bg-light-warning text-warning"
            // title="Profit"
            // subtitle="Rolling Plan Accuracy"
            // earning={data.rolling_plan_accuracy}
            // icon="bi bi-percent"
            // bgColor ="rgb(138 37 124 / 98%)"
           // bgColor = 'linear-gradient(93deg, #6119a4 1%, #c53745 48%, #4520af 90%, #0c2655 100%)'
          /> */}
            </Grid>
            <Grid item xs={6}>
              <TopCards
                bg="bg-light-info text-into"
                title="Sales"
                subtitle="RM & WIP Avail. To Produce"
                earning={new Intl.NumberFormat('en-IN').format(data.rm_and_wip_available_to_produce)}
                icon="bi bi-cart4"
              />
              {/* // bg="bg-light-danger text-danger"
            // title="Refunds"
            // subtitle="RM And WIP Available To Produce"
            // earning={new Intl.NumberFormat('en-IN').format(data.rm_and_wip_available_to_produce)}
            // icon="bi bi-cart"
            //  bgColor ="rgb(196 54 69)"
          /> */}
            </Grid>
          </Grid >
          <PlanByMonthComponent />
        </Grid>


        <Grid item xs={6} >
          <RmRequirements />
        </Grid>
        {/* Second and Third Graphs Container */}
        {/* <Grid container spacing={2} direction="row">  */}
        {/* Second Graph */}
        <Grid item xs={12} md={6} >
          <ChangesMadeBycustomer />
        </Grid>

        {/* Third Graph */}
        <Grid item xs={12} md={6}>
          <ChangeMadeByProductCode />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
};
const mapStatetoprops = (state) => {
  return {
    cardsData: state.commonReducer.cardsData,
  }
}

const mapDispatchtoprops = (dispatch) => {
  return {
    getCards: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'cards'))
  }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(Dashboard);
