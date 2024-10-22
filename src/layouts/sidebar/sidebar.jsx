import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Badge } from "react-bootstrap";
import MenuItems, { CDNMenuItems } from "./sidebardata";

import logo from "../../assets/images/brand/Kizuna.svg";
import logolight from "../../assets/images/brand/KizunaWhiteLogo.svg";
import icon1 from "../../assets/images/brand/icon.png";
import icon2 from "../../assets/images/brand/icon2.png";

export default function Sidebar() {
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
          // Check if this item is the one with the selected path
          item.active = item.path === pathname;
          item.selected = item.path === pathname;

          // Check if item has children and update their active/selected state
          if (item.children) {
            item.children = item.children.map((child) => {
              child.active = child.path === pathname;
              child.selected = child.path === pathname;
              return child;
            });

            // If any child is active, mark the parent as active, otherwise, false
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
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  return (
    <Fragment>
      <div className="sticky">
        <div className="app-sidebar">
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <div className="side-header">
              <Link
                className="header-brand1"
                to={`${import.meta.env.BASE_URL}/customer-details`}
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
                  alt="Icon 1"
                  style={{ marginRight: "8px" }}
                />
                <img
                  src={icon2}
                  className="header-brand-img icon-logo"
                  alt="Icon 2"
                  style={{ marginRight: "8px" }}
                />
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
                              <small style={{padding:"10px"}}>{openItems[idx] ? "v" : ">"}</small>
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
                                  <span style={{ marginRight: "12px" }}>•</span>{" "}
                                  {/* Bullet point */}
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
