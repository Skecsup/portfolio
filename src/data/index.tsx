import {
  SiJavascript,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title: 'Experience',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Languages I speak',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'I specialize in',
    description: 'My tech stack',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Professional Basketball Team Website',
    description: 'Currently working on a',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Education',
    description: '',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: '',
    img: '',
    spareImg: '',
  },
  {
    id: 6,
    title: 'Get my resume!',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Business Website for Leafsoft',
    des: 'A multi-language, multi-theme dynamic website with smooth performance for LeafSoft.',
    img: '/p1.svg',
    iconLists: [<SiNextdotjs />, <SiTailwindcss />, <SiJavascript />],
    link: 'https://www.leafsoft.hu',
  },
  {
    id: 2,
    title: 'Business Website for Zorobe',
    des: 'A modern, high-end business website with a clean and sleek responsive design.',
    img: '/p2.svg',
    iconLists: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiTypescript />,
      <SiShadcnui />,
    ],
    link: 'https://www.zorobe.com',
  },
  {
    id: 3,
    title: 'Profesinal website for Egis Körmend',
    des: 'A full-stack site featuring an admin dashboard and automated score updates.',
    img: '/p3.svg',
    iconLists: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiTypescript />,
      <SiShadcnui />,
      <SiPostgresql />,
      <SiPrisma />,
    ],
    link: 'https://kormend-kosar.vercel.app/',
  },
  {
    id: 4,
    title: 'FindYourService - Waitlist',
    des: 'A multi-language waitlist website built with Next.js using Notion as a database',
    img: '/p4.svg',
    iconLists: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiTypescript />,
      <SiNotion />,
    ],
    link: 'https://fys-woad.vercel.app/hu',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    href: 'https://github.com/Skecsup',
  },

  {
    id: 2,
    img: '/link.svg',
    href: 'https://www.linkedin.com/in/julius-kicsindy/',
  },
]
