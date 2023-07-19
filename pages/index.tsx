import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import RecentPost from "@/components/home/recent-post"
import ListPost from '@/components/home/list-post'
import Feature from '@/components/home/feature'
import HeroSection from '@/components/home/HeroSection'
import Logo from '@/components/home/logo'
export default function Home() {
  return (
    <div className="bg-white">  
    <Navbar />
    {/* <Logo /> */}
    <HeroSection />
    <RecentPost />
    <ListPost />
    <Feature />
    <Footer/>
    </div>
  )
}
