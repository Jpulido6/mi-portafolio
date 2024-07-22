import Header from "./components/header/Header"
import Particles from "./components/particles/Particles"
import Projects from "./components/projects/Projects"
import Button from "./components/button/Button"
import About from "./components/about/About"
import { GithubIcon } from "./assets/icons/GithubIcon"
import { LinkedinIcon } from "./assets/icons/LinkedinIcon"
import { ScrollBar } from "./components/scroll-bar/Scroll-bar"
import React from "react"



function App() {
    const nameRef = React.useRef<HTMLHeadingElement>(null)

    React.useEffect(() => {
        const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let interval: NodeJS.Timeout | null = null;
        let iteration: number = 0;

        if (nameRef.current) {
            nameRef.current.onmouseover = (event) => {
                const element: HTMLHeadingElement = event.target as HTMLHeadingElement;

                iteration = 0;
                if (interval) {
                    clearInterval(interval);
                }

                interval = setInterval(() => {
                    element.innerText = element.innerText.split('').map((letter, index) => {
                        console.log(letter)
                        if (index < iteration) {
                            return element.dataset.value![index];
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    }).join('');
                    if (iteration >= element.dataset.value!.length) {
                        clearInterval(interval!);
                    }
                    iteration += 1 / 3;
                }, 30)

            }
        }
    }, [])

    return (
        <>
            <Header />
            <ScrollBar>
                <div id="page" className="z-[99]">
                    <section id='home' className='h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
                        <div className="sm:justify-center sm:items-center flex flex-col justify-center items-center mt-40">
                            <span data-value="CARLOS PULIDO" ref={nameRef} className='hero-header z-[100] md:text-9xl xs:text-8xl xs:text-center'> CARLOS PULIDO</span>
                            <span className='hero-header text-2xl'> Frontend Developer </span>
                            <div className="flex space-x-4 items-center justify-center ">
                                <Button href="https://github.com/Jpulido6" text="Github" icon={<GithubIcon width={24} height={24} />} />
                                <Button href="https://www.linkedin.com/in/jpulido6/" text="LinkedIn" icon={<LinkedinIcon width={24} height={24} />} />

                            </div>
                            < div className="w-[40rem] h-40 relative mt-2">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                                <Particles />
                                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <h1 >Sobre mi</h1>
                        <About />
                    </section>
                    <section id="projects">
                        <h1 >Proyectos</h1>
                        <div className="mt-10 z-[110] w-full">
                            <Projects />
                        </div>
                    </section >
                </div>
                <div className=" z-[110] w-full flex items-center lg:justify-start xs:justify-center">
                    © 2024 Hecho con 💙 por Carlos Pulido.
                </div>

            </ScrollBar >
        </>
    )
}

export default App

