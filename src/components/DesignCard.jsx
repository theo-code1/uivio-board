
function DesignCard({Label, Headline, WorkImg, Color, ImgClassName }){
    
    return(
        <article className="w-[70%] bg-white font-inter-regular p-20 pt-12 mx-auto rounded-4xl flex flex-col gap-4">
            <h3 className={`label font-semibold text-${Color}-500 text-center`}>{Label}</h3>
            <h1 className='text-center text-5xl font-inter-semibold font-semibold '>{Headline}  </h1>
            <img src={WorkImg} alt="Clipboard History" className={`mx-auto ${ImgClassName}`} draggable='false'/>

        </article>
    )
}
export default DesignCard;