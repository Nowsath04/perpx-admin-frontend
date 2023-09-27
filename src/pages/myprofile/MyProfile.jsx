import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import "./MyProfile.css";
import Profile from "../../image/OIP (3).jpg";
import { TiSpannerOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
const MyProfile = () => {
  const {loading,auth,isAuthentication,error}=useSelector((select)=>select.authReduce)
  console.log(auth);
  return (
    <div
      className="home"
      style={{ display: "flex", width: "100%", height: "100%" }}
    >
      <Sidebar />
      <div style={{ width: "100%", height: "100%" }}>
        <NavBar />
        <div className="profile_section">
          <div className="profile_container">
            <div className="profile_left">
              <img src={Profile} alt="" />
            </div>
            <div className="profile_right">
              <h2 className="profile_name">{auth ? auth.name:""}</h2>
              <p className="profile_email">{auth ? auth.email:""}</p>
              <p className="profile_slo">We live and breathe software development</p>
                <button>Edit<TiSpannerOutline  className="icon"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
