import React from 'react'
import { Button } from '../ui/MovingBorders'

const Experience = () => {
  return (
    <div className="flex flex-col gap-3 mt-5 max-h-96 overflow-y-auto no-scrollbar">
      <Button
        containerClassName="w-full min-h-28"
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className=" p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-purple font-medium">2026 - Present</span>
            <h3 className="text-lg font-bold text-white mt-1">Self Employed</h3>
            <p className="text-white/60">Freelance Frontend Engineer</p>
          </div>
        </div>
      </Button>
      <Button
        containerClassName="w-full min-h-28"
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className=" p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-purple font-medium">
              2025 Sep. - 2026 Mar.
            </span>
            <h3 className="text-lg font-bold text-white mt-1">TAKKT Group</h3>
            <p className="text-white/60">Frontend Engineer</p>
          </div>
        </div>
      </Button>
      <Button
        containerClassName="w-full min-h-28"
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className=" p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-purple font-medium">
              2025 Mar. - 2025 Jun.
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Maileon Digital Kft.
            </h3>
            <p className="text-white/60">Frontend Developer</p>
          </div>
        </div>
      </Button>
      <Button
        containerClassName="w-full min-h-28"
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className=" p-4 flex flex-row justify-between items-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-purple font-medium">2023 - 2025</span>
            <h3 className="text-lg font-bold text-white mt-1">
              Leaf Software Development Kft.
            </h3>
            <p className="text-white/60">Frontend Developer</p>
          </div>
        </div>
      </Button>

      <Button
        containerClassName="w-full min-h-28"
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
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-purple font-medium">2021 - 2022</span>
            <h3 className="text-lg font-bold text-white mt-1">
              J. Selye University
            </h3>
            <p className="text-white/60">Junior Frontend Developer</p>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default Experience
