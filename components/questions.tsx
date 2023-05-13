import React from 'react'
import Container from './container'

const Questions = () => {
  return (
    <div className="pt-1 mt-0 bg-black-50 border-t border-black-200">
    <Container>
      <div className="py-12 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          ¿Tenés alguna duda?
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://wa.me/543794062059?Somos%20CEDRO%20Woods%20realizamos%20muebles%20con%20diseños%20personalizados%20y%20a%20medida.%20Esperamos%20su%20consulta!!%20:D"
            target="_blank"
            className="mx-3 bg-green-400 hover:bg-white hover:text-green-400 border border-green-400 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Chat en linea
          </a>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Questions
