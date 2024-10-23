import React from 'react'

const MenuItems = [
  {
    menutitle: 'MAIN',
    Items: [
      {
        icon: (<i className="side-menu__icon ri-home-4-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Dashboard',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}dashboard/sales`, type: 'link', active: false, selected: false, title: 'Sales' },
          { path: `${import.meta.env.BASE_URL}dashboard/ecommerce`, type: 'link', active: false, selected: false, title: 'E-Commerce' },
          { path: `${import.meta.env.BASE_URL}dashboard/analytics`, type: 'link', active: false, selected: false, title: 'Analytics' },
          { path: `${import.meta.env.BASE_URL}dashboard/medical`, type: 'link', active: false, selected: false, title: 'Medical' },
          { path: `${import.meta.env.BASE_URL}dashboard/crypto`, type: 'link', active: false, selected: false, title: 'Crypto' },
          { path: `${import.meta.env.BASE_URL}dashboard/customerDetails`, type: 'link', active: false, selected: false, title: 'Customer Details' },
          { path: `${import.meta.env.BASE_URL}dashboard/bomDetails`, type: 'link', active: false, selected: false, title: 'BOM Details' }
        ]
      }
    ]
  },
  {
    menutitle: 'UI KIT',
    Items: [
      {
        icon: (<i className="side-menu__icon ri-bubble-chart-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Apps',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}apps/cardsdesign`, type: 'link', active: false, selected: false, title: 'Cards design' },
          { path: `${import.meta.env.BASE_URL}apps/defaultcalender`, type: 'link', active: false, selected: false, title: 'Default calender' },
          { path: `${import.meta.env.BASE_URL}apps/fulcalender`, type: 'link', active: false, selected: false, title: 'Full calender' },
          { path: `${import.meta.env.BASE_URL}apps/chat`, type: 'link', active: false, selected: false, title: 'Chat' },
          { path: `${import.meta.env.BASE_URL}apps/notifications`, type: 'link', active: false, selected: false, title: 'Notifications' },
          { path: `${import.meta.env.BASE_URL}apps/sweetalerts`, type: 'link', active: false, selected: false, title: 'Sweet alerts' },
          { path: `${import.meta.env.BASE_URL}apps/rangeslider`, type: 'link', active: false, selected: false, title: 'Range slider' },
          { path: `${import.meta.env.BASE_URL}apps/contentscrollbar`, type: 'link', active: false, selected: false, title: 'Content Scroll bar' },
          { path: `${import.meta.env.BASE_URL}apps/loaders`, type: 'link', active: false, selected: false, title: 'Loaders' },
          { path: `${import.meta.env.BASE_URL}apps/counters`, type: 'link', active: false, selected: false, title: 'Counters' },
          { path: `${import.meta.env.BASE_URL}apps/rating`, type: 'link', active: false, selected: false, title: 'Rating' },
          { path: `${import.meta.env.BASE_URL}apps/treeview`, type: 'link', active: false, selected: false, title: 'Treeview' },
          { path: `${import.meta.env.BASE_URL}apps/footers`, type: 'link', active: false, selected: false, title: 'Footers' },
          { path: `${import.meta.env.BASE_URL}apps/userlist`, type: 'link', active: false, selected: false, title: 'User List' },
          { path: `${import.meta.env.BASE_URL}apps/search`, type: 'link', active: false, selected: false, title: 'Search' },
          { path: `${import.meta.env.BASE_URL}apps/cryptocurrencies`, type: 'link', active: false, selected: false, title: 'Crypto-currencies' },
          { path: `${import.meta.env.BASE_URL}apps/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' }
        ]
      },
      {
        icon: (<i className="side-menu__icon ri-virus-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Bootstrap',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}bootstrap/alerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
          { path: `${import.meta.env.BASE_URL}bootstrap/buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
          { path: `${import.meta.env.BASE_URL}bootstrap/colors`, type: 'link', active: false, selected: false, title: 'Colors' },
          { path: `${import.meta.env.BASE_URL}bootstrap/avatarsquare`, type: 'link', active: false, selected: false, title: 'Avatar Square' },
          { path: `${import.meta.env.BASE_URL}bootstrap/avatarradius`, type: 'link', active: false, selected: false, title: 'Avatar Radius' },
          { path: `${import.meta.env.BASE_URL}bootstrap/avatarrounded`, type: 'link', active: false, selected: false, title: 'Avatar Rounded' },
          { path: `${import.meta.env.BASE_URL}bootstrap/dropdowns`, type: 'link', active: false, selected: false, title: 'Dropdowns' },
          { path: `${import.meta.env.BASE_URL}bootstrap/listgroup`, type: 'link', active: false, selected: false, title: 'List Group' },
          { path: `${import.meta.env.BASE_URL}bootstrap/tags`, type: 'link', active: false, selected: false, title: 'Tags' },
          { path: `${import.meta.env.BASE_URL}bootstrap/pagination`, type: 'link', active: false, selected: false, title: 'Pagination' },
          { path: `${import.meta.env.BASE_URL}bootstrap/navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
          { path: `${import.meta.env.BASE_URL}bootstrap/typography`, type: 'link', active: false, selected: false, title: 'Typography' },
          { path: `${import.meta.env.BASE_URL}bootstrap/breadcrumbs`, type: 'link', active: false, selected: false, title: 'Breadcrumbs' },
          { path: `${import.meta.env.BASE_URL}bootstrap/badgespills`, type: 'link', active: false, selected: false, title: 'Badges / Pills' },
          { path: `${import.meta.env.BASE_URL}bootstrap/thumbnails`, type: 'link', active: false, selected: false, title: 'Thumbnails' },
          { path: `${import.meta.env.BASE_URL}bootstrap/offcanvas`, type: 'link', active: false, selected: false, title: 'Offcanvas' },
          { path: `${import.meta.env.BASE_URL}bootstrap/toast`, type: 'link', active: false, selected: false, title: 'Toast' },
         
          { path: `${import.meta.env.BASE_URL}bootstrap/mediaobject`, type: 'link', active: false, selected: false, title: 'Media Object' },
          { path: `${import.meta.env.BASE_URL}bootstrap/accordion`, type: 'link', active: false, selected: false, title: 'Accordions' },
          { path: `${import.meta.env.BASE_URL}bootstrap/tabs`, type: 'link', active: false, selected: false, title: 'Tabs' },
          { path: `${import.meta.env.BASE_URL}bootstrap/modal`, type: 'link', active: false, selected: false, title: 'Modal' },
          { path: `${import.meta.env.BASE_URL}bootstrap/tooltipandpopover`, type: 'link', active: false, selected: false, title: 'Tooltip and popover' },
          { path: `${import.meta.env.BASE_URL}bootstrap/progress`, type: 'link', active: false, selected: false, title: 'Progress' },
          { path: `${import.meta.env.BASE_URL}bootstrap/carousels`, type: 'link', active: false, selected: false, title: 'Carousels' }

        ]
      },
      {
        icon: (<i className="side-menu__icon ri-database-2-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Components',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          {
            path: `${import.meta.env.BASE_URL}components/forms`,
            type: 'sub',
            Name:'',
            active: false,
            selected: false,
            title: 'Forms',
               
            children: [
              { path: `${import.meta.env.BASE_URL}components/forms/formelements`, type: 'link', active: false, selected: false, title: 'Form Elements' },
              { path: `${import.meta.env.BASE_URL}components/forms/formlayouts`, type: 'link', active: false, selected: false, title: 'Form Layouts' },
              { path: `${import.meta.env.BASE_URL}components/forms/formadvanced`, type: 'link', active: false, selected: false, title: 'Form Advanced' },
              { path: `${import.meta.env.BASE_URL}components/forms/formeditor`, type: 'link', active: false, selected: false, title: 'Form Editor' },
              { path: `${import.meta.env.BASE_URL}components/forms/formwizard`, type: 'link', active: false, selected: false, title: 'Form Wizard' },
              { path: `${import.meta.env.BASE_URL}components/forms/formvalidation`, type: 'link', active: false, selected: false, title: 'Form Validation' }
            ]
          },
          {
            path: `${import.meta.env.BASE_URL}components/tables`,
            type: 'sub',
            Name:'',
            active: false,
            selected: false,
            title: 'Tables',
              
            children: [
              { path: `${import.meta.env.BASE_URL}components/tables/defaulttable`, type: 'link', active: false, selected: false, title: 'Default table' },
              { path: `${import.meta.env.BASE_URL}components/tables/datatables`, type: 'link', active: false, selected: false, title: 'Data Tables' }

            ]
          },
          {
            path: `${import.meta.env.BASE_URL}components/filemanager`,
            type: 'sub',
            Name:'',
            active: false,
            selected: false,
            title: 'File manager',
             
            children: [
              { path: `${import.meta.env.BASE_URL}components/filemanager/filemanager`, type: 'link', active: false, selected: false, title: 'File Manager' },
              { path: `${import.meta.env.BASE_URL}components/filemanager/filemanagerlist`, type: 'link', active: false, selected: false, title: 'File Manager List' },
              { path: `${import.meta.env.BASE_URL}components/filemanager/filedetails`, type: 'link', active: false, selected: false, title: 'File Details' },
              { path: `${import.meta.env.BASE_URL}components/filemanager/fileattachments`, type: 'link', active: false, selected: false, title: 'File Attachments' }
            ]
          }

        ]
      }
    ]
  },

  {
    menutitle: 'PRE-BUILD PAGES',
    Items: [
      {
        icon: (<i className="side-menu__icon ri-pages-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Pages',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}pages/profile`, type: 'link', active: false, selected: false, title: 'Profile' },
          { path: `${import.meta.env.BASE_URL}pages/notificationslist`, type: 'link', active: false, selected: false, title: 'Notifications List' },
          { path: `${import.meta.env.BASE_URL}pages/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
          { path: `${import.meta.env.BASE_URL}pages/mailcompose`, type: 'link', active: false, selected: false, title: 'Mail-Compose' },
          { path: `${import.meta.env.BASE_URL}pages/mailinbox`, type: 'link', active: false, selected: false, title: 'Mail-Inbox' },
          { path: `${import.meta.env.BASE_URL}pages/mailread`, type: 'link', active: false, selected: false, title: 'Mail-Read' },
          { path: `${import.meta.env.BASE_URL}pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
          {
            path: `${import.meta.env.BASE_URL}pages/extension`,
            type: 'sub',
            Name:'',
            active: false,
            selected: false,
            title: 'Extension',         
            children: [
              { path: `${import.meta.env.BASE_URL}pages/extension/aboutcompany`, type: 'link', active: false, selected: false, title: 'About Company' },
              { path: `${import.meta.env.BASE_URL}pages/extension/services`, type: 'link', active: false, selected: false, title: 'Services' },
              { path: `${import.meta.env.BASE_URL}pages/extension/faqs`, type: 'link', active: false, selected: false, title: 'FAQS' },
              { path: `${import.meta.env.BASE_URL}pages/extension/terms`, type: 'link', active: false, selected: false, title: 'Terms' },
              { path: `${import.meta.env.BASE_URL}pages/extension/invoice`, type: 'link', active: false, selected: false, title: 'Invoice' },
              { path: `${import.meta.env.BASE_URL}pages/extension/pricingtables`, type: 'link', active: false, selected: false, title: 'Pricing Tables' },
              { path: `${import.meta.env.BASE_URL}pages/extension/settings`, type: 'link', active: false, selected: false, title: 'Settings' },
              { path: `${import.meta.env.BASE_URL}pages/extension/blog`, type: 'link', active: false, selected: false, title: 'Blog' },
              { path: `${import.meta.env.BASE_URL}pages/extension/blogdetails`, type: 'link', active: false, selected: false, title: 'Blog Details' },
              { path: `${import.meta.env.BASE_URL}pages/extension/blogpost`, type: 'link', active: false, selected: false, title: 'Blog Post' },
              { path: `${import.meta.env.BASE_URL}pages/extension/emptypage`, type: 'link', active: false, selected: false, title: 'Empty page' },
              { path: `${import.meta.env.BASE_URL}pages/extension/underconstruction`, type: 'link', active: false, selected: false, title: 'Under Construction' }
            ]
          },
          { path: `${import.meta.env.BASE_URL}pages/switcherpage`, type: 'link', active: false, selected: false, title: 'Switcher' }

        ]
      },
      {
        icon: (<i className="side-menu__icon ri-git-repository-private-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'E-Commerce',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}ecommerce/shop`, type: 'link', active: false, selected: false, title: 'Shop' },
          { path: `${import.meta.env.BASE_URL}ecommerce/productdetails`, type: 'link', active: false, selected: false, title: 'Product Details' },
          { path: `${import.meta.env.BASE_URL}ecommerce/shoppingcart`, type: 'link', active: false, selected: false, title: 'Shopping Cart' },
          { path: `${import.meta.env.BASE_URL}ecommerce/addproduct`, type: 'link', active: false, selected: false, title: 'Add Product' },
          { path: `${import.meta.env.BASE_URL}ecommerce/wishlist`, type: 'link', active: false, selected: false, title: 'Wishlist' },
          { path: `${import.meta.env.BASE_URL}ecommerce/checkout`, type: 'link', active: false, selected: false, title: 'Checkout' }
        ]
      }
    ]
  },

  {
    menutitle: 'MISC PAGES',
    Items: [
      {
        icon: (<i className="side-menu__icon ri-bug-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Authentication',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}authentication/login`, type: 'link', active: false, selected: false, title: 'Login' },
          { path: `${import.meta.env.BASE_URL}authentication/register`, type: 'link', active: false, selected: false, title: 'Register' },
          { path: `${import.meta.env.BASE_URL}authentication/forgotpassword`, type: 'link', active: false, selected: false, title: 'Forgot Password' },
          { path: `${import.meta.env.BASE_URL}authentication/lockscreen`, type: 'link', active: false, selected: false, title: 'Lock screen' },
          {
            path: `${import.meta.env.BASE_URL}authentication/errorpages`,
            type: 'sub',
            Name:'',
            active: false,
            selected: false,
            title: 'Error pages',        
            children: [
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error400`, type: 'link', active: false, selected: false, title: '400' },
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error401`, type: 'link', active: false, selected: false, title: '401' },
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error403`, type: 'link', active: false, selected: false, title: '403' },
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error404`, type: 'link', active: false, selected: false, title: '404' },
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error500`, type: 'link', active: false, selected: false, title: '500' },
              { path: `${import.meta.env.BASE_URL}authentication/errorpages/error503`, type: 'link', active: false, selected: false, title: ' 503' },
           
            ]
          },

        ]
      },
      {
          icon: (<i className="side-menu__icon ri-menu-unfold-fill"></i>),
          type: 'sub',
     
          active: false,
          selected: false,
          title: 'Submenu items',
          class:'',
          color:'',
          badgetxt: "",
          children: [
              { path: "#", type: 'link', active: false, selected: false, title: 'Sub-menu-1' },
             
              {
                path: "#",
                type: 'sub',
                Name:'',
                active: false,
                selected: false,
                title: 'Sub-menu-2',         
                children: [
                  { path: "#", type: 'link', active: false, selected: false, title: 'Sub-menu-2.1' },
                  { path: "#", type: 'link', active: false, selected: false, title: 'Sub-menu-2.2' },
                  { path: "#", type: 'link', active: false, selected: false, title: 'Sub-menu-2.3' },
                 
                 
                ]
              },
          ]
      },
    ]
  },

  {
    menutitle: 'GENERAL',
    Items: [
      {
        icon: (<i className="side-menu__icon ri-map-pin-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Maps',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}maps/leafletmaps`, type: 'link', active: false, selected: false, title: 'Leaflet Maps' },
          { path: `${import.meta.env.BASE_URL}maps/simplemaps`, type: 'link', active: false, selected: false, title: 'Simple Maps' }
       

        ]
      },
      {
        icon: (<i className="side-menu__icon ri-bar-chart-2-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Charts',     
        class: 'side-badge',
        badgetxt: '5',
        color: 'secondary',
        children: [
          { path: `${import.meta.env.BASE_URL}charts/chartjs`, type: 'link', active: false, selected: false, title: 'Chart js' },
    
          { path: `${import.meta.env.BASE_URL}charts/echarts`, type: 'link', active: false, selected: false, title: 'ECharts' },

          { path: `${import.meta.env.BASE_URL}charts/apexcharts`, type: 'link', active: false, selected: false, title: 'Apex Charts' }

        ]
      },
      {
        icon: (<i className="side-menu__icon ri-remixicon-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Icons',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font Awesome' },
          { path: `${import.meta.env.BASE_URL}icons/materialdesignicons`, type: 'link', active: false, selected: false, title: 'Material Design Icons' },
          { path: `${import.meta.env.BASE_URL}icons/simplelineicons`, type: 'link', active: false, selected: false, title: 'Simple Line Icons' },
          { path: `${import.meta.env.BASE_URL}icons/feathericons`, type: 'link', active: false, selected: false, title: 'Feather Icons' },
          { path: `${import.meta.env.BASE_URL}icons/iconicicons`, type: 'link', active: false, selected: false, title: 'Iconic Icons' },
          { path: `${import.meta.env.BASE_URL}icons/flagicons`, type: 'link', active: false, selected: false, title: 'Flag Icons' },
          { path: `${import.meta.env.BASE_URL}icons/pe7icons`, type: 'link', active: false, selected: false, title: 'Pe7 Icons' },
          { path: `${import.meta.env.BASE_URL}icons/themifyicons`, type: 'link', active: false, selected: false, title: 'Themify Icons' },
          { path: `${import.meta.env.BASE_URL}icons/typiconsicons`, type: 'link', active: false, selected: false, title: 'Typicons Icons' },
          { path: `${import.meta.env.BASE_URL}icons/weathericons`, type: 'link', active: false, selected: false, title: 'Weather Icons' },
          { path: `${import.meta.env.BASE_URL}icons/bootstrapicons`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' }

        ]
      }
    ]
  }

]
export default MenuItems
