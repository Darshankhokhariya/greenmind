import React from 'react'

function About() {
    return (
        <>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 font-popins">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="mt-6 text-[32px] font-bold leading-tight text-black ">
                       About Us
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                    Order now and appreciate the beauty of nature
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-y-8 text-center  gap-6 md:grid-cols-3">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C1DCDC]">
                            <img src={require('../Image/ab1.png')} className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-black">Large Assortment</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        we offer many different types of products <br/> with fewer variations in each category.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C1DCDC]">
                            <img src={require('../Image/ab2.png')} className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-black">Large Assortment</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        4-day or less delivery time, free shipping <br/> and an expedited delivery option.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C1DCDC]">
                            <img src={require('../Image/ab3.png')} className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-black">Large Assortment</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        answers to any business related inquiry <br/> 24/7 and in real-time.
                        </p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About