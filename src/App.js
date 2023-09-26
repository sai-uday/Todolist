import React, {  useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

export default function App() {
  const[visible,setvisible]=useState(true)
  function changevisibility(){
    setvisible(false)
  }
  function makevisible(){
    setvisible(true)
  }
 
  return (
    <div>
    <BrowserRouter> 
    <Navbar visible={visible}/>
          <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<Login visible={makevisible} />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile visible={makevisible} changevisibility={changevisibility}/>}></Route>
        </Routes>
    </BrowserRouter>
    
    {/* <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>
        <form className="d-flex">
          <button className="btn btn-primary mx-2" type="submit" fdprocessedid="d5f8t">Login</button>
          <button className="btn btn-primary" type="submit" fdprocessedid="d5f8t">Signup</button>
        </form>
      </div>
    </nav>
    </div>
      <form className="my-5 container">
        <div>
          <label htmlFor="username">username:</label>
          <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="username">password:</label>
          <input type="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
        <button onClick={submit}>Login</button>
        <button onClick={details}>details</button>
      </form> */}
    </div>
  )
}
