import axios from "axios";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from "./Spinner";

export default function Login(props) {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [spin, setspin] = useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    props.visible()
  })
  const submit=(e)=>{
    e.preventDefault()
    setspin(true)
    axios.post("https://login-fastapi.onrender.com/signin",
      {"username":username,"password":password}
    ).then((response)=>{
      setspin(false)
      if (response.data==="incorrect credentials"){
        alert("Invalid credentials")
      }
      if (response.data!=="incorrect credentials"){
        const d=response.data
        localStorage.setItem("token", d["access_token"])
        navigate("/profile")
        

      }
    })
    .catch((error)=>{
      console.log("Error occured")
    })
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <h3 className='text-center my-2'>Login</h3>
            <div className="form-group">
            <label htmlFor="username" className="fw-bold">Username:</label>
              <input className="form-control" name="username" type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="fw-bold">Password:</label>
              <input className="form-control" name="password" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" />
            </div>
            <div className="text-center my-4">
             {spin?<Spinner/>:<input className="btn btn-primary row justify-content-center" onClick={submit} type="submit" value="Login" />} 
            </div>
            <p className="text-center">
              Not a user? <Link  to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  )
}
