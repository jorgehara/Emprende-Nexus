import React from 'react'
import Container from './container'
import Image from 'next/image'


const AutoDiagnostico = () => {
  return (
    <div className="bg-black-50 border-black-200">
    <Container>
      <div className="pb-6 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-left lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 bg-white-400">
          Test de Autogestión Gratis!
        </h3>
        <Image
          src="/icons8-login.gif"
          alt="Cedro Woods"
          width={100}
          height={100}
          />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://quizify.us/quizzes/3201?gpt=true&topic=Encuesta%20Laboral&language=es-ES"
            target="_blank"
            className="mx-3 bg-green-400 hover:bg-white hover:text-green-400 border border-green-400 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Clic aqui!
          </a>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default AutoDiagnostico
