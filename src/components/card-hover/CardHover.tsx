import { AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import { Card, CardDescription, CardTitle } from '../card/Card';

interface CardHoverProps {
    skill: {
        name: string;
        logo: string
    }[];
}

const CardHover: React.FC<CardHoverProps> = ({ skill }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-2 px-5 place-items-center">
            {
                skill.map((item, idx) => (
                    <a key={idx}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />

                            )}
                        </AnimatePresence>
                        <Card>
                            <CardDescription><img src={item.logo}/></CardDescription>
                            <CardTitle>{item.name}</CardTitle>
                        </Card>

                    </a>
                ))
            }
        </div>

    )
}

export default CardHover