import React from "react";
import { useNavigate } from "react-router-dom";

function CarritoPage({ carrito, eliminarDelCarrito }) {
  const navigate = useNavigate();

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}>← Volver</button>

      <div className="carrito-pagina">
        <h2>🛒 Tu carrito de compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((item, idx) => (
              <li key={idx} className="carrito-item">
                {item.nombre} - {item.precio}
                <button onClick={() => eliminarDelCarrito(idx)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CarritoPage;
