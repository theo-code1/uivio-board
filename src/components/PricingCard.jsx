import { useState } from 'react'

const PricingCard = ({ NavClassName, PaymentIcon, PaymentName, PaymentDescrip, PriceDescrip, Price, TrialButton, ButtonIcon }) => {
  
  const [selectedDuration, setSelectedDuration] = useState('Monthly');

  return (
    <nav className={`flex flex-col gap-6 items-center border rounded-4xl py-10 text-white text-center font-inter-regular ${NavClassName}`}>
        <img src={PaymentIcon} alt="Payment Icon" className='w-10'/>

        <div className="header flex flex-col gap-2">
          <h2 className="payment-name text-4xl font-inter-bold font-bold">{PaymentName}</h2>
          <p className="payment-description text-center font-light text-white/80 font-inter-regular">{PaymentDescrip}</p>
        </div>
        <div className="methodes flex flex-col gap-8">
            <div className="time flex bg-white/20 py-[3px] px-[3px] w-fit rounded-full">
                <button href="#" onClick={() => setSelectedDuration('Monthly')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Monthly' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Monthly</button>
                <button href="#" onClick={() => setSelectedDuration('Annual')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Annual' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Annual</button>
                <button href="#" onClick={() => setSelectedDuration('Lifetime')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Lifetime' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Lifetime</button>
            </div>
            <div className="select-duration flex flex-col gap-1">
                <h2 className='text-4xl font-bold'>{Price}</h2>
                <span className='text-lg text-white/80'>{PriceDescrip}</span>
            </div>
        </div>
        <button className="try-for-free flex gap-2 items-center justify-center text-[#2997FF] py-[10px] px-8 mt-8 mb-2 font-inter-medium font-medium bg-white rounded-full">
          <img src={ButtonIcon || PaymentIcon} alt='Apple Logo' className='w-6 brightness-95'/>
          {TrialButton}
        </button>
    </nav>
  )
}

export default PricingCard