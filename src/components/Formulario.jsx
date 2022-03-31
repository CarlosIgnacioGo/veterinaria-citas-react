import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }else{
      console.log('No hay nada')
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString()

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, propietario, email, alta, sintomas].includes('')){
      setError(true)
      return
    }

    setError(false)

    //objPaciente necesario para guardarlo en el arr de pacientes
    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      objPaciente.id = paciente.id
      const pacientesActulizados = pacientes.map( pacientesState => pacientesState.id === paciente.id ?  objPaciente : pacientesState )
      setPacientes(pacientesActulizados)
      setPaciente({})
    }else{
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }
    
    //Guardar el objPaciente en el arr

    // Reset del formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        { error && <Error>Todos los campos son obligatorios</Error> }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)}  id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"/>
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input value={propietario} onChange={(e) => setPropietario(e.target.value)} id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input value={alta} onChange={(e) => setAlta(e.target.value)} id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600"/>
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-indigo-600" placeholder="Describe los sintomas"></textarea>
        </div>

        <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"/>
      </form>
    </div>
  )
}

export default Formulario

