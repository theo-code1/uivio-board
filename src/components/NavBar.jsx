import React, { useState } from 'react';
import uiLogo from '../assets/uivio-logo.webp';
import Arrow from './icons/Arrow';

const NavBar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuItems = {
        useCases: {
            title: 'Use Cases',
            options: ['case 01', 'case 02', 'case 03']
        },
        resources: {
            title: 'Resources',
            options: ['resource 01', 'resource 02', 'resource 03']
        }
    };

    return(
        <nav className="w-2/3 flex justify-between items-center mx-auto mt-3 font-inter-medium ">
            <a href='#hero-section' className="brand-logo flex items-center gap-2">
                <img className='size-12 select-none' src={uiLogo} alt="Uivio Logo"  draggable='false' />
                <h1 className='text-2xl font-inter-semibold font-semibold'>UIvio</h1>
            </a>
            <ul className='flex items-center gap-8 font-inter-regular font-[500] text-[14px]'>
                <div className="li relative group">
                    <li 
                        className='relative text-black/80 hover:text-black transition-all duration-150 group'
                        onMouseEnter={() => setHoveredItem('useCases')}
                        onMouseLeave={() => setHoveredItem('useCases')}
                    >
                        <a className='flex items-center gap-1' href='#'>
                            {menuItems.useCases.title} <Arrow />
                        </a>
                    </li>
                    <div className='hidden group-hover:flex flex-col backdrop-blur-sm text-center transition-all duration-200 rounded-lg absolute -bottom-40 left-1/2 -translate-x-1/2 w-32 h-40 border border-black/40'>
                         {hoveredItem === 'useCases' && menuItems.useCases.options.map((option, index) => (
                            <React.Fragment key={index}>
                                <div className="p-2 py-4 hover:bg-[#0A84FF]/10 rounded-lg cursor-pointer">
                                    {option}
                                </div>
                                {index < menuItems.resources.options.length - 1 && (
                                    <hr className='opacity-30 w-2/3 mx-auto'/>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="li relative group">
                    <li 
                        className='relative text-black/80 hover:text-black transition-all duration-150 group'
                        onMouseEnter={() => setHoveredItem('resources')}
                        onMouseLeave={() => setHoveredItem('resources')}
                    >
                        <a className='flex items-center gap-1' href='#'>
                            {menuItems.resources.title} <Arrow />
                        </a>
                    </li>
                    <div className='hidden group-hover:flex flex-col backdrop-blur-sm font-inter-regular text-center rounded-lg transition-all duration-200 absolute -bottom-40 left-1/2 -translate-x-1/2 w-32 h-40 border border-black/40'>
                        {hoveredItem === 'resources' && menuItems.resources.options.map((option, index) => (
                            <React.Fragment key={index}>
                                <div className="p-2 py-4 hover:bg-[#0A84FF]/10 rounded-lg cursor-pointer">
                                    {option}
                                </div>
                                {index < menuItems.resources.options.length - 1 && (
                                    <hr className='opacity-30 w-2/3 mx-auto'/>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <li className='relative text-black/80 hover:text-black transition-all duration-150 '>
                    <a className='flex items-center' href='#'>Updates</a>
                </li>
                <li className='relative text-black/80 hover:text-black transition-all duration-150 '>
                    <a className='flex items-center' href='#'>Pricing</a>
                </li>
            </ul>
            <button className='bg-[#0A84FF] text-[14px] px-6 h-10 rounded-full text-white hover:bg-[#0069D4] transition-all duration-300' type='button'>Try for free</button>
        </nav>
    )
}
export default NavBar;