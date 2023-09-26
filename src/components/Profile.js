import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bigspinner from "./Bigspinner";

export default function Profile(props) {
  const [auth, setauth] = useState(false);
  const [bigspin, setbigspin] = useState(false)
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tododata, settododata] = useState([]);
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const signout = (e) => {
    localStorage.clear();
    e.preventDefault();
    props.visible();
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    setbigspin(true)
    const token = String(localStorage.getItem("token"));
    props.changevisibility()
    const headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    };

    const payload = {};

    axios
      .post("https://login-fastapi.onrender.com/profile", payload, { headers })
      .then((response) => {
        setusername(response.data[0]["username"]);
        settododata(response.data[0]["userdata"]);
        setauth(true);
        setbigspin(false)
      })
      .catch((error) => {
        // Handle any errors
        setbigspin(false)
        props.visible();
        alert("Unauthorized You are being Redirected to main page");
        navigate("/");
      });
  }, []);
  const deleteone=(index,e)=>{

    e.preventDefault()
    const token = String(localStorage.getItem("token"));
    props.changevisibility()
    const headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    };

    const payload = {
      index:index
    };
    axios
    .post("https://login-fastapi.onrender.com/deleteone", payload, { headers })
    .then((response) => {
      settododata(response.data[0]["userdata"]);
    })
    
  }
  const deleteall=(e)=>{

    e.preventDefault()
    
    const token = String(localStorage.getItem("token"));
    const headers = {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    };


    axios
    .delete("https://login-fastapi.onrender.com/deleteall", { headers })
    .then((response) => {
      settododata(response.data[0]["userdata"]);
    })
    
  }
  const submit = (e) => {
    e.preventDefault();
    if (title==="" || desc===""){
      alert("Don't leave Title or Description as Empty")
    }
    else{
      const token = String(localStorage.getItem("token"));
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      };
  
      // Define the request payload
      const payload = {
        title: title,
        desc: desc,
      };
  
      axios
        .post("https://login-fastapi.onrender.com/additem", payload, { headers })
        .then((response) => {
          settododata(response.data[0]["userdata"]);
          settitle("");
          setdesc("");
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle errors here
        });
    }

  };
  return (
    <>
      <div>
        {bigspin?<Bigspinner/>:auth && (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  TODO LIST
                </Link>
                <form className="d-flex">
                  <Link className="btn btn-danger" onClick={signout}>
                    Signout
                  </Link>
                </form>
              </div>
            </nav>
            <div className="container ">
              <h4 className="my-4">ADD A TODO</h4>
              <form method="post" action="/additem">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="desc"
                    value={desc}
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={submit}
                >
                  Submit
                </button>
                <div>
                  <button className="my-3 btn btn-warning" onClick={deleteall}>
                    Delete All
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <h4 className="container">Hi {username} Your TODO's!</h4>
           {tododata.length===0?<p className="container">No Todos to display</p>:tododata.map((e, index) => {
              return (
                <div className="container" key={index}>
                  <hr />
                  <div className="my-2">
                    <b>Task No: </b>
                    {index + 1}
                  </div>
                  <div>
                    <b>Title: </b>
                    {e["title"]}
                  </div>
                  <div className="my-2">
                    <b>Description: </b>
                    {e["desc"]}
                  </div>
                  <div>
                    <button
                      className="btn btn-danger "
                      onClick={(e)=>{deleteone(index,e)}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            <hr />
          </div>
        )}
      </div>
    </>
  );
}
