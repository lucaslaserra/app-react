import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import Product, { NavBar, Usercard } from "./Product";
import {Saludar} from './Saludar'
import reportWebVitals from "./reportWebVitals";
import {Posts} from './Posts'

const root = ReactDOM.createRoot(document.getElementById("root"));

//Guardar función en una constante para luego llamarla
const handleChange = (e) =>{
  console.log(e.target.value);
}

root.render(
  <React.StrictMode>
    
    {/* <Posts/> */}
    {/* <TaskCard ready={true} />
    <Saludar/>
    <Button texto='Saludar'/>
    
    <input id="input" />
    <form onSubmit={(e) => {
     e.preventDefault();
     console.log("enviados")
    }}>

      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>
    */}
  </React.StrictMode>
);

reportWebVitals();
