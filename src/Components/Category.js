import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Category() {
    return (
        <>
            <div className='container mx-auto py-6  md:py-20 font-popins'>
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="mt-6 text-[32px] font-bold leading-tight text-black ">
                        Categories
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                        Find what you are looking for
                    </p>
                </div>
            </div>
            <div className='h-full lg:h-[700px] lg:relative w-full font-popins'>
                <div className='bg-[#C1DCDC] lg:h-full m-auto w-full'>
                    <div class="left-0 right-0 lg:absolute flex flex-col md:flex-row justify-center md:gap-6 container mx-auto w-full">
                        <div class="lg:relative py-4 md:py-0  w-full -top-[40px]  text-center">
                            <img className='m-auto' src={require('../Image/Frame 36.png')} />
                            <div className='text-lg font-bold mt-4 md:mt-2'>Natural Plants</div>
                        </div>
                        <div class="lg:relative py-4 md:py-0 w-full md:mt-7    text-center">
                            <img className='m-auto' src={require('../Image/Frame 37.png')} />
                            <div className='text-lg font-bold mt-4 md:mt-2'>Plant Accessories</div>
                            <p className='text-lg font-medium text-[#1e1e1e]'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                            <button className='flex m-auto justify-center items-center gap-2 mt-4 rounded  bg-white text-black font-medium py-1 px-2'>Explore <BsArrowRight /></button>
                        </div>
                        <div class="lg:relative py-4 md:py-0 w-full -top-[40px] text-center">
                            <img className='m-auto' src={require('../Image/Frame 38.png')} />
                            <div className='text-lg font-bold mt-4 md:mt-2'>Artificial Plants</div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Category