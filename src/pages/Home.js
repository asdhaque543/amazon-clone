import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='w-full sm:-mt-16 sml:-mt-32 lgl:-mt-48 -mt-44 pb-10'>
            <Products />
            </div>
        </div>
    );
}

export default Home
