import React, { useState } from 'react'

function AddTodo() {
  
  const [todo,setTodo] =useState("");


function handleForm(e) {
  e.preventDefault();

  if (todo) {
    alert("ok");
    setTodo("")
  } 
}
  
  return (
    <div className="row my-2">
      <div
        className="col-md-6 col-lg-5 shadow mx-auto mb-2 p-3"
        style={{ background: "white" }}
      >
        <h1 className="h4 text-center my-3">Add Task</h1>

        <div className="row">
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Task"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
          </div>
          <div className="col-2">
           
            <button
              className="btn btn-info  text-light bgBtn"
              onClick={handleForm}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo