import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Badge } from "react-bootstrap";
import MenuItems from "./sidebardata";

import logo from "../../assets/images/brand/Kizuna.svg";
import logolight from "../../assets/images/brand/KizunaWhiteLogo.svg";
import icon1 from "../../assets/images/brand/Kizuna-01.png";

export default function Sidebar({ menuType }) {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState(
    MenuItems 
  );
  const [openItems, setOpenItems] = useState({});

 

  function setActiveMenuItem(pathname) {
    setMenuItems((prevItems) => {
      return prevItems.map((mainLevel) => {
        const updatedItems = mainLevel.Items.map((item) => {
          item.active = item.path === pathname;
          item.selected = item.path === pathname;

          if (item.children) {
            item.children = item.children.map((child) => {
              child.active = child.path === pathname;
              child.selected = child.path === pathname;
              return child;
            });

            const anyChildActive = item.children.some(
              (child) => child.active || child.selected
            );
            item.active = anyChildActive;
            item.selected = anyChildActive;
          }

          return item;
        });
        return { ...mainLevel, Items: updatedItems };
      });
    });
  }

  function toggleItem(index) {
    const newOpenItems = Object.keys(openItems).reduce((acc, curr) => {
      acc[curr] = false;
      return acc;
    }, {});

    newOpenItems[index] = !openItems[index];

    setOpenItems(newOpenItems);
  }


  return (
    <Fragment>
      <div className="sticky">
        <div className="app-sidebar">
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <div className="side-header">
              <Link
                className="header-brand1"
                to={`${import.meta.env.BASE_URL}`}
              >
                {/* <img
                  src={logo}
                  className="header-brand-img main-logo"
                  alt="Kizuna logo"
                />
                <img
                  src={logolight}
                  className="header-brand-img darklogo"
                  alt="Kizuna logo"
                />

                <img
                  src={icon1}
                  className="header-brand-img icon-logo"
                  alt="Icon 2"
                  style={{
                    marginLeft: "11px",
                    marginTop: "43px",
                    marginBottom: "2px",
                  }}
                /> */}

                <h2 className="header-brand" style={{color:"red", fontWeight:"bold", marginLeft: "0px",
                    marginTop: "43px",
                    marginBottom: "2px", fontSize:"1.8rem"}}>ADM</h2>

              </Link>
            </div>
            <div className="main-sidemenu">
              <ul className="side-menu">
                {menuItems.map((mainLevel, index) => (
                  <React.Fragment key={index}>
                    <li className="sub-category">
                      <h3>{mainLevel.menutitle}</h3>
                    </li>
                    {mainLevel.Items.map((item, idx) => (
                      <li
                        className={`slide ${item.active ? "is-expanded" : ""}`}
                        key={idx}
                      >
                        <Link
                          to={item.path}
                          // className={`side-menu__item ${
                          //   item.selected ? "active" : ""
                          // }`}

                          className={`side-menu__item ${item.selected ? "active" : ""} parent`}

                          onClick={() => {
                            setActiveMenuItem(item.path);
                            toggleItem(idx);
                          }}
                        >
                          <span style={{ marginRight: "12px" }}>
                            {item.icon}
                          </span>
                          <span className="side-menu__label">{item.title}</span>
                          {item.children && (
                            <span style={{ marginLeft: "auto" }}>
                              <small>{openItems[idx] ? "v" : ">"}</small>
                            </span>
                          )}
                          {item.badgetxt && (
                            <Badge bg={item.color} className={item.class}>
                              {item.badgetxt}
                            </Badge>
                          )}
                        </Link>

                        {item.children && openItems[idx] && (
                          <ul className="sub-menu">
                            {item.children.map((child, childIdx) => (
                              <li key={childIdx}>
                                <Link
                                  to={child.path}
                                  // className={`side-menu__item ${
                                  //   child.selected ? "active" : ""
                                  // }`}
                                  // onClick={() => setActiveMenuItem(child.path)}

                                  className={`side-menu__item ${child.selected ? "active" : ""
                                  } child`}
                                onClick={() => setActiveMenuItem(child.path)}

                                >
                                  <span style={{height:"10px"}}>
                                    {child.icon}
                                  </span>
                                  <span className="side-menu__label">
                                    {child.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </Fragment>
  );
}
