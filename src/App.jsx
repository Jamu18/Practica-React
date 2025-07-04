import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Marca from "./pages/Marca";
import CarritoPage from "./pages/CarritoPage";
import BotonCarrito from "./components/BotonCarrito";

function Encabezado() {
  const location = useLocation();
  if (location.pathname !== "/") return null;

  return (
    <header className="encabezado-principal">
      <h1><Link to="/" style={{ color: "white", textDecoration: "none" }}>E-Commerce Ejemplo</Link></h1>
    </header>
  );
}

function App() {
  const [carrito, setCarrito] = useState([]);
  
  

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Encabezado />
      <BotonCarrito cantidad={carrito.length} />
      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/marca/:nombre" element={<Marca agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<CarritoPage carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} />
      </Routes>
    </Router>
  );
}

export default App;
