import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearAuthError, login } from "../../action/AuthActions";
import { toast } from "react-toastify";
const Login = () => {
  const navigate=useNavigate()
  const {error,loading,isAuthentication}=useSelector((select)=>select.authReduce)
  const dispatch=useDispatch()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(login(data))
  };
  useEffect(()=>{
    if (isAuthentication) {
      navigate("/allblogs")
    }
    if(error){
      toast.error(error,{
        position:toast.POSITION.BOTTOM_CENTER,
        onOpen:dispatch(ClearAuthError)
      })
    }
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((e) =>({...e,[name]:value}));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_top">
          <h3 className="login_title">Login Page</h3>
        </div>
        <div className="login_middle">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
            <input type="submit" id="button" value="Submit" />
          </form>
        </div>
        <div className="login_bttom">
          {/* If you Don't have account pls<Link to={"/register"}>register</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
