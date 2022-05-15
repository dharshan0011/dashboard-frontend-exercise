import Card from './common/Card'
import TextAvatar from 'assets/icons/text-avatar.svg'
import Image from 'next/image'
import RightArrowDark from 'assets/icons/right-arrow-dark.svg'

const Courses = () => {
  return (
    <section className='mt-[36px]'>
      <div className='flex justify-between'>
        <p className='text-[17px] font-medium'>Your courses</p>
        <p className='flex items-center gap-[21px]'>
          More <Image src={RightArrowDark} width={16} height={16} alt='more' />
        </p>
      </div>
      <div className='mt-[35px] flex justify-between'>
        <Card
          cardType='secondary'
          heading='Business English'
          content='Grammar'
          src={TextAvatar}
          bg='#4D4CAC'
          isMore={true}
        />
        <Card
          cardType='secondary'
          heading='Common English'
          content='Phrasal Verbs'
          src={TextAvatar}
          bg='#9698D6'
          isMore={true}
        />
        <Card
          cardType='secondary'
          heading='Business Spanish'
          content='Vocabulary'
          src={TextAvatar}
          bg='#FF808B'
          isMore={true}
        />
      </div>
    </section>
  )
}

export default Courses
