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
            Headline: `Unlimited clipboard history`,
            Img: ClipboardHistory
        },
        {
            Label: 'SEARCH',
            Headline: 'Find anything you copies on any device',
            Img: SearchUtility
        },
        {
            Label: 'ORGANIZE',
            Headline: 'Quickly access what you need frequently',
            Img: OrganizeAccess
        },
    ]

    return(
        <section className="bg-[#F5F5F7] max-w-screen h-auto pb-32 font-inter-regular pt-48 flex flex-col gap-44">
            <h1 className="design-headline text-7xl font-inter-bold font-bold text-center leading-20">
            Unobtrusive design that <br />blends into your workflow
            </h1>
            <div className="Cards flex flex-col gap-6 ">
                <DesignCard Label={CardsInfo[0].Label} Color={'green'} Headline={CardsInfo[0].Headline} WorkImg={CardsInfo[0].Img}/>
                <DesignCard Label={CardsInfo[1].Label} Color={'green'} Headline={CardsInfo[1].Headline} WorkImg={CardsInfo[1].Img} ImgClassName={`border `}/>
                <DesignCard Label={CardsInfo[2].Label} Color={'green'} Headline={CardsInfo[2].Headline} WorkImg={CardsInfo[2].Img}/>
            </div>
        </section>
    )
}
export default DesignToWorkflow;