import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Registro from "./screens/Registro/Registro";
import Producto from "./screens/Producto/Producto";
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
import ResultadoPorCategoria from "./screens/ResultadoBusqueda/ResultadoPorCategoria";
import Reserva from "./screens/Reserva/Reserva";
import PageNotFound from "./screens/NotFound/pageNotFound.js";
import Administracion from "./screens/Administracion/Administracion";
import ConfirmacionReserva from "./screens/Confirmacion/ConfirmacionReserva";
import ConfirmacionPropiedad from "./screens/Confirmacion/ConfirmacionPropiedad";
import MisReservas from "./screens/MisReservas/MisReservas";

function App() {
  return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route Route index element={<Home />} />
					<Route Route path='/login' element={<Login />} />
					<Route Route path='/registro' element={<Registro />} />
					<Route
						Route
						path='/resultadobusqueda'
						element={<ResultadoBusqueda />}
					/>
					<Route
						Route
						path='/resultadoPorCategoria/:id'
						element={<ResultadoPorCategoria />}
					/>
					<Route Route path='/producto/:id' element={<Producto />} />
					<Route
						Route
						path='/producto/:id/reserva'
						element={<Reserva />}
					/>
					<Route
						Route
						path='/administracion'
						element={<Administracion />}
					/>
					<Route
						Route
						path='/producto/:id/reserva/confirmacion'
						element={<ConfirmacionReserva />}
					/>
					<Route
						Route
						path='/producto/confirmacionProp'
						element={<ConfirmacionPropiedad />}
					/>
					<Route
						Route
						path='/misreservas'
						element={<MisReservas />}
					/>
					<Route
						Route
						path='/pageNotFound'
						element={<PageNotFound/>}
					/>
				</Routes>
			</div>
		</BrowserRouter>
  );
} 

export default App;
