import React from 'react'
import { BsArrowDown, BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function Hero() {
    return (
        <>
            <div className='container mx-auto py-10 flex flex-col lg:flex-row font-popins'>
                <div className='w-full lg:w-[20%]'>
                    <div className='px-8 py-4 lg:py-0'>
                        <h3 className='text-[32px] text-color2  font-bold'>Best Selling Plants</h3>
                        <p className='text-[18px] text-[#D9D9D9] font-medium'>Easiest way to healthy life by buying your favorite plants </p>
                        <button className='flex items-center gap-2 mt-4 rounded  bg-color1 py-1 px-2'>See more <BsArrowRight /></button>
                    </div>
                </div>
                <div className='w-full lg:w-[80%]'>
                    <div className='grid grid-cols-1 justify-items-center md:grid-cols-3'>
                        <div class="w-full lg:w-[300px] rounded-md border">
                            <img
                                src={require('../Image/Frame 7.png')}
                                class=" w-full rounded-md object-cover"
                            />
                            <div class="p-4">
                                <h1 class="text-lg font-semibold">Natural Plants</h1>
                                <p class="mt-3 text-sm text-gray-600">
                                   900
                                </p>
                            </div>
                        </div>
                        <div class="w-full lg:w-[300px] rounded-md border">
                            <img
                                src={require('../Image/Frame 8.png')}
                                class=" w-full rounded-md object-cover"
                            />
                            <div class="p-4">
                                <h1 class="text-lg font-semibold">Artificial Plants</h1>
                                <p class="mt-3 text-sm text-gray-600">
                                1400
                                </p>
                            </div>
                        </div>
                        <div class="w-full lg:w-[300px] rounded-md border">
                            <img
                                src={require('../Image/Frame 9.png')}
                                class=" w-full rounded-md object-cover"
                            />
                            <div class="p-4">
                                <h1 class="text-lg font-semibold">Artificial Plants</h1>
                                <p class="mt-3 text-sm text-gray-600">
                                    3500
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero