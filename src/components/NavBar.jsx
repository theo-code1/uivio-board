import React, { useState } from 'react';
import uiLogo from '../assets/uivio-logo.webp';
import Arrow from './icons/Arrow';

const NavBar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState(null);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setExpandedMobileItem(null); // Reset expanded item when closing menu
    };

    const toggleMobileItem = (item) => {
        setExpandedMobileItem(expandedMobileItem === item ? null : item);
    };

    return(
        <nav className="w-[70dvw] flex justify-between items-center mx-auto font-inter-medium z-40">
            <a href='#hero-section' className="brand-logo absolute left-4 top-3 lg:relative lg:top-2 flex items-center gap-2">
                <img className='size-10 md:size-12 select-none' src={uiLogo} alt="Uivio Logo"  draggable='false' />
                <h1 className='text-xl md:text-2xl font-inter-semibold font-semibold'>UIvio</h1>
            </a>

            {/* Hamburger Menu Button */}
            <button 
                className="md:hidden fixed right-4 top-4 z-50 p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                 onClick={toggleMobileMenu}></div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col p-6 gap-6 font-inter-regular font-[500] text-[14px] mt-10'>
                    <div className="li relative">
                        <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                            <button 
                                className='flex items-center gap-1 w-full text-left'
                                onClick={() => toggleMobileItem('useCases')}
                            >
                                {menuItems.useCases.title} 
                                <Arrow className={`transform transition-transform duration-300 ${expandedMobileItem === 'useCases' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileItem === 'useCases' ? 'max-h-40' : 'max-h-0'}`}>
                                {menuItems.useCases.options.map((option, index) => (
                                    <div key={index} className="py-2 hover:bg-[#0A84FF]/10 rounded-lg cursor-pointer pl-2">
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </li>
                    </div>
                    <div className="li relative">
                        <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                            <button 
                                className='flex items-center gap-1 w-full text-left'
                                onClick={() => toggleMobileItem('resources')}
                            >
                                {menuItems.resources.title} 
                                <Arrow className={`transform transition-transform duration-300 ${expandedMobileItem === 'resources' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileItem === 'resources' ? 'max-h-40' : 'max-h-0'}`}>
                                {menuItems.resources.options.map((option, index) => (
                                    <div key={index} className="py-2 hover:bg-[#0A84FF]/10 rounded-lg cursor-pointer pl-2">
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </li>
                    </div>
                    <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                        <a className='flex items-center' href='#'>Updates</a>
                    </li>
                    <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                        <a className='flex items-center' href='#'>Pricing</a>
                    </li>
                    <li className='mt-4'>
                        <button className='w-full bg-[#0A84FF] text-[14px] px-6 h-10 rounded-full text-white hover:bg-[#0069D4] transition-all duration-300' type='button'>
                            Try for free
                        </button>
                    </li>
                </ul>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center gap-8 absolute top-6 left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:top-2 lg:translate-x-0 font-inter-regular font-[500] text-[14px]'>
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
                <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                    <a className='flex items-center' href='#'>Updates</a>
                </li>
                <li className='relative text-black/80 hover:text-black transition-all duration-150'>
                    <a className='flex items-center' href='#'>Pricing</a>
                </li>
            </ul>
            <button className='hidden md:block absolute right-4 top-4 lg:relative lg:top-2 bg-[#0A84FF] text-[14px] px-6 h-10 rounded-full text-white hover:bg-[#0069D4] transition-all duration-300' type='button'>Try for free</button>
        </nav>
    )
}
export default NavBar;