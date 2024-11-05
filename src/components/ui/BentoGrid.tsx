'use client'

import { useState, useRef } from 'react'
import { IoCopyOutline } from 'react-icons/io5'

import { cn } from '@/lib/utils'

import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import MagicButton from './MagicButton'
import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import Link from 'next/link'
import { Button } from './MovingBorders'
import { useRouter } from 'next/navigation'
import { BiDownload } from 'react-icons/bi'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  id: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
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

  const [copied, setCopied] = useState(false)
  const dragBoundaries = useRef(null)
  const router = useRouter()

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            ' relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className="group-hover/bento:translate-x-2 transition duration-200 font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 group-hover/bento:translate-x-2 transition duration-200`}
          >
            {title}
          </div>

          {id === 2 && <div className="">Globe</div>}

          {id === 3 && (
            <div className=" mt-3  flex flex-1 gap-1 lg:gap-5 w-full">
              <motion.div
                ref={dragBoundaries}
                className="flex w-full flex-row gap-3 md:gap-3 lg:gap-5 flex-wrap justify-center items-center"
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
                    className="cursor-grab lg:py-4 flex flex-row gap-3 items-center justify-center lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-gradient-to-r from-[#1a1f3d] via-[#23284e] to-[#1a1f3d]  shadow-md shadow-white-100/10"
                  >
                    {item.icon}
                    <p className="text-white">{item.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          {id === 1 && (
            <div className="flex flex-col gap-3 mt-5">
              <Button
                onClick={() => {
                  router.push('/leafsoft')
                }}
                containerClassName="w-full"
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: 'rgb(4,7,29)',
                  backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col items-start">
                  <span className="text-purple font-medium">
                    January 2023 - Present
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Leaf Software Development kft.
                  </h3>
                  <p className="text-white/60">Frontend Developer</p>
                </div>
                <div className="hover:text-purple transition-all duration-200 ">
                  Read more
                </div>
              </Button>

              <Button
                onClick={() => {
                  router.push('/ujs')
                }}
                containerClassName="w-full"
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: 'rgb(4,7,29)',
                  backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col items-start">
                  <span className="text-purple font-medium">2019 - 2022</span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    J. Selye University
                  </h3>
                  <p className="text-white/60">Frontend Developer</p>
                </div>
                <div className="hover:text-purple transition-all duration-200 ">
                  Read more
                </div>
              </Button>

              <Button
                onClick={() => {
                  router.push('/freelance')
                }}
                containerClassName="w-full"
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: 'rgb(4,7,29)',
                  backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col items-start">
                  <span className="text-purple font-medium">2018 - 2019</span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Freelance
                  </h3>
                  <p className="text-white/60">Frontend Developer</p>
                </div>
                <div className="hover:text-purple transition-all duration-200 ">
                  Read more
                </div>
              </Button>
            </div>
          )}
          {id === 5 && (
            <div className="flex flex-col gap-4 flex-1 justify-center items-center">
              <div className="group relative w-full max-w-2xl bg-gradient-to-r from-[#1a1f3d]/80 via-[#23284e]/80 to-[#1a1f3d]/80 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple to-pink-400 bg-clip-text text-transparent">
                  Master's Degree
                </h3>
                <p className="text-white/90 font-medium">Computer Science</p>
                <p className="text-sm text-white/60">
                  Eötvös Loránd University (ELTE) • Class of 2024
                </p>
              </div>

              <div className="group relative w-full max-w-2xl bg-gradient-to-r from-[#1a1f3d]/80 via-[#23284e]/80 to-[#1a1f3d]/80 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Bachelor's Degree
                </h3>
                <p className="text-white/90 font-medium">Computer Science</p>
                <p className="text-sm text-white/60">
                  J. Selye University • Class of 2022
                </p>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              ></div>

              <MagicButton
                title={'Download CV'}
                icon={<BiDownload />}
                position="left"
                handleClick={() => alert('copied')}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
