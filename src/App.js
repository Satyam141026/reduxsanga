import logo from './logo.svg';
import './App.css';
import Show from './Redux/Show';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ShowAddCart from './Redux/ShowAddCart';
function App() {


  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Show/>}>HomePage  </Route>
      <Route path="/showaddcart" element={<ShowAddCart/>}>HomePage  </Route>

    </Routes>
  </BrowserRouter>
 
  
 
   
    </div>
  );
}

export default App;
