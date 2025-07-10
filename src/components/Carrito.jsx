import React, { useContext } from "react";
import CartContext from "./CartContext";

function Carrito() {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  // Calcular el precio total
  const total = cart.reduce((acc, item) => {
    // Elimina el símbolo $ y convierte a número
    const precioNum = Number(item.precio.replace(/[^\d.]/g, ""));
    return acc + precioNum * item.quantity;
  }, 0);

  return (
    <div className="carrito">
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
                <img src={item.imagen} alt={item.nombre} style={{ width: 60, height: 60, objectFit: "cover", marginRight: 12, borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <strong>{item.nombre}</strong>
                  <div style={{ color: '#007bff', fontWeight: 'bold', margin: '4px 0' }}>
                    Unidad: {item.quantity}
                  </div>
                  <span>{item.precio}</span>
                </div>
                <button
                  onClick={() => handleDecrement(item.id)}
                  style={{ marginLeft: 4, padding: "2px 8px" }}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(item.id)}
                  style={{ marginLeft: 4, padding: "2px 8px" }}
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    marginLeft: 8,
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
          <div style={{
            margin: '32px auto 0 auto',
            fontWeight: 'bold',
            fontSize: 26,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%)',
            color: '#222',
            padding: '20px 0',
            borderRadius: 16,
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            maxWidth: 350
          }}>
            Total a pagar: ${total}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
