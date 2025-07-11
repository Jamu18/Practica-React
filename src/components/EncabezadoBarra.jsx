import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonCarrito from "./BotonCarrito";
import productos from "../data/productos";

function EncabezadoBarra() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    if (!busqueda.trim()) return;
    navigate(`/resultados?q=${encodeURIComponent(busqueda)}`);
  };

  return (
    <>
      <header className="barra-encabezado barra-encabezado-grande">
        <Link
          to="/"
          className="logo-titulo"
          style={{
            position: "absolute",
            left: 32,
            top: 0,
            height: "64px",
            display: "flex",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          E-Commerce Ejemplo
        </Link>
        <form className="barra-busqueda" onSubmit={handleBuscar} style={{ margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Buscar producto o marca..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="barra-der">
          <BotonCarrito />
        </div>
      </header>

      {/* Nuevo encabezado pequeño debajo */}
      <nav className="barra-secundaria">
        <div className="menu-todos">
          <button className="boton-todos">Todos ▼</button>
          <div className="menu-desplegable">
            <div className="menu-titulo">Explora:</div>
            <Link to="/" className="menu-casilla">
              Inicio
            </Link>
            <Link to="/carrito" className="menu-casilla">
              Carrito
            </Link>
            <Link to="/oferta" className="menu-casilla">
              Ofertas
            </Link>
            <Link to="/marcas" className="menu-casilla">
              Marcas
            </Link>
          </div>
        </div>
        <Link to="/oferta" className="boton-secundario">
          Oferta del día
        </Link>
        <Link to="/marcas" className="boton-secundario">
          Marcas
        </Link>
      </nav>
    </>
  );
}

export default EncabezadoBarra;
