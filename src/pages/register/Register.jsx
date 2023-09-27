import React, { useEffect, useState } from "react";
import "./Regsiter.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearAuthError, userRegister } from "../../action/AuthActions";
import { toast } from "react-toastify";



const Register = () => {
  const navigate = useNavigate()
  const { loading, error, isAuthentication } = useSelector((state) => state.authReduce)

  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(data);
    dispatch(userRegister(data))
  };
  useEffect(() => {
    if (isAuthentication) {
      navigate("/allblogs")
    }
    if (error) {
      toast.error(error,{
        position:toast.POSITION.BOTTOM_CENTER,
        onOpen:()=>{dispatch(ClearAuthError)}
      })
      return
    }
  }, [navigate,dispatch,isAuthentication, error])
  const validateEmail = (value) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(value)) {
    return toast.error('Please enter a valid email address.')
    }
    
    return '';
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((e) => ({ ...e, [name]: value }));
  };
  return (
    <div className="register">
      <div className="register_container">
        <div className="register_top">
          <h3 className="register_title">Register Page</h3>
        </div>
        <div className="register_middle">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
            <input
              type="text"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
            <input type="submit" id="button" value={loading ? "loading ..." : "submit"} disabled={loading} />
          </form>
        </div>
        <div className="register_bttom">
          If you Allready have account pls<Link to={"/"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
