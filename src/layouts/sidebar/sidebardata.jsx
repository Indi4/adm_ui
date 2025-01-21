import React from "react";

const MenuItems = [
  {
    Items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <i class="bi bi-bar-chart-line-fill"></i>, 
        type: "link",
        active: false,
        selected: false,
      },

      {
        title: "Quick Action",
        path: "/quickAction",
        icon: <i class="bi bi-arrow-repeat"></i>, 
        type: "link",
        active: false,
        selected: false,
      },

      // {
      //   title: "Purchase",
      //   path: "/purchase",
      //   icon: <i className="fe fe-home"></i>, 
      //   type: "link",
      //   active: false,
      //   selected: false,
      // },
      {
        title: "Upload",
        path: "/upload",
        icon: <i class="fa fa-upload" aria-hidden="true"></i>, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "Quality",
        path: "/quality",
        type: "link",
        icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
      },
      {
        title: "Safety",
        path: "/safety",
        type: "link",
        icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
      },
      // {
      //   title: "Production",
      //   path: "/production",
      //   type: "link",
      //   icon: <i class="fa fa-product-hunt" aria-hidden="true"></i>, 
      //   active: false,
      //   selected: false,
      // },
      {
        title: "Utility",
        path: "/utility",
        type: "link",
        icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
      },
      {
        title: "Sales",
        path: "/sales",
        type: "link",
        icon: <i class="bi bi-cart-check"></i>, 
        active: false,
        selected: false,
      },
      {
        title: "HR",
        path: "/hr",
        type: "link",
        icon: <i class="bi bi-hr"></i>, 
        active: false,
        selected: false,
      },
      {
        title: "Finance",
        path: "/finance",
        type: "link",
        icon: <i class="bi bi-currency-euro"></i>, 
        active: false,
        selected: false,
      },
     
    ],
  },
];




export default MenuItems;
