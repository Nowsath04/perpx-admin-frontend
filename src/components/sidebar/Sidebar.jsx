import React, { useState } from "react";
import "./Sidebar.css";
import { FaAngleRight, FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarActive, setsidebarActive] = useState(true);
  return (
    <div
      className="sidebar"
      style={{ width: `${sidebarActive ? "250px" : "72px"}` }}
    >
      <div className="sidebar_head">
        <MdOutlineAdminPanelSettings className="icon" />
        <h3 className="sidebar_heading" style={{ display: `${sidebarActive ? "flex" : "none"}`,overflow:"hidden" }} >PerpX_Admin</h3>
        <FaAngleRight
          className="sidebar_heading_icon"
          style={{ transform: `${sidebarActive ? "" : "rotate(180deg)"}` }}
          onClick={() => setsidebarActive(!sidebarActive)}
        />
      </div>
      {/* <hr style={{background:"#545454"}}></hr> */}
      <div className="sidebar_center">
        <Link  to={"/allblogs"} className="sidebar_center_content">
          <FaBloggerB className="icon" />
          <Link to={"/allblogs"} style={{ display: `${sidebarActive ? "flex" : "none"}` }}>
            All Blog
          </Link>
        </Link>
        <Link to={"/create-blog"}  className="sidebar_center_content">
          <ImBlog />
          <Link to={"/create-blog"} style={{ display: `${sidebarActive ? "flex" : "none"}` }}>
            create Blog
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
