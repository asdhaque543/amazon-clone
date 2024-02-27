import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false)
            }
        })
    },[ref, sidebar])
    return (
        <div className='w-full bg-amazon_light text-white px-4 h-[36px] flex items-center'>
            {/* ============= ListItems Start Here ============= */}
            <ul className='flex items-center font-bodyFont gap-2 text-sm tracking-wide'>
                <li onClick={() => setSidebar(true)} className='headerHover flex items-center gap-1 font-extrabold'><MenuOutlinedIcon />All</li>
                <li className='headerHover font-medium'>Fresh</li>
                <li className='headerHover font-medium'>Amazon miniTV</li>
                <li className='headerHover font-medium'>Sell</li>
                <li className='headerHover font-medium'>Best Sellers</li>
                <li className='headerHover font-medium'>Mobiles</li>
                <li className='headerHover font-medium'>Gift Cards</li>
                <li className='headerHover font-medium'>Today's Deals</li>
            </ul>
            {/* ============= ListItems End Here ============= */}
            {/* ============= sideNav Start Here ============= */}
            {
                sidebar && (
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-55'>
                        <div className='w-full h-full relative'>
                            <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .2 }} className='w-[350px] h-full bg-white border-gray-500'>
                                <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4 cursor-pointer'>
                                    <AccountCircleIcon />
                                    <h1 className='font-bold font-titleFont text-lg tracking-wide'>Hello, sign in</h1>
                                </div>
                                <ul className='text-sm'>
                                    <SideNavContent
                                        title="Digital Content and Devices"
                                        one="Amazon Prime Music"
                                        two="Fire TV"
                                        three="Amazon Prime Video"
                                    />
                                    <SideNavContent
                                        title="Shop By Category"
                                        one="Electronics"
                                        two="Computers"
                                        three="Smart Home"
                                    />
                                    <SideNavContent
                                        title="Programs & Features"
                                        one="Amazon Pay"
                                        two="Amazon Launchpad"
                                        three="Flight Tickets"
                                    />
                                    <SideNavContent
                                        title="Help & Settings"
                                        one="Your Account"
                                        two="Customer Service"
                                        three="Sign in"
                                    />
                                </ul>
                                <span onClick={() => setSidebar(false)} className='text-lg cursor-pointer absolute top-0 left-[350px] w-10 h-10 text-white flex items-center justify-center'><CloseIcon /></span>
                            </motion.div>
                        </div>
                    </div>
                )
            }
            {/* ============= sideNav End Here ============= */}
      
        </div>
    );
}

export default HeaderBottom
