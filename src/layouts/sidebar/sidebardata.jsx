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
        path: "/cdn/quick-action",
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
            path: "/cdn/demand-capture/annual-plan",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Rolling Plan",
            path: "/cdn/demand-capture/rolling-plan",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Week Wise Sequencing",
            path: "/cdn/demand-capture/week-wise-sequencing",
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
            path: "/cdn/report/finished-unpainted-stock",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Delivery Requirement",
            path: "/cdn/report/delivery-requirement",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Procurement Plan",
            path: "/cdn/report/procurement-plan",
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
