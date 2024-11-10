import React from 'react'
import Image from 'next/image'

const hero =()=>{
return(
<div className='flex h-[55%]'>
    <div className='w-1/2 justify-center mt-[60px] ml-[70px]'>
    <h1 className='font-bold text-[35px] p-6 text-[#000000;] mt-[10px]'>IMPECCABLE <br />
    CRAFTSMANSHIP AND <br />
    FINESSE</h1>
     <p className='text-[#787054;] p-6 text-[20px]'>
     An example of intricate workmanship and detail, elegant <br />
      necklaces and long and short chains form a part of our <br />
     desirable collection.
     </p>
     <button className='bg-[#A29875] text-white rounded-lg px-2 ml-[25px] text-[20px]'>Explore Now</button>
    </div>
<div className='items-center justify-center mt-14 ml-24'>
    <div className=' w-[300px] h-[400px] relative mt-[10px] ml-[200] border-solid border transparent flex border-[0.86px] border-solid border-blue-700 rounded-tl-[128.99px] rounded-br-[128.99px]'>
        <Image
        src="/image/figma1.jpeg"
        alt="image"
        width={300}
        height={450}
        className='object-cover absolute rounded-tl-[128.99px] rounded-br-[128.99px] '/>
        <div className='ml-[10px] mr-[10px] mt-[7px] w-[500px] h-[390px] border-2 rounded-tl-[128.99px] rounded-br-[128.99px] border-[#ffffff] z-10 realtive'>
        </div>
    </div>
</div>
</div>
)
}
export default hero
 