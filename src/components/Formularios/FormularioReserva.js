import "./FormularioReserva.css";

const FormularioReserva = () => {
	const nombreUsuario = sessionStorage.getItem("nombre");
	const apellidoUsuario = sessionStorage.getItem("apellido");
	const emailUsuario = sessionStorage.getItem("email");

	return (
		<>
			<h2>Completá tus datos</h2>
			<form className='form__reserva' action='' method='post'>
				<div>
					<label htmlFor='nombre'>Nombre</label>
					<input
						type='text'
						className='form__input'
						name='nombre'
						id='nombre'
						disabled
						autocomplete='off'
						placeholder='Nombre'
						value={nombreUsuario}
					/>
				</div>
				<div>
					<label for='apellido'>Apellido</label>
					<input
						type='text'
						className='form__input'
						name='nombre'
						placeholder='Apellido'
						id='nombre'
						disabled
						autocomplete='off'
						value={apellidoUsuario}
					/>
				</div>
				<div>
					<label for='email'>Correo electrónico</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='alguien@mail.com'
						className='form__input'
						disabled
						oninvalid="setCustomValidity('Por favor, completar correctamente el mail')"
						value={emailUsuario}
					/>
				</div>
				<div>
					<label for='nombre'>Ciudad</label>
					<input
						type='text'
						className='form__input'
						name='ciudad'
						id='ciudad'
						required
						autocomplete='off'
						placeholder='ciudad'
					/>
				</div>
			</form>
		</>
	);
};
export default FormularioReserva;
