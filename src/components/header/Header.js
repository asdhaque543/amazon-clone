import React, { useEffect, useRef, useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { allItems } from '../../constants';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {indFlag, logo} from "../../assets/index"
import { ShoppingCart } from '@mui/icons-material';
import HeaderBottom from './HeaderBottom';
const Header = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className='w-full bg-amazon_blue'>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
        {/* ============= Image Start Here ============= */}
        <div className='headerHover'>
          <img className='w-24 mt-2' src={logo} alt='amazon:)' />
        </div>
        {/* ============= Image End Here ============= */}
        {/* ============= Deliver Start Here ============= */}
        <div className='headerHover'>
          <LocationOnOutlinedIcon />
          <p className='text-sm text-lightText font-normal font-bodyFont flex flex-col'>Deliver to {"Mohamed"}<span className='text-sm font-bold -mt-1 text-whiteTest'>Erode 638004</span></p>
        </div>
        {/* ============= Deliver End Here ============= */}
        {/* ============= Search Start Here ============= */}
        <div className='h-10 rounded-md flex flex-grow relative'>
          <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span><ArrowDropDownOutlinedIcon /></span></span>
          {
            showAll && (
              <div>
                <ul className='absolute w-48 h-80 top-9 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                  {/* <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li>
                  <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li>
                  <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li>
                  <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li>
                  <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li>
                  <li className='w-full h-9 p-2 cursor-default hover:text-white hover:bg-blue-600 font-titleFont'>All Categories</li> */}

                  {/* <li className='text-sm tracking-tighter font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-default duration-200'>All Categories</li> */}

                  {
                    allItems.map((item) => (
                      <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-default duration-200' key={item._id}>{item.title}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text' placeholder='Search Amazon'></input>
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchOutlinedIcon /></span>
        </div>
        {/* ============= Search End Here ============= */}
        {/* ============= 🏳️‍🌈EN Start Here ============= */}
        <div className='flex items-center justify-center headerHover relative'>
          <img src={indFlag} className='w-6' />
          <p className='text-sm font-extrabold mt-1 pl-1 text-whiteTest'>
            EN<span className='text-xs mt-0.5 text-gray-400'><ArrowDropDownOutlinedIcon/></span>
          </p>
        </div>
        {/* ============= 🏳️‍⚧️EN End Here ============= */}
        {/* ============= Signin Start Here ============= */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-white font-normal font-bodyFont'>Hello, sign in</p>
          <p className='text-sm font-bold font-bodyFont -mt-1 text-whiteTest'>Accounts & Lists{" "}
            <span className='text-xs text-gray-400'><ArrowDropDownOutlinedIcon /></span></p>
        </div>
        {/* ============= Signin End Here ============= */}
        {/* ============= Orders Start Here ============= */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-white font-normal font-bodyFont'>Returns</p>
          <p className='text-sm font-bold font-bodyFont -mt-1 text-whiteTest'>& Orders</p>
        </div>
        {/* ============= Orders End Here ============= */}
        {/* ============= Cart Start Here ============= */}
        <div className='flex items-start justify-center headerHover relative'>
          <ShoppingCart />
          <p className='text-xs font-semibold mt-3 text-whiteTest'>
            Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span>
          </p>
        </div>
        {/* ============= Cart End Here ============= */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header
