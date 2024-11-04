import React from "react";
const MenuItems = [
  {
    Items: [
      {
        title: "Customer Details",
        path: "/mdm/customer-details",
        icon: <i className="fe fe-user"></i>,
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "BOM Details",
        path: "/mdm/bom-details",
        icon: <i className="fe fe-list"></i>,
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
        icon: <i className="fe fe-briefcase"></i>,
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "User Details",
        path: "/mdm/user-details",
        icon: <i className="fe fe-users"></i>,
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
        path: "/cdn/dashboard",
        icon: <i className="fe fe-home"></i>,
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Quick Action",
        path: "/cdn/quickAction",
        icon: <i className="fe fe-fast-forward"></i>,
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Demand Capture",
        type: "sub",
        icon: <i className="fe fe-bar-chart"></i>,
        active: false,
        selected: false,
        children: [
          {
            title: "Annual Plan",
            path: "/cdn/demandCapture/annualPlan",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Rolling Plan",
            path: "/cdn/demandCapture/rollingPlan",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Week Wise Sequencing",
            path: "/cdn/demandCapture/weekWiseSequencing",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Actual Sales",
        path: "/cdn/actualSales",
        icon: <i className="fe fe-fast-forward"></i>,
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Actual Dispatch",
        path: "/cdn/actualDispatch",
        icon: <i className="fe fe-fast-forward"></i>,
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
            path: "/cdn/report/finishedUnpaintedStock",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Delivery Requirement",
            path: "/cdn/report/deliveryRequirement",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Procurement Plan",
            path: "/cdn/report/procurementPlan",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
    ],
  },
];

export default MenuItems;
