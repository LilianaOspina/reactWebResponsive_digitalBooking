import './Registro.css';
// import '../../../App.css' // CSS General a toda la app
import Button from '../../components/Button/Button';
import {React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderRegister from '../../layout/Header/HeaderRegister';
import Footer from '../../layout/Footer/Footer';
import { login, register } from '../../server/server';
import { guardarCredenciales } from '../../helpers/helpers';
import Swal from "sweetalert2";

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function Registro() {

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password2: ""
})
const [response, setResponse] = useState({
    status : null,
    data : ""
})
const [loading, setLoading] = useState(false)
//const confirmPass = useRef(null);
//const userService = new UserService();
//const history = useHistory()
let errors = [];


const validate = () => {

    const inputNombre = document.querySelector("#inputNombre")
    //const errorNombre = document.querySelector("#errorNombre")
    const inputApellido = document.querySelector("#inputApellido")
    //const errorApellido = document.querySelector("#errorApellido")
    const inputEmail = document.querySelector("#inputEmail")
    const errorEmail = document.querySelector("#errorEmail")
    const inputPassword = document.querySelector("#inputPassword")
    const errorPassword = document.querySelector("#errorPassword")
    const inputConfirmPassword = document.querySelector("#inputConfirmPassword")
    const errorConfirmPassword = document.querySelector("#errorConfirmPassword")

    //!data.nombre ? (errorNombre.className = "error") && (inputNombre.className = "inputError") && errors.push(1) : (errorNombre.className = "hide") && (inputNombre.className = "inputLogin");
    //!data.apellido ? (errorApellido.className = "error") && (inputApellido.className = "inputError") && errors.push(1) : (errorApellido.className = "hide") && (inputApellido.className = "inputLogin");
    !emailRegexp.test(data.email) ? (errorEmail.className = "error") && (inputEmail.className = "inputError") && errors.push(1) : (errorEmail.className = "hide") && (inputEmail.className = "InputLogin");
    data.password.length < 6 ? (errorPassword.className = "error") && (inputPassword.className = "inputError") && errors.push(1) : (errorPassword.className = "hide") && (inputPassword.className = "InputLogin");
    data.password !== data.password2 ? (errorConfirmPassword.className = "error") && (inputConfirmPassword.className = "inputError") && errors.push(1) : (errorConfirmPassword.className = "hide") && (inputConfirmPassword.className = "InputLogin");
}

const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}


const handleSubmit = async (e) => {
    e.preventDefault();

    validate();
    if (!errors[0]) {
        let credenciales = {
          Cnombre : data.nombre,
          Capellido : data.apellido,
          Cemail : data.email,
          Cpassword : data.password
        }
          localStorage.setItem('items', JSON.stringify(credenciales));
       
	   try {
	   await register( data.nombre, data.apellido, data.email, data.password);
	   const respuesta = await login(data.email, data.password);
	   guardarCredenciales(respuesta)
       navigate('/');

		} 
	   catch (error) {
		Swal.fire(
			"Lamentablemente no ha podido registrarse. Por favor intente más tarde"
		  );
	  }
    }
    errors = [];
}


  return (
		// eslint-disable-next-line react/self-closing-comp
    <>
      <HeaderRegister />
			<div className='Registro'>
				<h2 className='Heading-1'>Crear Cuenta</h2>
				<form onSubmit={handleSubmit}>
					<div className='ContainerNombreApellido'>
						<div className='ContainerNombre'>
							<label className='Text-2'>
								{" "}
								Nombre
								<input
									type='text'
									name='nombre'
									id='inputNombre'
									className='InputLogin'
									value={data.nombre}
									onChange={handleChange}
									required
								/>
							</label>
						</div>

						<div className='ContainerNombre'>
							<label className='Text-2'>
								{" "}
								Apellido
								<input
									type='text'
									name='apellido'
									id='inputApellido'
									className='InputLogin'
									value={data.apellido}
									onChange={handleChange}
									required
								/>
							</label>
						</div>
					</div>

					<div className='ContainerMail'>
						<label className='Text-2'>
							{" "}
							Correo Electrónico
							<input
								type='email'
								name='email'
								id='inputEmail'
								className='InputLogin'
								required
								value={data.email}
								onChange={handleChange}
							/>
							<p className='hide' id='errorEmail'>
								Correo electrónico inválido
							</p>
						</label>
					</div>
					<div className='ContainerMail'>
						<label className='Text-2'>
							{" "}
							Contraseña
							<input
								type='password'
								name='password'
								id='inputPassword'
								className='InputLogin'
								required
								value={data.password}
								onChange={handleChange}
							/>
							<p className='hide' id='errorPassword'>
								La Contraseña debe contener almenos 6 caracteres
							</p>
						</label>
					</div>
					<div className='ContainerMail'>
						<label className='Text-2'>
							{" "}
							Repetir Contraseña
						  <input
							  role='insertion'
								type='password'
								name='password2'
								id='inputConfirmPassword'
								className='InputLogin'
								required
								value={data.password2}
								onChange={handleChange}
							/>
							<p className='hide' id='errorConfirmPassword'>
								Las Contraseñas no coinciden
							</p>
						</label>
					</div>
					<div className='ContainerMail'>
						<Button> Crear Cuenta </Button>
					</div>
					<p className='Text-2'>
						¿Ya tienes una cuenta?{" "}
						<Link to='/login'>Iniciar sesión</Link>
					</p>
				</form>
      </div>
      <Footer />
		</>
  );
}
export default Registro;