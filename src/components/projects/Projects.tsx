import React from "react"
import { GithubIcon } from "../../assets/icons/GithubIcon"
import { WebIcon } from "../../assets/icons/WebIcon"
import Button from "../button/Button"
import { InfiniteMovingCards } from "../infinite-moving-card/InfiniteMovingCard"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { projects } from "../../helpers/projects.json"




const Projects = () => {
    const carRef = React.useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    React.useEffect(() => {


        const cards: HTMLElement[] = [carRef.current!];

        cards.forEach((card) => {
            const anim = gsap.fromTo(card, {
                autoAlpha: 0,
                y: 100,
                x: -100,
                rotate: -10,
            },
                {
                    duration: 0.6,
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    rotate: 0
                }
            )
            ScrollTrigger.create({
                trigger: card,
                animation: anim,
            })
        })

    })

    return (
        <>

            <div className="mx-auto antialiased pt-4 relative xs:-my-12" ref={carRef}>
                {projects.map((project, index) => (
                    <div className='my-20 flex flex-col lg:flex-row xs:my-20' key={index}>
                        <img src={project.image} alt={project.title} className="xs:w-full lg:w-2/4 h-full rounded-lg mb-10 object-cover lg:mb-0" />

                        <div className="w-2/4 p-2 pl-10 lg:pl-10 xs:w-full xs:pl-0">
                            <h2 className='text-2xl font-bold text-slate-100 '>
                                {project.title}
                            </h2>
                            <p className='text-lg text-slate-300 mt-10'>{project.description}</p>

                            <div className="lg:mt-0 lg:ml-4 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                                <span className="text-slate-300 justify-start w-full py-2">Tecnologías: </span>
                                <InfiniteMovingCards items={project.technologies} />
                            </div>

                            <div className="flex flex-row gap-2 mt-4 lg:mt-0 w-full lg:w-6/12">
                                <Button icon={<GithubIcon width={24} height={24} />} text={'code'} href={project.github_repo} />
                                {project.cloud_deploy && (
                                    <Button icon={<WebIcon width={24} height={24} />} text={'Preview'} href={project.cloud_deploy} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Projects