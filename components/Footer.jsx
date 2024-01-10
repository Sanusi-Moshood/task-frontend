'use client'

import Image from "next/image"
import MessageBox from "./MessageBox"
import { useState } from "react"

const Footer = () => {
 const [active, setActive] = useState(false)

const clickHand = () => {
    setActive(prev => !prev)
}

  return (
    
    <footer className="  absolute bottom-0 left-0  bg-[#060710] border border-gray-700 flex w-full  !h-[57px]">

        <div className="flex text-2xl text-white items-center ">
            <div className=" py-[15px] pl-[20px] pr-[30px] hover:bg-[#ffffff10] duration-200 h-full ">
            <Image 
            src={'/sun.svg'}
            alt="icon"
            width={28}
            height={20}
             
            />
            </div>
            <div className=" py-[15px] px-[30px] hover:bg-[#ffffff10] duration-200 h-full ">
            <Image 
            src={'/moon.svg'}
            alt="icon"
            width={19}
            height={20}
            className="h-full"
            />
            </div>
            <div className="flex items-center py-[15px] px-[30px] border border-y-0 border-gray-700 hover:bg-[#ffffff10] duration-200 h-full overflow-y-hidden">
            <Image 
            src={'/link.svg'}
            alt="icon"
            width={34}
            height={20} 
            />
            </div>
        </div>
        <div className="flex flex-grow px-[10px] gap-3 items-center"> 
        <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/earth.svg'}
            alt="icon"
            width={46}
            height={46}
            className="h-full "
            />
            
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/search.svg'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/ladicon.png'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/fotimg.png'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/fotimg2.png'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/fotimg3.png'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/fotimg4.png'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
                <div className="hover:opacity-70 duration-200">
                <Image 
            src={'/plus.svg'}
            alt="icon"
            width={46}
            height={46}
            className="h-full"
            />
                </div> 
        </div>
        <div className="flex text-2xl text-white items-center ">
            
        <div
        
        className="flex relative items-center border border-y-0 border-gray-700 hover:bg-[#ffffff10] duration-200 h-full">
          
<div  className="py-[15px] px-[30px] "
        onClick={() => {clickHand()}}>
     <Image 
            src={'/mail.svg'}
            alt="icon"
            width={26}
            height={26} 
            
            /> 
</div>
            <div className="absolute bottom-16  left-1/2 -translate-x-1/2 ">
                <MessageBox active={active} setActive={setActive}/>
            </div>
            </div>
            <div className=" py-[15px] px-[30px] hover:bg-[#ffffff10] duration-200 h-full ">
            <Image 
            src={'/aticon.svg'}
            alt="icon"
            width={28}
            height={20}
             
            />
            </div>
            <div className=" py-[15px] pl-[30px] pr-[20px] hover:bg-[#ffffff10] duration-200 h-full ">
            <Image 
            src={'/iicon.svg'}
            alt="icon"
            width={23}
            height={23}
            className="h-full"
            />
            </div>
        </div>

    </footer>

     
  )
}
export default Footer