import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux/es/exports';

import { ABC, ADD_TO_CART, REMOVE_TO_CART } from './const';
import Header1 from '../Redux/Header1';

import { showAddToCart, showApi, showData, showRemoveToCart ,showDeleteToCart} from './rootSlice';


const Show = () => {
const [choose,setChoose]=useState({
  data:[]
})
const display=useSelector((state)=>{return state})
  useEffect(()=>{
    dispatch({ type:ABC })
  },[])
 
//console.log('display',display);

const dispatch=useDispatch()
function changeName(){
    dispatch(showData('jaya'))

}
function addToCart(data){
dispatch(showAddToCart(data)) 
}
function removeToCart(data){
  console.log('data is the data',data)

  const remainingItems=display.rootReducer.showAddchooseApi.filter((item)=>item.price!==data);

console.log('remains',display.rootReducer.showAddchooseApi);
  dispatch(showRemoveToCart(remainingItems)) 
}
function AllDeleteToCart(){
  dispatch(showDeleteToCart()) 
}


  return (
    <>
  
         <Header1/>
         <div className='parents'>
  
     {/*  <button onClick={()=>{changeName()}}>Click here to change name</button>
{display.rootReducer.value} */}



     { display.rootReducer.data &&
    
  /*   <div key={index}><img src={display.rootReducer.data.image} width='360px' height='300px'></img></div> <div className='innerbox col-6' key={index}><img src={cv.image} width='360px' height='300px'></img></div>   */
      display.rootReducer.data.map((cv, index,arr) => { 
       
        return <div className='child text-center p-3' key={index}> 
              
               
                 
    
         <img src={cv.image} className='img'  ></img>
         <h5>{cv.title}</h5>
         <h5>{cv.price}</h5>
      
         <button className='m-2' onClick={(e)=>{(addToCart(cv))}}  type="button">Add to Cart</button>
         <button  type="button " onClick={(e)=>{(removeToCart(cv.price))}}>Remove to Cart</button>
         <button  type="button " onClick={(e)=>{(AllDeleteToCart())}}>Remove to Cart</button>
         
              </div>
        
      
    }) 
    }  
 

{/* <button onClick={() =>displayApi()}>GetData</button> */}

    </div>

    </>
   
  )
}

export default Show