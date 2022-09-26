//este modulo aisla la comunicación con el servidor y exporta métodos que devuelven datos.
//Ocultando la lógica de la api a los componentes

import axios from "axios";

const CONFIG = {
  server: "http://lcode-env.eba-cgbmmmsp.us-east-2.elasticbeanstalk.com/",
  api: "api/",
};

const server = axios.create({
  baseURL: `${CONFIG.server}${CONFIG.api}`,
});

const updateToken = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    server.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const getCiudades = async () => {
  const res = await server.get("ciudades/listarCiudades");
  return res.data;
};

export const getReservasPorProducto = async (id) => {
  updateToken();
  const res = await server.get("reserva/obtenerReservasPorProducto/" + id);
  return res.data;
};

export const getCategories = async () => {
  const res = await server.get("categoria/obtenerCategorias");
  return res.data;
};

export const getProducts = async () => {
  const res = await server.get("producto/obtenerProductos");
  return res.data;
};

export const getProductsId = async (id) => {
  const res = await server.get(`producto/obtenerProductoPorId/${id}`);
  return res.data;
};

export const getProductsPorCiudad = async (id) => {
  const res = await server.get(`producto/obtenerProductosCiudad/${id}`);
  return res.data;
};

export const getProductsPorFechas = async (check_in, check_out) => {
  const res = await server.get(
    `producto/obtenerProductos?check_in=${check_in}&check_out=${check_out}`
  );
  return res.data;
};

export const getProductsPorCiudadEntreFechas = async (
  id,
  check_in,
  check_out
) => {
  const res = await server.get(
    `producto/obtenerProductosCiudad/${id}?check_in=${check_in}&check_out=${check_out}`
  );
  return res.data;
};

export const getProductsByCategories = async (id) => {
  const res = await server.get(`producto/obtenerProductosCategoria/${id}`);
  return res.data;
};

export const login = async (email, password) => {
  const res = await server.post(`auth/login`, {
    email: email,
    password: password,
  });
  return res.data;
};

// Algo así debería ser el registro

export const register = async (nombre, apellido, email, password) => {
  const res = await server.post(`usuario/crearUsuario`, {
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: password,
    rol: {
      id: 2,
    },
  });
  return res.data;
};

export const crearReserva = async (checkIn, checkOut, productoId) => {
  updateToken();
  const res = await server.post(`reserva/crear/`, {
    checkIn: checkIn,
    checkOut: checkOut,
    productoId: productoId,
  });
  return res.data;
};

export const crearProducto = async (datosProducto) => {
  updateToken();
  const res = await server.post("producto/crear", datosProducto);
  return res.data;
};

export const getAtributos = async () => {
  const res = await server.get('carateristica/obtenerCaracteristicas')

  // mock, cuando el server devuelva todas las características,
  // descomentar la línea 116 y reemplazar respuesta por res.data

  // eliminamos duplicados comparando nombre e icono dentro de un reducer del array de características
  return res.data.reduce((nuevaLista, atributo) => {
    // si el atributo evaluado no existe en la nueva lista, se agrega, en caso contrario se devuelve
    // la nueva lista sin modificaciones
    if (
      !nuevaLista.find(
        (el) => el.name === atributo.name && el.icono === atributo.icono
      )
    ) {
      nuevaLista.push({ icono: atributo.icono, nombre: atributo.nombre });
    }
    return nuevaLista;
  }, []);
};

export const getReserveByUser = async id => {
  updateToken();
	const res = await server.get(`reserva/obtenerReservasPorUsuario/`);
	return res.data;
};
