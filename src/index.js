import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import Product, { NavBar, Usercard } from "./Product";
import { Saludar } from "./Saludar";
import reportWebVitals from "./reportWebVitals";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Guardar función en una constante para luego llamarla
// const handleChange = (e) => {
//   return (e.target.value);
// };

function Counter() {
  const [mensaje, setMensaje] = useState("");

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Guardar
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </>
  );
}

root.render(
  <React.StrictMode>
    <Counter />
    {/* <Posts/>  */}
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
