import axios from "axios";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [formData, setData] = useState([])
  const [error, setError] = useState([])
  const navigate = useNavigate();



  
    const signin= async()=> {
    const {email,password}=formData
      let result = await axios.post(`http://192.168.11.57:3000/admin/adminLogin`, { email,password })
      
      setData(result.data)
     
      
      
      if (result.data.msg === "this user doesn't exist") {
        setError("This user doesn't exist")
        console.log('wrong data');
      }
      else {   
      
        navigate('/starter')
        
       }

      
  
      
      // console.log('==============', formData);
      console.log(result);
 
      
    
  }
  
    
        

  
    return (
        <div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Welcome back!</h3>


              
                <div className="form-floating mb-3">
                  <input  type="email" className="form-control" id="floatingInput" placeholder="name@example.com"onChange={(e) => setData({...formData,email: e.target.value})}/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={(e) => setData({...formData,password: e.target.value})}/>
                      <label for="floatingPassword">Password</label>
                      
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label className="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div className="d-grid">
                      <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit" onClick={signin} show error>Sign in</button>
                      {error && <div className="error" style={{ color :"red"}}> {error} </div>}
                        <div className="text-center">
                    <a className="small" href="#">Forgot password?</a>
                  </div>
                </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )







}
export default Login;