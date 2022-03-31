const Error = ({children}) => {
  return (
    <div className='bg-red-500 text-white text-center p-3 font-bold mb-5 rounded-md'>
        <p>{children}</p>
    </div>
  )
}

export default Error
