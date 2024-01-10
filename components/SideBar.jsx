import Image from "next/image" 

const SideBar = () => {
  return (
    <div className="absolute top1 left-5 bg-[#060710]  top-1/2 -translate-y-1/2  border border-gray-700 flex flex-col z-[10] text-[27px] text-white">
         
        
         <div  className="px-[30px] pb-[20px] pt-[35px]    hover:bg-[#ffffff10] duration-200 ">
         <Image 
            src={'/icon.svg'}
            alt="icon"
            width={26}
            height={30}
            />
         </div>
         <div  className="px-[30px] py-[20px] my-[15px]  hover:bg-[#ffffff10] duration-200 ">
         <Image 
            src={'/icon2.svg'}
            alt="icon"
            width={27}
            height={29}
            />
         </div>
         <div  className="px-[30px] py-[20px] my-[15px]  hover:bg-[#ffffff10] duration-200  ">
         <Image 
            src={'/icon3.svg'}
            alt="icon"
            width={26}
            height={27}
            />
         </div>
         <div  className="px-[30px]  pt-[20px] pb-[35px]  hover:bg-[#ffffff10] duration-200   ">
         <Image 
            src={'/icon4.svg'}
            alt="icon"
            width={25}
            height={26}
            />
         </div>



    </div>
  )
}
export default SideBar