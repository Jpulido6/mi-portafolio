import { GithubIcon } from "../../assets/icons/GithubIcon"
import Button from "../button/Button"
import Contact from "../contact/Contact"
import Header from "../header/Header"
import Particles from "../particles/Particles"
import Projects from "../projects/Projects"



const Hero = () => {



    return (
        <>
            <Header />
            <div id="page" className="z-[99]">
                <section id='home' className='h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
                    <span className='hero-header text-9xl'> CARLOS PULIDO</span>
                    <span className='hero-header text-2xl'> Frontend Developer </span>
                    <div className="flex space-x-4">
                        <Button text="Github" icon={<GithubIcon width={32} height={32} />} />
                        <Button text="Linkedin" icon={<GithubIcon width={32} height={32} />} />

                    </div>
                    <div>
                    </div>

                    < div className="w-[40rem] h-40 relative mt-32">

                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                        <Particles />
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </section>
                <section id="about">

                    <h1>About</h1>
                </section>
                <section id="projects">

                    <h1>Projects</h1>
                    <div className="mt-10 z-[110]">
                        <Projects />
                    </div>

                </section >
                <section id="contact">
                    <h1>Contact</h1>
                    <div className="mt-10 z-[110]">
                        <Contact />
                    </div>

                </section >
            </div>


        </>
    )
}

export default Hero
