import { useState } from 'react'

const PricingCard = ({ NavClassName, PaymentIcon, PaymentName, PaymentDescrip, PriceDescrip, Price }) => {
  
  const [selectedDuration, setSelectedDuration] = useState('Monthly');

  return (
    <nav className={`w-1/3 flex flex-col items-center border rounded-3xl py-8 px-18 text-white font-inter-regular ${NavClassName}`}>
        <img src={PaymentIcon} alt="Payment Icon" className='w-10'/>

        <div className="header flex flex-col gap-2">
          <h2 className="payment-name text-4xl font-inter-bold font-bold">{PaymentName}</h2>
          <p className="payment-description text-center font-light font-inter-regular">{PaymentDescrip}</p>
        </div>
        <div className="methodes">
            <div className="time flex bg-white/20 py-[3px] px-[3px] w-fit rounded-full">
                <button href="#" onClick={() => setSelectedDuration('Monthly')} className={`text-white text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Monthly' ? 'bg-white text-[#2997FF]' : 'transparent'}`}>Monthly</button>
                <button href="#" onClick={() => setSelectedDuration('Annual')} className={`text-white text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Annual' ? 'bg-white text-[#2997FF]' : 'transparent'}`}>Annual</button>
                <button href="#" onClick={() => setSelectedDuration('Lifetime')} className={`text-white text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Lifetime' ? 'bg-white text-[#2997FF]' : 'transparent'}`}>Lifetime</button>
            </div>
            <div className="select-duration ">
                <h2>{Price}</h2>
                <span>{PriceDescrip}</span>
            </div>
        </div>
    </nav>
  )
}

export default PricingCard