import React from 'react'
import "./Crad.css"
import blogimg from "../../image/OIP (3).jpg"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { DeleteSingleBlog } from '../../action/BlogAction';
const Card = ({ val, }) => {

  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  // const handleDelete = async() => {
  //   try {
  //     await dispatch(DeleteSingleBlog(val._id));
  //     navigator('/allblogs');
  //   } catch (error) {
  //     console.error('Error updating new blog:', error);
  //   }
  // };


  // const confirmDelete = (val) => {
  //   const userConfirmed = window.confirm('Are you sure you want to delete?');

  //   if (userConfirmed) {
  //     handleDelete(val);
  //   } else {
  //   }
  // };

  const handleDelete = async () => {
    const userConfirmed = window.confirm('Are you sure you want to delete?');

    if (userConfirmed) {
      try {
        await dispatch(DeleteSingleBlog(val._id));
        navigate('/allblogs');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    } else {
    }
  };

  return (
    <div className='card'>
      <div className='card_container'>
        <img src={val.imageurl} alt="" />
        <h3>{`${(val.mainheading).substring(0, 30)}...`}</h3>
        <div className='blog_content'>
          <p>{`${(val.maincontent).substring(0, 70)}...`}</p>
        </div>
        <div className='button_section'>
          <Link to={`/editBlog/${val._id}`}>Edit</Link>
          <button type='button' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Card