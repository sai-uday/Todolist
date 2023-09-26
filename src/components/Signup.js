import axios from "axios";
import React, { useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Spinner from "./Spinner";

function Signup() {
  const navigate=useNavigate()
    const [username, setusername] = useState("")
    const [firstpass, setfirstpass] = useState("")
    const [secondpass, setsecondpass] = useState("")
    const[spin,setspin]=useState(false)
   const  check=(async (e)=>{
    if(username.length===0 || firstpass.length===0 || secondpass.length===0){
        alert("enter all values");
        e.preventDefault(); 
    }
    else if(firstpass!==secondpass){
        alert("password des not match")
        e.preventDefault(); }
     else{
      e.preventDefault()
      const password=String(firstpass)
      setusername(String(username))
      setspin(true)
          await axios.post("https://login-fastapi.onrender.com/signup",
            {"username":username,"password":password}
          ).then((response)=>{
            setspin(false)
            if(response.data==="already exist"){
              alert("Username already exist, please signup with other username")
            }
            if (response.data==="User registered successfully"){
              alert("user sucessfully created,please Login!")
              navigate("/login")
              console.log("User registered successfully")
            }
     })}})
    

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form >
            <h2 className="text-center my-2">Signup</h2>
            <div className="form-group">
              <label htmlFor="username" className="fw-bold">Username:</label>
              <input className="form-control username" value={username} onChange={(e)=>{setusername(e.target.value)}} name="username" type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="fw-bold">Password:</label>
              <input className="form-control firstpass"  value={firstpass} onChange={(e)=>{setfirstpass(e.target.value)}} name="password" type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="retypePassword" className="fw-bold">Retype Password:</label>
              <input className="form-control secondpass" value={secondpass} onChange={(e)=>{setsecondpass(e.target.value)}} type="password" placeholder="Retype Password" />
            </div>

            <div className=" my-3 form-group text-center">
            {spin ?<Spinner/>:(<button className="btn btn-primary" onClick={check}>Signup</button>)}
              
            </div>
            <p className="text-center">
              Already a user? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );

}
export default Signup;
