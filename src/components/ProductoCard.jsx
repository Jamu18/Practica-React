import React, { useContext } from "react";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";

function ProductoCard({ producto, mostrarComprar }) {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: producto });
  };

  const handleComprar = () => {
    dispatch({ type: "ADD_TO_CART", payload: producto });
    navigate("/carrito");
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
      {mostrarComprar && (
        <button
          className="boton"
          style={{ background: "#28a745", marginLeft: 8 }}
          onClick={handleComprar}
        >
          Comprar
        </button>
      )}
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
