import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

function Testi() {
    return (
        <>
            <section class="px-2 py-10 md:px-0 font-popins">
                <div class="mx-auto container md:max-w-2xl px-2 lg:px-8 bg-[#C1DCDC] rounded-xl">
                    <div class=" flex flex-col ">
                        <div class="mt-4">
                            <blockquote>
                                <p class="text-xl text-black">
                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                    aliquam repellat laborum minima tempore deserunt explicabo placeat!
                                    Fugit, molestias nesciunt.”
                                </p>
                            </blockquote>

                        </div>
                        <div class="flex w-full">
                            <div className='w-[20%]'>
                                <img
                                    class="  h-48 w-48 object-cover"
                                    src={require('../Image/Group 9.png')}
                                    alt=""
                                />
                            </div>
                            <div className='w-[80%] flex  justify-between'>
                                <div className='flex flex-col  justify-center'>
                                    <p class="text-lg font-semibold text-black">John Doe</p>
                                    <p class="text-base text-gray-600">Frontend Developer at DevUI</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <BsStarFill />4.5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Testi