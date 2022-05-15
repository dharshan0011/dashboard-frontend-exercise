import Image from 'next/image'
import React from 'react'

type Props = {
  icon: string
  isActive?: boolean
  label: string
}

const NavLink: React.FC<Props> = ({ icon, isActive, label }) => {
  return (
    <a
      href='#'
      className={`py-[14px] pl-[89px] flex gap-[42px] text-[17px] text-secondary-text leading-[26px] font-medium hover:bg-[#E5E9FA] ${
        isActive &&
        'after:absolute after:right-0 after:border-2 after:border-solid after:border-[blue] after:h-[23px] after:w-[2px] after:rounded-[10px] text-primary-text'
      }`}
    >
      <Image src={icon} width={24} height={24} alt={label} />
      {label}
    </a>
  )
}
export default NavLink
