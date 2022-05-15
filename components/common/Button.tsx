import React from 'react'

type Props = {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className='bg-[#5E81F4] text-[#FEFEFE] rounded-[14px] px-[45px] py-[15px] font-medium text-[17px] leading-[26px]'>
      {children}
    </button>
  )
}

export default Button
