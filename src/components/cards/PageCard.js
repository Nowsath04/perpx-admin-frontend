import React from 'react'
import { Link} from 'react-router-dom'

function PageCard({ val }) {
  return (
    <div className='card'>
      <div className='card_container'>
        <img src={val.imageurl} alt="" />
        <h3>{`${val.page} page`}</h3>
        <div className='meta_title'>{`MetaTitle : ${(val.meta_title).substring(0, 18)}...`}</div>
        <div className='meta_title'>{`Meta Description : ${(val.meta_description).substring(0, 15)}...`}</div>
        <div className='meta_title'>{`meta_keywords : ${(val.meta_keywords).substring(0, 15)}...`}</div>
        <div className='button_section'>
          <Link to={`/editpage/${val._id}`}>Edit</Link>
        </div>
      </div>
    </div> 
     )
}

export default PageCard