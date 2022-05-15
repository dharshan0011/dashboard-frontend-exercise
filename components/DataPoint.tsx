import React from 'react'
import ProgressBar from 'components/common/ProgressBar'

type Props = {
  label: string
  vocabulary: number
  grammar: number
  listening: number
  writing: number
}

const DataPoint: React.FC<Props> = ({
  label,
  vocabulary,
  grammar,
  listening,
  writing,
}) => {
  return (
    <div className='flex flex-col w-[fit-content] items-center'>
      <p className='text-secondary-text text-[14px] mb-[28px]'>{label}</p>
      <ProgressBar
        orientation='vertical'
        multipleProgress={[
          { progress: vocabulary, color: '#FF808B' },
          { progress: grammar, color: '#4D4CAC' },
          { progress: listening, color: '#5E81F4' },
          { progress: writing, color: '#C8C9E9' },
        ]}
        length={196}
      />
    </div>
  )
}

export default DataPoint
