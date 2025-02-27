import React from "react";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PPCIcon from '@mui/icons-material/Event'
import Maintenance from "../../assets/images/pngs/13.png"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { LuListTodo } from "react-icons/lu";
import safetyIcon from "../../assets/images/sidebarIcon/safety.svg"
import qualityIcon from "../../assets/images/sidebarIcon/quality.svg"
import productionIcon from "../../assets/images/sidebarIcon/production.svg"
import ppcIcon from "../../assets/images/sidebarIcon/ppc.svg"
import storePurchaseIcon from "../../assets/images/sidebarIcon/storeandperches.svg"
import maintenanceIcon from "../../assets/images/sidebarIcon/maintanace.svg" 
import hrIcon from "../../assets/images/sidebarIcon/hr.svg"
import toolRooms from "../../assets/images/sidebarIcon/Toolsrooms.svg"
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

  // Blue color with size 24px

const MenuItems = [
  {
    Items: [
      // {
      //   title: "Dashboard",
      //   path: "/dashboard",
      //   icon: <i class="bi bi-bar-chart-line-fill"></i>, 
      //   type: "link",
      //   active: false,
      //   selected: false,
      // },

      // {
      //   title: "Quick Action",
      //   path: "/quickAction",
      //   icon: <i class="bi bi-arrow-repeat"></i>, 
      //   type: "link",
      //   active: false,
      //   selected: false,
      // },

      // {
      //   title: "Purchase",
      //   path: "/purchase",
      //   icon: <i className="fe fe-home"></i>, 
      //   type: "link",
      //   active: false,
      //   selected: false,
      // },
      {
        title: "Safety",
        path: "/safety",
        type: "link",
        // icon: <HealthAndSafetyIcon/>
        icon: <img src={safetyIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        
        active: false,
        selected: false,
      },
 
      {
        title: "Quality",
        path: "/quality",
        type: "link",
        // icon: <AssignmentTurnedInIcon/>, 
        icon: <img src={qualityIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },
 

      {
        title: "Production",
        path: "/production",
        type: "link",
        // icon: <i class="fa fa-product-hunt" aria-hidden="true"></i>, 
        icon: <img src={productionIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },
    
      {
        title: "PPC",
        path: "/ppc",
        type: "link",
        // icon: <PPCIcon/>, 
        icon: <img src={ppcIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },
      
      {
        title: "Store & Purchase",
        path: "/store-purchase",
        type: "link",
        // icon: <TrendingUpIcon/>, 
        icon: <img src={storePurchaseIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },
      {
        title: "Maintenance",
        path: "/maintenance",
        icon: <img src={maintenanceIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />, 
        type: "link",
        active: false,
        selected: false,
      },
       {
        title: "HR",
        path: "/hr",
        type: "link",
        // icon: <Diversity3Icon/>, 
        icon: <img src={hrIcon} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },
     
      {
        title: "Cost",
        path: "/cost",
        type: "link",
        icon: <CurrencyRupeeIcon sx={{ color: "#4CAF50", fontSize: 30 }} />,
        //  <CurrencyRupeeIcon/>,
        //  <AttachMoneyIcon />,
        // icon: <i className="fe fe-home"></i>, 
        active: false,
        selected: false,
      },
     
  
     
      {
        title: "Upload",
        path: "/upload",
         icon: <CloudUploadIcon sx={{ color: "#1976D2", fontSize: 24 }} />,
        //  <i class="fa fa-upload" aria-hidden="true"></i>, 
        // icon: <img src={Maintenance} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        type: "link",
        active: false,
        selected: false,
      },
//       {

//         title: "Tool Room",
//         path: "/toolRoom",
//         type: "link",
//         icon: <i className="fe fe-home"></i>, 

//         active: false,
//         selected: false,
//       },
      // {
      //   title: "Finance",
      //   path: "/finance",
      //   type: "link",
      //   icon: <AccountBalanceIcon/>, 
      //   active: false,
      //   selected: false,
      // },
      {
        title: "MOM",
        path: "/mom",
        type: "link",
        // icon: <LuListTodo />, 
        icon: <img src={toolRooms} alt="Maintenance" style={{ width: "24px", height: "24px" }} />,
        active: false,
        selected: false,
      },

     
    ],
  },
];




export default MenuItems;
