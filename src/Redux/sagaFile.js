

import { put, takeEvery } from 'redux-saga/effects'
import { useSelector , useDispatch } from 'react-redux/es/exports';
import { ABC, SEARCH_API} from './const';
import { addToCart, showApi } from './rootSlice';

 


function* getProducts() {
  /*   let data = yield fetch('http://localhost:3500/products');
    data = yield data.json(); */
    let data=yield fetch('https://fakestoreapi.com/products')
    data=yield data.json()
    console.log(data,'dfsdfsdfsdfsd');
    yield put(showApi(data))
   // yield put(addToCart(data))
}
function* searchProducts(da){
  
  let data=yield fetch(`https://fakestoreapi.com/products?q=${da.search}`);

  data=yield data.json()
  console.log('data is the ',da.search)
  yield put(showApi(data))
 
}

function* sagaFile() {

    yield takeEvery(ABC, getProducts)
    yield takeEvery(SEARCH_API, searchProducts)

}

export default sagaFile; 