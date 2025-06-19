import React from 'react'

const PeopleSaysArticle = ({ PersonName, PersonJob, PersonMessage, className}) => {
  return (
    <article className={`font-inter-medium flex flex-col gap-4 w-[80dvw] md:w-[30dvw] lg:w-[20dvw] rounded-3xl px-4 py-6 bg-white ${className}`}>
        <div className="header text-center flex flex-col gap-0 ">
            <h2 className='text-lg font-semibold '>{PersonName}</h2>
            <h3 className='text-[#ABABB0] font-extralight'>{PersonJob}</h3>
        </div>
        <p className='text-sm font-light'>{PersonMessage}</p>
    </article>
  )
}

export default PeopleSaysArticle