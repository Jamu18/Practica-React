import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "./CartContext";

function BotonCarrito() {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  return (
    <Link to="/carrito" className="boton-carrito">
      🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
    </Link>
  );
}

export default BotonCarrito;
