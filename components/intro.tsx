import Image from 'next/image'

const Intro = () => {
  return (
    <section className="autoBanner flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <div>
          <h3 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Emprende-Nexus
          </h3>
        </div>
        <div>
          <h1 className="text-7xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
            Tu idea en Marcha
          </h1>
        </div>
      </div>
      <div className="flex text-center md:text-left text-lg mt-5 md:pl-8">
        <div className='mr-1'>
          {/* <Image
            width={90}
            height={90}
            src="/hand3.png"
            alt="Picture of the author" /> */}
        </div>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      </h4>
    </section>
  )
}

export default Intro
