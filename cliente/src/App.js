import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import ListaUsuarios from "./ListaUsuarios";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>

        <h1>Crud Mern Stack Lótus Software</h1>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaUsuarios />}></Route>
            <Route path='/agregarusuario' element={<AgregarUsuario />}></Route>
            <Route path='/editarusuario' element={<EditarUsuario />}></Route>
          </Routes>
        </BrowserRouter>





      </div>
    </div>
  );
}

export default App;
