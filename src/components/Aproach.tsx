import React from 'react'
import { GlareCard } from './ui/GlareCard'

const Aproach = () => {
  return (
    <div className="flex justify-center items-center gap-16 h-screen w-full z-50">
      {[1, 2, 3].map((card) => (
        <GlareCard key={card} className="z-50">
          <div className="z-50">hello</div>
        </GlareCard>
      ))}
    </div>
  )
}

export default Aproach
