import React from "react";

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">{producto.precio}</p>
      <button className="boton" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductoCard;
