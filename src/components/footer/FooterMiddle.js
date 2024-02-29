import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LanguageIcon from '@mui/icons-material/Language';
import { indFlag, logo } from '../../assets'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const FooterMiddle = () => {
    return (
        <div className='w-full bg-amazon_light text-white'>
            {/* ============= Top Start Here ============= */}
            <div className='w-full border-b-[1px] border-gray-500 py-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full sm:text-xs grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lgl:grid-cols-4 place-items-baseline px-5 gap-6'>
                        <div>
                            <h3 className='font-bodyFont sm:text-xs sml:text-xs text-white text-base font-bold mb-3 tracking-wide'>Get to Know Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont tracking-wide text-sm text-white'>
                                <li className='footerLink'>About Us</li>
                                <li className='footerLink'>Careers</li>
                                <li className='footerLink'>Press Releases</li>
                                <li className='footerLink'>Amazon Science</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bodyFont sm:text-xs sml:text-xs text-white text-base font-bold mb-3 tracking-wide'>Connect with Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont tracking-wide text-sm text-white'>
                                <li className='footerLink'>Facebook</li>
                                <li className='footerLink'>Twitter</li>
                                <li className='footerLink'>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bodyFont sm:text-xs sml:text-xs text-white text-base font-bold mb-3 tracking-wide'>Make Money with Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont tracking-wide text-sm text-white'>
                                <li className='footerLink'>Sell on Amazon</li>
                                <li className='footerLink'>Sell under Amazon Accelerator</li>
                                <li className='footerLink'>Protect and Build Your Brand</li>
                                <li className='footerLink'>Amazon Global Selling</li>
                                <li className='footerLink'>Become an Affiliate</li>
                                <li className='footerLink'>Fulfilment by Amazon</li>
                                <li className='footerLink'>Advertise Your Products</li>
                                <li className='footerLink'>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bodyFont sm:text-xs sml:text-xs text-white text-base font-bold mb-3 tracking-wide'>Let Us Help You</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont tracking-wide text-sm text-white'>
                                <li className='footerLink'>COVID-19 and Amazon</li>
                                <li className='footerLink'>Your Account</li>
                                <li className='footerLink'>Returns Centre</li>
                                <li className='footerLink'>100% Purchase Protection</li>
                                <li className='footerLink'>Amazon App Download</li>
                                <li className='footerLink'>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============= Top End Here ============= */}
            {/* ============= Botton Start Here ============= */}
            <div className='w-full flex gap-3 xl:gap-10 items-center justify-center py-6'>
                <div>
                    <img className='w-20 pt-3' src={logo} alt="amazon.in"></img>
                </div>
                <div className='flex gap-2'>
                    <p className='text-xs flex gap-1 items-center justify-center border border-gray-500 rounded-[1px] font-bodyFont tracking-wide hover:border-amazon_yellow cursor-pointer font-medium duration-200 px-2 py-1'><span className='text-xs text-gray-400'><LanguageIcon /></span> English <span className='text-xs text-gray-400'><ArrowDropDownOutlinedIcon /></span></p>
                </div>
                <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1 rounded-[1px]'>
                    <img className='w-6' src={indFlag} alt='INDIA' /><p className='text-xs font-bodyFont tracking-wide mt-1'>{" "}INDIA <span className='text-xs text-gray-400'><ArrowDropDownOutlinedIcon /></span></p>
                </div>
            </div>
            {/* ============= Botton End Here ============= */}
        </div>
    );
}

export default FooterMiddle
