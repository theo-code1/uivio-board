import { useState } from 'react'
import PricingCard from './PricingCard'
import PersonalIcon from '../assets/personal.webp'
import PersonalBlueIcon from '../assets/personal-blue.webp'
import Setapp from '../assets/setapp.webp'

const PricingSection = () => {

    
  const [selectedDuration, setSelectedDuration] = useState('Monthly');

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

  const selectDuration = [
    {
      duration: 'Monthly',
      price: '$3.99/month',
      times: ''
    },
    {
      duration: 'Annual',
      price: '$29.99/year',
      times: '$2.49/month'
    },
    {
      duration: 'Lifetime',
      price: '$89.99',
      times: 'paid once'
    },
  ]

  return (
    <section className='max-w-screen h-[120dvh] relative -top-10 flex flex-col items-center gap-24 bg-white font-inter-regular'>
        <h1 className='text-6xl text-center pt-32 font-inter-bold font-bold'>Ready to up your <br /> clipboard game?</h1>
        <div className="pricing-methodes flex gap-4">
          <PricingCard 
              NavClassName={`bg-[#2997FF] w-[36dvw] px-28`}
              MethodsVisibility={'flex '}
              FeaturesVisibility={'hidden'}
              PaymentIcon={pricingInfo[0].PaymentIcon}
              PaymentName={pricingInfo[0].PaymentName}
              PaymentDescrip={pricingInfo[0].PaymentDescrip}

              Price={selectDuration.find(item => item.duration === selectedDuration ).price}
              PriceDescrip={selectDuration.find(item => item.duration === selectedDuration).times}

              TrialButton={pricingInfo[0].textButton}
              ButtonIcon={PersonalBlueIcon}
              ButtonClassName={`text-[#2997FF] bg-white absolute bottom-12 left-1/2 -translate-x-1/2 `}
              setSelectedDuration={setSelectedDuration}
              selectedDuration={selectedDuration}
            />
          <PricingCard 
              NavClassName={`bg-[#595667] w-[20dvw] px-10`}
              FeaturesVisibility={'flex'}
              MethodsVisibility={'hidden'}
              PaymentIcon={pricingInfo[1].PaymentIcon}
              PaymentName={pricingInfo[1].PaymentName}
              PaymentDescrip={pricingInfo[1].PaymentDescrip}
              TrialButton={pricingInfo[1].textButton}
              ButtonIcon={Setapp}
              ButtonClassName={`bg-white/20 text-white mt-10 `}
              setSelectedDuration={setSelectedDuration}
              selectedDuration={selectedDuration}
            />
            </div>
            <h2 className='text-[16px] text-black/30'>Prices are in USD excluding VAT and can vary across different countries and regions.</h2>
    </section>
  )
}

export default PricingSection