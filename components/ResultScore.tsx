import React from 'react'
import ProgressBar from 'components/common/ProgressBar'

type Props = {
  unitNumber: number
  name: string
  score: number
}
const ResultScore: React.FC<Props> = ({ unitNumber, name, score }) => {
  return (
    <div className='pb-[27px] pt-[25px] border-b border-solid border-[#000] flex items-center justify-between gap-[36px]  last:border-[0]'>
      <p>
        <span className='font-semibold'>Unit {unitNumber}- </span>
        <span className='text-secondary-text'>{name}</span>
      </p>
      <ProgressBar
        progress={score}
        length={92}
        toDisplay={true}
        textColor={score < 35 ? '#FF808B' : '#5E81F4'}
      />
    </div>
  )
}

export default ResultScore
