import React from 'react'

function Todos(props) {

function updateTodo(){

}

function deleteTodo(){
   
}


  return (
    <div className="row bg-light shadow p-2 mt-2">
      <div className="col-10">{props.title}</div>
      <div className="col-1">
        <button onClick={updateTodo} className="btn btn-warning">
          -
        </button>
      </div>
      <div className="col-1">
        <button onClick={deleteTodo} className="btn btn-danger">
          x
        </button>
      </div>
    </div>
  );
}

export default Todos