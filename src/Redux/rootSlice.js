import { createSlice } from "@reduxjs/toolkit";
import { REMOVE_TO_CART } from "./const";


const rootSlice=createSlice({ 
  
  name:'mySlice',
  initialState:{
    value:'satyam',
    data:[],
    showAddchooseApi:[]
    

  },
  reducers:{
    showData:function(state, action){

     state.value = action.payload;
  },
    showApi:function(state, action){
   state.data=action.payload
  },
    showAddToCart:function(state, action){
state.showAddchooseApi=[...state.showAddchooseApi,action.payload]
  },
    showRemoveToCart:function(state, action){
//state.showAddchooseApi.pop()
//const remainingItems=state.data.filter((item)=>item.id!=action.payload)
console.warn('remainign item',action)
state.showAddchooseApi=action.payload
  },
  showDeleteToCart:function(state,action){
state.showAddchooseApi=[]
  }

  }

})

export const { showData ,showApi,showAddToCart,showRemoveToCart,showDeleteToCart, searchProductApi} = rootSlice.actions;
export default rootSlice.reducer;