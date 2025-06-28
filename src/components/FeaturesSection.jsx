import FeaturesCards from "./FeaturesCards"
import WaysToPaste from '../assets/pastes.webp'
import Rules from '../assets/rules.webp'
import Preview from '../assets/preview-edit.webp'
import Siri from '../assets/siri.webp'
import IosKeyboard from '../assets/keyboard.webp'

const FeaturesSection = () => {

    const featuresInfo = [
        {
            Headline: 'Many ways to paste',
            Span: 'Paste multiple items in the order you choose. keep the origin formatting or switch to plain text.',
            img: WaysToPaste
        },
        {
            Headline: 'Costum rules',
            Span: 'Choose what to keep and what to exclude. Specify rules for apps with sensitive data like passwords.',
            img: Rules
        },
        {
            Headline: 'Preview and edit',
            Span: 'Preview you links, images, and files, Edit your copied text without leaving Paste.',
            img: Preview
        },
        {
            Headline: 'Hey, Siri',
            Span: 'Automate more routine work by combining Paste with Siri Shortcuts.',
            img: Siri
        },
        {
            Headline: 'iOS Keyboard',
            Span: 'For easy access when you type, use Paste keyboard on your iPhone and iPad.',
            img: IosKeyboard
        },
    ]
    
  return (
    <section className="h-fit overflow-hidden max-w-screen bg-[#F5F5F7] font-inter ">
        <h1 className="headline-gradient text-4xl md:text-6xl lg:text-7xl text-center bg-gray-bg border pt-24 pb-20 md:pb-40 font-inter font-bold lg:leading-20">Powerful features<br />to boost your productivity</h1>

        <div className="Features-cards flex flex-col gap-6 max-w-screen bg-white py-20 pb-40 lg:py-40">
            <div className="first-row flex flex-col md:flex-row gap-10 md:gap-6 mx-auto w-[90dvw] mdw-[75%] lg:w-[60dvw]">

                <FeaturesCards 
                    ClassName={`bg-[#F5F5F7] rounded-4xl flex flex-col gap-2 px-8 py-10 w-[100%]`} 
                    HeadlineClassName={`order-1`}
                    Headline={featuresInfo[0].Headline}
                    ParaText={featuresInfo[0].Span}
                    SpanClassName={`order-2`}
                    Img={featuresInfo[0].img}
                    ImgClassName={`order-3 w-[75%] mx-auto mt-12`}
                    />
                <FeaturesCards 
                    ClassName={`bg-[#2997FF] rounded-4xl flex flex-col gap-2 pt-24 md:pt-48 pb-8 w-[100%] md:w-[60%] px-8 text-white mx-auto md:mx-0`} 
                    HeadlineClassName={`md:text-3xl lg:text-4xl`}
                    Headline={featuresInfo[1].Headline}
                    ParaText={featuresInfo[1].Span}
                    SpanClassName={`text-[16px] md:text-sm lg:text-[16px] font-inter font-medium`}
                    Img={featuresInfo[1].img}
                    ImgClassName={`mb-12 md:mb-24`}
                    />
            </div>
            <div className="second-row mx-auto w-[90dvw] mdw-[75%] lg:w-[60dvw] text-white">
                <FeaturesCards 
                    ClassName={`relative`} 
                    HeadlineClassName={`absolute left-6 md:bottom-12 lg:bottom-18 hidden md:flex md:text-3xl lg:text-4xl`}
                    Headline={featuresInfo[2].Headline}
                    ParaText={featuresInfo[2].Span}
                    SpanClassName={`w-[40%] lg:w-1/3 absolute left-6 md:bottom-3 lg:bottom-5 hidden md:flex md:text-sm`}
                    Img={featuresInfo[2].img}
                    ImgClassName={``}
                    />
            </div>
            <div className="third-row flex flex-col md:flex-row gap-6 mx-auto w-[90dvw] mdw-[75%] lg:w-[60dvw]">
                <FeaturesCards 
                ClassName={`bg-[#F5F5F7] rounded-4xl px-8 pb-10 gap-2`} 
                HeadlineClassName={`z-30`}
                Headline={featuresInfo[3].Headline}
                ParaText={featuresInfo[3].Span}
                SpanClassName={`z-30`}
                Img={featuresInfo[3].img}
                ImgClassName={`rounded-4xl z-10 mb-4 origin-top scale-105 `}
                />
                <FeaturesCards 
                ClassName={`bg-[#F5F5F7] rounded-4xl px-8 pb-10 gap-2`} 
                HeadlineClassName={``}
                Headline={featuresInfo[4].Headline}
                ParaText={featuresInfo[4].Span}
                SpanClassName={``}
                Img={featuresInfo[4].img}
                ImgClassName={`mb-4 origin-top scale-105`}
                />
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection