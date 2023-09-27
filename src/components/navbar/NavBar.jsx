import React, { useRef, useState } from "react";
import "./NavBar.css";
import profile from "../../image/th.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../action/AuthActions";
const NavBar = () => {
  const navigater=useNavigate()
const dispatch=useDispatch()
  const [dropdown, setdropdown] = useState(false);

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setdropdown(false);
    }
  });

const handleclick=()=>{
  dispatch(userLogout)
navigater("/")
}
  return (
    <div className="navbar">
      <div className="nav_image" onClick={() => setdropdown(!dropdown)}>
        <img ref={imgRef} src={profile} alt="" />
      </div>
      {dropdown ? (
        <div ref={menuRef} className="nav_dropdown">
          <div className="nav_dropdown_box"></div>
          <ul>
            <li onClick={() => setdropdown(false)}>
              <Link to={"/myprofile"}>My Profile</Link>
            </li>
            <li onClick={() => setdropdown(false)}>
              <Link to={"/editprofile"}>Edit Profile</Link>
            </li>
            <hr style={{ width: "100%" }} />
            <li onClick={() => setdropdown(false)}>
              <button style={{backgroundColor:"red" ,padding:"5px 10px",color:"white",borderRadius:"3px",border:"none",outline:"none",cursor:"pointer"}} onClick={handleclick}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
