import React from 'react'
import {
    Link
  } from "react-router-dom";
export default function Navbar(props) {
  return (
    <> {props.visible &&   <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link className="navbar-brand" to="/">TODO LIST</Link>
        <form className="d-flex">
          <Link className="btn btn-primary mx-2" to="/login" >Login</Link>
          <Link className="btn btn-primary" to="/signup">Signup</Link>
        </form>
      </div>
    </nav></div>}</>

  )
}
