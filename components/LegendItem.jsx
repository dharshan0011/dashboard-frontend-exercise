const LegendItem = ({ name, color }) => {
  return (
    <div className='flex gap-[14px] items-center'>
      <div
        className='rounded-full w-[12px] h-[12px]'
        style={{ background: color }}
      ></div>
      <p className='text-secondary-text'>{name}</p>
    </div>
  )
}

export default LegendItem
