
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/brand/Kizuna.svg'
import logolight from '../../assets/images/brand/KizunaWhiteLogo.svg'
import icon1 from '../../assets/images/brand/icon.png'
import icon2 from '../../assets/images/brand/icon2.png'

import PerfectScrollbar from 'react-perfect-scrollbar'
import { useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import { useLocation } from "react-router-dom";
import MenuItems from './sidebardata'
import { horizontalmenusticky } from '../switcher/switcherdata'

const Onhover = () => {
  document.querySelector(".app").classList.contains("sidenav-toggled")
  document.querySelector(".app").classList.add("sidenav-toggled-open");

}
const Outhover = () => {
  document.querySelector(".app").classList.remove("sidenav-toggled-open");
}
let history = [];

export default function Sidebar() {

  let location = useLocation();

  const [menuItems, setMenuItems] = useState(MenuItems)
  useEffect(() => {
    history.push(location.pathname); // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
    }
    let mainContent = document.querySelector(".main-content");
    //when we click on the body to remove
    mainContent.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent.removeEventListener("click", mainContentClickFn);
    };
  }, [location, mainContentClickFn]);




  useEffect(() => {
    setSidemenu(location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname);
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992

    ) {
      checkHoriMenu();
      clearMenuActive();
    }
  }, []);
  // every chnage this effect calls
  let menuIcontype;
  if (document.querySelector("body").classList.contains("horizontal")) {
    menuIcontype = "hor-icon";
  } else {
    menuIcontype = "sidemenu-icon";
  }
  //  In Horizontal When we click the body it should we Closed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function mainContentClickFn() {
    if (
      document.body.classList.contains("horizontal") &&
      window.innerWidth >= 992
    ) {
      clearMenuActive();
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setSidemenu(pathname) {
    if (menuItems) {
      menuItems.filter((mainlevel) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items) => {
            items.active = false;
            items.selected = false;
            // if (pathname === "/") {
            //   pathname = "/dashboard/sales";
            // }

            if (location.pathname === "/sparic/preview/" ||
              location.pathname === "/sparic/preview"
            ) {
              pathname = "/sparic/preview/dashboard/sales/";
            }
            if (pathname === items.path) {
              items.active = true;
              items.selected = true;
            }
            else if (items.children) {
              items.children.filter((submenu) => {
                submenu.active = false;
                submenu.selected = false;
                if (pathname == submenu.path) {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                else if (submenu.children) {
                  submenu.children.filter((submenu1) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (pathname === submenu1.path) {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuItems((arr) => [...arr]);
        if (document.body.classList.contains('horizontal-hover')) {

          clearMenuActive();
        }
        return mainlevel;
      });
    }
  }

  function toggleSidemenu(item) {
    if (
      !document.body.classList.contains('horizontal-hover')

    ) {
      // To show/hide the menu
      if (!item.active) {
        menuItems.filter(mainlevel => {
          if (mainlevel.Items) {
            mainlevel.Items.filter(sublevel => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.filter(sublevel1 => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.filter(sublevel2 => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
                      if (sublevel2.children) {
                        sublevel2.children.filter(sublevel3 => {
                          sublevel3.active = false;
                          if (item === sublevel3) {
                            sublevel.active = true;
                            sublevel1.active = true;
                            sublevel2.active = true;
                            sublevel3.active = true;
                          }
                          return sublevel3
                        })
                      }
                      return sublevel2
                    })
                  }
                  return sublevel1
                })
              }
              return sublevel
            })
          }
          return mainlevel
        })
      }
      else {
        item.active = !item.active
      }
    }

    setMenuItems(arr => [...arr])
  }

  function clearMenuActive() {
    MenuItems.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.filter((sublevel) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.filter((sublevel1) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.filter((sublevel2) => {
                  sublevel2.active = false;
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    setMenuItems((arr) => [...arr]);
  }



  function slideLeft() {
    // slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginLeft.split("px")[0])) + 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginRight.split("px")[0])) + 100;

    if (document.querySelector('html').getAttribute('dir') === "rtl") {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        document.querySelector(".slide-right").classList.remove("d-none");
        document.querySelector(".slide-left").classList.remove("d-none");
      } else {
        document.querySelector(".slide-left").classList.add("d-none");
      }

      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
        if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left").classList.remove("d-none");
          document.querySelector(".slide-right").classList.remove("d-none");
        }
      }
      else {
        document.querySelector(".slide-left").classList.add("d-none");
      }

      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = "0px";
        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left").classList.add("d-none");
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
  }

  function slideRight() {
    // slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector('html').getAttribute('dir') === "rtl") {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-right").classList.add("d-none");
        document.querySelector(".slide-left").classList.remove("d-none");
      }

      if (marginRightValue !== 0) {
        document.querySelector(".slide-left").classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue > -check) {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right").classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        document.querySelector(".slide-left").classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
      //
    }
  }
  window.addEventListener("resize", () => {
    checkHoriMenu();
  });
  function checkHoriMenu() {
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginRight.split("px")[0]));
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (menuWidth?.offsetWidth - menuContainerWidth >= menuItems.scrollWidth) {
      document.querySelector(".slide-left").classList.add("d-none");
      document.querySelector(".slide-right").classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;

    }
    else {
      document.querySelector(".slide-right").classList.remove("d-none");
    }
    if (document.querySelector("html").getAttribute("dir") === "rtl") {
      if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginRight = -check + 'px';
        document.querySelector(".slide-left").classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
        (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginLeft = -check + 'px';
        document.querySelector(".slide-right").classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  }

  return (
    <Fragment>
      <div className="sticky" 
       onScroll={horizontalmenusticky()}
       >
        <div className="app-sidebar"
          onMouseOver={() => Onhover()}
          onMouseOut={() => Outhover()}
        >
          <PerfectScrollbar options={{ suppressScrollX: true, useBothWheelAxes: false }}>
            <div className="side-header">
              <Link className="header-brand1" to={`${import.meta.env.BASE_URL}dashboard/sales/`} 
                    onClick={() => setSidemenu(`${import.meta.env.BASE_URL}dashboard/sales`) }>
                <img src={logo} className="header-brand-img main-logo" alt="Sparic logo" />
                <img src={logolight} className="header-brand-img darklogo" alt="Sparic logo" />
                <img src={icon1} className="header-brand-img icon-logo" alt="Sparic logo" />
                <img src={icon2} className="header-brand-img icon-logo2" alt="Sparic logo" />
              </Link>
            </div>

            <div className="main-sidemenu">
              <div className="slide-left disabled" id="slide-left" onClick={slideLeft}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                </svg>
              </div>

              <ul className='side-menu' style={{ marginRight: "0px" }}>
                {menuItems.map((firstlayer) => (
                  <React.Fragment key={Math.random()}>
                    <li className="sub-category"><h3>{firstlayer.menutitle}</h3></li>
                    {firstlayer.Items.map((secondlayer, two) =>
                    (
                      <li className={`slide ${secondlayer.active ? 'is-expanded' : ''}`} key={two}>
                        {secondlayer.type === "sub" ? (
                          <Link
                            to="#"
                            className={`side-menu__item ${secondlayer.selected ? "active" : ""
                              }`}
                            onClick={(event) => {
                              event.preventDefault();
                              toggleSidemenu(secondlayer);
                            }}
                          >

                            {secondlayer.icon}
                            <span className="side-menu__label">
                              {secondlayer.title}
                            </span>
                            {secondlayer.badgetxt ? (
                              <Badge bg={secondlayer.color} className={secondlayer.class}>
                                {secondlayer.badgetxt}
                              </Badge>
                            ) : (
                              ""
                            )}
                            <i className='angle fe fe-chevron-right'></i>

                          </Link>

                        ) : (
                          ""
                        )}
                        {secondlayer.children ? (
                          <ul className={`slide-menu ${secondlayer.active ? "open" : ""}`}
                            style={
                              secondlayer.active
                                ? { display: 'block' }
                                : { display: "none" }
                            }
                          >
                            {secondlayer.children.map((levelthree, three) => {
                              return (
                                <li key={three}
                                  className={`sub-slide ${levelthree.active ? "is-expanded " : ""}`}
                                >
                                  {levelthree.type === "sub" ?
                                    <Link
                                      to="#"
                                      className={`sub-side-menu__item ${levelthree.selected ? "active" : ""}`}
                                      onClick={(event) => {
                                        event.preventDefault();
                                        toggleSidemenu(levelthree);
                                      }}>
                                      <span className="sub-side-menu__label">
                                        {levelthree.title}
                                      </span>
                                      <i className="sub-angle fe fe-chevron-right"></i>
                                    </Link>
                                    :
                                    ""
                                  }
                                  {levelthree.type === "link" ?
                                    <Link
                                      to={levelthree.path}
                                      className={`slide-item ${levelthree.selected ? "active" : ""}`}
                                      onClick={() =>
                                        setSidemenu(levelthree.path)
                                      }
                                    >
                                      {levelthree.title}
                                    </Link>
                                    :
                                    ""
                                  }
                                  {levelthree.children ? (
                                    <ul
                                      className={`sub-slide-menu ${levelthree.active ? "open" : " "}`}
                                      style={
                                        levelthree.active
                                          ? { display: "block" }
                                          : { display: "none" }
                                      }
                                    >
                                      {levelthree.children.map((subchildren, sub) => (
                                        <li
                                          key={sub}
                                        >
                                          {subchildren.type === "link" ?
                                            <Link
                                              to={subchildren.path}
                                              className={`sub-slide-item ${subchildren.selected ? "active" : ''}`}
                                              onClick={() =>
                                                setSidemenu(subchildren.path)
                                              }
                                            >
                                              {subchildren.title}
                                            </Link>
                                            :
                                            ""
                                          }

                                        </li>
                                      ))}

                                    </ul>
                                  ) : ("")}
                                </li>
                              )
                            }
                            )}
                          </ul>)
                          : (
                            "")}
                      </li>
                    ))}

                  </React.Fragment>
                ))}
              </ul>


              <div className="slide-right" id="slide-right" onClick={slideRight}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </Fragment>
  )
}

