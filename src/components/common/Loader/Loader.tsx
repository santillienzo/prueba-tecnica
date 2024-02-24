import { ring2 } from 'ldrs'

ring2.register()

const Loader = () => {
  return (
    <l-ring-2
        size="26"
        stroke="3"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8" 
        color="#6848C8" 
    ></l-ring-2>
  )
}

export default Loader