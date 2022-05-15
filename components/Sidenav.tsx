import Image from 'next/image'
import HomeIcon from 'assets/icons/home-icon.svg'
import FolderIcon from 'assets/icons/folder-icon.svg'
import BookIcon from 'assets/icons/book-icon.svg'
import CalendarIcon from 'assets/icons/calendar-icon.svg'
import GearIcon from 'assets/icons/gear-icon.svg'
import ChatIcon from 'assets/icons/chat-icon.svg'
import Button from './common/Button'
import NavLink from 'components/NavLink'

const Sidenav = () => {
  return (
    <nav className='grid grid-rows[1fr_2fr_1fr] h-[100vh] pt-[48px] pb-[51px] w-full bg-[#fff] fixed w-[321px]'>
      <div className='pl-[89px]'>
        <a href='#'>
          <Image src='/logo.png' width={184} height={45} alt='Stringle logo' />
        </a>
      </div>
      <div className='flex flex-col gap-[26px] '>
        <NavLink icon={HomeIcon} isActive={true} label='Dashboard' />
        <NavLink icon={FolderIcon} label='Classes' />
        <NavLink icon={BookIcon} label='Resources' />
        <NavLink icon={CalendarIcon} label='Learning Plan' />
        <NavLink icon={ChatIcon} label='Chat' />
        <NavLink icon={GearIcon} label='Settings' />
      </div>
      <div className='pl-[89px] self-end'>
        <Button>Upgrade</Button>
      </div>
    </nav>
  )
}

export default Sidenav
