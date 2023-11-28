import { MoonLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className={`h-[250px]  
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      {/* <ScaleLoader size={100} color='red' /> */}
      <MoonLoader size={100} color="#fc00a6" />
    </div>
  )
}

export default Loader