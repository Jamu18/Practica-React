import React from "react";

function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <div className="carrito">
      <h3>🛒 Carrito ({carrito.length})</h3>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "8px" }}>
              {item.nombre} - {item.precio}
              <button
                onClick={() => eliminarDelCarrito(idx)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
