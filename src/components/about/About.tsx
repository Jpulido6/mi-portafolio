
import img from '../../assets/images/profile.png'
import Skills from '../skills/Skills'

const About = () => {


    return (
        <>

            <div className="w-full h-96 flex z-[100] justify-center mt-10">
                <div className=" lg:w-2/3 h-20 pl-2 xs:w-full">
                    <p className='lg:text-5xl text-pretty mb-10 xs:text-3xl'>Hey, soy Carlos</p>
                    <p className='lg:text-2xl text-pretty mt-2  mb-10 xs:text-lg xs:mb-5'>
                    Soy un apasionado desarrollador frontend y mobile con una sólida base en tecnologías modernas, he perfeccionado mis habilidades en la creación de interfaces de usuario intuitivas y experiencias de usuario envolventes.
                    </p>
                    <span className="border h-10 rounded-full p-2 hover:-scale-90 xs:items-center">Disponible para trabajar</span>
                </div>
                <div className="lg:w-96 lg:flex justify-center h-56 mt-10 xs:hidden">
                    <img src={img} alt="Carlos Pulido Dev" className='w-64 h-64 lg:w-64 lg:h-64 ' />
                </div>
            </div>
            <Skills />
        </>
    )
}

export default About


