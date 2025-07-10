import React, { useContext } from "react";
import CartContext from "./CartContext";

function ProductoCard({ producto }) {
  const { cart, dispatch } = useContext(CartContext);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: producto });
  };

  // Buscar si el producto ya está en el carrito
  const cartItem = cart.find((item) => item.id === producto.id);

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">{producto.precio}</p>
      <button className="boton" onClick={handleAdd}>
        Agregar al carrito
      </button>
      {cartItem && (
        <p
          style={{
            marginTop: 8,
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          En carrito: {cartItem.quantity}
        </p>
      )}
    </div>
  );
}

export default ProductoCard;
