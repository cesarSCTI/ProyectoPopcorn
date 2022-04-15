import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './Components/Aside/Aside';
import EmpleadoIndex from './Views/Empleado/EmpleadoIndex';
import './Main.css';
import Home from './Views/Home/Home';
import EmpleadoEdit from './Views/Empleado/EmpleadoEdit';
import EmpleadoNuevo from './Views/Empleado/EmpleadoNuevo';
import AlimentosIndex from './Views/Alimentos/AlimentosIndex';
import AlimentosNuevo from './Views/Alimentos/AlimentosNuevo';
import AlimentosEditar from './Views/Alimentos/AlimentosEditar';

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
      <Aside /> 
      <div className='MainLeft'>
        <Routes>
              <Route path="/" element={<Home/>}/>
              {/*Empleados */}
              <Route path="empleados" element={<EmpleadoIndex />} />
              <Route path="empleados/nuevo" element={<EmpleadoNuevo />} />
              <Route path="empleados/:empleadoID" element={<EmpleadoEdit />} />
              {/*Alimentos */}
              <Route path="alimentos" element={<AlimentosIndex />} />
              <Route path="alimentos/nuevo" element={<AlimentosNuevo />} />
              <Route path="alimentos/:alimentoID" element={<AlimentosEditar />} />
              {/*Funciones */}
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
