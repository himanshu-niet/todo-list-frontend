import React from 'react'
import NavbarPage from "../components/navbar.jsx";

import Todos from '../components/Todos.jsx';
import AddTodo from '../components/AddTodo.jsx';


function Home() {
  return (
    <div>
      <NavbarPage />
      <div className="container">
        <AddTodo />

        <div className="row">
          <div className="col-md-6 col-lg-5  mx-auto ">
            <Todos title={"Good Morning"} />
            <Todos title={"Good Night"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home