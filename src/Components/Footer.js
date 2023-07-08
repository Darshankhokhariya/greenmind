import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
    return (
        <>

            <footer class="w-full text-gray-700 bg-[#C1DCDC] body-font font-popins">
                <div
                    class="container flex flex-col flex-wrap px-5 py-4 md:py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img src={require('../Image/GREENMIND.png')} />
                        </a>
                        <p class="mt-2 text-sm text-color2">We help you find <br /> your dream plant</p>
                        <div class="mt-4 ">
                            <span class="inline-flex justify-center gap-4 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                    <BsFacebook/>
                                    <BsInstagram/>
                                    <BsTwitter/>
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-wrap md:flex-nowrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-sm font-extrabold tracking-widest text-gray-900 uppercase title-font">Information</h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">About</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Product</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Blog</a>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-sm font-extrabold  tracking-widest text-gray-900 uppercase title-font">Company</h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Community</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Career</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Our story</a>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-sm font-extrabold tracking-widest text-gray-900 uppercase title-font">Contact
                            </h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-3">
                                    <a class="text-color2 font-medium  cursor-pointer hover:text-gray-900">Getting Started</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Pricing</a>
                                </li>
                                <li class="mt-3">
                                    <a class="text-color2 font-medium cursor-pointer hover:text-gray-900">Resources</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-[#C1DCDC]">
                    <div class="container px-2 md:px-5 py-2 md:py-4 mx-auto">
                        <p class="text-sm text-color2 font-semibold capitalize text-center md:text-start">© 2023 All rights reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer