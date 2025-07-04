import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Marca({ agregarAlCarrito }) {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const productosMarca = productos
    .filter((p) => p.marca === nombre)
    .slice(0, 5); // ← mostrar solo 5

  return (
    <div className="contenedor-central">
      <button className="boton-volver" onClick={() => navigate(-1)}>← Volver</button>

      <div className="banner-marca">
        <h2>{nombre}</h2>
      </div>

      <div className="productos">
        {productosMarca.map((p) => (
          <ProductoCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
}

export default Marca;
