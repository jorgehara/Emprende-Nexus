import Container from './container'
import Propuesta from './propuesta'


const SubmitButton = () => {
  return (
    <div className="bg-black-50 border-t border-black-200 ">
      <Container>
          <h3 className=" text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:w-1/2 mt-8">
          Tu Idea al Siguiente Nivel - Pasos
          </h3>
        <div className="pb-5 flex flex-col lg:flex-row items-center">

          <Propuesta />
          </div>
      </Container>
    </div>
  )
}

export default SubmitButton


