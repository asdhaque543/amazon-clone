import React from 'react'

const FooterTop = () => {
  return (
    <div className='w-full bg-white py-6'>
          <div className='w-full border-t-[1px] py-8'>
              <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                  <p className='text-sm font-bodyFont tracking-wide'>See personalized recommendations</p>
                  <button className='w-full text-sm tracking-wide font-bodyFont font-semibold bg-yellow-400 rounded-md py-1 hover:bg-yellow-500 active:bg-yellow-700'>Sign in</button>
                  <p className='text-xs mt-1 font-bodyFont tracking-wide'>New Customer?{" "}<span className='text-blue-600 ml-1 cursor-pointer'>Start here.</span></p>
              </div>
      </div>
    </div>
  )
}

export default FooterTop
