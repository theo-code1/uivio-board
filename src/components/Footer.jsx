import React from 'react'

const Footer = () => {
    const ListHeaderClassName =' text-lg font-semibold mb-4';
    const ListItemClassName = 'text-[16px] font-normal mb-2 cursor-pointer text-white/60 hover:text-white/80 transition-all duration-150 w-fit';

  return (
    <footer className='h-[40dvh] max-w-screen flex flex-col items-center py-12 text-white bg-black'>
        <div className="top-rows flex gap-24 text-start border-white border w-fit">
            <h1 className="1st-row">Logo</h1>
            <ul className="2nd-row">
                <li className={ListHeaderClassName}>Paste</li>
                <li className={ListItemClassName}>Try for free</li>
                <li className={ListItemClassName}>Get on Setapp</li>
                <li className={ListItemClassName}>Use Cases</li>
                <li className={ListItemClassName}>Updates</li>
                <li className={ListItemClassName}>Pricing</li>
            </ul>
            <ul className="3rd-row">
                <li className={ListHeaderClassName}>Resources</li>
                <li className={ListItemClassName}>Help</li>
                <li className={ListItemClassName}>Blog</li>
                <li className={ListItemClassName}>Terms of use</li>
                <li className={ListItemClassName}>Privacy policy</li>
            </ul>
            <ul className="4th-row">
                <li className={ListHeaderClassName}>More</li>
                <li className={ListItemClassName}>About</li>
                <li className={ListItemClassName}>Contact</li>
                <li className={ListItemClassName}>Beta</li>
                <li className={ListItemClassName}>Suggest a feature</li>
                <li className={ListItemClassName}>Jobs</li>
            </ul>
            <div className="5th-row">
                <h3 className={ListHeaderClassName}>Follow us</h3>
                X F M
            </div>

        </div>
    </footer>
  )
}

export default Footer