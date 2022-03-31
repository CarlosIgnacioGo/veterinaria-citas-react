const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, alta, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {' '}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {' '}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {' '}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {' '}
          <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {' '}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="mt-10">
          <button 
            className="mr-4 py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
            type="button" onClick={ () => setPaciente(paciente) }
          >
            Editar
          </button>

          <button
            className="py-2 px-10  bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md"
            type="button" onClick={handleEliminar}
          >
            Eliminar
          </button>

          
        </div>
    </div>
  )
}

export default Paciente
