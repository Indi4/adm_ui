import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Badge } from "react-bootstrap";
import MenuItems, { CDNMenuItems } from "./sidebardata";

import logo from "../../assets/images/brand/Kizuna.svg";
import logolight from "../../assets/images/brand/KizunaWhiteLogo.svg";
import icon1 from "../../assets/images/brand/Kizuna-01.png";
import { Typography } from "@mui/material";

export default function Sidebar({ menuType }) {
  const location = useLocation();
  const locationPaths = location?.pathname.split("/");
  const [menuItems, setMenuItems] = useState(
    locationPaths?.includes("mdm") ? MenuItems : CDNMenuItems
  );
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

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
                to={`${import.meta.env.BASE_URL}main`}
              >
                <img
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
                  style={{ marginLeft: "8px",marginTop:"22px",marginBottom:"15px" }}
                />

                <Typography variant="h6" style={{ fontSize:"11px" ,color:"red" }}>
                  {locationPaths?.includes("mdm") ? "Master Data Management" : "Demand Management"}
                </Typography>
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
                          className={`side-menu__item ${
                            item.selected ? "active" : ""
                          }`}
                          onClick={() => {
                            setActiveMenuItem(item.path);
                            if (item.children) toggleItem(idx);
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
                                  className={`side-menu__item ${
                                    child.selected ? "active" : ""
                                  }`}
                                  onClick={() => setActiveMenuItem(child.path)}
                                >
                                  <span style={{ marginRight: "11px",marginLeft:"15px" }}>•</span>{" "}
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
