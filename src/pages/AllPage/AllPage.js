
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import NavBar from '../../components/navbar/NavBar'
import Card from '../../components/cards/Card'
// import "./home.css"
import { AllPages } from '../../action/PageAction'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import PageCard from '../../components/cards/PageCard'
const AllPage = () => {
const [pageNumber,setPageNumber]=useState(0)
  const {allpage,loading}=useSelector((state)=>state.page)
  const dispatch = useDispatch()

 console.log(allpage);

  useEffect(() => {
    dispatch(AllPages)
  }, [])



  const userPerPage=8
  const pageVisited=pageNumber*userPerPage

  const displayUsers=allpage ?allpage.slice(pageVisited,pageVisited+userPerPage).map((val)=>{
    return  <PageCard val={val}/>
  }):""
const pageCount=allpage ?Math.ceil(allpage.length/userPerPage):""

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
        loading?"Loading....":  allpage? displayUsers: allpage
        
         }
        { allpage?<ReactPaginate
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

export default AllPage
