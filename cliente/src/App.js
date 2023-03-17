import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import ListaUsuarios from "./ListaUsuarios";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark"> 
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Crud Mern STACK - Lótus Software</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Adicionar Usuário</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios />}></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />}></Route>
          <Route path='/editarusuario' element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
