import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNavContent = ({title,one,two,three}) => {
    return (
        <div className='py-2 border-b-[1px] border-b-gray-300'>
            <h3 className='text-lg font-titleFont font-semibold mb-1 px-6 pt-1'>{title}</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between font-bodyFont font-semibold text-gray-500 hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{one}<span><KeyboardArrowRightIcon /></span></li>
                <li className='flex items-center justify-between font-bodyFont font-semibold text-gray-500 hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{two}<span><KeyboardArrowRightIcon /></span></li>
                <li className='flex items-center justify-between font-bodyFont font-semibold text-gray-500 hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{three}<span><KeyboardArrowRightIcon /></span></li>
            </ul>
        </div>
    );
}

export default SideNavContent
