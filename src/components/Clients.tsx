import React from 'react'

import { Marquee } from './ui/Marquee'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiZod,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiInfluxdb,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiCypress,
  SiPlaywright,
  SiGithub,
  SiGithubactions,
  SiMui,
  SiDrizzle,
  SiShadcnui,
  SiReacthookform,
  SiNetlify,
  SiReactquery,
  SiGit,
  SiGrafana,
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { TbBrandReactNative } from 'react-icons/tb'

const frontendTechnologies = [
  {
    id: 1,
    title: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    id: 2,
    title: 'React.js',
    icon: <SiReact />,
  },
  {
    id: 3,
    title: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    title: 'Material UI',
    icon: <SiMui />,
  },

  {
    id: 7,
    title: 'Zod',
    icon: <SiZod />,
  },
  {
    id: 8,
    title: 'React Query',
    icon: <SiReactquery />,
  },
  {
    id: 9,
    title: 'React Hook Form',
    icon: <SiReacthookform />,
  },
  {
    id: 10,
    title: 'Shadcn UI',
    icon: <SiShadcnui />,
  },
  {
    id: 11,
    title: 'React Native',
    icon: <TbBrandReactNative />,
  },
]

const backendTechnologies = [
  {
    id: 12,
    title: 'Socket.IO',
    icon: <SiSocketdotio />,
  },
  {
    id: 13,
    title: 'Node.js',
    icon: <SiNodedotjs />,
  },
  {
    id: 14,
    title: 'Express.js',
    icon: <SiExpress />,
  },
  {
    id: 15,
    title: 'Nest.js',
    icon: <SiNestjs />,
  },
]

const databaseTechnologies = [
  {
    id: 16,
    title: 'MySQL',
    icon: <GrMysql />,
  },
  {
    id: 17,
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
  {
    id: 18,
    title: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    id: 19,
    title: 'InfluxDB',
    icon: <SiInfluxdb />,
  },
  {
    id: 20,
    title: 'Prisma',
    icon: <SiPrisma />,
  },
  {
    id: 21,
    title: 'Drizzle',
    icon: <SiDrizzle />,
  },
]

const devOpsTechnologies = [
  {
    id: 22,
    title: 'Docker',
    icon: <SiDocker />,
  },
  {
    id: 23,
    title: 'Vercel',
    icon: <SiVercel />,
  },
  {
    id: 24,
    title: 'Netlify',
    icon: <SiNetlify />,
  },
  {
    id: 25,
    title: 'Cypress',
    icon: <SiCypress />,
  },
  {
    id: 26,
    title: 'Playwright',
    icon: <SiPlaywright />,
  },
  {
    id: 27,
    title: 'GitHub',
    icon: <SiGithub />,
  },
  {
    id: 28,
    title: 'GitHub Actions',
    icon: <SiGithubactions />,
  },
  {
    id: 29,
    title: 'Git',
    icon: <SiGit />,
  },
  {
    id: 30,
    title: 'Grafana',
    icon: <SiGrafana />,
  },
]

const technologies = [
  ...frontendTechnologies,
  ...backendTechnologies,
  ...databaseTechnologies,
  ...devOpsTechnologies,
]

const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2))
const secondRow = technologies.slice(Math.ceil(technologies.length / 2))

const TechnologyCard = ({
  id,
  title,
  icon,
}: {
  id: number
  title: string
  icon: React.ReactNode
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mx-4 min-w-[120px] md:min-w-[150px] lg:min-w-[180px] transition-all duration-300 hover:scale-110">
      <div className="text-3xl md:text-4xl lg:text-6xl mb-2">{icon}</div>
      <div className="text-sm font-medium">{title}</div>
    </div>
  )
}

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Technologies I used in my <span className="text-purple">career</span>
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <Marquee pauseOnHover className="[--duration:30s]">
          {frontendTechnologies.map((review) => (
            <TechnologyCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="h-px my-10 w-full bg-gray-200/10" />
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {backendTechnologies.map((review) => (
            <TechnologyCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="h-px my-10 w-full bg-gray-200/10" />
        <Marquee pauseOnHover className="[--duration:20s]">
          {databaseTechnologies.map((review) => (
            <TechnologyCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="h-px my-10 w-full bg-gray-200/10" />
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {devOpsTechnologies.map((review) => (
            <TechnologyCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  )
}

export default Clients
