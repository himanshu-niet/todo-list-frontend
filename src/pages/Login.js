import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleForm(e) {
      e.preventDefault();
      

      if(!email || !password){
        alert("Enter Details")
      }else{
        alert("ok")
      }
    }
    
  return (
    <div className="container">
      <div className="row my-5">
        <div
          className="col-md-6 col-lg-5 shadow mx-auto my-5 p-3"
          style={{ background: "white" }}
        >
          <h1 className="h2 text-center my-3">Login</h1>

          <form>
            <input
              className="form-control mb-3 mt-5"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="form-control my-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              className="form-control my-3 text-light bgBtn"
              onClick={handleForm}
            >
              Login
            </button>
          </form>
          <p className="p">
            <Link to="/register">Create New Account. Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login