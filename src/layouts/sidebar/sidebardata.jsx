import React from "react";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PPCIcon from '@mui/icons-material/Event'
import Maintenance from "../../assets/images/pngs/13.png"
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
        title: "Safety",
        path: "/safety",
        type: "link",
        icon: <HealthAndSafetyIcon/>,
        active: false,
        selected: false,
      },
      {
        title: "Production",
        path: "/production",
        type: "link",
        icon: <i class="fa fa-product-hunt" aria-hidden="true"></i>, 
        active: false,
        selected: false,
      },
      {
        title: "Quality",
        path: "/quality",
        type: "link",
        icon: <AssignmentTurnedInIcon/>, 
        active: false,
        selected: false,
      },
      {
        title: "PPC",
        path: "/ppc",
        type: "link",
        icon: <PPCIcon/>, 
        active: false,
        selected: false,
      },
      
      {
        title: "Store & Purchase",
        path: "/store-purchase",
        type: "link",
        icon: <TrendingUpIcon/>, 
        active: false,
        selected: false,
      },
      {
        title: "Maintenance",
        path: "/maintenance",
        icon: <img src={Maintenance} alt="Maintenance" style={{ width: "24px", height: "24px" }} />, 
        type: "link",
        active: false,
        selected: false,
      },
      {
        title: "HR",
        path: "/hr",
        type: "link",
        icon: <Diversity3Icon/>, 
        active: false,
        selected: false,
      },
      {
        title: "Tool Room",
        path: "/toolRoom",
        type: "link",
        icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
      },
      // {
      //   title: "Finance",
      //   path: "/finance",
      //   type: "link",
      //   icon: <AccountBalanceIcon/>, 
      //   active: false,
      //   selected: false,
      // },
     
    ],
  },
];




export default MenuItems;
