import React from 'react'

const AgregarUsuario = () => {

const agregarUsuario = () => {
  
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'></div>
        <h2 className='mt-4'>Adicionar usuário</h2>
      </div>

      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-labeil'>Nome</label>
            <input type="text" className='form-control'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-labeil'>Email</label>
            <input type="text" className='form-control'></input>
          </div>

          <div className='mb-3'>
            <label htmlFor='telefone' className='form-labeil'>Telefone</label>
            <input type="text" className='form-control'></input>
          </div>

          <button onClick={agregarUsuario} className='btn btn-success'>Cadastrar usuário</button>

        </div>
      </div>
    </div>
  )
}

export default AgregarUsuario
