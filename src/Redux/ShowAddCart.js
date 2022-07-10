
import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import HeaderNav from './HeaderNav';
const ShowAddCart = () => {
    var data=[]

console.log(data)

  const show =useSelector((state)=>{
    return state
  })
  //console.log('show data of header selectorr',show.rootReducer.showAddchooseApi.length)
  function showCartData(){
    console.log('show data of header selectorr',show.rootReducer)
    show.rootReducer.showAddchooseApi.forEach(element => {
    data=[...data,element]
      console.log('element of the data is the great example of the  this array',data)     
      });
  }
  return (
    <div className='clearfix showcart '>
      <HeaderNav/>
          <Link to="/">Home</Link> |{" "}
{/*  data is the paster here to show of the data  */}
<div className='parents'>
  { data &&
   show.rootReducer.showAddchooseApi.map((cv, index,arr) => { 
     return <div className='child text-center p-3 showcart' key={index}> 
      <img src={cv.image} className='img'  ></img>
      <h5>{cv.title}</h5>
      <h5>{cv.price}</h5>
      
           </div>
 }) 
 }  
 </div>
    </div>

  )
}
export default ShowAddCart