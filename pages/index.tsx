import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import RecentPost from "@/components/home/recent-post"
import ListPost from '@/components/home/list-post'

export default function Home() {
  return (
    <>  
    <Navbar />

    <RecentPost />
    <ListPost />
    <Footer/>
    </>
  )
}
