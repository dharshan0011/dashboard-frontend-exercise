import Image from 'next/image'
import Card from './common/Card'
import LogoutIcon from '../assets/icons/logout-icon.svg'
import PlusIcon from '../assets/icons/+.svg'
import ErrorIcon from '../assets/icons/error-icon.svg'
import MessageIcon from '../assets/icons/message-icon.svg'
import TextAvatarDarkIcon from '../assets/icons/text-avatar-dark.svg'

const Profile = () => {
  return (
    <aside className='bg-[#fff] flex flex-col items-center pl-[45px] pt-[57px] pr-10'>
      <div className='flex justify-between w-full'>
        <p>Logout</p>
        <a href='#'>
          <Image src={LogoutIcon} hidden={18} width={18} alt='logout' />
        </a>
      </div>
      <div className='text-center'>
        <div className='rounded-full border-[7px] border-[#F5F5FB] w-[169px] h-[171px] relative mt-[48px]'>
          <Image
            src='/user.jpeg'
            layout='fill'
            objectFit='cover'
            alt='avatar'
            className='rounded-full border-[7px] border-[#F5F5FB]'
          />
          <button className='bg-[#5E81F4] rounded-full w-[32px] h-[32px] flex justify-center items-center absolute right-4 bottom-0'>
            <Image
              src={PlusIcon}
              alt='add profile picture'
              width={12}
              height={29}
            />
          </button>
        </div>
        <h3 className='font-bold text-[20px] leading-[30px] mt-[29px]'>
          Sadia Tasnim
        </h3>
        <p className='text-secondary-text mt-[12px]'>Student</p>
      </div>
      <div className='mt-[44px]'>
        <Card
          cardType='primary'
          src={TextAvatarDarkIcon}
          imgBg='#F5F5F7'
          heading='English'
          content='High intermediate'
          progress={80}
        />
        <Card
          cardType='primary'
          src={TextAvatarDarkIcon}
          imgBg='#F5F5F7'
          heading='Spanish'
          content='Advanced'
          progress={80}
        />
      </div>
      <div className='mt-[124px]'>
        <Card
          cardType='primary'
          src={ErrorIcon}
          imgBg='#FEF2F3'
          heading='Eng -  Vocabulary Test'
          content='24 Sep 2019,Friday'
        />
        <Card
          cardType='primary'
          src={MessageIcon}
          imgBg='#EEF2FD'
          heading='English - Send grammar homework'
          content='High Intermediate'
        />
        <Card
          cardType='primary'
          src={MessageIcon}
          imgBg='#EEF2FD'
          heading='Spanish - Send essay'
          content='High Intermediate'
        />
      </div>
    </aside>
  )
}

export default Profile
