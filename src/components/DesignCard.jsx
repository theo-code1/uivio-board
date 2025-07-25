
function DesignCard({Label, Headline, WorkImg, Color, ImgClassName, CardClassName, PaddingTop }){
    
    return(
        <article className={` w-[90%] md:w-[85%] lg:w-[70%] bg-white font-inter p-4 md:p-8 lg:p-20 pt-${PaddingTop} mx-auto rounded-3xl md:rounded-4xl flex flex-col gap-2 md:gap-4 overflow-hidden ${CardClassName} `}>
            <h3 className={`label text-[12px] md:text-[16px] font-semibold ${Color} text-center`}>{Label}</h3>
            {Headline} 
            <img src={WorkImg} alt="Clipboard History" className={`mx-auto block leading-none select-none ${ImgClassName}`} draggable='false'/>

        </article>
    )
}
export default DesignCard; 