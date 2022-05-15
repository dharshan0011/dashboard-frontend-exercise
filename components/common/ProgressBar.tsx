import React from 'react'
import { nanoid } from 'nanoid'

type Props = {
  progress?: number
  orientation?: string
  length?: number
  toDisplay?: boolean
  textColor?: string
  multipleProgress?: { progress: number; color: string }[]
}
const ProgressBar: React.FC<Props> = ({
  progress,
  orientation,
  length,
  toDisplay,
  textColor,
  multipleProgress,
}) => {
  return (
    <div className='flex items-center gap-[16px]'>
      <div
        style={{
          width: orientation === 'vertical' ? '5px' : length,
          height: orientation === 'vertical' ? length : '5px',
        }}
        className='bg-[#DCDCE5] relative rounded-[5px] relative'
      >
        {multipleProgress && multipleProgress.length > 0 ? (
          multipleProgress.map((item: { progress: number; color: string }) => (
            <div
              style={{
                width: orientation === 'vertical' ? '5px' : `${item.progress}%`,
                height:
                  orientation === 'vertical' ? `${item.progress}%` : '5px',
                background: item.color && item.color,
                zIndex: 100 - item.progress,
              }}
              key={nanoid()}
              className='h-[5px] bg-[#5E81F4] rounded-[5px] absolute bottom-0 left-0'
            ></div>
          ))
        ) : (
          <div
            style={{
              width: orientation === 'vertical' ? '5px' : progress,
              height: orientation === 'vertical' ? progress : '5px',
            }}
            className=' bg-[#5E81F4] rounded-[5px] absolute bottom-0 left-0'
          ></div>
        )}
      </div>
      {toDisplay && (
        <span
          className='font-semibold text-[14px]'
          style={{ color: textColor }}
        >
          {progress}%
        </span>
      )}
    </div>
  )
}

export default ProgressBar
