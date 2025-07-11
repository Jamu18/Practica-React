import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import { normalizarTexto } from '../data/normalizarTexto';
import { useContext } from "react";
import CartContext from "../components/CartContext";

function ResultadosBusqueda() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";
  const input = q.toLowerCase();

  // Buscar productos similares
  const resultados = productos.filter(p =>
    normalizarTexto(p.nombre).includes(normalizarTexto(input)) ||
    normalizarTexto(input).split(" ").some(word => normalizarTexto(p.nombre).includes(word))
  );

  if (!q.trim()) {
    return <div style={{textAlign: 'center', marginTop: 60, fontSize: 22}}>Ingresa un término de búsqueda.</div>;
  }

  if (resultados.length === 0) {
    return (
      <div style={{textAlign: 'center', marginTop: 60, fontSize: 22, color: '#d32f2f'}}>
        Producto no encontrado :(<br/>
        <span style={{fontSize: 18, color: '#333'}}>¡Vuelve a realizar tu búsqueda!</span>
      </div>
    );
  }

  const handleAgregar = (producto) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...producto, quantity: 1 } });
  };
  const handleComprar = (producto) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...producto, quantity: 1 } });
    navigate("/carrito");
  };

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}> Volver</button>
      <h2 style={{marginTop: 40, marginBottom: 24, color: '#000'}}>Resultados para "{q}"</h2>
      <div className="productos">
        {resultados.map(producto => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio}</p>
            <p style={{fontWeight: 'bold', color: '#555'}}>Marca: {producto.marca}</p>
            <button className="boton" onClick={() => handleAgregar(producto)}>Agregar al carrito</button>
            <button className="boton" style={{background:'#28a745',marginLeft:8}} onClick={() => handleComprar(producto)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultadosBusqueda;
