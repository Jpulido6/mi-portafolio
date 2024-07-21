import CardHover from '../card-hover/CardHover';
import { frontend } from '../../helpers/frontend.json';
import { mobile } from '../../helpers/mobile.json';
import { backend } from '../../helpers/backend.json';


const Skills = () => {
    return (
        <>
            
            <div className='lg:w-full lg:h-[40rem] flex lg:flex-row z-[100] xs:w-full xs:flex-col xs:mt-8'>
                <div className="lg:w-1/4 h-full flex items-center justify-center xs:w-full xs:mb-8 ">
                    <span className='xs:w-full  xs:flex-row  xs:justify-center lg:border-l-4 lg:border-indigo-500 flex lg:flex-col items-center xs:border-0'>
                        <span className='text-5xl font-bold pl-2'>Mi</span>
                        <span className='text-5xl font-bold pl-2'>Stack</span>
                    </span>
                </div>
                <div className='card overflow-x-auto lg:w-2/3 justify-center xs:w-full'>
                    <div className='w-full text-center '>
                        <span className='lg:text-5xl font-bold pl-2 xs:text-3xl'>Frontend</span>
                        <CardHover skill={frontend} />
                    </div>
                    <div className='w-full text-center'>
                        <span className='lg:text-5xl font-bold pl-2 xs:text-3xl'>Mobile</span>
                        <CardHover skill={mobile} />
                    </div>
                    <div className='w-full text-center'>
                        <span className='lg:text-5xl font-bold pl-2 xs:text-3xl'>Backend</span>
                        <CardHover skill={backend} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills