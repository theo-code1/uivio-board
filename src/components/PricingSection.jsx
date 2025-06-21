import PricingCard from './PricingCard'
import PersonalIcon from '../assets/personal.webp'
import PersonalBlueIcon from '../assets/personal-blue.webp'
import Setapp from '../assets/setapp.webp'

const PricingSection = () => {

  const pricingInfo = [
    {
      PaymentIcon: PersonalIcon,
      PaymentName: 'Personal',
      PaymentDescrip: 'Subscription or lifetime purchase. For you and your family, on all your devices.',
      textButton: 'Try for Free',
    },
    {
      PaymentIcon: Setapp,
      PaymentName: 'Setapp',
      PaymentDescrip: 'Paste and many other apps in one suite',
      textButton: 'Try on Setapp',
    }
  ]

  return (
    <section className='max-w-screen h-[120dvh] relative -top-10 flex flex-col items-center gap-24 bg-white font-inter-regular'>
        <h1 className='text-6xl text-center pt-32 font-inter-bold font-bold'>Ready to up your <br /> clipboard game?</h1>
        <div className="pricing-methodes flex gap-8">
          <PricingCard 
              NavClassName={`bg-[#2997FF] w-[40dvw] px-32`}
              PaymentIcon={pricingInfo[0].PaymentIcon}
              PaymentName={pricingInfo[0].PaymentName}
              PaymentDescrip={pricingInfo[0].PaymentDescrip}
              Price={`$29.99/year`}
              PriceDescrip={`$2.49/month`}
              TrialButton={pricingInfo[0].textButton}
              ButtonIcon={PersonalBlueIcon}
            />
          <PricingCard 
              NavClassName={`bg-[#2997FF] w-[20dvw] px-32`}
              PaymentIcon={pricingInfo[1].PaymentIcon}
              PaymentName={pricingInfo[1].PaymentName}
              PaymentDescrip={pricingInfo[1].PaymentDescrip}
              Price={`$29.99/year`}
              PriceDescrip={`$2.49/month`}
              TrialButton={pricingInfo[1].textButton}
              ButtonIcon={PersonalBlueIcon}
            />
            </div>
    </section>
  )
}

export default PricingSection