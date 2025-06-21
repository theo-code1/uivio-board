import React from 'react'

const PricingCard = ({ PaymentIcon, PaymentName, PaymentDescrip, PriceDescrip, Price }) => {
  return (
    <nav>
        <img src={PaymentIcon} alt="Payment Icon" />
        <h2 className="payment-name">{PaymentName}</h2>
        <p className="payment-description">{PaymentDescrip}</p>
        <div className="methodes">
            <div className="time">
                <a href="#">Monthly</a>
                <a href="#">Annual</a>
                <a href="#">Lifetime</a>
            </div>
            <div className="price-per-time">
                <h2>{Price}</h2>
                <span>{PriceDescrip}</span>
            </div>
        </div>
    </nav>
  )
}

export default PricingCard