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
            Headline: 'Unlimited clipboard history',
            Img: {ClipboardHistory}
        }
    ]

    return(
        <section className="bg-[#F5F5F7] max-w-screen h-[250dvh] font-inter-regular pt-48 flex flex-col gap-44">
            <h1 className="design-headline text-7xl font-inter-bold font-bold text-center leading-20">
            Unobtrusive design that <br />blends into your workflow
            </h1>
            <div className="Cards gap-8">
                <DesignCard />
            </div>
        </section>
    )
}
export default DesignToWorkflow;