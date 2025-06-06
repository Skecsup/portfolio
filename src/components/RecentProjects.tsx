import { projects } from '@/data/index'
import React from 'react'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <div className="py-40" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple"> projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-24 gap-y-24 sm:gap-y-32 ">
        {projects.map(({ id, iconLists, img, des, link, title }) => (
          <div
            key={id}
            className="h-[27.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="mb-4 relative flex items-center justify-center overflow-hidden sm:w-[570px] w-[80vw]">
                <div className="relative w-full overflow-hidden rounded-sm sm:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className=" font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className=" lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className=" flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={`icon-${index}`}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="line-clamp-1">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#cbacg9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
