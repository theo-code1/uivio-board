import NavBar from "./NavBar";
import Devices from '../assets/devices.webp'
import NinetoFive from '../assets/9to5mac.webp'
import Invaluable from '../assets/invaluable-utility.webp'
import Rating from '../assets/rating.webp'
import Tnw from '../assets/tnw.webp'
import LifeHacker from '../assets/lifehacker.webp'

const HeroSection = ({ hamburgerColor = "black" }) => {
    return(
        <section id="hero-section" className="h-[125dvh] md:h-[100dvh] lg:h-[140dvh] flex flex-col gap-16 relative top-0">
            <NavBar hamburgerColor={hamburgerColor} />
            <img src={Devices} alt="Apple Devices" className="w-[75%] lg:w-[55%] z-10 mx-auto mt-8 lg:mt-4" draggable='false'/>
            <div className="headlines  font-inter mx-auto flex flex-col gap-4 ">
                <h1 className="text-[32px] md:text-[56px] lg:text-6xl tracking-tight font-inter font-bold text-center">The clipboard as it should be </h1>
                <p className="text-center tracking-tight text-lg md:text-2xl">Paste is a new way to keep, search, and organize everything <br className="hidden md:flex"/>
                    you copy on your Mac, iPhone, and iPad.</p>
            </div>
            <div className="flex justify-center -mt-8">
                <button type="button" className="bg-[#0A84FF] hover:bg-[#0069D4] active:bg-[#00478F] transition-all duration-150 px-10 py-[10px] rounded-full text-white text-lg md:text-xl text-center">Try for free</button>
            </div>
            <div className="trusted-by-companies flex flex-wrap justify-between w-4/5 md:w-[60%] lg:w-[45%] mx-auto gap-12">
                <img src={Invaluable} className="w-30 h-6" alt="invaluable utility" />
                <img src={Rating}     className="w-24 h-6" alt="Rating" />
                <img src={Tnw}        className="w-20 h-6" alt="T N W" />
                <img src={NinetoFive} className="w-20 h-6" alt="9To5 Mac" />
                <img src={LifeHacker} className="w-20 h-6" alt="9To5 Mac" />
            </div>
        </section>
    )
}

export default HeroSection