import FeaturesCards from "./FeaturesCards"
import WaysToPaste from '../assets/pastes.webp'
import Preview from '../assets/preview-edit.webp'

const FeaturesSection = () => {

    const featuresInfo = [
        {
            Headline: 'many ways to paste',
            Span: 'Paste multiple items in the order you choose. keep the origin formatting or switch to plain text',
            img: WaysToPaste
        }
    ]
    
  return (
    <section className="h-[250dvh] max-w-screen bg-[#F5F5F7]">
        <h1 className="headline-gradient text-4xl md:text-6xl lg:text-7xl text-center bg-gray-bg border py-32 font-inter-bold font-bold lg:leading-20">Powerful features<br />to boost your productivity</h1>

        <div className="Features-cards">
            <FeaturesCards ClassName={`flex flex-col`} HeadlineClassName={`order-1`}/>
        </div>
    </section>
  )
}

export default FeaturesSection