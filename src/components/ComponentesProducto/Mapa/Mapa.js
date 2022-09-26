
function Mapa({ data }) {
  return (
      <div className="Mapa">
                <h2 className="Heading-1">¿Dónde vas a estar?</h2>
                <hr/>
                <div className="MapContainer">
                  <h3 className="Heading-3 Heading-3_producto"> {data.ciudad.nombre}, {data.ciudad.pais}</h3>
                  <div class="mapouter">
                      <div class="gmap_canvas">
                          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=charcas%20y%20Thames%20buenos%20aires&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <br/>
                      </div>
                    </div>
                </div>
      </div>

  );
}

export default Mapa;