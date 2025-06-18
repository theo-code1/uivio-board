import React from 'react'

const FeaturesCards = ({ClassName, Img, Headline, ParaText, HeadlineClassName, SpanClassName, ImgClassName}) => {
  return (
    <article className={ClassName}>
        <img className={`select-none ${ImgClassName}`} src={Img} alt={`Features Images`} />
        <h1 className={`text-4xl font-inter-regular font-semibold tracking-tight ${HeadlineClassName}`}>{Headline}</h1>
        <span className={`text-[16px] font-inter-regular font-medium ${SpanClassName}`}>{ParaText}</span>
    </article>
  )
}

export default FeaturesCards