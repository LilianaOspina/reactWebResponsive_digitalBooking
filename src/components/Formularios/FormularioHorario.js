import Select from "react-select";
import "./FormularioHorario.css";
import { ReactComponent as Check } from "../../assets/Check.svg";

import { schedule } from "../Listados/schedule";

const FormularioHorario = ({ setHorario }) => {
	const scheduleOptions = schedule.map(o => {
		return {
			value: o.value,
			label: o.name,
		};
	});

	// VER ESTO CON PATO POR EL CONDICIONAL DE LA RESERVA
	const handlechange = options => {
		if (options.value === "Seleccionar hora") {
			setHorario(null);
		} else {
			setHorario(options.value);
		}
	};

	return (
		<>
			<h2>Tu horario de llegada</h2>
			<form className='form__horario'>
				<div className='form__horario-title'>
					<Check className='form__horario-logo' />
					<p>
						Tu habitación va a estar lista para el check-in entre
						las 10:00 AM y las 11:00 PM
					</p>
				</div>
				<div className='form__horario-horas'>
					<label htmlFor='horario'>
						Indicá tu horario estimado de llegada
					</label>
					<Select
						className='selectorHorario'
						classNamePrefix='selectorHorario'
						placeholder='Seleccionar hora'
						options={scheduleOptions}
						onChange={handlechange}
					/>
				</div>
			</form>
		</>
	);
};
export default FormularioHorario;
