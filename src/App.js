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
import FuncionesIndex from './Views/Funciones/FuncionesIndex';
import FuncionesNuevo from './Views/Funciones/FuncionesNuevo';
import FuncionesEdit from './Views/Funciones/FuncionesEdit';
import PeliculasIndex from './Views/Peliculas/PeliculasIndex';
import PeliculasNuevo from './Views/Peliculas/PeliculasNuevo';
import PeliculaEditar from './Views/Peliculas/PeliculaEditar';
import InsumoIndex from './Views/Insumos/InsumosIndex';
import InsumoNuevo from './Views/Insumos/InsumosNuevo';
import InsumoEditar from './Views/Insumos/InsumosEditar';
import PedidosIndex from './Views/Pedidos/PedidosIndex';
import PedidosInterior from './Views/Pedidos/PedidosInterior';
import PedidosNuevo from './Views/Pedidos/PedidosNuevo';
import ProveedoresIndex from './Views/Proveedores/ProveedoresIndex';
import ProveedoresNuevo from './Views/Proveedores/ProveedoresNuevo';
import ProveedoresEditar from './Views/Proveedores/ProveedoresEditar';
import VentaAlimentosIndex from './Views/VentaAimentos/VentaAlimentosIndex';
import VentaAlimentos from './Views/VentaAimentos/VentaAlimentos';
import VentaAlimentosInterior from './Views/VentaAimentos/VentaAlimentosInterior';
import VentaAlimentosNuevo from './Views/VentaAimentos/VentaAlimentosNuevo';
import VentaBoletos from './Views/VentaBoletos/VentaBoletos';
import VentaBoletosIndex from './Views/VentaBoletos/VentaBoletosIndex';
import VentaBoletosInterior from './Views/VentaBoletos/VentaBoletosInterior';
import VentaBoletosNuevo from './Views/VentaBoletos/VentaBoletosNuevo';

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
              <Route path="funciones" element={<FuncionesIndex />} />
              <Route path="funciones/nuevo" element={<FuncionesNuevo />} />
              <Route path="funciones/:funcionID" element={<FuncionesEdit />} />
              {/*Peliculas*/}
              <Route path="peliculas" element={<PeliculasIndex />} />
              <Route path="peliculas/nuevo" element={<PeliculasNuevo />} />
              <Route path="peliculas/:peliculaID" element={<PeliculaEditar />} />
              {/*Insumos*/}
              <Route path="insumos" element={<InsumoIndex />} />
              <Route path="insumos/nuevo" element={<InsumoNuevo />} />
              <Route path="insumos/:insumoID" element={<InsumoEditar />} />
              {/*Pedidos*/}
              <Route path="pedidos/insumos" element={<PedidosIndex />} />
              <Route path="pedidos/insumos/nuevo" element={<PedidosNuevo />} />
              <Route path="pedidos/insumos/:pedidoID" element={<PedidosInterior />} />
              {/*Proveedores*/}
              <Route path="proveedores" element={<ProveedoresIndex />} />
              <Route path="proveedores/nuevo" element={<ProveedoresNuevo />} />
              <Route path="proveedores/:proveedorID" element={<ProveedoresEditar />} />
              {/*Venta Alimentos*/}
              <Route path="venta-alimentos" element={<VentaAlimentos />} />
              <Route path="venta-alimentos/todas-las-ventas" element={<VentaAlimentosIndex />} />
              <Route path="venta-alimentos/nuevo" element={<VentaAlimentosNuevo />} />
              <Route path="venta-alimentos/:ventaID" element={<VentaAlimentosInterior />} />
               {/*Venta Boletos*/}
              <Route path="venta-boletos" element={<VentaBoletos />} />
              <Route path="venta-boletos/todas-las-ventas" element={<VentaBoletosIndex />} />
              <Route path="venta-boletos/nuevo" element={<VentaBoletosNuevo />} />
              <Route path="venta-boletos/:ventaID" element={<VentaBoletosInterior />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
