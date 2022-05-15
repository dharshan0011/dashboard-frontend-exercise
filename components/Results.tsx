import RightArrowDark from 'assets/icons/right-arrow-dark.svg'
import Image from 'next/image'
import ResultScore from 'components/ResultScore'

const Results = () => {
  return (
    <article className='max-w-[430px] bg-[#FDFDFE] rounded-[17px] p-[32px] pb-[8px]'>
      <div className='flex justify-between '>
        <p className='text-[17px] font-medium'>Latest results</p>
        <a href='#' className='flex items-center gap-[21px]'>
          More <Image src={RightArrowDark} width={16} height={16} alt='more' />
        </a>
      </div>
      <div>
        <ResultScore unitNumber={5} name='Technology' score={25} />
        <ResultScore unitNumber={12} name='Ecology' score={44} />
        <ResultScore unitNumber={9} name='Real estate' score={40} />
        <ResultScore unitNumber={8} name='Education' score={15} />
        <ResultScore unitNumber={16} name='Job Market' score={75} />
      </div>
    </article>
  )
}

export default Results
