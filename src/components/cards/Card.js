import React from 'react'
import "./Crad.css"
import blogimg from "../../image/OIP (3).jpg"
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
const Card = ({val}) => {
  return (
    <div className='card'>
        <div className='card_container'>
            <img src={val.imageurl} alt=""/>
            <h3>{val.mainheading}</h3>
            <div className='blog_content'>
               <p>{val.maincontent}</p>
            </div>
          <div  className='button_section'>
            <button><Link>View</Link></button>
            <button><Link to={`/editBlog/${val._id}`}>Edit</Link></button>
            <button>Delete</button>
          </div>
        </div>
    </div>
  )
}

export default Card