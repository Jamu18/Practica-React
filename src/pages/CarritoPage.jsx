import React from "react";
import { useNavigate } from "react-router-dom";
import Carrito from "../components/Carrito";

function CarritoPage() {
  const navigate = useNavigate();

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}>← Volver</button>
      <div className="carrito-pagina">
        <h2>🛒 Tu carrito de compras</h2>
        <Carrito />
      </div>
    </div>
  );
}

export default CarritoPage;
