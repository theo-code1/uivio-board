
const PricingCard = ({ setSelectedDuration, selectedDuration, NavClassName, PaymentIcon, PaymentName, PaymentDescrip, PriceDescrip, MethodsVisibility, FeaturesVisibility,  Price, TrialButton, ButtonIcon, ButtonClassName }) => {


  return (
    <nav className={`relative flex flex-col gap-6 items-center border rounded-4xl py-10 text-white text-center font-inter-regular ${NavClassName}`}>
        <img src={PaymentIcon} alt="Payment Icon" className='w-10'/>

        <div className="header flex flex-col gap-2">
          <h2 className="payment-name text-4xl font-inter-bold font-bold">{PaymentName}</h2>
          <p className="payment-description text-center font-light text-white/80 font-inter-regular">{PaymentDescrip}</p>
        </div>
        <div className={`methodes ${MethodsVisibility} flex-col gap-8`}>
            <div className="time flex bg-white/20 py-[3px] px-[3px] w-fit rounded-full">
                <button onClick={() => setSelectedDuration('Monthly')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Monthly' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Monthly</button>
                <button onClick={() => setSelectedDuration('Annual')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Annual' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Annual</button>
                <button onClick={() => setSelectedDuration('Lifetime')} className={` text-sm py-1 px-5 rounded-full transition-all duration-150 ${selectedDuration === 'Lifetime' ? 'text-[#2997FF] bg-white' : 'bg-transparent text-white'}`}>Lifetime</button>
            </div>
            <div className="select-duration flex flex-col gap-1">
                <h2 className='text-4xl font-bold'>{Price}</h2>
                <span className='text-lg text-white/80'>{PriceDescrip}</span>
            </div>
        </div>
        <div className={`features-pricing ${FeaturesVisibility} flex-col gap-2`}>
          <hr className='text-white/20 w-2/5 mx-auto mb-6'/>
          <h2 className='text-lg text-white font-medium'>All-access pass to curated Mac and iOS apps</h2>
          <h3 className='text-[16px] text-white/50 font-medium'>Starting from $8.99/month</h3>
        </div>
        <button className={`try-for-free flex gap-2 items-center justify-center py-[10px] px-8 font-inter-medium font-medium  rounded-full ${ButtonClassName}`}>
          <img src={ButtonIcon} alt='Apple Logo' className='w-4' draggable='false' />
          {TrialButton}
        </button>
    </nav>
  )
}

export default PricingCard