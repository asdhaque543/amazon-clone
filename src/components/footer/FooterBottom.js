import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='text-xs font-bodyFont font-normal tracking-wide w-full grid sml:grid-cols-4 lg:grid-cols-4 lgl:grid-cols-4 sm:grid-cols-3 gap-2 xl:gap-7 place-content-center items-center text-gray-200'>
          {
            footerBottomItem.map((item) => (
              <div key={item._id} className='text-xs group cursor-pointer'>
                <h3 className='footerBottomTitle'>{item.title}</h3>
                <p className='footerBottomText'>{item.des}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col font-bodyFont justify-center items-center px-4'>
          <div>
            <ul className='text-gray-300 text-sm gap-5 md:gap-4 py-2 mt-4 flex'>
              <li className='font-medium text-[12px] hover:underline cursor-pointer text-[#ddd] leading-3'>Conditions of Use</li>
              <li className='font-medium text-[12px] hover:underline cursor-pointer text-[#ddd] leading-3'>Privacy Notice</li>
              <li className='font-medium text-[12px] hover:underline cursor-pointer text-[#ddd] leading-3'>Interest-Based Ads</li>
            </ul>
          </div>
          <div>
            <p className='font-normal text-[12px] text-[#ddd] leading-3'>&copy; 2003-2024, Amazon.dev, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
