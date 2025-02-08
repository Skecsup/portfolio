import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip mx-auto items-center flex-col px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  )
}
