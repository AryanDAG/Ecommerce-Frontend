import Navbar from "./components/Navbar";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./index.css"

import "./App.css"

const App = () => {
  return (<div>
     <div className="bg-slate-900">
      <Navbar/>
     </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
  </div>)
};

export default App;