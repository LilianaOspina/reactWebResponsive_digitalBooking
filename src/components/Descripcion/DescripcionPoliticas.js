import "./DescripcionPoliticas.css";

const DescripcionPoliticas = ({ data }) => {
  console.log(data);
  console.log(data?.politicas?.find((el) => el.nombre === "Normas de la casa")?.descripcion);
  return (
    <div className="sec__politicas">
      <h2 className="Heading-1"> ¿Qué tenés que saber? </h2>
      <hr />
      <div className="sec__politicas-detail">
        <section className="sec__politicas-normas">
          <h3>Normas de la casa</h3>
          <textarea rows="6" cols="50" readOnly defaultValue={data?.politicas?.find((el) => el.nombre === "Normas de la casa")
                ?.descripcion}/>
        </section>

        <section className="sec__politicas-seguridad">
          <h3> Salud y seguridad </h3>
          <textarea rows="6" cols="50" readOnly defaultValue={data?.politicas?.find((el) => el.nombre === "Salud y Seguridad")
                ?.descripcion}/>
        </section>

        <section className="sec__politicas-cancelacion">
          <h3> Política de cancelación </h3>
          <textarea rows="6" cols="50" readOnly defaultValue={data?.politicas?.find(
                (el) => el.nombre === "Política de cancelación"
              )?.descripcion}/>
        </section>
      </div>
    </div>
  );
};

export default DescripcionPoliticas;