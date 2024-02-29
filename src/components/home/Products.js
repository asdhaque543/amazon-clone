import { StarRounded } from '@mui/icons-material';
import { CompareArrowsTwoTone } from '@mui/icons-material';
import { ShoppingCartSharp } from '@mui/icons-material';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const data = useLoaderData()
    const productData = data.data;
    return (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
            {
                productData.map((item) => (
                    <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative'>
                        <span className='text-xs capitalize font-bodyFont italic absolute top-2 right-2 text-gray-500 tracking-wide'>{item.category}</span>
                        <div className='w-full h-auto flex items-center justify-center relative group'>
                            <img className='w-52 h-64 object-contain' src={item.image} alt={item.title} />
                            <ul className='w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-bodyFont px-2 border-1 border-r group-hover:bottom-0 duration-1000'>
                                <li className='productList font-semibold font-bodyFont'>Compare<span className='pl-2'><CompareArrowsTwoTone/></span></li>
                                <li className='productList font-semibold font-bodyFont'>Add to Cart<span className='pl-2'><ShoppingCartSharp/></span></li>
                                <li className='productList font-semibold font-bodyFont'>View Details<span className='pl-2'><ArrowCircleRightOutlined/></span></li>
                                <li className='productList font-semibold font-bodyFont'>Add to Wish List<span className='pl-2'><FavoriteBorderOutlined/></span></li>
                            </ul>
                            
                        </div>
                        <div className='px-4 z-10 bg-white'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bodyFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0, 20)}</h2>
                                <p className='text-sm text-gray-600 font-bodyFont font-semibold'>${item.price}</p>
                            </div>
                            <div>
                                <p className='text-sm mb-2 font-bodyFont tracking-wide'>{item.description.substring(0, 100)}...</p>
                                <div className='text-yellow-500'>
                                    <StarRounded/>
                                    <StarRounded/>
                                    <StarRounded/>
                                    <StarRounded/>
                                    <StarRounded/>
                                </div>
                            </div>
                            <button className='w-full font-bodyFont font-medium text-base bg-gradient-to-tr from-yellow-500 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Products
