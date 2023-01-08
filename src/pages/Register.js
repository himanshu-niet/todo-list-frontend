import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Register() {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleForm(e)
  {
e.preventDefault();
      if (!fName || !lName || !email || !password) {
        alert("Enter Details");
      } else {
        alert("ok");
      }
  }



  return (
    <div className="container">
      <div className="row my-5">
        <div
          className="col-md-6 col-lg-5 shadow mx-auto my-5 p-3"
          style={{ background: "white" }}
        >
          <h1 className="h2 text-center my-3">Register</h1>

          <form>
            <input
              className="form-control mb-3 mt-5"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFName(e.target.value)}
              value={fName}
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLName(e.target.value)}
              value={lName}
            />
            <input
              className="form-control my-3"
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
              Submit
            </button>
          </form>
          <p className="p">
            <Link to="/">You have Already Account? Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register