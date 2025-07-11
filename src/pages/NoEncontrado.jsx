import React from "react";

function NoEncontrado() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      fontSize: 24,
      color: "#d32f2f",
      fontWeight: "bold"
    }}>
      Producto no encontrado :(
      <div style={{fontSize: 18, color: '#333', marginTop: 12}}>
        ¡Vuelve a realizar tu búsqueda!
      </div>
    </div>
  );
}

export default NoEncontrado;
