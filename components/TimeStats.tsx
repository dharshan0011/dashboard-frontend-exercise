import Image from 'next/image'
import ChevronDown from 'assets/icons/chevron-down.svg'
import LegendItem from 'components/LegendItem'
import DataPoint from 'components/DataPoint'

const TimeStats = () => {
  return (
    <div className='bg-[#FDFDFE] py-[31px] px-[36px] rounded-[18px] max-w-[600px] flex flex-col justify-between'>
      <div className='flex justify-between '>
        <p>Time Spent on Learning</p>
        <div className='flex items-center gap-[6px]'>
          Last week
          <Image src={ChevronDown} width={16} height={16} alt='time interval' />
        </div>
      </div>
      <div className='flex justify-between'>
        <DataPoint
          label='Mon'
          vocabulary={15}
          grammar={35}
          listening={65}
          writing={90}
        />
        <DataPoint
          label='Tue'
          vocabulary={15}
          grammar={35}
          listening={65}
          writing={90}
        />
        <DataPoint
          label='Wed'
          vocabulary={15}
          grammar={35}
          listening={65}
          writing={90}
        />
        <DataPoint
          label='Thu'
          vocabulary={15}
          grammar={35}
          listening={65}
          writing={90}
        />
        <DataPoint
          label='Fri'
          vocabulary={15}
          grammar={35}
          listening={65}
          writing={90}
        />
        <DataPoint
          label='Sat'
          vocabulary={15}
          grammar={35}
          listening={85}
          writing={30}
        />
        <DataPoint
          label='Sun'
          vocabulary={25}
          grammar={55}
          listening={75}
          writing={80}
        />
      </div>
      <div className='flex justify-between gap-[36px]'>
        <LegendItem name='Vocabulary' color='#FF808B' />
        <LegendItem name='Grammar' color='#4D4CAC' />
        <LegendItem name='Listening' color='#5E81F4' />
        <LegendItem name='Writing' color='#C8C9E9' />
      </div>
    </div>
  )
}

export default TimeStats
