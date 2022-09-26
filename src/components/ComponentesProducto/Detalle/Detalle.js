function Detalle({ data }) {
  return (
    <div className="Detalle">
      <div className="DetalleText">
        <h2 className="Heading-1">Un lugar soñado para hospedarse</h2>
        <p
          className="Text-1"
          style={{ textAlign: "left", marginTop: "2%", marginBottom: "3%" }}
        >
          {data.descripcion}
        </p>
      </div>
      <div className="DetalleIcons">
        <h2 className="Heading-1">¿Qué ofrece este lugar?</h2>
        <hr />
        <div className="IconsContainer">
          {data.caracteristicas.map((el) => {
            return (
              <div className="IconText">
                <img src={el.icono} alt={el.nombre} />
                <p className="Text-1" style={{ marginLeft: "10px" }}>
                  {el.nombre}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Detalle;