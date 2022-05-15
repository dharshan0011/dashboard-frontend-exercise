import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='py-[44px] px-[77px] flex rounded-[17px] bg-[#F7E5E9] max-w-[1200px] relative'>
      <div>
        <h3 className='font-bold text-[#FF808B] text-[25px]'>
          Welcome back Anna!
        </h3>
        <p className='text-[#000] text-[18px] leading-[27px] mt-[54px]'>
          You’ve learned 80% of your goal this week! <br />
          Keep it up and improve your results!
        </p>
      </div>
      <div className='absolute top-[-22%] right-[20%]'>
        <Image
          src='/illustration.png'
          width={208}
          height={255}
          alt='illustration'
        />
      </div>
    </div>
  )
}

export default WelcomeBanner
