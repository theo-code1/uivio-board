import React from 'react'

const FeaturesCards = ({ClassName, Img, Headline, ParaText, HeadlineClassName, SpanClassName}) => {
  return (
    <article className={ClassName}>
        <img src={Img} alt={`Features Images`} />
        <h1 className={HeadlineClassName}>{Headline}</h1>
        <span className={SpanClassName}>{ParaText}</span>
    </article>
  )
}

export default FeaturesCards