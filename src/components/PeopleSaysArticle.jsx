
const PeopleSaysArticle = ({ PersonName, PersonJob, PersonMessage, className, PersonImg}) => {
  return (
    <article className={`font-inter-medium flex flex-col gap-4 w-[80dvw] md:w-[30dvw] lg:w-[18dvw] rounded-3xl px-4 py-6 bg-white ${className}`}>
      <div className="Profile flex gap-2 ">
        <img src={PersonImg} alt="Person Image" className="size-14 rounded-full" />
        <div className="header text-start flex flex-col gap-0 ">
            <h2 className='text-lg font-semibold '>{PersonName}</h2>
            <h3 className='text-[#ABABB0] font-extralight '>{PersonJob}</h3>
        </div>
      </div>
        <p className='text-[16px] font-light'>{PersonMessage}</p>
    </article>
  )
}

export default PeopleSaysArticle