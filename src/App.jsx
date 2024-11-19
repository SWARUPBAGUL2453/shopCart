import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from './pages/Cart'
import Home from "./pages/Home"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      </div>
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} ></Login>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path="/cart" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Cart></Cart>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
};

export default App;
