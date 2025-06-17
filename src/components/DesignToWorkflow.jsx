import DesignCard from "./DesignCard";
import ClipboardHistory from '../assets/clipboard-history.webp'
import SearchUtility from '../assets/mail-link-search.webp'
import OrganizeAccess from '../assets/needed-f.webp'
import SyncAcrossImg from '../assets/checked-claud.webp'
import PrivacyImg from '../assets/security-privacy.webp'

function DesignToWorkflow() {
    const CardsInfo = [
        {
            Label: 'KEEP',
            Headline: ['Unlimited', 'clipboard history'],
            Img: ClipboardHistory
        },
        {
            Label: 'SEARCH',
            Headline: ['Find anything you copied', 'on any device'],
            Img: SearchUtility
        },
        {
            Label: 'ORGANIZE',
            Headline: ['Quickly access', 'what you need frequently'],
            Img: OrganizeAccess
        },
        {
            Label: ['Access any data on any fo your', 'Mac, iPhone, and iPad at any time'],
            Headline: ['Sync across', 'all devices'],
            Img: SyncAcrossImg
        },
        {
            Label: ['Your data never leaves your device', 'or your private iCloud.'],
            Headline: ['Privacy', 'by design'],
            Img: PrivacyImg
        },
    ]

    return(
        <section className="bg-[#F5F5F7] max-w-screen h-auto pb-30 font-inter-regular pt-48 flex flex-col gap-44">
            <h1 className="headline-gradient text-4xl md:text-6xl lg:text-7xl w-[90%] translate-x-[5%] md:translate-x-0 md:w-auto font-inter-bold font-bold text-center lg:leading-20">
            Unobtrusive design that <br className="hidden md:flex"/>blends into your workflow
            </h1>
            <div className="Cards flex flex-col gap-6 ">
                <DesignCard 
                    Label={CardsInfo[0].Label} Color={'text-green-500'} 
                    Headline={CardsInfo[0].Headline.map((line, index) => (
                        <h1 key={index}>
                            {line}
                            <br />
                        </h1>
                    ))} 
                    PaddingTop={`12`}
                    WorkImg={CardsInfo[0].Img}
                    ImgClassName={`mt-13`}
                />

                <DesignCard 
                    Label={CardsInfo[1].Label} 
                    Color={'text-purple-500'} 
                    Headline={CardsInfo[1].Headline.map((line, index) => (
                        <h1 key={index}>
                            {line}
                            <br />
                        </h1>
                    ))} 
                    PaddingTop={`12`}
                    WorkImg={CardsInfo[1].Img} 
                    ImgClassName={` `}
                />

                <DesignCard 
                    CardClassName={`pb-0 px-0`}
                    Label={CardsInfo[2].Label} 
                    Color={'text-red-500'} 
                    Headline={CardsInfo[2].Headline.map((line, index) => (
                        <h1 key={index}>
                            {line}
                            <br />
                        </h1>
                    ))} 
                    PaddingTop={`12`}
                    WorkImg={CardsInfo[2].Img}
                />
                <div className="bottom-Cards flex w-[90%] md:w-[85%] lg:w-[70%] mx-auto gap-6">
                    <DesignCard 
                        CardClassName={`p-4 md:p-12 lg:p-20 pb-4 md:pb-8 lg:pb-12 flex-col-reverse text-center`}
                        Label={CardsInfo[3].Label.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br className="hidden lg:flex"/>
                            </span>
                        ))}  
                        Color={'text-black'} 
                        Headline={CardsInfo[3].Headline.map((line, index) => (
                            <h1 key={index}>
                                {line}
                                <br />
                            </h1>
                        ))} 
                        headlineClassName={`text-[24px] md:text-[32px] lg:text-[40px]`}
                        WorkImg={CardsInfo[3].Img}
                        ImgClassName={`w-[130px] md:w-[175px] pb-4 md:pb-8 lg:mb-10`}
                        />
                    <DesignCard 
                        CardClassName={`p-4 md:p-12 lg:p-20 pb-4 md-pb-8 lg:pb-12 flex-col-reverse  text-center`}
                        Label={CardsInfo[4].Label.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br className="hidden lg:flex"/>
                            </span>
                        ))} 
                        Color={'text-black'} 
                        Headline={CardsInfo[4].Headline.map((line, index) => (
                            <h1 key={index}>
                                {line}
                                <br />
                            </h1>
                        ))} 
                        headlineClassName={'text-[24px] md:text-[32px] lg:text-[40px]'}
                        WorkImg={CardsInfo[4].Img}
                        ImgClassName={`w-[120px] md:w-[150px] pb-4 md:pb-8 lg:mb-10`}
                        />
                    </div>
            </div>
        </section>
    )
}
export default DesignToWorkflow;