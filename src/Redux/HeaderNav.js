import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { SEARCH_API } from './const';
const HeaderNav = () => {

const result=useSelector((state)=>{return state.rootReducer.data})
console.log(result,'result search of header')
const dispatch=useDispatch()
var search;
function searchData(e){

    search=e.target.value
    dispatch({type:SEARCH_API,search})

}

  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Shoping Cart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/showaddcart">Cart</Link>
        </li>
        <li className="nav-item">
        <input className="form-control me-2" onChange={(e)=>{searchData(e)}}  type="search" placeholder="Search" aria-label="Search" />
        </li>
      </ul>
  
    </div>
  </div>
</nav>

  )
}

export default HeaderNav