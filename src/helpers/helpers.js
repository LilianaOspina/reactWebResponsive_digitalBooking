import jwt_decode from "jwt-decode";

export const guardarCredenciales = (credenciales) => {
  const usuario = jwt_decode(credenciales.access_token);
  sessionStorage.setItem("nombre", credenciales.nombre);
  sessionStorage.setItem("apellido", credenciales.apellido);
  sessionStorage.setItem("token", credenciales.access_token);
  sessionStorage.setItem("email", credenciales.email);
  sessionStorage.setItem("rol", usuario.authorities[0].authority);
};

export const isAdmin = () => {
return sessionStorage.getItem("rol") === "ROLE_ADMIN"
}