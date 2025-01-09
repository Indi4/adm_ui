import React from "react";

const MenuItems = [
  {
    Items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <i className="fe fe-home"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Purchase",
        path: "/purchase",
        icon: <i className="fe fe-home"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Upload",
        path: "/upload",
        icon: <i className="fe fe-home"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Quality",
        type: "sub",
        icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
        children: [
          {
            title: "PPM",
            path: "/quality/ppm",
            type: "link",
            icon: <i className="fe fe-calendar" style={{color:"#2e5d9f"}}></i>,
            active: false,
            selected: false,
          },
          {
            title: "COPQ",
            path: "/quality/copq",
            type: "link",
            icon: <i className="fe fe-calendar" style={{color:"#2e5d9f"}}></i>,
            active: false,
            selected: false,
          },
          {
            title: "Process Scrap",
            path: "/quality/process_scrap",
            type: "link",
            icon: <i className="fe fe-calendar" style={{color:"#2e5d9f"}}></i>,
            active: false,
            selected: false,
          },
          {
            title: "Design Scrap",
            path: "/quality/design_scrap",
            type: "link",
            icon: <i className="fe fe-calendar" style={{color:"#2e5d9f"}}></i>,
            active: false,
            selected: false,
          },
        ]
      },
     
    ],
  },
];




export default MenuItems;
