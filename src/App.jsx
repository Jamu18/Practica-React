import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles.css";
import { CartProvider } from "./components/CartContext";

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
  return (
    <CartProvider>
      <Router>
        <Encabezado />
        <BotonCarrito />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marca/:nombre" element={<Marca />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
