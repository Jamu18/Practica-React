import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import { normalizarTexto } from '../data/normalizarTexto';

function Marca({ agregarAlCarrito }) {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const productosMarca = productos.filter((p) => normalizarTexto(p.marca) === normalizarTexto(nombre));

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}>← Volver</button>

      <div className="banner-marca">
        <h2>{nombre}</h2>
      </div>

      <div className="productos">
        {productosMarca.map((p) => (
          <ProductoCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} mostrarComprar={true} />
        ))}
      </div>
    </div>
  );
}

export default Marca;
