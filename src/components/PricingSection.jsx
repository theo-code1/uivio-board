import PricingCard from './PricingCard'
import PersonalIcon from '../assets/personal.webp'
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
    <section className='relative -top-10 flex flex-col gap-24 max-w-screen h-[120dvh] bg-white font-inter-regular'>
        <h1 className='text-6xl text-center pt-32 font-inter-bold font-bold'>Ready to up your <br /> clipboard game?</h1>
        <PricingCard 
            NavClassName={`bg-gray-500 border`}
            PaymentIcon={'pricingInfo[0].PaymentIcon'}
            PaymentName={'pricingInfo[0].PaymentName'}
            PaymentDescrip={'pricingInfo[0].PaymentDescrip'}

          />
    </section>
  )
}

export default PricingSection