'use client'

import React from 'react'
import MagicButton from '../ui/MagicButton'
import { BiDownload } from 'react-icons/bi'
import Link from 'next/link'

const Resume = () => {
  return (
    <div className="mt-5 relative">
      <div className={`absolute -bottom-5 right-0 block`}></div>
      <Link target="_blank" href={'/kicsindy-julius-cv.pdf'}>
        <MagicButton
          title={'Download CV'}
          icon={<BiDownload />}
          position="left"
          //handleClick={() => alert('copied')}
          otherClasses="!bg-[#161A31] hover:animate-pulse"
        />
      </Link>
    </div>
  )
}

export default Resume
