import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import ShowAddCart from './ShowAddCart';
import { Link } from "react-router-dom";
import OffcanvasExample from './OffcanvasExample';
import HeaderNav from './HeaderNav';

const Header1 = () => {
var data=[];
const show =useSelector((state)=>{
  return state
})
function showCartData(){
  console.log('show data of header selectorr',show.rootReducer)
  show.rootReducer.showAddchooseApi.forEach(element => {
  data=[...data,element]

    console.log('element of the data is the great example of the  this array',data)
      
    });

}
  return (
    <div className='clearfix header1 '>
      <HeaderNav/>
        <Link to="showaddcart">

        <h4 className='float-end me-3  mb-3 clearfix cart'> {show.rootReducer.showAddchooseApi.length}</h4>
        <div className='header float-end mt-3 clearfix'><img className='cart' src='a.jpg'></img></div>
        </Link>
       
    

    </div>
  )
}

export default Header1;