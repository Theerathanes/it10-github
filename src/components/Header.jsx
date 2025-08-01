import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuopen,setisMenuopen] = useState(false);

    const menuItems =[
        {name: 'Home',link: '#home'},
        {name: 'Collection',link: '#Collection'},
        {name: 'About',link: '#About'},
    ]
    return(
    <>
        <header className="bg-purple-950 text-white p-4">
            <div className="container mx-auto py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/vite.svg" alt="" className="inline-block mr-2 w-10" />
                        <h1 className="text-2xl font-bold">Card Gallery</h1>
                    </div>

                    {/* Hamburger Icon */}
                    <button className="block lg:hidden cursor-pointer" onClick={() => setisMenuopen (!isMenuopen)}>
                        <i className={`bi ${isMenuopen ? 'bi-x' : 'bi-list'} text-3x1`}></i>
                    </button>

                    {/* Desktop Nvigation Menu */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item)=> (
                            <a 
                                key={item.name}
                            href={item.link}
                            className="text-lg hover:text-gray-300 transtion-all duration-300 font-semibold hover:underline"
                            >
                                key={item.name}
                            </a>
                        ))}
                    </nav>
                        
                        {/* Moblie Navigation MEnu */}
                        <nav className={`lg hidden absolute left-0 top-0 w-2/3 bg-purple-950 text-white-h-full ${isMenuopen ? 'block' : 'hidden' } z-50`}>
                        {menuItems.map((item)=> (
                            <a 
                                key={item.name}
                                href={item.link}
                                className="text-lg hover:text-gray-300 transtion-all duration-300 font-semibold         hover:underline"
                            >
                                {item.name}
                            </a>
                        ))}
                        </nav>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header