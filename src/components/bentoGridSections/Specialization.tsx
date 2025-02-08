'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiReact,
} from 'react-icons/si'
const leftLists = [
  {
    title: 'React',
    icon: <SiReact className="w-6 h-6" />,
    top: '20%',
    left: '15%',
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs className="w-6 h-6" />,
    top: '35%',
    left: '25%',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript className="w-6 h-6" />,
    top: '50%',
    left: '10%',
  },
  {
    title: 'ShadcnUI',
    icon: <SiShadcnui className="w-6 h-6" />,
    top: '65%',
    left: '30%',
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss className="w-6 h-6" />,
    top: '80%',
    left: '20%',
  },
]
const Specialization = () => {
  const dragBoundaries = useRef(null)
  return (
    <div className=" mt-5 flex flex-1  items-center w-full">
      <motion.div
        ref={dragBoundaries}
        className="flex w-full flex-row gap-3 md:gap-3 lg:gap-5  flex-wrap justify-start items-center"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {leftLists.map((item, i) => (
          <motion.div
            dragConstraints={dragBoundaries}
            drag
            key={i}
            variants={{
              hidden: { rotate: 0 },
              show: {
                rotate: [0, -5, 5, -5, 5, 0],
                transition: {
                  duration: 0.5,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: 'easeInOut',
                },
              },
            }}
            className="cursor-grab lg:py-4 flex flex-row gap-3 items-center justify-center lg:px-3 py-2 px-3 text-xs lg:text-base
                     rounded-lg text-center bg-gradient-to-r from-[#1a1f3d] via-[#23284e] to-[#1a1f3d]  shadow-md shadow-white-100/10"
          >
            {item.icon}
            <p className="text-white hidden sm:block">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Specialization
