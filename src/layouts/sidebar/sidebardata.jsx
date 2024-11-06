import React from "react";

const MenuItems = [
  {
    Items: [
      {
        title: "Customer Details",
        path: "/mdm/customer-details",
        icon: <i className="fe fe-user-check"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "BOM Details",
        path: "/mdm/bom-details",
        icon: <i className="fe fe-file-text"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Plant Code",
        path: "/mdm/plant-code",
        icon: <i className="fe fe-map-pin"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Department",
        path: "/mdm/department",
        icon: <i className="fe fe-layers"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "User Details",
        path: "/mdm/user-details",
        icon: <i className="fe fe-user-plus"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
    ],
  },
];

export const CDNMenuItems = [
  {
    Items: [
      {
        title: "Dashboard",
        path: "/cdc/dashboard",
        icon: <i className="fe fe-home"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Quick Action",
        path: "/cdc/quickAction",
        icon:  <i className="fe fe-fast-forward"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Demand Capture",
        type: "sub",
        icon: <i className="fe fe-bar-chart-2"></i>, 
        active: false,
        selected: false,
        children: [
          {
            title: "Annual Plan",
            path: "/cdc/demandCapture/annualPlan",
            type: "link",
            icon: <i className="fe fe-calendar"></i>, 
            active: false,
            selected: false,
          },
          {
            title: "Dispatch Plan",
            path: "/cdc/demandCapture/rollingPlan",
            type: "link",
            icon: <i className="fe fe-repeat"></i>, 
            active: false,
            selected: false,
          },
          {
            title: "Week Wise Sequencing",
            path: "/cdc/demandCapture/weekWiseSequencing",
            type: "link",
            icon: <i className="fe fe-sliders"></i>, 
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Actual Sales",
        path: "/cdc/actualSales",
        icon: <i className="fe fe-dollar-sign"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Actual Dispatch",
        path: "/cdc/actualDispatch",
        icon: <i className="fe fe-truck"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Report",
        type: "sub",
        icon: <i className="fe fe-file-text"></i>, 
        active: false,
        selected: false,
        children: [
          {
            title: "Finished & Unpainted Stock",
            path: "/cdc/report/finishedUnpaintedStock",
            type: "link",
            icon: <i className="fe fe-box"></i>, 
            active: false,
            selected: false,
          },
          {
            title: "Delivery Requirement",
            path: "/cdc/report/deliveryRequirement",
            type: "link",
            icon: <i className="fe fe-truck"></i>, 
            active: false,
            selected: false,
          },
          {
            title: "Procurement Plan",
            path: "/cdc/report/procurementPlan",
            type: "link",
            icon: <i className="fe fe-shopping-bag"></i>, 
            active: false,
            selected: false,
          },
        ],
      },
    ],
  },
];


export default MenuItems;
