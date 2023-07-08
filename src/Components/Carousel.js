import React from 'react'
import { BsSearch } from 'react-icons/bs'

function Carousel() {
    return (
        <>

            <div className='bg-color1  container mx-auto rounded-3xl px-10   mt-8 overflow-hidden'>
                <div className= 'w-full flex flex-col lg:flex-row items-center'>
                    <div className='w-full lg:w-[40%]'>
                        <div className='text-[32px]  md:text-[64px] font-popins text-black py-6 lg:py-0 leading-none font-extrabold'>
                            Buy your dream plants
                        </div>
                        <div className='mt-2 md:mt-8 flex items-center'>
                            <div className='border-r border-black pr-6'>
                                <h1 className='font-medium text-[32px]'>50+</h1>
                                <span className='text-[18px] font-medium'>Plant Species</span>
                            </div>
                            <div className='px-6'>
                                <h1 className='font-medium text-[32px]'>100+</h1>
                                <span className='text-[18px] font-medium'>Customers</span>
                            </div>
                        </div>
                        <div class="flex mt-8 px-2 rounded bg-white">
                            <input type="search" class="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none" placeholder="What are you looking for?" x-model="search" />
                            <button class="m-2 rounded-lg px-1.5 py-1.5 font-semibold bg-[#C1DCDC]"><BsSearch  className='text-sm'/></button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[60%] flex'>
                            <div className='ml-10 flex items-end mb-3'>
                                <img src={require('../Image/vec2.png')} />
                            </div>
                            <div className="bg-[url('Image/vec3.png')]   bg-contain  bg-bottom   ml-10 bg-no-repeat">
                                <img className='ml-5  object-cover' src={require('../Image/plant.png')} />
                            </div>
                            <div className='mt-4'>
                                <img src={require('../Image/vec1.png')} />
                            </div>
                    </div >
                </div>
            </div >



        </>
    )
}

export default Carousel