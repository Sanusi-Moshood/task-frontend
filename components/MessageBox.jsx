import Image from "next/image"

const MessageBox = ({active, setActive}) => {
const data = [
  {
    pic: '/lad4.jpg',
    name: 'The Lads Adventure', 
    message: 'LorxCy reacted to @Attist',
    time: '· 39s',
  },
  {
    pic: '/lad2.webp',
    name: 'Claynoes', 
    message: 'Richard: Helllooo!',
    time: '· 6h',
  },
  {
    pic: '/lad3.jpg',
    name: 'Solcasino Men', 
    message: 'Harold shared a post',
    time: '· 20s',
  },
]

const clickHand = () => {
  setActive(prev => !prev)
}

  return (
    <div className='border-gray-700 bg-[#060710]   w-[358px] transition-height duration-500 ease-in-out overflow-hidden'>
      <div   onClick={() => {clickHand()}} className='flex items-center justify-between p-5  border-b border-gray-700'>
        <span className='flex items-center text-xl  font-bold gap-3'>
          Messages
          <span className='bg-red-600 flex items-center justify-center w-7 h-7 rounded-full text-sm'>
            5
          </span>
        </span>
        <div className='flex items-center gap-[1rem]'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='hover:opacity-70 duration-200'
          >
            <g clip-path='url(#clip0_195_83900)'>
              <path
                d='M0 16.7185C0 12.2366 0 7.76345 0 3.28146C0.0711427 3.24589 0.0444642 3.16585 0.053357 3.11249C0.346821 1.69853 1.16496 0.738106 2.50778 0.213428C2.77457 0.106714 3.05914 0.0978213 3.32592 0C7.76345 0 12.2099 0 16.6474 0C16.7096 0.0711427 16.8075 0.0355714 16.8786 0.0533571C18.7016 0.373499 20 1.90307 20 3.77057C20.0089 7.92352 20 12.0765 20 16.2294C20 16.7719 19.9022 17.2966 19.671 17.7768C18.9595 19.2263 17.7857 19.9822 16.1761 19.9911C12.0587 20 7.9502 19.9911 3.83281 19.9911C3.7261 19.9911 3.62828 19.9911 3.52156 19.9822C1.92975 19.831 0.84482 19.0218 0.231214 17.5456C0.1245 17.2788 0.106714 16.9853 0 16.7185ZM10.0133 5.38906C8.26145 5.38906 6.50956 5.39795 4.75767 5.38017C4.23299 5.37128 3.84171 5.69142 3.84171 6.28724C3.8506 9.01734 3.84171 11.7563 3.8506 14.4864C3.8506 15.0823 4.15296 15.3846 4.74878 15.3846C8.25256 15.3846 11.7474 15.3846 15.2512 15.3846C15.8559 15.3846 16.1494 15.0823 16.1583 14.4864C16.1583 11.7474 16.1583 9.00845 16.1583 6.26945C16.1583 5.68253 15.8559 5.38906 15.269 5.38906C13.5082 5.38906 11.7652 5.38906 10.0133 5.38906Z'
                fill='white'
              ></path>
              <path
                d='M10.0045 13.8461C8.52833 13.8461 7.05212 13.8461 5.57591 13.8461C5.41584 13.8461 5.38916 13.8016 5.38916 13.6505C5.39805 11.9786 5.39805 10.3067 5.38916 8.63489C5.38916 8.48371 5.43362 8.45703 5.57591 8.45703C8.52833 8.45703 11.4808 8.46592 14.4421 8.45703C14.6021 8.45703 14.6288 8.5015 14.6288 8.65267C14.6199 10.3156 14.6199 11.9875 14.6288 13.6505C14.6288 13.8194 14.5844 13.8461 14.4243 13.8461C12.9481 13.8461 11.4719 13.8461 10.0045 13.8461Z'
                fill='white'
              ></path>
            </g>
            <defs>
              <clipPath id='clip0_195_83900'>
                <rect width='20' height='20' fill='white'></rect>
              </clipPath>
            </defs>
          </svg>
          <svg 
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='hover:opacity-70 duration-200 false'
          >
            <g clip-path='url(#clip0_194_83888)'>
              <path
                d='M18 8.96783C18 11.0007 18 13.0336 18 15.0665C18 16.9321 16.9556 17.9871 15.0989 17.9871C11.0372 17.9871 6.98854 17.9871 2.92693 17.9871C1.05731 17.9871 0.012894 16.9578 0 15.0922C0 11.0264 0 6.94782 0 2.88206C0 1.02931 1.05731 0 2.93983 0C7.00143 0 11.0501 0 15.1117 0C16.9427 0 18 1.05504 18 2.86919C18 4.90207 18 6.93495 18 8.96783ZM4.77077 6.74196C4.42264 6.76769 4.10029 6.93495 3.91977 7.33381C3.72636 7.7584 3.84241 8.14439 4.15186 8.45318C5.50573 9.81701 6.87249 11.1937 8.25215 12.5318C8.72923 13.0079 9.27077 13.0207 9.73496 12.5575C11.1275 11.1937 12.5072 9.81701 13.8739 8.42745C14.351 7.93853 14.2736 7.25661 13.7579 6.92209C13.2421 6.58756 12.7779 6.72909 12.3653 7.14081C11.3854 8.11866 10.3797 9.08363 9.41261 10.1001C9.06447 10.4732 8.88395 10.4089 8.5745 10.0872C7.64613 9.10936 6.66619 8.17012 5.71203 7.21801C5.46705 6.96069 5.20917 6.75483 4.77077 6.74196Z'
                fill='#F5F5F5'
              ></path>
            </g>
            <defs>
              <clipPath id='clip0_194_83888'>
                <rect width='18' height='18' fill='white'></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className={`${active ? 'h-0' : 'h-[320px]'}  transition-height duration-500 ease-in-out overflow-hidden`}>
          <div className='flex p-[10px] items-center border-b border-[#CACACA20] gap-4'>
          <div className="w-[48px] h-[48px]  border border-[#CACACA20] rounded-full flex items-center justify-center">
          <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='w-[20px] h-[20px]'
              >
                <g>
                  <path
                    d='M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V13h-2v-2.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H11v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19.429 16l-2 2H23v2h-5.571l2 2-1.414 1.414L13.601 19l4.414-4.414L19.429 16z'
                    fill='#ffffff'
                  ></path>
                </g>
              </svg>
          </div>
  
            <div className='flex flex-col flex-grow font-semibold'>
              <div className='flex items-center gap-3'>
                <p className='text-base'>Message requests</p>
              </div>
              <p className='text-[#6F7479] text-sm'>2 people you may know</p>
            </div>
          </div>
        
  
  
  
  
        {
          data.map(data => (
            <div key={data.name} className='flex p-[10px] items-center border-b border-[#CACACA20] gap-4'>
            <div className="w-[48px] h-[48px] relative border border-[#CACACA20] rounded-full flex items-center justify-center">
           <Image 
           src={data.pic}
           alt="img"
           fill
           className=" object-cover rounded-full"
           
           />
            </div>
    
              <div className='flex flex-col flex-grow font-semibold'>
                <div className='flex items-center gap-3'>
                  <p className='text-base'>{data.name} <span className='!text-[#6F7479] text-sm'>{data.time}</span></p>
                </div>
                <p className='text-[#6F7479] text-sm'>{data.message}</p>
              </div>
            </div>
          ))
        }
        </div>

    </div>
  );
};
export default MessageBox;
