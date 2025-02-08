import React from 'react'

const Education = () => {
  return (
    <div className="flex flex-col gap-4 flex-1 justify-center items-center">
      <div className="opacity-80 group relative w-full max-w-2xl bg-gradient-to-r from-[#1a1f3d]/80 via-[#23284e]/80 to-[#1a1f3d]/80 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-purple to-pink-400 bg-clip-text text-transparent">
          Master&apos;s Degree
        </h3>
        <p className="text-white/90 font-medium">Computer Science</p>
        <p className="text-sm text-white/60">
          Eötvös Loránd University (ELTE) • Class of 2024
        </p>
      </div>

      <div className="opacity-80 group relative w-full max-w-2xl bg-gradient-to-r from-[#1a1f3d]/80 via-[#23284e]/80 to-[#1a1f3d]/80 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300"></div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Bachelor&apos;s Degree
        </h3>
        <p className="text-white/90 font-medium">Computer Science</p>
        <p className="text-sm text-white/60">
          J. Selye University • Class of 2022
        </p>
      </div>
    </div>
  )
}

export default Education
