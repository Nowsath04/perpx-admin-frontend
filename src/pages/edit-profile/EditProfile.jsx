import React, { useState } from "react";
import "./EditProfile.css";
import NavBar from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import editProfile from "../../image/OIP.jpg";

const EditProfile = () => {

    const [data,userData]=useState({
        name:"",
        email:""
    })

    const [image,setImage]=useState("")
    const [profile,setProfile]=useState(editProfile)

const handleChange=(e)=>{
    if(e.target.name ==="avater"){
        const reader=new FileReader()

        reader.onload=()=>{
            if(reader.readyState === 2){
                setProfile(reader.result)
                setImage(e.target.files[0])
            }
        }
    }

}

  return (
    <div
      className="home"
      style={{ display: "flex", width: "100%", height: "100%" }}
    >
      <Sidebar />
      <div style={{ width: "100%", height: "100%" }}>
        <NavBar />
        <div className="edit_profile_section">
          <div className="edit_profile_content">
            <div className="edit_profile_top">
              <img src={profile} alt=""  />
              <input type="file" id="file" onChange={handleChange} name="avatar" />
              <label for="file">Edit pic</label>
            </div>
            <div className="edit_profile_bottom">
              <label >Name</label>
              <input placeholder="Enter Your Name" type="text" value={data.name} name="name" onChange={handleChange}/>
              <label>Email</label>
              <input placeholder="Enter Your Email" type="text" value={data.email} name="email" onChange={handleChange}/>
              <input type="submit" value={"Submit"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
