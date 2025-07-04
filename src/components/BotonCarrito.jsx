import React from "react";
import { Link, useLocation } from "react-router-dom";

function BotonCarrito({ cantidad }) {
  const location = useLocation();

  // Ocultarlo si ya estamos en la página del carrito
  if (location.pathname === "/carrito") return null;

  return (
    <Link to="/carrito" className="boton-carrito">
      🛒 {cantidad}
    </Link>
  );
}

export default BotonCarrito;
