import React from 'react'
import Image from 'next/image'
import RightArrowIcon from 'assets/icons/right-arrow-icon.svg'
import ProgressBar from './ProgressBar'

type Props = {
  src: string
  progress?: number
  bg?: string
  imgBg?: string
  heading: string
  content: string
  isMore?: boolean
  cardType?: string
}
const Card: React.FC<Props> = ({
  src,
  progress,
  bg,
  imgBg,
  heading,
  content,
  isMore,
  cardType,
}) => {
  return (
    <div
      className='rounded-[20px] p-[24px] flex items-center w-[fit-content] gap-[27px]'
      style={{ background: bg }}
    >
      <div
        className='p-[18px] w-[53px] h-[54px] rounded-[12px]'
        style={{
          background: imgBg ? imgBg : bg ? 'rgba( 255, 255, 255, 0.25 )' : '',
          backdropFilter: bg && 'blur( 4px )',
        }}
      >
        <Image src={src} alt='' width={18} height={18} style={{ opacity: 1 }} />
      </div>
      {cardType === 'primary' ? (
        <div>
          <h3
            className='text-[#131336] text-[16px]'
            style={{ color: bg && '#FEFEFE' }}
          >
            {heading}
          </h3>
          <p
            className='text-secondary-text text-[14px] mt-[8px]
          '
            style={{ color: bg && '#FEFEFE' }}
          >
            {content}
          </p>
        </div>
      ) : (
        <div>
          <p
            className='text-secondary-text text-[14px]
          '
            style={{ color: bg && '#FEFEFE' }}
          >
            {content}
          </p>
          <h3
            className='text-[#131336] mt-[5px]'
            style={{ color: bg && '#FEFEFE' }}
          >
            {heading}
          </h3>
        </div>
      )}
      {isMore && (
        <div className='self-end'>
          <Image src={RightArrowIcon} width={16} height={16} alt='view more' />
        </div>
      )}
      {progress && <ProgressBar progress={progress} length={111} />}
    </div>
  )
}

export default Card
