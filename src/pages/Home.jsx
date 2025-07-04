import React from "react";
import { Link } from "react-router-dom";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";

const marcas = [...new Set(productos.map(p => p.marca))];

function Home({ agregarAlCarrito }) {
  return (
    <div className="contenedor-central">
      {marcas.map((marca) => (
        <section key={marca}>
          <div className="banner-marca">
            <h2>
              <Link to={`/marca/${marca}`} style={{ color: 'white', textDecoration: 'none' }}>
                {marca}
              </Link>
            </h2>
          </div>

          <div className="productos">
            {productos
              .filter((p) => p.marca === marca)
              .slice(0, 3) // ← MUESTRA SOLO 3
              .map((producto) => (
                <ProductoCard key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
