import React from 'react'
import { BsCart, BsList, BsPerson, BsX } from "react-icons/bs";

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuItems = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'About',
            href: '#',
        },
        {
            name: 'Contact',
            href: '#',
        },
    ]

    return (
        <>
            <div className="mx-auto flex container items-center justify-between px-4 py-6 font-popins sm:px-6 ">
                <div className="inline-flex items-center space-x-2">
                    <img src={require('../Image/GREENMIND.png')} />
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-l font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <BsCart className='text-xl' />
                    <BsPerson className='text-xl' />

                </div>
                <div className="lg:hidden flex gap-3">
                    <BsList onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    <BsCart onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    <BsPerson onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <img src={require('../Image/GREENMIND.png')} />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="text-black text-2xl"><BsX /></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Nav