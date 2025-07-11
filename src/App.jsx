import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { CartProvider } from "./components/CartContext";

import Home from "./pages/Home";
import Marca from "./pages/Marca";
import CarritoPage from "./pages/CarritoPage";
import EncabezadoBarra from "./components/EncabezadoBarra";
import NoEncontrado from "./pages/NoEncontrado";
import ProductoPage from "./pages/ProductoPage";
import ResultadosBusqueda from "./pages/ResultadosBusqueda";

function App() {
  return (
    <CartProvider>
      <Router>
        <EncabezadoBarra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marca/:nombre" element={<Marca />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/producto/:id" element={<ProductoPage />} />
          <Route path="/resultados" element={<ResultadosBusqueda />} />
          <Route path="/no-encontrado" element={<NoEncontrado />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
