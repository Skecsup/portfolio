import { cn } from '@/lib/utils'

import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import FlickeringGrid from './FlickeringGrid'
import Education from '../bentoGridSections/Education'
import Experience from '../bentoGridSections/Experience'
import Specialization from '../bentoGridSections/Specialization'
import Resume from '../bentoGridSections/Resume'
import { GiRose } from 'react-icons/gi'

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

        {(id === 1 || id === 5) && (
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={id === 1 ? 4 : 6}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={800}
            width={800}
          />
        )}
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

          {id === 1 && <Experience />}
          {id === 2 && (
            <div className="my-auto font-bold">English, Hungarian, Slovak</div>
          )}
          {id === 3 && <Specialization />}
          {id === 4 && (
            <div className="relative">
              <GiRose className="w-20 h-20 text-rose-600 animate-pulse absolute bottom-0 right-0" />
            </div>
          )}
          {id === 5 && <Education />}
          {id === 6 && <Resume />}
        </div>
      </div>
    </div>
  )
}
