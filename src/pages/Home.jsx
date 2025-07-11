import React from "react";
import { Link } from "react-router-dom";
import productos from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import { normalizarTexto } from '../data/normalizarTexto';

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
              .filter((p) => normalizarTexto(p.marca) === normalizarTexto(marca))
              .map((producto) => (
                <ProductoCard key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} mostrarComprar={true} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
