import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import CartContext from "../components/CartContext";

function ProductoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const producto = productos.find(p => p.id === Number(id));

  if (!producto) {
    return <div style={{textAlign: 'center', marginTop: 60, fontSize: 24, color: '#d32f2f'}}>Producto no encontrado :(</div>;
  }

  const handleAgregar = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...producto, quantity: 1 } });
  };
  const handleComprar = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...producto, quantity: 1 } });
    navigate("/carrito");
  };

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}> Volver</button>
      <div className="producto" style={{margin: '40px auto', maxWidth: 350}}>
        <img src={producto.imagen} alt={producto.nombre} style={{width: '100%', borderRadius: 12}} />
        <h2>{producto.nombre}</h2>
        <p className="precio">{producto.precio}</p>
        <p style={{fontWeight: 'bold', color: '#555'}}>Marca: {producto.marca}</p>
        <button className="boton" onClick={handleAgregar}>Agregar al carrito</button>
        <button className="boton" style={{background:'#28a745',marginLeft:8}} onClick={handleComprar}>Comprar</button>
      </div>
    </div>
  );
}

export default ProductoPage;
