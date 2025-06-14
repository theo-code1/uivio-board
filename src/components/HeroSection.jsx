import NavBar from "./NavBar";
import Devices from '../assets/devices.webp'
import NinetoFive from '../assets/9to5mac.webp'
import Invaluable from '../assets/invaluable-utility.webp'
import Rating from '../assets/rating.webp'
import Tnw from '../assets/tnw.webp'
import LifeHacker from '../assets/lifehacker.webp'

const HeroSection = () => {
    return(
        <section className="h-[125dvh] relative flex flex-col gap-16">
            <NavBar />
            <img src={Devices} alt="Apple Devices" className="w-[55%] z-20 mx-auto mt-4"/>
            <div className="headlines  font-inter-regular mx-auto flex flex-col gap-4 ">
                <h1 className="text-6xl tracking-tight font-inter-bold font-bold text-center">The clipboard as it should be </h1>
                <p className="text-center tracking-tight text-2xl">Paste is a new way to keep, search, and organize everything <br/>
                    you copy on your Mac, iPhone, and iPad.</p>
            </div>
            <div className="flex justify-center -mt-8">
                <button type="button" className="bg-[#0A84FF] hover:bg-[#0069D4] px-10 py-[10px] rounded-full text-white text-xl text-center">Try for free</button>
            </div>
            <div className="trusted-by-companies flex justify-between w-[40%] mx-auto gap-12">
                <img src={Invaluable} className="w-30 h-6" alt="invaluable utility" />
                <img src={Rating}     className="w-24 h-6" alt="Rating" />
                <img src={Tnw}        className="w-20 h-6" alt="T N W" />
                <img src={NinetoFive} className="w-20 h-6" alt="9To5 Mac" />
                <img src={LifeHacker} className="w-20 h-6" alt="9To5 Mac" />
            </div>
        </section>
    )
}
export default HeroSection;