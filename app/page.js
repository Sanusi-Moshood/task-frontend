import Footer from "@/components/Footer";
import Globe from "@/components/Globe";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 left-0 w-full h-screen -z-10 bg-[#090B17FF]">
      <Image 
            src={'/skybg.png'}
            alt="logo" 
            fill
            />
      <Image 
            src={'/bg.png'}
            alt="logo" 
            fill
            />

      </div>
       <Nav />
       <SideBar />
       <Globe />


       <Footer />
 
    </main>


  )
}
