import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from '../../components/navbar/NavBar'
import Card from '../../components/cards/Card'
import "./home.css"
import { Allblogs } from '../../action/BlogAction'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
const AllBlogs = () => {
const [pageNumber,setPageNumber]=useState(0)
  const {allBlog,loading}=useSelector((state)=>state.blog)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(Allblogs)
  }, [])

  const userPerPage=8
  const pageVisited=pageNumber*userPerPage

  const displayUsers=allBlog ?allBlog.slice(pageVisited,pageVisited+userPerPage).map((val)=>{
    return  <Card val={val}/>
  }):""
const pageCount=allBlog ?Math.ceil(allBlog.length/userPerPage):""

const changePage =({selected})=>{
setPageNumber(selected)
}
  return (
    <div className='home' style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Sidebar />
      <div style={{ width: "100%", height: "100%" }}>
        <NavBar />
        <div className='Card_section'>
         {
         allBlog? displayUsers :"loading..."
        
         }
        { allBlog?<ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginationBtns"}
         previousLinkClassName={"previousBtn"}
         nextLinkClassName={"nextBtn"}
         disabledClassName={"paginationDisable"}
         activeClassName={"paginationActive"}
         />:""}
        </div>
      </div>

    </div>
  )
}

export default AllBlogs
