import React from 'react'

import {tagType, thirdweb} from '../assets';
import {daysLeft} from '../utils';

const FundCard = ({owner,title,description,target,deadline,amountCollected,image,handleClick}) => {
    const remainingDays=daysLeft(deadline);

  return (
    <div className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer' onClick={handleClick}>
        <img src={image} alt="fund" className='w-full h-[158px] objec-cover rounded-[15px]'/>

        <div className='flex flex-col p-4'>
            <div className='flex flex-row items-center mb-[18px] '>
                <img src={tagType} alt="tag" className='w-[17px] object-contain' />
                <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191] '>Category</p>
            </div>

            <div className='block'>
                <h3 className='font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate '>{title}</h3>
                <p className='mt-[5px] font-epilogue font-normal font-[12px] text-[#808191]'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default FundCard