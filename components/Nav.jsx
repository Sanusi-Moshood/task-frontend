import Image from "next/image"
 import { FaCalendarPlus, FaBell } from "react-icons/fa6"

const Nav = () => {
  return (
    <nav className="w-full ">
        <div className="flex items-center justify-between pt-4 px-5">
            <div>
            <Image 
            src={'/logo.svg'}
            alt="logo"
            width={150}
            height={251}
            />
            </div>


            <div className=" flex items-center justify-center gap-7 text-white">
                <button className=" py-[10px] px-[15px] hover:opacity-70 duration-200 bg-[#3430FA] flex items-center text-white font-bold gap-2">
                   < FaCalendarPlus  className=" text-[22px]"/> <span> Create event</span>
                   </button>

                   <FaBell className="text-[22px] hover:opacity-70 duration-200"/>

                <div>
                <Image 
            src={'/lad1.jpg'}
            alt="logo"
            width={50}
            height={50}
            className=" object-cover rounded-[50%] w-[50px] h-[50px]"
            />
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Nav